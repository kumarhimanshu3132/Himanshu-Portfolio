/**
 * HIMANSHU KUMAR - PORTFOLIO INTERACTIVE SCRIPTS
 * Includes theme switching, mobile drawer, project filtering,
 * modal case study preview, interactive Snake Arcade game,
 * copy-to-clipboard, form validation, and scroll animations.
 */

// --- PROJECT DATA STORE ---
const projectsData = {
  'food-mania': {
    title: 'Food Mania - Full-Stack Food Delivery Web App',
    category: 'MERN Stack & Full-Stack Engineering',
    tag: 'MERN Stack',
    date: 'April 2026',
    image: 'assets/projects/food-mania.jpg',
    overview: 'Food Mania is an end-to-end food delivery web application built with MongoDB, Express.js, React.js, and Node.js. It delivers a modern, frictionless ordering experience with real-time cart synchronization, secure authentication, and responsive mobile-first UI.',
    highlights: [
      'Built end-to-end user flows (restaurant browsing, menu categorization, add to cart, checkout).',
      'Engineered state management with React Context API for instant, persistent cart operations.',
      'Secured user authentication and authorization using JSON Web Tokens (JWT) & bcrypt.',
      'Connected a real-time MongoDB database with optimized RESTful API endpoints.',
      'Designed a sleek food-ordering dashboard with real-time order tracking interface.',
      'Deployed frontend and backend seamlessly on Vercel with automated CI/CD.'
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Context API', 'JWT', 'Vercel', 'CSS3'],
    demoUrl: 'https://food-mania-kohl.vercel.app/',
    githubUrl: 'https://github.com/kumarhimanshu3132/food-mania'
  },
  'snake-arcade': {
    title: 'React Snake Arcade - Interactive Web Game',
    category: 'React & Interactive Game Engineering',
    tag: 'React & Game Dev',
    date: 'October 2026',
    image: 'assets/projects/snake-arcade.jpg',
    overview: 'An engaging, arcade-style retro Snake game built with React.js and modern web mechanics. Features fluid frame-by-frame collision handling, dynamic speed scaling, combo multiplier scoring, local storage high scores, and responsive mobile touch controls.',
    highlights: [
      'Engineered a high-performance game loop with React hooks and keyboard/touch event dispatchers.',
      'Implemented clean collision detection algorithms (wall collisions, self-tail bite, food generation).',
      'Integrated local storage persistence for all-time high score tracking.',
      'Designed vibrant neon retro arcade aesthetics with smooth responsive grid layout.',
      'Deployed to production on Vercel with automated CI/CD.'
    ],
    tech: ['React.js', 'JavaScript (ES6+)', 'CSS Grid', 'HTML5 Canvas', 'Local Storage', 'Vercel'],
    demoUrl: 'https://react-snake-arcade-omega.vercel.app/',
    githubUrl: 'https://github.com/kumarhimanshu3132/react-snake-arcade'
  },
  'techcrest-explorer': {
    title: 'TechCrestaX - Interactive Product Explorer',
    category: 'TypeScript & Frontend Architecture',
    tag: 'TypeScript & React',
    date: 'August 2026',
    image: 'assets/projects/techcrest-explorer.jpg',
    overview: 'TechCrestaX is a high-performance interactive product exploration web application developed in TypeScript. Features real-time catalog search filtering, category sorting, dynamic product view states, and modular scalable component architecture.',
    highlights: [
      'Architected clean TypeScript frontend architecture with strict type safety and modular components.',
      'Built instant client-side search filtering and multi-category sorting without page reloads.',
      'Created responsive product view states, interactive details modal, and specs exploration.',
      'Optimized layout performance with modern CSS and zero-latency UI interactions.',
      'Deployed on Vercel with automated continuous deployment.'
    ],
    tech: ['TypeScript', 'React.js', 'JavaScript (ES6+)', 'CSS3', 'Component Design', 'Vercel'],
    demoUrl: 'https://tech-cresta-x-product-explorer.vercel.app/',
    githubUrl: 'https://github.com/kumarhimanshu3132/TechCrestaX-Product-Explorer'
  },
  'brand-identity': {
    title: 'TechCrestaX - Interactive Product Explorer',
    category: 'TypeScript & Frontend Architecture',
    tag: 'TypeScript & React',
    date: 'August 2026',
    image: 'assets/projects/techcrest-explorer.jpg',
    overview: 'TechCrestaX is a high-performance interactive product exploration web application developed in TypeScript. Features real-time catalog search filtering, category sorting, dynamic product view states, and modular scalable component architecture.',
    highlights: [
      'Architected clean TypeScript frontend architecture with strict type safety and modular components.',
      'Built instant client-side search filtering and multi-category sorting without page reloads.',
      'Created responsive product view states, interactive details modal, and specs exploration.',
      'Optimized layout performance with modern CSS and zero-latency UI interactions.',
      'Deployed on Vercel with automated continuous deployment.'
    ],
    tech: ['TypeScript', 'React.js', 'JavaScript (ES6+)', 'CSS3', 'Component Design', 'Vercel'],
    demoUrl: 'https://tech-cresta-x-product-explorer.vercel.app/',
    githubUrl: 'https://github.com/kumarhimanshu3132/TechCrestaX-Product-Explorer'
  },
  'weather-tracker': {
    title: 'Weather Application - Real-Time Weather Tracker',
    category: 'API Integration & Dynamic UI',
    tag: 'JavaScript & API',
    date: 'February 2026',
    image: 'assets/projects/weather-tracker.jpg',
    overview: 'A real-time weather tracking web app providing instant meteorological forecasts, humidity, wind speed, and atmospheric conditions for global cities with responsive visuals that adapt dynamically to current weather conditions.',
    highlights: [
      'Built with asynchronous JavaScript (Fetch API / async-await) to communicate with live weather endpoints.',
      'Rendered responsive dynamic weather cards with clean data presentation and condition icons.',
      'Implemented debounced search autocomplete for global city discovery.',
      'Engineered smart client-side error handling for invalid locations or network drops.'
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'OpenWeather API', 'Responsive Web Design'],
    demoUrl: '#',
    githubUrl: 'https://github.com/kumarhimanshu3132/weather-application'
  },
  'grocery-website': {
    title: 'FreshMart Grocery - E-Commerce Frontend Storefront',
    category: 'E-Commerce & Frontend Architecture',
    tag: 'Frontend E-Commerce',
    date: 'November 2025',
    image: 'assets/projects/grocery-website.jpg',
    overview: 'A responsive e-commerce storefront for grocery and daily essentials, optimized for quick catalog browsing, instant product search filtering, category sorting, and an interactive shopping cart drawer.',
    highlights: [
      'Designed an intuitive, customer-centric product grid with badge indicators and price tags.',
      'Developed instant client-side search filtering using JavaScript DOM manipulation without page reloads.',
      'Created category filters (Vegetables, Fruits, Dairy, Pantry) with active state indicators.',
      'Fully responsive fluid layout adapting effortlessly from mobile smartphones to ultra-wide displays.'
    ],
    tech: ['HTML5', 'CSS3', 'Vanilla JavaScript', 'DOM Manipulation', 'UI/UX Design'],
    demoUrl: '#',
    githubUrl: 'https://github.com/kumarhimanshu3132/grocery-website'
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavbar();
  initMobileNav();
  initStatsCounter();
  initProjectFilters();
  initProjectModal();
  initSnakeArcade();
  initPhoneModal();
  initContactForm();
  initClipboardButtons();
  initSmoothScroll();
  initScrollProgress();
  initCardTilt();
  initScrollReveal();
});

/* ===================================================================
   1. THEME TOGGLE (DARK / LIGHT MODE)
   =================================================================== */
function initTheme() {
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const storedTheme = localStorage.getItem('hk_theme') || 'dark';

  applyTheme(storedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
      localStorage.setItem('hk_theme', newTheme);
    });
  }
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const themeIcon = document.getElementById('themeIcon');
  if (themeIcon) {
    // When dark theme, show Sun icon to switch to light; when light theme, show Moon icon
    themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
  }
}

