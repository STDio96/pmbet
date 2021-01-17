let files = ['file1.txt', 'file2.php', 'file3.js'];
let selectedFiles = [];
let draggable = true;

const contextMenu = document.getElementById('context-menu');
const contextAddButton = document.getElementById('create-btn');
const contextRenameButton = document.getElementById('rename-btn');
const contextDeleteButton = document.getElementById('delete-btn');

document.onload = refresh();
document.addEventListener('click', clickHandler); // for selection
document.addEventListener('contextmenu', contextMenuHandler, false); // replace default context menu

function clickHandler(e) {
    if (e.target.classList.contains('file')) {
        let clickedFile = e.target;
        selectFile(clickedFile);
    }

    hideContextMenu();
}

function contextMenuHandler(e) {
    // no need to see the context menu if an icon/toolbar is clicked
    if (e.target.tagName == 'IMG' || e.target.id == 'toolbar')
        return;

    e.preventDefault();

    showContextMenu(e);
}

// rebuild html / reload files
function refresh() {
    let main = document.getElementById('main');
    main.innerHTML = '';

    files.forEach((file, index) => {
        let fileDiv = document.createElement('div');
        fileDiv.id = 'file' + index;
        fileDiv.dataset.id = index;
        fileDiv.classList.add('file');
        fileDiv.setAttribute('draggable', true);
        fileDiv.innerText = file;

        fileDiv.addEventListener('dragstart', dragStartHandler, false);
        fileDiv.addEventListener('dragover', dragOverHandler, false);
        fileDiv.addEventListener('drop', dropHandler, false);
        fileDiv.addEventListener('dragend', dragEndHandler, false);

        main.appendChild(fileDiv);
    });

    hideContextMenu();
    removeSelection();
}

function hideContextMenu(target) {
    contextAddButton.classList.add('hide');
    contextRenameButton.classList.add('hide');
    contextDeleteButton.classList.add('hide');

    if (target == 'file') {
        contextAddButton.classList.remove('hide');
    } else if (target == 'global') {
        contextRenameButton.classList.remove('hide');
        contextDeleteButton.classList.remove('hide');
    } else if (target == 'rename') {
        contextAddButton.classList.remove('hide');
        contextDeleteButton.classList.remove('hide');
    } else if (target == 'addrename') {
        contextDeleteButton.classList.remove('hide');
    }
}

const showContextMenu = (e) => {
    let target = e.target;
    let fileClicked = target.classList.contains('file');

    if (selectedFiles.length > 1) {
        // if a file was clicked show only delete button, otherwise - add and delete
        hideContextMenu(fileClicked ? 'addrename' : 'rename');
    } else if (fileClicked) {
        hideContextMenu('global');
        // unselect already selected file and select the clicked one
        selectFile(target, true);
    } else {
        hideContextMenu('file');
    }

    contextMenu.style.left = e.pageX + "px";
    contextMenu.style.top = e.pageY + "px";
    contextMenu.classList.remove('hide');
}

function selectFile(clickedFile, unselectAll = false) {
    if (unselectAll)
        removeSelection();

    draggable = true;
    clickedFile.classList.toggle('selected');

    let fileId = Number.parseInt(clickedFile.dataset.id);

    if (selectedFiles.includes(fileId)) {
        let index = selectedFiles.indexOf(fileId);
        if (index > -1) {
            selectedFiles.splice(index, 1);
        }
    } else {
        selectedFiles.push(fileId);
    }

    // make elements not draggable if multiple files are selected
    if (selectedFiles.length > 1) {
        draggable = false;
    }
}

function removeSelection() {
    let fileList = document.getElementsByClassName('selected');
    fileList = Array.from(fileList);

    fileList.forEach(file => {
        file.classList.remove('selected');
    });

    selectedFiles = [];
    draggable = true;
}

// creating a new file
function createFile() {
    let title = prompt('Enter new title:')?.trim();

    if (title === '') {
        alert('Title couldn\'t be empty!');
    } else if (title) {
        if (files.includes(title)) {
            alert('Filename already exists');
            return;
        }

        files.push(title);
        refresh();
    }
}

// renaming a file
function renameFile() {
    if (selectedFiles.length > 1 || selectedFiles.length == 0) {
        alert('You can\'t rename multiple/no files :)');
        return;
    }

    let title = prompt('Enter new title:', files[selectedFiles[0]])?.trim() ?? files[selectedFiles[0]];

    if (title === '') {
        alert('Title couldn\'t be empty!');
    } else {
        files[selectedFiles[0]] = title;
        refresh();
    }
    activeFile = '';
}

// deleting a file
function deleteFile() {
    if (selectedFiles.length < 1) {
        alert('nothing is selected');
        return;
    }

    let filesToRemove = '';

    selectedFiles.forEach(fileId => {
        filesToRemove += ' - ' + files[fileId] + '\n';
    });

    if (confirm('Do you want to remove the following file(s)?\n' + filesToRemove)) {
        selectedFiles.sort().reverse().forEach(file => {
            files.splice(file, 1);
        });

        refresh();
    }
}

// ============ drag & drop goes here ===============
let draggableEl = null;

function dragStartHandler(e) {
    if (!draggable)
        return;

    this.style.opacity = '0.35';
    draggableEl = this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
}

function dragOverHandler(e) {
    if (!draggable)
        return;

    e.preventDefault();

    e.dataTransfer.dropEffect = 'move';
}

function dragEndHandler() {
    if (!draggable)
        return;

    this.style.opacity = '1';
}

function dropHandler(e) {
    if (!draggable)
        return;

    if (draggableEl !== this) {
        draggableEl.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html');
    }

    // recreate files array
    let fileList = document.getElementsByClassName('file');
    files = [];

    for (let i = 0; i < fileList.length; i++) {
        files.push(fileList[i].innerText);
    }
    refresh();
}

// ============ end drag & drop =============