function openMenu() {
    document.getElementById('nav-collapse').classList.toggle('open')
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('#nav-trigger') && !event.target.classList.contains('menu-icon-bar')) {
        document.getElementById('nav-collapse').classList.remove('open');
    }
}