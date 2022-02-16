'use strict';

{
  const header = document.querySelector('header');
  const hambergerBtn = document.getElementById('hamberger-btn');
  
  hambergerBtn.addEventListener('click',() => {
    header.classList.toggle('open');
  });


}