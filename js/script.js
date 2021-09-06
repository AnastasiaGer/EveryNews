/* JavaScript код */

let themesBtn =Array.from(document.querySelectorAll('.theme-button'))
let fontsBtn =Array.from(document.querySelectorAll('.font-button'))
let sizesBtn =Array.from(document.querySelectorAll('.font-size-button'))

let themesHandler = function(e) {
let theme = e.target.dataset
let themeBtn = e.target
themesBtn.forEach(btn => btn.classList.remove('active'))
themeBtn.classList.add('active')
document.documentElement.dataset['themeName'] = theme.theme;
}

let fontsHandler = function(e) {
  let font = e.target.dataset
  let fontBtn = e.target
  fontsBtn.forEach(btn => btn.classList.remove('active'))
  fontBtn.classList.add('active')
  document.documentElement.dataset['themeFont'] = font.font;
}

let sizesHandler = function(e) {
  let size = e.target.dataset
  let sizeBtn = e.target
  sizesBtn.forEach(btn => btn.classList.remove('active'))
  sizeBtn.classList.add('active')
  document.documentElement.dataset['themeFontSize'] = size.size;
}

themesBtn.forEach(btn => btn.addEventListener('click', themesHandler))
fontsBtn.forEach(btn => btn.addEventListener('click', fontsHandler))
sizesBtn.forEach(btn => btn.addEventListener('click', sizesHandler))