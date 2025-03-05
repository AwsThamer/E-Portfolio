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
    }
    // Additional posts can be added here
  ];

  const blogSection = document.getElementById('blog');
  posts.forEach(post => {
    const article = document.createElement('article');
    article.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p>`;
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
});
