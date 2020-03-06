

let navi = document.querySelector('#header');
window.addEventListener('scroll', function () {
    if (window.pageYOffset > 0) {
        navi.classList.add('active')
    } else {
        navi.classList.remove('active')
    }
})
