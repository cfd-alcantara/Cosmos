function openPopup() {
    document.getElementById('popupContainer').style.display = 'block';
    document.getElementById('overlayPage').style.display = 'block';
    document.getElementById('blurPage').style.filter = 'blur(5px)';
}

function closePopup() {
    document.getElementById('popupContainer').style.display = 'none';
    document.getElementById('popupInput').value = '';
    document.getElementById('overlayPage').style.display = 'none';
    document.getElementById('blurPage').style.filter = 'none';
}

function submitPost() {
    closePopup();
}