/* ===================================================================
   2. NAVBAR SCROLL & ACTIVE LINK HIGHLIGHTING
   =================================================================== */
function initNavbar() {
  const header = document.querySelector('.header');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Highlight active link based on scroll position
    let currentId = '';
    const scrollPosition = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPosition >= top && scrollPosition < top + height) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  });
}

/* ===================================================================
   3. MOBILE NAVIGATION DRAWER
   =================================================================== */
function initMobileNav() {
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileNav = document.getElementById('mobileNav');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (!hamburgerBtn || !mobileNav) return;

  hamburgerBtn.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('open');
    hamburgerBtn.classList.toggle('active', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      hamburgerBtn.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

/* ===================================================================
   4. STATS COUNTER ANIMATION
   =================================================================== */
function initStatsCounter() {
  const statValues = document.querySelectorAll('.stat-value');
  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        statValues.forEach(stat => {
          const target = parseFloat(stat.getAttribute('data-target'));
          const isDecimal = stat.getAttribute('data-decimal') === 'true';
          const suffix = stat.getAttribute('data-suffix') || '';

          let current = 0;
          const duration = 1800; // ms
          const stepTime = 30;
          const totalSteps = duration / stepTime;
          const stepIncrement = target / totalSteps;

          const counter = setInterval(() => {
            current += stepIncrement;
            if (current >= target) {
              current = target;
              clearInterval(counter);
            }
            stat.textContent = (isDecimal ? current.toFixed(2) : Math.floor(current)) + suffix;
          }, stepTime);
        });
      }
    });
  }, { threshold: 0.3 });

  const ribbon = document.querySelector('.stats-ribbon');
  if (ribbon) {
    observer.observe(ribbon);
  }
}

