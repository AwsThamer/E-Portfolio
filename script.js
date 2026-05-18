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
      date: "March 25, 2025",
      content: "I attended the Tech&Meet session on 'The Quantum Threat' presented by Eric Michiels, Executive Architect at IBM and IBM Quantum Technical Ambassador. The event provided deep insights into the impact of quantum computing on digital security and how organizations must prepare for the quantum-safe era. Eric demonstrated IBM's quantum computing platforms and the available QPUs like IBM's Heron and Eagle processors with 156 and 127 qubits respectively. Key topics covered included quantum-safe cryptography standards from NIST, the fundamental differences between classical and quantum computing, and Qiskit SDK as the 'lingua franca' of quantum computing. The presentation emphasized the urgent 'harvest now, decrypt later' threat, where attackers could store encrypted data today to decrypt it once quantum computers become powerful enough. A sobering slide showed that 'a Quantum Computer capable of breaking 2048-bit RSA in a matter of hours could be built by 2030.' Eric also presented a real case study of a private bank's three-phase journey toward becoming quantum-safe, showcasing practical implementation strategies for organizations. The session concluded with clear next steps: the time to act is now, with proper planning for migration to quantum-resistant algorithms."
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
    },
    {
      title: "Introducing FloorSketch: Simple, Powerful Floor Plan Design",
      date: "May 21, 2025",
      content: "Create professional floor plans in minutes with FloorSketch! Our intuitive design tool features customizable shapes, text labels, and icons to bring your vision to life. Import blueprint images as references, toggle between metric and imperial measurements, and use grid snapping for precision. Design multi-floor buildings with our floor management system. Collaborate in real-time with teammates, organize elements with layers, and save your work securely in the cloud. Perfect for home renovations, office layouts, or event planning. Try FloorSketch today and transform how you design spaces! #FloorPlanDesign #InteriorDesign #Architecture"
    },
    {
      title: "Building Network Scanner Pro: A Cross-Platform Network Analysis Tool",
      date: "August 7, 2025",
      content: `
        <div class="project-showcase">
          <div class="project-header">
            <span class="project-badge">🚀 Featured Project</span>
            <p><strong>Technologies:</strong> Go 1.21, Fyne v2 GUI Framework, ICMP/TCP Networking, GitHub Actions CI/CD</p>
            <p><strong>🔗 Repository:</strong> <a href="https://github.com/AwsThamer/NetworkScanner" target="_blank">GitHub - NetworkScanner</a></p>
          </div>

          <h4>💡 Project Overview</h4>
          <p>Network Scanner Pro is a powerful, cross-platform network scanning tool that demonstrates advanced Go programming skills and modern GUI development. The project showcases proficiency in concurrent programming, network protocols, cross-platform development, and user interface design.</p>

          <h4>🎯 Key Features Implemented</h4>
          <ul>
            <li><strong>🔍 Comprehensive Network Scanning:</strong> ICMP ping operations, port scanning with configurable ranges, full CIDR network exploration, and custom IP range support</li>
            <li><strong>🎨 Beautiful GUI Interface:</strong> Bootstrap-inspired color scheme, card-based layout with gradient backgrounds, real-time progress bars, and color-coded results</li>
            <li><strong>⚡ High Performance:</strong> Goroutine-based parallel scanning, semaphore-controlled concurrency limits, configurable timeouts, and memory-efficient operations</li>
          </ul>

          <h4>🏗️ Technical Architecture</h4>
          <p>The application features a layered architecture with custom theme systems, concurrent network operations using goroutines, and cross-platform build automation. The GUI uses Fyne v2 framework with a custom Bootstrap-inspired theme, while the backend implements efficient concurrent scanning with semaphore control.</p>

          <h4>📊 Performance Metrics</h4>
          <ul>
            <li><strong>Scanning Speed:</strong> Single host ping <100ms, network range (254 hosts) ~30 seconds with 50 concurrent operations</li>
            <li><strong>Resource Efficiency:</strong> <50MB memory usage for typical operations</li>
            <li><strong>Cross-platform:</strong> Works on Linux, Windows, macOS with automated builds via GitHub Actions</li>
          </ul>

          <h4>🔧 Development Challenges Solved</h4>
          <ul>
            <li><strong>Cross-Platform ICMP:</strong> Implemented unprivileged ping mode with fallback mechanisms</li>
            <li><strong>GUI Performance:</strong> Background goroutines with channel-based communication prevent interface freezing</li>
            <li><strong>User Experience:</strong> Added network presets (192.168.1.0/24, 10.0.0.0/24) for improved usability</li>
          </ul>

          <h4>🎓 Skills Demonstrated</h4>
          <ul>
            <li><strong>Go Language:</strong> Advanced concurrency patterns, interfaces, package management</li>
            <li><strong>GUI Development:</strong> Custom theming, event handling, responsive design</li>
            <li><strong>Network Programming:</strong> TCP/IP, ICMP protocols, socket programming</li>
            <li><strong>DevOps:</strong> CI/CD pipelines, automated cross-platform builds, professional documentation</li>
          </ul>

          <h4>🚀 Technical Implementation Highlights</h4>
          <p><strong>Custom Theme System:</strong> Implemented professional Bootstrap-inspired color scheme with primary blue (#007BFF), success green (#28A745), warning yellow (#FFC107), and error red (#DC3545).</p>
          
          <p><strong>Concurrent Processing:</strong> Semaphore-controlled goroutine pool limits concurrent operations to 50 workers, preventing resource exhaustion while maintaining high performance.</p>
          
          <p><strong>Cross-Platform Builds:</strong> Automated build system generates binaries for Linux (GUI/CLI), Windows (CLI), and macOS (CLI) with GitHub Actions integration.</p>

          <h4>🔮 Future Enhancements</h4>
          <ul>
            <li>Windows GUI support with complete cross-platform implementation</li>
            <li>Service detection on open ports with fingerprinting</li>
            <li>Export functionality (JSON/CSV) for integration with other tools</li>
            <li>Plugin system for extensible scan modules</li>
            <li>Network topology visualization</li>
          </ul>

          <h4>🏆 Project Impact</h4>
          <p>This project demonstrates practical application of advanced programming concepts in a real-world tool. It showcases technical depth in systems programming, user experience design, and professional software development practices. The combination of performance optimization, beautiful UI design, and comprehensive functionality makes it an excellent portfolio piece for cybersecurity and software development roles.</p>

          <div class="project-links">
            <p><strong>🔗 Project Links:</strong></p>
            <ul>
              <li><a href="https://github.com/AwsThamer/NetworkScanner" target="_blank">📁 Full Source Code</a></li>
              <li><a href="https://github.com/AwsThamer/NetworkScanner/blob/main/README.md" target="_blank">📖 Technical Documentation</a></li>
              <li><a href="https://github.com/AwsThamer/NetworkScanner/blob/main/BEAUTIFUL_GUI.md" target="_blank">🎨 Design Process</a></li>
              <li><a href="https://github.com/AwsThamer/NetworkScanner/actions" target="_blank">⚙️ Build Pipeline</a></li>
            </ul>
          </div>
        </div>
      `
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

  const updateModeText = () => {
    modeText.textContent = body.classList.contains('dark-mode') ? 'Dark mode' : 'Light mode';
  };

  updateModeText();

  toggleSwitch.addEventListener('change', function() {
    body.classList.toggle('dark-mode');
    updateModeText();
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
