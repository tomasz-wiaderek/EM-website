function navOpenClose() {
  var navMobileShadow = document.getElementById('nav-mobile-shadow');
  if (navMobileShadow.style.display === 'flex') {
    navMobileShadow.style.display = 'none'
  } else {
    navMobileShadow.style.display = 'flex'
  }
}