/* ===================================================================
   5. PROJECT CATEGORY FILTERING
   =================================================================== */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const category = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category') || '';
        if (category === 'all' || cardCategory.includes(category)) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
          }, 30);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px) scale(0.96)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

/* ===================================================================
   6. PROJECT MODAL CASE STUDY VIEWER
   =================================================================== */
function initProjectModal() {
  const modalBackdrop = document.getElementById('projectModal');
  const modalCloseBtn = document.getElementById('closeModalBtn');
  const quickViewBtns = document.querySelectorAll('[data-open-modal]');

  if (!modalBackdrop) return;

  function openModal(projectId) {
    const data = projectsData[projectId];
    if (!data) return;

    document.getElementById('modalImage').src = data.image;
    document.getElementById('modalImage').alt = data.title;
    document.getElementById('modalCategory').textContent = data.category;
    document.getElementById('modalTitle').textContent = data.title;
    document.getElementById('modalOverview').textContent = data.overview;

    // Highlights list
    const highlightsUl = document.getElementById('modalHighlightsList');
    highlightsUl.innerHTML = '';
    data.highlights.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      highlightsUl.appendChild(li);
    });

    // Tech tags
    const tagsContainer = document.getElementById('modalTags');
    tagsContainer.innerHTML = '';
    data.tech.forEach(t => {
      const span = document.createElement('span');
      span.className = 'project-tag';
      span.textContent = t;
      tagsContainer.appendChild(span);
    });

    // Action links
    const modalLiveLink = document.getElementById('modalLiveLink');
    const modalGithubLink = document.getElementById('modalGithubLink');

    if (modalLiveLink) {
      if (data.demoUrl && data.demoUrl !== '#') {
        modalLiveLink.href = data.demoUrl;
        modalLiveLink.style.display = 'inline-flex';
      } else {
        modalLiveLink.style.display = 'none';
      }
    }

    if (modalGithubLink) {
      const ghLabel = modalGithubLink.querySelector('span');
      if (data.githubUrl && data.githubUrl !== 'https://github.com/' && data.githubUrl !== '#') {
        modalGithubLink.href = data.githubUrl;
        modalGithubLink.style.display = 'inline-flex';
        if (ghLabel) ghLabel.textContent = 'GitHub Repository';
      } else if (data.behanceUrl && data.behanceUrl !== '#') {
        modalGithubLink.href = data.behanceUrl;
        modalGithubLink.style.display = 'inline-flex';
        if (ghLabel) ghLabel.textContent = 'Behance Showcase';
      } else {
        modalGithubLink.style.display = 'none';
      }
    }

    modalBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modalBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  quickViewBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = btn.getAttribute('data-project-id');
      openModal(projectId);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
      closeModal();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('active')) {
      closeModal();
    }
  });
}

/* ===================================================================
   7. INTERACTIVE SNAKE ARCADE GAME (BUILT-IN)
   =================================================================== */
