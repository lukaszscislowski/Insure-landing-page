'use strict'

document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
  
      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
  
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
          const hero = document.querySelector('.hero');
          const heroSec = document.querySelector('.hero-secondary');
          const heroThrd = document.querySelector('.hero-third');
          const footer = document.querySelector('.footer');
  
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
          hero.classList.toggle('hero-active');
          heroSec.classList.toggle('hero-active');
          heroThrd.classList.toggle('hero-active');
          footer.classList.toggle('hero-active');
        
  
        });
      });
    }
  
  });

 