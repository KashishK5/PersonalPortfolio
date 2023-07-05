function setActiveLink() {
    const navLinks = document.querySelectorAll('.navbar a');
  
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        navLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
      });
    });
  }
  
  function checkSection() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a');
  
    function makeSectionActive() {
      const fromTop = window.scrollY;
  
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 50;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.navbar a[href="#${sectionId}"]`);
  
        if (fromTop >= sectionTop && fromTop <= sectionTop + sectionHeight) {
          navLinks.forEach(link => link.classList.remove('active'));
          navLink.classList.add('active');
        }
      });
    }
  
    window.addEventListener('scroll', makeSectionActive);
    window.addEventListener('load', makeSectionActive);
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    setActiveLink();
    checkSection();
  });
  