function initSnakeArcade() {
  const modal = document.getElementById('snakeArcadeModal');
  const openBtns = document.querySelectorAll('.open-snake-game');
  const closeBtn = document.getElementById('closeSnakeModalBtn');
  const canvas = document.getElementById('snakeCanvas');
  const startBtn = document.getElementById('startSnakeBtn');
  const overlayScreen = document.getElementById('snakeOverlayScreen');
  const overlayTitle = document.getElementById('snakeOverlayTitle');
  const overlaySubtitle = document.getElementById('snakeOverlaySubtitle');
  const currentScoreEl = document.getElementById('snakeCurrentScore');
  const highScoreEl = document.getElementById('snakeHighScore');

  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const gridSize = 20;
  const tileCount = 20; // 400x400 canvas

  let snake = [];
  let food = { x: 5, y: 5 };
  let dx = 0;
  let dy = 0;
  let score = 0;
  let highScore = parseInt(localStorage.getItem('hk_snake_high') || '0', 10);
  let gameInterval = null;
  let isPlaying = false;
  let nextDx = 0;
  let nextDy = 0;

  if (highScoreEl) highScoreEl.textContent = highScore;

  function openGame() {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    resetGame();
  }

  function closeGame() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    stopGame();
  }

  openBtns.forEach(b => b.addEventListener('click', (e) => {
    e.preventDefault();
    openGame();
  }));

  if (closeBtn) closeBtn.addEventListener('click', closeGame);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeGame();
  });

  function resetGame() {
    stopGame();
    snake = [
      { x: 10, y: 10 },
      { x: 9, y: 10 },
      { x: 8, y: 10 }
    ];
    dx = 1;
    dy = 0;
    nextDx = 1;
    nextDy = 0;
    score = 0;
    if (currentScoreEl) currentScoreEl.textContent = '0';
    spawnFood();
    draw();
    overlayScreen.style.display = 'flex';
    overlayTitle.textContent = 'React Snake Arcade';
    overlaySubtitle.textContent = 'Use Arrow Keys / WASD / D-Pad to Play';
    startBtn.textContent = 'Start Playing';
  }

  function startGame() {
    if (isPlaying) return;
    isPlaying = true;
    overlayScreen.style.display = 'none';
    gameInterval = setInterval(gameStep, 110);
  }

  function stopGame() {
    isPlaying = false;
    if (gameInterval) clearInterval(gameInterval);
  }

  function spawnFood() {
    let valid = false;
    while (!valid) {
      food = {
        x: Math.floor(Math.random() * tileCount),
        y: Math.floor(Math.random() * tileCount)
      };
      valid = !snake.some(segment => segment.x === food.x && segment.y === food.y);
    }
  }

  function gameStep() {
    dx = nextDx;
    dy = nextDy;

    const head = { x: snake[0].x + dx, y: snake[0].y + dy };

    // Wall collision
    if (head.x < 0 || head.x >= tileCount || head.y < 0 || head.y >= tileCount) {
      gameOver();
      return;
    }

    // Tail collision
    for (let i = 0; i < snake.length; i++) {
      if (head.x === snake[i].x && head.y === snake[i].y) {
        gameOver();
        return;
      }
    }

    snake.unshift(head);

    // Food eating
    if (head.x === food.x && head.y === food.y) {
      score += 10;
      if (currentScoreEl) currentScoreEl.textContent = score;
      if (score > highScore) {
        highScore = score;
        localStorage.setItem('hk_snake_high', highScore);
        if (highScoreEl) highScoreEl.textContent = highScore;
      }
      spawnFood();
    } else {
      snake.pop();
    }

    draw();
  }

  function draw() {
    // Clear canvas
    ctx.fillStyle = '#050811';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Grid lines (subtle)
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
    ctx.lineWidth = 1;
    for (let i = 0; i <= canvas.width; i += gridSize) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, canvas.height);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(canvas.width, i);
      ctx.stroke();
    }

    // Draw food (glowing fruit)
    ctx.fillStyle = '#f43f5e';
    ctx.shadowBlur = 12;
    ctx.shadowColor = '#f43f5e';
    ctx.beginPath();
    ctx.arc(food.x * gridSize + gridSize / 2, food.y * gridSize + gridSize / 2, gridSize / 2.4, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;

    // Draw snake body
    snake.forEach((segment, index) => {
      if (index === 0) {
        // Head
        ctx.fillStyle = '#06b6d4';
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#06b6d4';
      } else {
        // Body gradient
        ctx.fillStyle = '#6366f1';
        ctx.shadowBlur = 0;
      }
      ctx.beginPath();
      ctx.roundRect(
        segment.x * gridSize + 1,
        segment.y * gridSize + 1,
        gridSize - 2,
        gridSize - 2,
        index === 0 ? 6 : 4
      );
      ctx.fill();
    });
    ctx.shadowBlur = 0;
  }

  function gameOver() {
    stopGame();
    overlayScreen.style.display = 'flex';
    overlayTitle.textContent = 'Game Over!';
    overlaySubtitle.textContent = `Score: ${score} | High Score: ${highScore}`;
    startBtn.textContent = 'Play Again';
  }

  if (startBtn) {
    startBtn.addEventListener('click', () => {
      resetGame();
      startGame();
    });
  }

  // Keyboard controls
  window.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;

    switch (e.key) {
      case 'ArrowUp':
      case 'w':
      case 'W':
        if (dy === 0) { nextDx = 0; nextDy = -1; }
        e.preventDefault();
        break;
      case 'ArrowDown':
      case 's':
      case 'S':
        if (dy === 0) { nextDx = 0; nextDy = 1; }
        e.preventDefault();
        break;
      case 'ArrowLeft':
      case 'a':
      case 'A':
        if (dx === 0) { nextDx = -1; nextDy = 0; }
        e.preventDefault();
        break;
      case 'ArrowRight':
      case 'd':
      case 'D':
        if (dx === 0) { nextDx = 1; nextDy = 0; }
        e.preventDefault();
        break;
      case ' ':
        if (!isPlaying) startGame();
        e.preventDefault();
        break;
    }
  });

  // Mobile D-Pad Buttons
  document.querySelectorAll('[data-dpad]').forEach(btn => {
    btn.addEventListener('click', () => {
      const dir = btn.getAttribute('data-dpad');
      if (dir === 'up' && dy === 0) { nextDx = 0; nextDy = -1; }
      if (dir === 'down' && dy === 0) { nextDx = 0; nextDy = 1; }
      if (dir === 'left' && dx === 0) { nextDx = -1; nextDy = 0; }
      if (dir === 'right' && dx === 0) { nextDx = 1; nextDy = 0; }
      if (!isPlaying) startGame();
    });
  });
}

