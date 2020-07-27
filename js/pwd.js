/* Проверка пароля */
window.onload = function() {
  if(localStorage.getItem('pwd') != 'true') {
    let pwd = 'ненавижу младенцев';
    let scan = prompt('Докажи, что ты Марина', '');

    if (pwd == scan){
      localStorage.pwd = true;
      window.location.assign('happy-bd');
    } else {
      location.reload();
    }
  } else {
    window.location.assign('happy-bd');
  }
}
