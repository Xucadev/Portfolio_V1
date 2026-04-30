
let currentLang = 'es';

const translations = {
  es: {
    'hero-line1': 'Christopher',
    'hero-sub': 'Especialista en ciberseguridad, técnico en marketing digital y desarrollador freelancer. Soluciones web reales para negocios reales.',
    'btn-projects': 'Ver proyectos →',
    'btn-contact': 'Contactar',
    'services-title': 'Servicios',
    'services-desc': 'Soluciones digitales enfocadas en resultados. Cada proyecto tiene un objetivo claro: que tu negocio se vea profesional y se encuentre en internet.',
    'projects-title': 'Proyectos',
    'projects-desc': 'Demos reales de lo que puedo construir para tu negocio. Cada uno diseñado a medida.',
    'about-role': 'Especialista en Ciberseguridad · Developer · Marketer',
    'about-location': '📍 Santiago, República Dominicana',
    'about-floating': '✦ Disponible para proyectos',
    'about-title': '¿Quién soy?',
    'about-p1': 'Soy Christopher Lora, estudiante de Tecnología en Ciberseguridad en la PUCMM y técnico titulado por INFOTEP en Marketing Digital y Contabilidad Auxiliar. También cuento con una certificación intermedia en ciberseguridad avalada por INDOTEL a través del programa Talento Digital RD.',
    'about-p2': 'Combino conocimientos técnicos reales con habilidades de marketing para ofrecer soluciones web que no solo se ven bien, sino que funcionan y se encuentran en internet.',
    'certs-title': 'Certificaciones y estudios',
    'certs-desc': 'Formación técnica real, no solo teórica. Cada credencial representa horas de práctica y estudio aplicado.',
    'contact-title': '¿Tienes un proyecto?',
    'contact-desc': 'Si tienes un negocio y quieres mejorar tu presencia digital, estoy disponible. Sin complicaciones, sin lenguaje técnico innecesario.',
    'form-cta-desc': 'Completa el formulario con los detalles de tu proyecto y te respondo en menos de 24 horas.',
    'btn-form-text': 'Llenar formulario de solicitud',
    'label-name': 'Tu nombre',
    'label-email': 'Tu correo',
    'label-service': 'Servicio de interés',
    'label-msg': 'Mensaje',
    'btn-send-text': 'Enviar mensaje',
    'form-note': '* Abre tu cliente de correo por defecto.',
    'footer-copy': '© 2025 Christopher Lora · Hecho con código y café.',
    'langToggle': 'EN',
    /* projects page */
    'ph-title-html': 'Proyectos <span class="accent-text">demo</span>',
    'ph-desc': 'Cada demo está construido a medida para un tipo de negocio real. Diseño único, trilingüe, responsive y listo para producción.',
    'ft-all': 'Todos',
    'btn-all-projects': 'Ver todos los proyectos →',
    'pfc-title': '¿Quieres una para tu negocio?',
    'pfc-desc': 'Completa el formulario con los detalles de tu proyecto. 26 preguntas, menos de 5 minutos, y te respondo con una propuesta personalizada.',
    'pfc-btn': '📋 Solicitar mi proyecto',
  },
  en: {
    'hero-line1': 'Christopher',
    'hero-sub': 'Cybersecurity specialist, digital marketing technician, and freelance developer. Real web solutions for real businesses.',
    'btn-projects': 'View projects →',
    'btn-contact': 'Contact',
    'services-title': 'Services',
    'services-desc': 'Results-focused digital solutions. Every project has one clear goal: make your business look professional and be found online.',
    'projects-title': 'Projects',
    'projects-desc': 'Real demos of what I can build for your business. Each one custom designed.',
    'about-role': 'Cybersecurity Specialist · Developer · Marketer',
    'about-location': '📍 Santiago, Dominican Republic',
    'about-floating': '✦ Available for projects',
    'about-title': 'Who am I?',
    'about-p1': 'I am Christopher Lora, a Cybersecurity Technology student at PUCMM and a certified technician from INFOTEP in Digital Marketing and Auxiliary Accounting. I also hold an intermediate cybersecurity certification endorsed by INDOTEL through the Talento Digital RD program.',
    'about-p2': 'I combine real technical knowledge with marketing skills to deliver web solutions that not only look good, but actually work and get found on the internet.',
    'certs-title': 'Certifications & Education',
    'certs-desc': 'Real technical training, not just theory. Every credential represents hours of hands-on practice and applied study.',
    'contact-title': 'Have a project?',
    'contact-desc': 'If you have a business and want to improve your digital presence, I am available. No complications, no unnecessary tech jargon.',
    'form-cta-desc': 'Fill out the form with your project details and I\'ll respond within 24 hours.',
    'btn-form-text': 'Fill out request form',
    'label-name': 'Your name',
    'label-email': 'Your email',
    'label-service': 'Service of interest',
    'label-msg': 'Message',
    'btn-send-text': 'Send message',
    'form-note': '* Opens your default email client.',
    'footer-copy': '© 2025 Christopher Lora · Built with code and coffee.',
    'langToggle': 'ES',
    /* projects page */
    'ph-title-html': 'Demo <span class="accent-text">projects</span>',
    'ph-desc': 'Each demo is built to measure for a real type of business. Unique design, trilingual, responsive and production-ready.',
    'ft-all': 'All',
    'btn-all-projects': 'View all projects →',
    'pfc-title': 'Want one for your business?',
    'pfc-desc': 'Fill out the form with your project details. 26 questions, less than 5 minutes, and I\'ll respond with a personalized proposal.',
    'pfc-btn': '📋 Request my project',
  }
};

