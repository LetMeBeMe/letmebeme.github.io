/* ввел ли пользователь пароль */
window.onload = function() {
  if(localStorage.getItem('pwd') != 'true') {
    window.location.assign('index.html');
  }
}

/* анимации при скролле */
window.addEventListener('scroll', function() {
  var hearts = document.getElementById('hearts');

  if (window.innerWidth > 600) {
    if ((window.pageYOffset) > 350) {
      hearts.classList.add('rotate-hearts');
    }
  } else {
    if ((window.pageYOffset) > 250) {
      hearts.classList.add('rotate-hearts');
    }
  }
});

/* разрез ребёнка */
function cutTheBaby() {
  var baby = document.getElementById('baby');

  if (window.innerWidth > 600) {
    baby.getElementsByTagName('img')[0].style.left = "0";
    baby.getElementsByTagName('img')[1].style.right = "0";
  } else {
    baby.getElementsByTagName('img')[0].style.left = "-120px";
    baby.getElementsByTagName('img')[1].style.right = "-120px";
  }
  setTimeout(function() { baby.getElementsByTagName('span')[0].style.opacity = "1"; }, 650);
  setTimeout(function() { baby.getElementsByTagName('span')[1].style.opacity = "1"; }, 800);
  document.getElementById('magic').style.opacity = "0";
  document.getElementById('magic').style.pointerEvents = "none";
}

/* Открыть ссылки */
function linkOpen(url, type) {
   if (type == 'blank') {
      window.open(url); // в новой вкладке
   } else if (type == 'curr') {
      window.location.assign(url); // в текущем окне
   }
}
