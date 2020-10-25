// DOM Elements
const time = document.querySelector('.time'),
  fullDate = document.getElementById('fullDate'),
  greeting = document.querySelector('.greeting'),
  name = document.querySelector('.name'),
  focus = document.querySelector('.focus');

// Options
let tmp;
let nm;

// Show Time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();
    day = getDayOfWeek(today.getDay());
    month =getMonthName(today.getMonth());
    nday = today.getDate();


  // Output Time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;
  fullDate.innerHTML = `${day}, ${nday} ${month}`;

  setTimeout(showTime, 1000);
}

function getDayOfWeek(d){
  switch (d) {
    case 0: return "Воскресенье";
    case 1: return "Понедельник";
    case 2: return "Вторник";
    case 3: return "Среда";
    case 4: return "Четверг";
    case 5: return "Пятница";
    case 6: return "Суббота";
  }
}

function getMonthName(m){
  switch (m) {
    case 0: return "Января";
    case 1: return "Февраля";
    case 2: return "Марта";
    case 3: return "Апреля";
    case 4: return "Мая";
    case 5: return "Июня";
    case 6: return "Июля";
    case 7: return "Августа";
    case 8: return "Сентября";
    case 9: return "Октября";
    case 10: return "Ноября";
    case 11: return "Декабря";
  }
}

// Add Zeros
function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Background and Greeting
function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();


  if (hour >= 6 && hour < 12) {
    // Morning
    document.body.style.backgroundImage =
      "url('https://i.ibb.co/7vDLJFb/morning.jpg')";
    greeting.textContent = 'Доброе утро, ';
  } else if (hour >= 12 && hour < 18) {
    // Afternoon
    document.body.style.backgroundImage =
      "url('https://i.ibb.co/3mThcXc/afternoon.jpg')";
    greeting.textContent = 'Добрый день, ';
  } else if (hour >= 18) {
    // Evening
    document.body.style.backgroundImage =
      "url('https://i.ibb.co/3mThcXc/afternoon.jpg')";
    greeting.textContent = 'Добрый вечер, ';
  }else if(hour > 0 && hour < 6){
    // Night
    document.body.style.backgroundImage =
      "url('https://i.ibb.co/924T2Wv/night.jpg')";
    greeting.textContent = 'Доброй ночи, ';
    document.body.style.color = 'white';
  }
}

// Get Name
function getName() {
  if (localStorage.getItem('name') === null) {
    name.textContent = '[Enter Name]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}

// Set Name
function setName(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      if(name.textContent == ""){
       nm = tmp;
       name.textContent = tmp;
       localStorage.setItem('name', nm);
       name.blur();
      }else{
        localStorage.setItem('name', e.target.innerText);
        name.blur();
      }
    }
  } else {
    if(name.textContent == ""){
       nm = tmp;
       name.textContent = tmp;
       localStorage.setItem('name', nm);
    } else{
      localStorage.setItem('name', e.target.innerText);
    }
  }
}

// Get Focus
function getFocus() {
  if (localStorage.getItem('focus') === null) {
    focus.textContent = '[Enter Focus]';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}

// Set Focus
function setFocus(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      if(focus.textContent == ""){
        nm = tmp;
        focus.textContent = tmp;
        localStorage.setItem('focus', nm);
        focus.blur();
       }else{
         localStorage.setItem('focus', e.target.innerText);
         focus.blur();
       }
    }
  } else {
    if(focus.textContent == ""){
      nm = tmp;
      focus.textContent = tmp;
      localStorage.setItem('focus', nm);
   } else{
     localStorage.setItem('focus', e.target.innerText);
   }
  }
}

function clear(e){
  tmp = e.target.textContent;
  e.target.textContent = '';
}


name.addEventListener('click', clear);
name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('click', clear);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// Run
showTime();
setBgGreet();
getName();
getFocus();