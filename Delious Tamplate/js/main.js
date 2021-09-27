

        const mobileBtn = document.getElementById('mobile-cta')
        nav = document.querySelector('nav')
        mobileExit = document.getElementById('mobile-exit');

  mobileBtn.addEventListener('click', () => {
      nav.classList.add('menu-btn');
  })

  mobileExit.addEventListener('click', () => {
       nav.classList.remove('menu-btn');
             })