/* ===================================================================
   8. CONTACT FORM CLIENT-SIDE VALIDATION & TOAST ALERT
   =================================================================== */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    const nameInput = document.getElementById('contactName');
    const emailInput = document.getElementById('contactEmail');
    const subjectInput = document.getElementById('contactSubject');
    const messageInput = document.getElementById('contactMessage');

    // Name check
    if (!nameInput.value.trim()) {
      showError(nameInput, 'Please provide your name');
      isValid = false;
    } else {
      clearError(nameInput);
    }

    // Email check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      showError(emailInput, 'Please enter a valid email address');
      isValid = false;
    } else {
      clearError(emailInput);
    }

    // Subject check
    if (!subjectInput.value.trim()) {
      showError(subjectInput, 'Please enter a subject');
      isValid = false;
    } else {
      clearError(subjectInput);
    }

    // Message check
    if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
      showError(messageInput, 'Message should be at least 10 characters');
      isValid = false;
    } else {
      clearError(messageInput);
    }

    if (isValid) {
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = 'Sending message...';
      submitBtn.disabled = true;

      const payload = {
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        subject: subjectInput.value.trim(),
        message: messageInput.value.trim(),
        _subject: `Portfolio Message from ${nameInput.value.trim()}: ${subjectInput.value.trim()}`,
        _captcha: 'false',
        _template: 'table'
      };

      fetch('https://formsubmit.co/ajax/kumarhimanshu3132@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      })
        .then(res => res.json())
        .then(data => {
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;
          showToast('Thank you! Your message has been sent successfully. Himanshu will get back to you soon.', 'success');
          form.reset();
        })
        .catch(err => {
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;
          // Fallback to mailto
          const mailtoUrl = `mailto:kumarhimanshu3132@gmail.com?subject=${encodeURIComponent(payload.subject)}&body=${encodeURIComponent("Sender Name: " + payload.name + "\nSender Email: " + payload.email + "\n\nMessage:\n" + payload.message)}`;
          window.location.href = mailtoUrl;
          showToast('Opening your email client to send message...', 'info');
        });
    }
  });

  function showError(input, msg) {
    const group = input.closest('.form-group');
    if (group) {
      group.classList.add('has-error');
      const errEl = group.querySelector('.form-error');
      if (errEl) errEl.textContent = msg;
    }
  }

  function clearError(input) {
    const group = input.closest('.form-group');
    if (group) {
      group.classList.remove('has-error');
    }
  }
}

