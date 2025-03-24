document.addEventListener('DOMContentLoaded', () => {
  console.log('I can see this!');

  // Create and append the scroll-to-top button (styling is handled in CSS)
  const scrollToTopButton = document.createElement('button');
  scrollToTopButton.textContent = '↑';
  scrollToTopButton.className = 'scroll-to-top';
  scrollToTopButton.setAttribute('aria-label', 'Scroll to top');
  document.body.appendChild(scrollToTopButton);

  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      scrollToTopButton.classList.add('visible');
    } else {
      scrollToTopButton.classList.remove('visible');
    }
  });

  scrollToTopButton.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Blog posts array with the additional "How I Built My E-Portfolio" post
  const posts = [
    {
      title: "How I Built My E-Portfolio",
      content: "In this post, I explain the process behind creating my e‑portfolio. I used semantic HTML5 for structure, modern CSS (including animations and responsive design) for styling, and JavaScript to add interactivity such as dynamic blog posts and a dark mode toggle. The approach focused on accessibility, clean layouts, and user-friendly navigation."
    },
    {
      title: "Hack the Future: Belgium's Most Epic Hackathon",
      content: "I successfully participated in Hack the Future, an annual hackathon that brings together IT and creative students for an epic experience. It was a fantastic opportunity to network with industry experts and tackle real-world challenges."
    },
    {
      title: "Tech&Meet: Investigating Cybercrime - On the Frontline",
      content: "I completed the Tech&Meet event on Investigating Cybercrime, where I learned from an experienced investigating judge. The insights on cybercrime investigations and prosecutions were invaluable."
    },
    {
      title: "Tech&Meet: Boost Your Cybersecurity Skills with TryHackMe",
      content: "I attended a session with Niels Deryckere from TryHackMe. It was an excellent opportunity to enhance my cybersecurity skills and discover new learning resources."
    },
    {
      title: "Tech&Meet: The Quantum Threat – Are You Ready?",
      content: "I participated in a session on the Quantum Threat with Eric Michiels from IBM. The event provided deep insights into the impact of quantum computing on digital security and how to prepare for future challenges."
    },
    {
      title: "Internship as a Pentester at Group Van Damme",
      content: "I am currently interning as a pentester at Group Van Damme. My role involves conducting penetration tests and securing websites to protect digital assets. This hands‑on experience is invaluable in honing my cybersecurity skills."
    },
    {
      title: "Preparing for the CEH Exam",
      content: "I am preparing for the Certified Ethical Hacker (CEH) exam, a globally recognized certification in ethical hacking and cybersecurity. This process involves rigorous study, practice, and continuous learning."
    },
    {
      title: "Teaching and Protecting Local Companies from Cyber Attacks",
      content: "Dr. Stanislav Milevsky shared valuable insights and recommendations on cybersecurity, focusing on protecting local companies from digital threats. His guidance has greatly influenced my approach to cybersecurity education."
    },
    {
      title: "Conducting a Website Security Audit",
      content: "In this post, I share the process behind conducting a comprehensive website security audit. The audit involved examining various security aspects, identifying vulnerabilities, and implementing best practices to enhance protection. The approach focused on thorough analysis, proactive measures, and providing actionable recommendations to ensure robust security for online platforms."
    },
    {
      title: "Building an Interactive Event Management Platform",
      date: "March 24, 2025",
      content: "I am currently developing a web application for event and exhibitor management, inspired by Expodoc. The project is built using Next.js for the frontend and Supabase for the backend. One of the key features is an interactive floor plan, created with Konva.js, allowing users to dynamically place, resize, and modify exhibitor booths. Additionally, I'm implementing database storage so users can save and load their layouts seamlessly. Future improvements include user authentication, advanced shape customization, and real-time collaboration. This project is a great opportunity to apply my skills in frontend development, database management, and UI/UX design."
    }
    
    // Additional posts can be added here
  ];

  const blogSection = document.getElementById('blog');
  posts.forEach(post => {
    const article = document.createElement('article');
    let htmlContent = `<h3>${post.title}</h3><p>${post.content}</p>`;
    if (post.date) {
        htmlContent += `<p>Date: ${post.date}</p>`;
    }
    article.innerHTML = htmlContent;
    blogSection.appendChild(article);
  });

  // Dark mode toggle
  const toggleSwitch = document.getElementById('dark-mode-toggle');
  const body = document.body;
  const modeText = document.getElementById('mode-text');

  toggleSwitch.addEventListener('change', function() {
    body.classList.toggle('dark-mode');
  });

  document.getElementById('print-cv-button').addEventListener('click', function() {
    window.print();
  });

  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  });

  // Photo Slider Functionality
  const slider = document.querySelector('.slider');
  const slidesContainer = document.querySelector('.slides');
  const slides = document.querySelectorAll('.slides img');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  let currentSlide = 0;
  let slideWidth = 0;
  let autoplayInterval;
  let isHovering = false;
  
  // Create indicators
  const indicatorsContainer = document.createElement('div');
  indicatorsContainer.className = 'slide-indicators';
  slider.appendChild(indicatorsContainer);
  
  // Add indicators for each slide
  slides.forEach((_, index) => {
    const indicator = document.createElement('div');
    indicator.className = 'indicator';
    if (index === 0) indicator.classList.add('active');
    indicator.addEventListener('click', () => {
      goToSlide(index);
      resetAutoplay();
    });
    indicatorsContainer.appendChild(indicator);
  });
  
  // Get all indicators
  const indicators = document.querySelectorAll('.indicator');

  // Set initial slide width on load and resize
  function setSlideWidth() {
    slideWidth = slider.clientWidth;
    slides.forEach(slide => {
      slide.style.width = `${slideWidth}px`;
    });
    // Update slider position after resize
    goToSlide(currentSlide, false);
  }

  // Initialize slider
  function initSlider() {
    setSlideWidth();
    window.addEventListener('resize', setSlideWidth);
    
    // Add autoplay
    startAutoplay();
    
    // Pause on hover
    slider.addEventListener('mouseenter', () => {
      isHovering = true;
      clearInterval(autoplayInterval);
    });
    
    slider.addEventListener('mouseleave', () => {
      isHovering = false;
      startAutoplay();
    });
    
    // Add keyboard navigation
    document.addEventListener('keydown', handleKeyboardNavigation);
  }

  function goToSlide(index, animate = true) {
    currentSlide = index;
    
    // Update indicators
    indicators.forEach((indicator, i) => {
      indicator.classList.toggle('active', i === currentSlide);
    });
    
    // Move slider to current slide
    const offset = -currentSlide * slideWidth;
    slidesContainer.style.transition = animate ? 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)' : 'none';
    slidesContainer.style.transform = `translateX(${offset}px)`;
  }

  function nextSlide() {
    const newIndex = (currentSlide + 1) % slides.length;
    goToSlide(newIndex);
    resetAutoplay();
  }

  function prevSlide() {
    const newIndex = (currentSlide - 1 + slides.length) % slides.length;
    goToSlide(newIndex);
    resetAutoplay();
  }
  
  function startAutoplay() {
    clearInterval(autoplayInterval);
    autoplayInterval = setInterval(() => {
      if (!isHovering) {
        nextSlide();
      }
    }, 5000); // Change slide every 5 seconds
  }
  
  function resetAutoplay() {
    clearInterval(autoplayInterval);
    startAutoplay();
  }
  
  function handleKeyboardNavigation(e) {
    if (e.key === 'ArrowLeft') {
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
    }
  }

  // Event listeners for navigation buttons
  prevButton.addEventListener('click', prevSlide);
  nextButton.addEventListener('click', nextSlide);

  // Initialize the slider
  initSlider();
});
