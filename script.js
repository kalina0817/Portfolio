const navLinks = document.querySelectorAll('.site-nav a');
const sections = document.querySelectorAll('main section[id]');
const revealElements = document.querySelectorAll('.reveal');
const yearEl = document.getElementById('year');
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');
const copyCoverLetterButton = document.getElementById('copy-cover-letter');
const profilePhoto = document.getElementById('profile-photo');
const contactEmail = 'Kalinamulugeta0817@gmail.com';

if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

if (profilePhoto) {
  profilePhoto.addEventListener('error', () => {
    const fallbackSrc = profilePhoto.getAttribute('data-fallback-src');
    if (fallbackSrc && profilePhoto.getAttribute('src') !== fallbackSrc) {
      profilePhoto.setAttribute('src', fallbackSrc);
    }
  });
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach((el) => revealObserver.observe(el));

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      const id = entry.target.getAttribute('id');
      navLinks.forEach((link) => {
        const isActive = link.getAttribute('href') === `#${id}`;
        link.classList.toggle('active', isActive);
      });
    });
  },
  {
    rootMargin: '-45% 0px -45% 0px',
    threshold: 0,
  }
);

sections.forEach((section) => sectionObserver.observe(section));

if (copyCoverLetterButton) {
  copyCoverLetterButton.addEventListener('click', async () => {
    const coverLetterText = [
      'Dear Hiring Manager,',
      '',
      'I am writing to express my interest in opportunities in software engineering, machine learning, artificial intelligence, and data-driven development. I am a Software Engineer and M.S. Computer Science candidate with experience building software applications, developing machine learning models, and working with real-world datasets.',
      '',
      'As an AI/ML Researcher, I design and implement predictive and classification models, develop preprocessing and feature engineering pipelines, and evaluate model performance using Python, PyTorch, Scikit-learn, and computer vision techniques. This work has strengthened my ability to solve complex problems and deliver reliable technical solutions.',
      '',
      'Previously, as a Software Developer, I developed and maintained applications using Python, Java, and REST APIs. I collaborated with teams across the SDLC and improved system reliability through debugging, testing, and backend integration.',
      '',
      'I have also completed several technical projects, including real-time object detection (CCT-YOLO), NLP-based decision extraction, mutation prioritization using machine learning, housing price prediction, and QR-based authentication systems. These projects demonstrate my ability to take ideas from concept to implementation using strong engineering and research practices.',
      '',
      'I am eager to bring my technical skills, problem-solving mindset, and passion for AI and software engineering to a team where I can contribute to meaningful, impactful work. Thank you for considering my application.',
      '',
      'Sincerely,',
      'Kalkidan Debassu',
    ].join('\n');

    const originalButtonText = copyCoverLetterButton.textContent;

    try {
      await navigator.clipboard.writeText(coverLetterText);
      copyCoverLetterButton.textContent = 'Copied';
      setTimeout(() => {
        copyCoverLetterButton.textContent = originalButtonText;
      }, 1800);
    } catch (error) {
      copyCoverLetterButton.textContent = 'Copy failed';
      setTimeout(() => {
        copyCoverLetterButton.textContent = originalButtonText;
      }, 1800);
    }
  });
}

if (contactForm && formStatus) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const message = String(formData.get('message') || '').trim();

    if (!name || !email || !message) {
      formStatus.textContent = 'Please complete all fields before sending.';
      return;
    }

    formStatus.textContent = 'Thanks. Opening your email app now...';

    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;

    contactForm.reset();
  });
}