/* ===================================================================
   9. COPY TO CLIPBOARD BUTTONS
   =================================================================== */
function initClipboardButtons() {
  const copyButtons = document.querySelectorAll('[data-copy]');

  copyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast(`Copied "${textToCopy}" to clipboard!`, 'success');
        });
      } else {
        // Fallback
        const textArea = document.createElement('textarea');
        textArea.value = textToCopy;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
          document.execCommand('copy');
          showToast(`Copied "${textToCopy}" to clipboard!`, 'success');
        } catch (err) {
          showToast('Could not copy automatically.', 'error');
        }
        document.body.removeChild(textArea);
      }
    });
  });
}

/* ===================================================================
   10. TOAST NOTIFICATION UTILITY
   =================================================================== */
function showToast(message, type = 'success') {
  let toastContainer = document.querySelector('.toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <span class="toast-icon">${type === 'success' ? '✓' : 'ℹ️'}</span>
    <span class="toast-message">${message}</span>
  `;

  toastContainer.appendChild(toast);

  // Trigger slide in
  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  // Auto remove
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 400);
  }, 4000);
}

/* ===================================================================
   11. SMOOTH SCROLL FOR ANCHOR LINKS
   =================================================================== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/* ===================================================================
   12. PHONE CONTACT MODAL & CLIPBOARD COPY
   =================================================================== */
function initPhoneModal() {
  const phoneModal = document.getElementById('phoneModal');
  const closeBtn = document.getElementById('closePhoneModalBtn');
  const copyModalBtn = document.getElementById('copyPhoneModalBtn');
  const phoneActionBtns = document.querySelectorAll('.phone-action-btn');
  const phoneNumber = '+916207186044';

  function copyPhoneToClipboard() {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(phoneNumber);
    } else {
      const ta = document.createElement('textarea');
      ta.value = phoneNumber;
      ta.style.position = 'fixed';
      ta.style.left = '-9999px';
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      try {
        document.execCommand('copy');
      } catch (e) {
        console.error(e);
      }
      document.body.removeChild(ta);
    }
  }

  function openPhoneModal() {
    copyPhoneToClipboard();
    showToast('📞 Phone: +91-6207186044 (Copied to clipboard!)', 'success');
    if (phoneModal) {
      phoneModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closePhoneModal() {
    if (phoneModal) {
      phoneModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  phoneActionBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openPhoneModal();
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closePhoneModal);
  }

  if (phoneModal) {
    phoneModal.addEventListener('click', (e) => {
      if (e.target === phoneModal) {
        closePhoneModal();
      }
    });
  }

  if (copyModalBtn) {
    copyModalBtn.addEventListener('click', () => {
      copyPhoneToClipboard();
      showToast('Copied +91-6207186044 to clipboard!', 'success');
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && phoneModal && phoneModal.classList.contains('active')) {
      closePhoneModal();
    }
  });
}

/* ===================================================================
   13. TOP READING SCROLL PROGRESS BAR
   =================================================================== */
function initScrollProgress() {
  const progressBar = document.getElementById('scrollProgressBar');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if (scrollHeight > 0) {
      const progress = (scrollTop / scrollHeight) * 100;
      progressBar.style.width = `${progress}%`;
    }
  }, { passive: true });
}

/* ===================================================================
   14. SUBTLE 3D CARD HOVER TILT EFFECT
   =================================================================== */
function initCardTilt() {
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    const tiltElements = document.querySelectorAll('.hero-card-frame, .project-card, .stat-item, .skill-card-group, .identity-card');
    tiltElements.forEach(el => {
      el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -3.2;
        const rotateY = ((x - centerX) / centerX) * 3.2;
        el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
      });

      el.addEventListener('mouseleave', () => {
        el.style.transform = '';
      });
    });
  }
}

/* ===================================================================
   15. SCROLL REVEAL ANIMATIONS (INTERSECTION OBSERVER)
   =================================================================== */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  if (!revealElements.length) return;

  // Fallback for browsers without IntersectionObserver
  if (!('IntersectionObserver' in window)) {
    revealElements.forEach(el => el.classList.add('revealed'));
    return;
  }

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -40px 0px',
    threshold: 0.08
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    // If already in viewport on initial load, show immediately
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add('revealed');
    } else {
      observer.observe(el);
    }
  });
}



