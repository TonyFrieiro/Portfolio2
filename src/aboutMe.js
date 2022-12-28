const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const square = entry.target.querySelector('.aboutAnimation');
  
      if (entry.isIntersecting) {
        square.classList.add('animate__fadeInLeft');
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      square.classList.remove('animate__fadeInLeft');
    });
  });
  
  observer.observe(document.querySelector('.imgAboutMe'));