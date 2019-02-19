window.addEventListener('DOMContentLoaded', function() {

  'use srtict';

  let tab = document.querySelectorAll('.info-header-tab'),
      info = document.querySelector('.info-header'),
      tabContent = document.querySelectorAll('.info-tabcontent');

  function hideTabContent(a) {
    for(let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');

    }

  };

  hideTabContent(1);

  function showTabContent(b) {
    if(tabContent[b].classList.contains('hide')) {
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');
    }
  }

  info.addEventListener('click', function(event) {
    let target = event.target;
    console.log(target);
    if(target && target.classList.contains('info-header-tab')) {
        for(let i = 0; i < tab.length; i++) {
          if(target == tab[i]) {
            hideTabContent(0);
            showTabContent(i);
            break;
          }
        }
    }
  });

  // Timer

  let deadLine = '2019-04-17';

  function getTimeRemaining(endtime) {
    let t = Date.parse(deadLine) - Date.parse(new Date()),
        seconds = Math.floor((t/1000) % 60 ),
        minutes = Math.floor( (t/1000/60) % 60 ),
        hours = Math.floor( (t/1000/60/60) );

        return {
          'total': t,
          'hours': hours,
          'minutes': minutes,
          'seconds': seconds
        }
  }

  function setClock(id, endtime) {
    let timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds');
            
    let timeInterval = setInterval(updateClock, 1000);




    function updateClock() {
      let t = getTimeRemaining(endtime);
      if(t.hours < 10) t.hours = "0" + t.hours;
      hours.textContent = t.hours;
      if(t.minutes < 10) t.minutes = "0" + t.minutes;
      minutes.textContent = t.minutes;
      if(t.seconds < 10) t.seconds = "0" + t.seconds;
      seconds.textContent = t.seconds;

      if( t <= 0 ) {
        clearInterval(timeInterval);
      }
    }

  }

  setClock('timer', deadLine);


});