/* --- Toggle idioma --- */
function toggleLang() {
  currentLang = currentLang === 'es' ? 'en' : 'es';
  const t = translations[currentLang];

  /* IDs directos */
  Object.keys(t).forEach(id => {
    if (id === 'langToggle' || id.endsWith('-html')) return;
    const el = document.getElementById(id);
    if (el) el.textContent = t[id];
  });

  /* Elementos con data-es / data-en */
  document.querySelectorAll('[data-es]').forEach(el => {
    el.textContent = currentLang === 'es' ? el.dataset.es : el.dataset.en;
  });

  /* Títulos con HTML */
  const phTitle = document.getElementById('ph-title');
  if (phTitle) phTitle.innerHTML = t['ph-title-html'] || phTitle.innerHTML;

  /* Placeholders */
  const pmap = {
    'input-name':    currentLang === 'es' ? 'Nombre completo'              : 'Full name',
    'input-email':   currentLang === 'es' ? 'correo@ejemplo.com'           : 'email@example.com',
    'input-service': currentLang === 'es' ? 'Landing page, SEO, Google Maps...' : 'Landing page, SEO, Google Maps...',
    'input-msg':     currentLang === 'es' ? 'Cuéntame sobre tu proyecto...' : 'Tell me about your project...',
  };

  Object.keys(pmap).forEach(id => {
    const el = document.getElementById(id);
    if (el) el.placeholder = pmap[id];
  });

  /* Lang toggle button */
  const btn = document.getElementById('langToggle');
  if (btn) btn.textContent = t['langToggle'];

  document.documentElement.lang = currentLang;
}

/* --- Tema --- */
function toggleTheme() {
  const isDark = !document.documentElement.dataset.theme || document.documentElement.dataset.theme === 'dark';
  document.documentElement.dataset.theme = isDark ? 'light' : 'dark';
  document.getElementById('themeToggle').textContent = isDark ? '☾' : '☀';
}

/* --- Filtro de proyectos (projects.html) --- */
function filterProjects(btn) {
  const filter = btn.dataset.filter;

  document.querySelectorAll('.pf-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  document.querySelectorAll('.project-card').forEach(card => {
    if (filter === 'all' || card.dataset.category === filter) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}

/* --- Formulario de contacto --- */
function handleSend(e) {
  e.preventDefault();
  const name    = document.getElementById('input-name').value.trim();
  const service = document.getElementById('input-service').value.trim();
  const msg     = document.getElementById('input-msg').value.trim();
  const subject = encodeURIComponent(`Proyecto: ${service || 'Consulta'}`);
  const body    = encodeURIComponent(`Hola Christopher,\n\nMi nombre es ${name}.\n\n${msg}`);
  window.location.href = `mailto:christlora@proton.me?subject=${subject}&body=${body}`;
}

/* --- Navbar scroll --- */
function initNavScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    navbar.style.borderBottomColor = window.scrollY > 20 ? 'rgba(79,110,247,0.15)' : '';
  });
}

/* --- Animaciones de scroll --- */
function initScrollAnimations() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity   = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(
    '.service-card, .project-card, .cert-card, .about-card-main, .pp-card'
  ).forEach(el => {
    el.style.opacity    = '0';
    el.style.transform  = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
}

/* --- Init --- */
document.addEventListener('DOMContentLoaded', () => {
  initNavScroll();
  initScrollAnimations();
});
