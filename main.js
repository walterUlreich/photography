var burgerNav = document.getElementById('burger-nav')
var nav = document.getElementById('nav')
var closeBtn = document.getElementById('close-btn')
var overlay = document.getElementById('overlay')
var body = document.body
var modal = document.getElementById('modal')
var modalImage = document.getElementById('modal-image')

burgerNav.addEventListener('click', openNav)
closeBtn.addEventListener('click', closeNav)

function openNav() {
  nav.style.left = '0px'
  overlay.style.display = 'block'
  body.classList.toggle('noscroll')
}

function closeNav() {
  nav.style.left = '-400px'
  overlay.style.display = 'none'
  body.classList.toggle('noscroll')
}

function openModal(img) {
  modal.style.display = 'block'
  modalImage.src = img.src
  body.classList.toggle('noscroll')

  if(img.classList.contains('landscape')) {
    modalImage.style.width = '900px'
    modalImage.style.height = '600px'
    modalImage.style.marginTop = '40px'
  } else if(img.classList.contains('portrait')){
    modalImage.style.width = 'auto'
    modalImage.style.height = '100%'
    modalImage.style.marginTop = '0'
  }
}

function closeModal() {
  modal.style.display = 'none'
  body.classList.toggle('noscroll')
}


/*
function myFunction(img) {
  var images = document.getElementsByTagName('img')
  for(var i = 0; i < images.length; i++) {
    images[i].classList.remove('active')
  }

  img.classList.add('active')

  var expandImg = document.getElementById('main-photo')
  expandImg.src = img.src

  if(img.classList.contains('portrait')) {
    expandImg.style.width = 'auto'
    expandImg.style.height = '500px'
  } else {
    expandImg.style.width = '600px'
    expandImg.style.height = 'auto'
  }
}
*/
