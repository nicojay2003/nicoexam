function toggleAlbum(albumType) {
    var album = document.querySelector('.' + albumType + '-album');
    album.style.display = 'block';
}

function viewPhoto(photoUrl) {
    var modal = document.getElementById('modal');
    var modalImg = document.getElementById('modal-img');
    modal.style.display = 'block';
    modalImg.src = photoUrl;
}

function closeModal() {
    var modal = document.getElementById('modal');
    modal.style.display = 'none';
}
