
const header = document.querySelector('#header')
const headerHeight = header.offsetHeight

window.addEventListener('scroll', () => {
    if( window.scrollY >= headerHeight) {
        header.classList.add('scroll-header')
    }
    else{
        header.classList.remove('scroll-header')
    }
})