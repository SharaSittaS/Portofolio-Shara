function hamburg() {
    const navbar = document.querySelector('.dropdown');
    const hamburger = document.querySelector('.hamburg');
    const cancelBtn = document.querySelector('.cancel');
    navbar.style.transform = 'translateY(0px)';
    hamburger.style.display = 'none';
    cancelBtn.style.display = 'block';
}

function cancel() {
    const navbar = document.querySelector('.dropdown');
    navbar.style.transform = 'translateY(-500px)';
    const cancelBtn = document.querySelector('.cancel');
    cancelBtn.style.display = 'none';
    const hamburger = document.querySelector('.hamburg');
    hamburger.style.display = 'block';
}
