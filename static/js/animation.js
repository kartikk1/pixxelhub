// test 

const observer12 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const square12 = entry.target.querySelector('.div');
  
      if (entry.isIntersecting) {
        square12.classList.add('opacity1');
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      square12.classList.remove('opacity1');
    });
  });
  
observer12.observe(document.querySelector('.contact'));


// Contact - Item  
const observer9 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const square9 = entry.target.querySelector('.contact-left');
  
      if (entry.isIntersecting) {
        square9.classList.add('animate__bounceInLeft');
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      square9.classList.remove('animate__bounceInLeft');
    });
  });
  
observer9.observe(document.querySelector('.container-contact'));

// Contact Form 
const observer10 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const square10 = entry.target.querySelector('.contact-right');
  
      if (entry.isIntersecting) {
        square10.classList.add('animate__fadeInRightBig');
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      square10.classList.remove('animate__fadeInRightBig');
    });
  });
  
observer10.observe(document.querySelector('.container-contact'));

// Contact Heading 
const observer11 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const square11 = entry.target.querySelectorAll('.contactanim-heading');
  
      if (entry.isIntersecting) {
        square11[0].classList.add('animate__fadeInRightBig');
        square11[1].classList.add('animate__fadeInRightBig');
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      square11[0].classList.remove('animate__fadeInRightBig');
      square11[1].classList.remove('animate__fadeInRightBig');
    });
  });
  
observer11.observe(document.querySelector('.contact'));

// Services 
const observer7 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const square7 = entry.target.querySelector('.service-cont');
  
      if (entry.isIntersecting) {
        square7.classList.add('animate__fadeInLeftBig');
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      square7.classList.remove('animate__fadeInLeftBig');
    });
  });
  
observer7.observe(document.querySelector('.container-services'));

// Services - Heading
const observer8 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const square8 = entry.target.querySelectorAll('.serviceanim-heading');
  
      if (entry.isIntersecting) {
        square8[0].classList.add('animate__fadeInRightBig');
        square8[1].classList.add('animate__fadeInRightBig');
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      square8[0].classList.remove('animate__fadeInRightBig');
      square8[1].classList.remove('animate__fadeInRightBig');
    });
  });
  
observer8.observe(document.querySelector('.container-services'));

// Testimonial 
const observer5 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const square5 = entry.target.querySelector('.testi-main-box');
  
      if (entry.isIntersecting) {
        square5.classList.add('animate__zoomIn');
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      square5.classList.remove('animate__zoomIn');
    });
  });
  
observer5.observe(document.querySelector('.container-testimonial'));

// Testimonial - Heading
const observer6 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const square6 = entry.target.querySelectorAll('.headinganim-testi');
  
      if (entry.isIntersecting) {
        square6[0].classList.add('animate__fadeInRightBig');
        square6[1].classList.add('animate__fadeInRightBig');
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      square6[0].classList.remove('animate__fadeInRightBig');
      square6[1].classList.remove('animate__fadeInRightBig');
    });
  });
  
observer6.observe(document.querySelector('.container-testimonial'));


// About Left Container 
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const square = entry.target.querySelector('.about-inside-left');
  
      if (entry.isIntersecting) {
        square.classList.add('animate__slideInLeft');
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      square.classList.remove('animate__slideInLeft');
    });
  });
  
observer.observe(document.querySelector('.about-inside'));



// About Right Container 
const observer3 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const square2 = entry.target.querySelector('.about-inside-right');
  
      if (entry.isIntersecting) {
        square2.classList.add('animate__slideInRight');
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      square2.classList.remove('animate__slideInRight');
    });
  });
  
observer3.observe(document.querySelector('.about-inside'));


//  Progress Bar 
const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const prog = entry.target.querySelectorAll('.progress-bar');
  
      if (entry.isIntersecting) {
        prog[0].classList.add('progress-animation');
        prog[1].classList.add('progress-animation');
        prog[2].classList.add('progress-animation');
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      prog[0].classList.remove('progress-animation');
      prog[1].classList.remove('progress-animation');
      prog[2].classList.remove('progress-animation');
    });
  });
  
observer2.observe(document.querySelector('.skill-progress'));

// About-Last 
const observer4 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const abtLast = entry.target.querySelectorAll('.about-last');
  
      if (entry.isIntersecting) {
        abtLast[0].classList.add('animate__fadeInUp');
        abtLast[1].classList.add('animate__fadeInUp');
        abtLast[2].classList.add('animate__fadeInUp');
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      abtLast[0].classList.remove('animate__fadeInUp');
      abtLast[1].classList.remove('animate__fadeInUp');
      abtLast[2].classList.remove('animate__fadeInUp');
    });
  });
  
observer4.observe(document.querySelector('.about-last-div'));animate__fadeInUp


