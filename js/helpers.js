// helpers

const baseUrl = 'https://api.github.com/users';
const ALERT_TYPES = {
    info: 'info',
    warning: 'warning',
    danger: 'danger',
    default: 'default'
}

const hideElement = (...elements) => {
    elements.forEach(element => {
        element.classList.add('d-none');
    })
}

const showElement = (...elements) => {
    elements.forEach(element => {
        element.classList.remove('d-none');
    })
}

const showMessage = (msg = undefined, type = 'danger') => {
    if (msg) {
        messageBlock.innerHTML = msg;
        messageBlock.classList.replace('alert-' + currentAlertType, 'alert-' + type);
        currentAlertType = type;
        showElement(messageBlock);
    }
}

const hideError = () => {
    messageBlock.innerHTML = '';
    hideElement(messageBlock);
}

const debounce = (func, wait) => {
    let timeout;

    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };

        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}