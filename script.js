document.addEventListener('DOMContentLoaded', () => {
    console.log('I can see this!');
  
    // Create and append the scroll-to-top button (its styling is handled in CSS)
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
  
    // Example: Function to dynamically load blog posts
    function loadBlogPosts() {
      const posts = [
        {
          title: "Hack the Future: Belgium's Most Epic Hackathon",
          content: "Hack the Future is an annual hackathon that brings together IT and creative students for an epic experience. The event offers a unique opportunity to network with industry experts and tackle real-world challenges. The next edition is scheduled for 19 – 20 November 2024. For more details, visit the <a href='https://www.hackthefuture.be' target='_blank'>official website</a>."
        },
        {
          title: "Tech&Meet: Investigating Cybercrime - On the Frontline",
          content: "Discover how cybercrime is investigated and prosecuted with Deraeve Diederik, investigating judge at the tribunal of first instance in West Flanders. Date: February 11, 2025 – 7 PM."
        },
        {
          title: "Tech&Meet: Boost Your Cybersecurity Skills with TryHackMe",
          content: "Learn from Niels Deryckere, Content Engineer at TryHackMe, how to continuously improve your cybersecurity skills and how TryHackMe can support your learning journey. Date: February 25, 2025 – 7 PM."
        },
        {
          title: "Tech&Meet: The Quantum Threat – Are You Ready?",
          content: "Explore the impact of quantum computing on digital security and learn how organizations can prepare for the quantum threat with Eric Michiels, Executive Architect at IBM and IBM Quantum Ambassador. Date: March 25, 2025 – 7 PM."
        },
        // Add more posts here
      ];
  
      const blogSection = document.getElementById('blog');
      posts.forEach(post => {
        const article = document.createElement('article');
        article.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p>`;
        blogSection.appendChild(article);
      });
    }
  
    // Call the function to load posts
    loadBlogPosts();

    const toggleSwitch = document.getElementById('dark-mode-toggle');
    const body = document.body;
    const modeText = document.getElementById('mode-text');

    toggleSwitch.addEventListener('change', function() {
        body.classList.toggle('dark-mode');
    });
});
  