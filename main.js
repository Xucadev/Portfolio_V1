

/* ---- Estado global ---- */
let currentLang = 'es';

/* ---- Traducciones ---- */
const t = {
  es: {
    'hero-sub':       'Especialista en ciberseguridad, técnico en marketing digital y desarrollador freelancer. Soluciones web reales para negocios reales.',
    'btn-projects':   'Ver proyectos →',
    'btn-contact':    'Contactar',
    'services-title': 'Servicios',
    'services-desc':  'Soluciones digitales enfocadas en resultados. Cada proyecto tiene un objetivo claro: que tu negocio se vea profesional y se encuentre en internet.',
    'projects-title': 'Proyectos',
    'projects-desc':  'Cada proyecto es una solución real. Aquí puedes ver ejemplos de lo que puedo construir para tu negocio.',
    'projects-note':  '* Proyectos de muestra. Próximamente proyectos reales con clientes.',
    'about-role':     'Especialista en Ciberseguridad · Developer · Marketer',
    'about-location': '📍 Santiago, República Dominicana',
    'about-floating': '✦ Disponible para proyectos',
    'about-title':    '¿Quién soy?',
    'about-p1':       'Soy Christopher Lora, estudiante de Tecnología en Ciberseguridad en la PUCMM y técnico titulado por INFOTEP en Marketing Digital y Contabilidad Auxiliar. También cuento con una certificación intermedia en ciberseguridad avalada por INDOTEL a través del programa Talento Digital RD.',
    'about-p2':       'Combino conocimientos técnicos reales con habilidades de marketing para ofrecer soluciones web que no solo se ven bien, sino que funcionan y se encuentran en internet.',
    'certs-title':    'Certificaciones y estudios',
    'certs-desc':     'Formación técnica real, no solo teórica. Cada credencial representa horas de práctica y estudio aplicado.',
    'contact-title':  '¿Tienes un proyecto?',
    'contact-desc':   'Si tienes un negocio y quieres mejorar tu presencia digital, estoy disponible. Sin complicaciones, sin lenguaje técnico innecesario.',
    'label-name':     'Tu nombre',
    'label-email':    'Tu correo',
    'label-service':  'Servicio de interés',
    'label-msg':      'Mensaje',
    'btn-send-text':  'Enviar mensaje',
    'form-note':      '* Abre tu cliente de correo por defecto.',
    'footer-copy':    '© 2025 Christopher Lora · Hecho con código y café.',
    'langToggle':     'EN',
    placeholders: {
      'input-name':    'Nombre completo',
      'input-email':   'correo@ejemplo.com',
      'input-service': 'Landing page, SEO, Google Maps...',
      'input-msg':     'Cuéntame sobre tu proyecto...',
    }
  },
  en: {
    'hero-sub':       'Cybersecurity specialist, digital marketing technician, and freelance developer. Real web solutions for real businesses.',
    'btn-projects':   'View projects →',
    'btn-contact':    'Contact',
    'services-title': 'Services',
    'services-desc':  'Results-focused digital solutions. Every project has one clear goal: make your business look professional and be found online.',
    'projects-title': 'Projects',
    'projects-desc':  'Every project is a real solution. Here you can see examples of what I can build for your business.',
    'projects-note':  '* Sample projects. Real client projects coming soon.',
    'about-role':     'Cybersecurity Specialist · Developer · Marketer',
    'about-location': '📍 Santiago, Dominican Republic',
    'about-floating': '✦ Available for projects',
    'about-title':    'Who am I?',
    'about-p1':       'I am Christopher Lora, a Cybersecurity Technology student at PUCMM and a certified technician from INFOTEP in Digital Marketing and Auxiliary Accounting. I also hold an intermediate cybersecurity certification endorsed by INDOTEL through the Talento Digital RD program.',
    'about-p2':       'I combine real technical knowledge with marketing skills to deliver web solutions that not only look good, but actually work and get found on the internet.',
    'certs-title':    'Certifications & Education',
    'certs-desc':     'Real technical training, not just theory. Every credential represents hours of hands-on practice and applied study.',
    'contact-title':  'Have a project?',
    'contact-desc':   'If you have a business and want to improve your digital presence, I am available. No complications, no unnecessary tech jargon.',
    'label-name':     'Your name',
    'label-email':    'Your email',
    'label-service':  'Service of interest',
    'label-msg':      'Message',
    'btn-send-text':  'Send message',
    'form-note':      '* Opens your default email client.',
    'footer-copy':    '© 2025 Christopher Lora · Built with code and coffee.',
    'langToggle':     'ES',
    placeholders: {
      'input-name':    'Full name',
      'input-email':   'email@example.com',
      'input-service': 'Landing page, SEO, Google Maps...',
      'input-msg':     'Tell me about your project...',
    }
  }
};

/* ---- Toggle idioma ---- */
function toggleLang() {
  currentLang = currentLang === 'es' ? 'en' : 'es';
  const tr = t[currentLang];

  /* Elementos con ID */
  Object.keys(tr).forEach(id => {
    if (id === 'placeholders') return;
    const el = document.getElementById(id);
    if (el) el.textContent = tr[id];
  });

  /* Placeholders */
  Object.keys(tr.placeholders).forEach(id => {
    const el = document.getElementById(id);
    if (el) el.placeholder = tr.placeholders[id];
  });

  /* Elementos con data-es / data-en */
  document.querySelectorAll('[data-es]').forEach(el => {
    el.textContent = currentLang === 'es' ? el.dataset.es : el.dataset.en;
  });

  /* Atributo lang del HTML */
  document.documentElement.lang = currentLang;
}

/* ---- Toggle tema ---- */
function toggleTheme() {
  const isLight = document.documentElement.dataset.theme === 'light';
  document.documentElement.dataset.theme = isLight ? 'dark' : 'light';
  document.getElementById('themeToggle').textContent = isLight ? '☀' : '☾';
}

/* ---- Filtro de proyectos ---- */
function initProjectFilter() {
  const buttons = document.querySelectorAll('.filter-btn');
  const cards   = document.querySelectorAll('.project-card');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      /* Botón activo */
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      /* Mostrar / ocultar tarjetas */
      cards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
}

/* ---- Formulario de contacto ---- */
function handleSend(e) {
  e.preventDefault();
  const name    = document.getElementById('input-name').value.trim();
  const service = document.getElementById('input-service').value.trim();
  const msg     = document.getElementById('input-msg').value.trim();

  const subject = encodeURIComponent(`Proyecto: ${service || 'Consulta'}`);
  const body    = encodeURIComponent(
    `Hola Christopher,\n\nMi nombre es ${name}.\n\n${msg}`
  );

  window.location.href = `mailto:christlora@proton.me?subject=${subject}&body=${body}`;
}

/* ---- Navbar scroll effect ---- */
function initNavScroll() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.style.borderBottomColor = window.scrollY > 20
      ? 'rgba(79,110,247,0.15)'
      : '';
  });
}

/* ---- Animación de scroll (Intersection Observer) ---- */
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(
    '.service-card, .project-card, .cert-card, .about-card-main'
  ).forEach(el => {
    el.style.opacity    = '0';
    el.style.transform  = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
}

/* ---- Init ---- */
document.addEventListener('DOMContentLoaded', () => {
  initProjectFilter();
  initNavScroll();
  initScrollAnimations();
});
