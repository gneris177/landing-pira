window.addEventListener('load', () => {
  const videoArea = document.querySelector('#video-area')
  videoArea.scrollLeft = (videoArea.scrollWidth - videoArea.clientWidth) / 2
})

const menuButton = document.querySelector('#toggle-menu')

const toggleMenu = () => {
  const navList = document.querySelector('#nav-list')
  navList.classList.toggle('oppen')
}

menuButton.onclick = toggleMenu
