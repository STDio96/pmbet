const searchField = document.getElementById('input-username');
const searchBtn = document.getElementById('input-search-btn');
const searchForm = document.getElementById('search-form');
const profileBlock = document.getElementById('profile-block');
const advancedInfoBlock = document.getElementById('advanced-info');
const userImageField = document.getElementById('user-image');
const userNameField = document.getElementById('user-name');
const userFollowersField = document.getElementById('user-followers');
const userRepositoriesField = document.getElementById('user-repositories');
const repositoriesBlock = document.getElementById('repositories');
const followersBlock = document.getElementById('followers');
const messageBlock = document.getElementById('message-block');

let username = undefined;
let currentAlertType = 'info';

const makeRequest = async (url, callback = () => { }) => {
    let response = await fetch(url);
    console.log(response);
    if (response.ok) {
        try {
            let json = await response.json();
            hideError();
            return callback(json);
        } catch (e) {
            showMessage('Can\'t parse response from the server -_-');
            console.error('Error:', e.message);
            return;
        }
    } else {
        console.log(response);
        showMessage('<b>' + url.replace(baseUrl + '/', '') + '</b> is not found -_-');
        return;
    }
}

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (username !== searchField.value) {
        username = searchField.value;
        if (!username) {
            showMessage('Set the <b>username</b> field, please', ALERT_TYPES.warning);
            return;
        }

        hideElement(profileBlock, repositoriesBlock, followersBlock);
        getUser(username);
    }
});

let debounceSearch = debounce(function (e) {
    searchForm.dispatchEvent(new Event('submit'));
}, 500);

searchField.addEventListener('input', debounceSearch);

userFollowersField.addEventListener('click', (e) => {
    // мини проверка, чтобы уменьшить количество запросов :)
    if (Number(e.target.innerText) !== 0) {
        getFollowers(username);
    }
});

userRepositoriesField.addEventListener('click', (e) => {
    // мини проверка, чтобы уменьшить количество запросов :)
    if (Number(e.target.innerText) !== 0) {
        getRepos(username);
    }
});

const getUser = (user) => {
    if (!user) {
        showMessage('Set the <b>username</b> field, please', ALERT_TYPES.warning);
        return;
    }

    makeRequest(`${baseUrl}/${user}`, showUserInfo);
}

const showUserInfo = data => {
    if (!data) {
        showMessage('Can\'t parse data from the server -_-');
        console.error('Can\'t parse data from the server:', data);
        return;
    }

    showElement(profileBlock);

    try {
        userImageField.src = data.ava1tar_url ?? './img/default.png';
        userNameField.innerText = data.name ?? data.login;
        userFollowersField.innerText = data.followers;
        userRepositoriesField.innerText = data.public_repos;
    } catch (e) {
        console.error('Error: ', e.message);
        return;
    }

    // если надо сразу все показывать, а не по нажатию
    /* getFollowers(username);
    getRepos(username); */
}

// не ограничивал количество запросов по репозиториям, т.к. они таки могут меняться (в реальном кейсе, я бы оптимизировал это, чтобы ограничить кол-во нажатий, например) :)
// насчет передачи user сюда: проверяю просто на всякий случай, если обнулят значение где-то :)
const getRepos = (user) => {
    if (!user) {
        showMessage('Set the <b>user</b> field, please', ALERT_TYPES.warning);
        return;
    }

    makeRequest(`${baseUrl}/${user}/repos`, showUserReposInfo);
}

const showUserReposInfo = data => {
    if (data.length <= 0) {
        showMessage('No repositories found -_-', ALERT_TYPES.info);
        return;
    }

    showElement(advancedInfoBlock, repositoriesBlock);

    let blockHTML = '';
    data.forEach(repo => {
        blockHTML += `<a class='list-group-item list-group-item-action' href='${repo.html_url}' target=_blank>${repo.full_name}</a>`;
    });

    repositoriesBlock.lastElementChild.innerHTML = blockHTML;
}

// не ограничивал количество запросов по подписчикам, т.к. они таки могут меняться (в реальном кейсе, я бы оптимизировал это, чтобы ограничить кол-во нажатий, например) :)
// насчет передачи user сюда: проверяю просто на всякий случай, если обнулят значение где-то :)
const getFollowers = (user) => {
    if (!user) {
        showMessage('Set the <b>user</b> field, please', ALERT_TYPES.warning);
        return;
    }

    makeRequest(`${baseUrl}/${user}/followers`, showUserFollowersInfo);
}

const showUserFollowersInfo = data => {
    if (data?.length <= 0) {
        showMessage('No followers found -_-', ALERT_TYPES.info);
        return;
    }

    showElement(advancedInfoBlock, followersBlock);

    let blockHTML = '';
    data.forEach(follower => {
        blockHTML += `<a class='list-group-item list-group-item-action' href='${follower.html_url}' target=_blank><img src='${follower.avatar_url}' class='rounded mr-1' width=50>${follower.login}</a>`;
    });

    followersBlock.lastElementChild.innerHTML = blockHTML;
}