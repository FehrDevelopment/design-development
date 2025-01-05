// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    let lastScrollTop = 0;
    const header = document.querySelector('header');

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop) {
            // Downscroll
            header.classList.add('hidden');
        } else {
            // Upscroll
            header.classList.remove('hidden');
        }
        lastScrollTop = scrollTop;
    });
});
  document.getElementById('moreBtn').addEventListener('click', function() {
    document.querySelector('#target-section').scrollIntoView({ 
      behavior: 'smooth'
    });
  });

