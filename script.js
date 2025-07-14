// Download CV
const downloadBtn = document.getElementById('download-cv');
downloadBtn.addEventListener('click', () => {
  window.open('Sajana Weerakoon.pdf', '_blank');
});

// Section reveal on scroll
const revealSections = document.querySelectorAll('[data-animate]');
const revealOnScroll = () => {
  const trigger = window.innerHeight * 0.92;
  revealSections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < trigger) {
      sec.classList.add('visible');
    }
  });
};
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);

// Smooth scroll for navbar
const navLinks = document.querySelectorAll('#navbar a');
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Project modal logic
const projectDetails = {
  'im-portal': {
    title: 'IM Portal (Web Application) (2020)',
    description: 'Knowledge sharing system created using MongoDB, ExpressJS, React and NodeJS (MERN Stack).',
    image: '',
    link: ''
  },
  'notification-center': {
    title: 'Notification Center for “Arena” Medical Record System (2020 - 2025)',
    description: 'A desktop application to deliver RabbitMQ-powered push notifications for patients and practitioners, along with a mobile subscriber module supporting FCM/APNS-based push notifications.\nTech: C# .NET 8.0, Blazor, Windows Services, RabbitMQ, FCM/APNS, SignalR, Docker and Kubernetes.',
    image: '',
    link: ''
  },
  'address-registry': {
    title: 'Norwegian Address Registry Integration Service (2023 - 2025)',
    description: 'A synchronization application to poll updates from the Norwegian National Health Registers and update demographic information of communication parties, enabling subscription-based syncing across all hospitals.\nTech: C#, NET, Blazor, Oracle, SignalR.',
    image: '',
    link: ''
  },
  'lab-data-sync': {
    title: 'Lab Data Sync with QCN (2022 - 2024)',
    description: 'Developed web applications to distribute patient-critical and medical information. Utilized Oracle’s Queue Change Notification (QCN) feature for real-time event-based push notifications.\nTech: Oracle QRCN, .NET.',
    image: '',
    link: ''
  }
};
const modal = document.getElementById('project-modal');
const modalBody = document.getElementById('modal-body');
const closeModalBtn = document.querySelector('.close-modal');

document.querySelectorAll('.project[role="button"]').forEach(proj => {
  proj.addEventListener('click', () => {
    const key = proj.getAttribute('data-project');
    const details = projectDetails[key];
    if (details) {
      modalBody.innerHTML = `
        <h3>${details.title}</h3>
        <p>${details.description.replace(/\n/g, '<br>')}</p>
        ${details.image ? `<img src="${details.image}" alt="${details.title}" style="max-width:100%;margin:1em 0;">` : ''}
        ${details.link ? `<a href="${details.link}" target="_blank">View Project</a>` : ''}
      `;
      modal.hidden = false;
      modal.focus();
    }
  });
  proj.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      proj.click();
    }
  });
});
closeModalBtn.addEventListener('click', () => {
  modal.hidden = true;
});
modal.addEventListener('click', e => {
  if (e.target === modal) modal.hidden = true;
});
document.addEventListener('keydown', e => {
  if (!modal.hidden && e.key === 'Escape') modal.hidden = true;
});

// Contact form validation
const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');
const formSuccess = document.getElementById('form-success');

function validateEmail(email) {
  return /^[^\s@]+@[^^\s@]+\.[^\s@]+$/.test(email);
}

form.addEventListener('submit', function(e) {
  e.preventDefault();
  let valid = true;
  nameError.textContent = '';
  emailError.textContent = '';
  messageError.textContent = '';
  formSuccess.textContent = '';

  if (!nameInput.value.trim()) {
    nameError.textContent = 'Name is required.';
    valid = false;
  }
  if (!emailInput.value.trim()) {
    emailError.textContent = 'Email is required.';
    valid = false;
  } else if (!validateEmail(emailInput.value.trim())) {
    emailError.textContent = 'Invalid email address.';
    valid = false;
  }
  if (!messageInput.value.trim()) {
    messageError.textContent = 'Message is required.';
    valid = false;
  }
  if (valid) {
    formSuccess.textContent = 'Thank you! Your message has been sent (demo only).';
    form.reset();
  }
});

// FAB (Floating Action Button) scroll-to-top or contact
const fabBtn = document.getElementById('fab');
if (fabBtn) {
  fabBtn.addEventListener('click', () => {
    if (window.scrollY > 100) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
} 