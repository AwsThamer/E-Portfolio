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
          content: "I successfully participated in Hack the Future, an annual hackathon that brings together IT and creative students for an epic experience. It was a fantastic opportunity to network with industry experts and tackle real-world challenges. The event was incredibly inspiring and motivating."
        },
        {
          title: "Tech&Meet: Investigating Cybercrime - On the Frontline",
          content: "I completed the Tech&Meet event on Investigating Cybercrime, where I learned from Deraeve Diederik, an investigating judge. The insights into how cybercrime is investigated and prosecuted were invaluable, and the event was both informative and engaging."
        },
        {
          title: "Tech&Meet: Boost Your Cybersecurity Skills with TryHackMe",
          content: "I attended the Tech&Meet session with Niels Deryckere from TryHackMe. It was an excellent opportunity to enhance my cybersecurity skills and learn how TryHackMe can support my learning journey. The session was highly educational and inspiring."
        },
        {
          title: "Tech&Meet: The Quantum Threat – Are You Ready?",
          content: "I participated in the Tech&Meet event on the Quantum Threat with Eric Michiels from IBM. The session provided deep insights into the impact of quantum computing on digital security and how to prepare for future challenges. It was a thought-provoking and enlightening experience."
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
  