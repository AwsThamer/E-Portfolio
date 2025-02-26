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
      // Fetch or generate blog post content dynamically
      const posts = [
        { title: "How I Built This Website", content: "This post explains the technologies..." },
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

    toggleSwitch.addEventListener('change', function() {
        body.classList.toggle('dark-mode');
    });
  });
  