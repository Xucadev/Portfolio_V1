/* Photo Studio Xuca — main.js */

/* --- Traducciones --- */
const i18n = {
  es: {
    "nav.about":"Nosotros","nav.services":"Servicios","nav.catalog":"Catálogo",
    "nav.gallery":"Galería","nav.hours":"Horarios","nav.location":"Ubicación","nav.contact":"Contacto",
    "hero.tag":"Santiago · RD · Est. 2024",
    "hero.l1":"Cada momento","hero.l2":"merece ser","hero.l3":"recordado.",
    "hero.sub":"Fotografía profesional con alma local. Capturamos tus momentos más especiales con amor, luz y talento en Santiago.",
    "hero.cta1":"Reservar sesión","hero.cta2":"Ver servicios",
    "hc1":"Retratos","hc2":"Quinceañeras","hc3":"Familia","hc4":"Corporativo","hc5":"Eventos",
    "about.tag":"Nuestra historia","about.tag2":"Capturando momentos",
    "about.p1":"Photo Studio Xuca es un espacio cálido y profesional donde cada sesión está diseñada para que te sientas cómodo, natural y feliz. Creemos que la mejor foto es la que captura quien realmente eres.",
    "about.p2":"Con equipos de alta gama, fondos variados y un equipo con ojo artístico, convertimos cualquier momento en una imagen que querrás guardar para siempre.",
    "about.cta":"Agendar sesión",
    "ab.days":"abierto","ab.heart":"con corazón","ab.city":"Santiago",
    "srv.tag":"Lo que ofrecemos","srv.title":"Nuestros servicios",
    "srv.sub":"Para cada tipo de sesión, tenemos el ambiente, el equipo y la experiencia perfecta.",
    "srv.pop":"⭐ Más solicitado",
    "s1.n":"Quinceañeras","s1.d":"Tu día más especial, capturado para siempre. Sesión completa con múltiples cambios de atuendo y escenografías exclusivas.","s1.t":"Desde RD$4,500",
    "s2.n":"Sesión familiar","s2.d":"Retratos naturales y espontáneos para toda la familia. Capturamos la conexión y el amor que los une.","s2.t":"Desde RD$2,500",
    "s3.n":"Retratos individuales","s3.d":"Headshots, sesiones artísticas o simplemente quieres una foto increíble tuya. Te hacemos lucir espectacular.","s3.t":"Desde RD$1,200",
    "s4.n":"Corporativo & Branding","s4.d":"Fotos de equipo, headshots profesionales e imágenes de marca. Proyecta una imagen seria y moderna.","s4.t":"Desde RD$3,000",
    "s5.n":"Eventos & Celebraciones","s5.d":"Cumpleaños, graduaciones, bautizos, bodas y todo evento que merezca recordarse. Cobertura completa.","s5.t":"Consultar precio",
    "s6.n":"Bebés & Maternidad","s6.d":"Sesiones newborn, embarazo y primeros pasos. Los momentos más tiernos de la vida, capturados con delicadeza.","s6.t":"Desde RD$1,800",
    "cat.tag":"Inspiración","cat.title":"Nuestro trabajo",
    "cat.sub":"Una muestra de los estilos y sesiones que puedes tener en Photo Studio Xuca.",
    "cat.all":"Todos","cat.c1":"Retratos","cat.c2":"Familia","cat.c3":"Eventos","cat.c4":"Corporativo",
    "ci1.n":"Retrato artístico","ci1.d":"Sesión individual con iluminación de estudio.",
    "ci2.n":"Familia en estudio","ci2.d":"Sesión cálida con fondo neutro.",
    "ci3.n":"Quinceañera","ci3.d":"Celebración llena de color y emoción.",
    "ci4.n":"Equipo corporativo","ci4.d":"Headshots profesionales para tu empresa.",
    "ci5.n":"Newborn","ci5.d":"Los primeros días del bebé, eternizados.",
    "ci6.n":"Graduación","ci6.d":"El logro que tanto merecías, capturado.",
    "ci7.n":"Sesión glamour","ci7.d":"Luz, composición y elegancia personal.",
    "ci8.n":"Maternidad","ci8.d":"La belleza del embarazo en su máxima expresión.",
    "gal.tag":"El estudio","gal.title":"Nuestro espacio",
    "g1":"El estudio","g2":"Iluminación","g3":"Fondos","g4":"Decorados especiales","g5":"Postproducción",
    "gal.note":"✦ Próximamente fotos reales del estudio.",
    "hrs.tag":"Cuándo visitarnos","hrs.desc":"Estamos disponibles todos los días para que puedas agendar tu sesión en el momento que más te convenga. También puedes reservar con anticipación.",
    "hrs.cta":"Reservar por WhatsApp","hrs.open":"Abierto hoy",
    "hrs.mon":"Lunes","hrs.tue":"Martes","hrs.wed":"Miércoles","hrs.thu":"Jueves",
    "hrs.fri":"Viernes","hrs.sat":"Sábado","hrs.sun":"Domingo",
    "loc.tag":"Dónde estamos","loc.desc":"Estamos en el corazón de Santiago, República Dominicana. Espacio amplio, climatizado y con estacionamiento disponible para que llegues cómodo a tu sesión.",
    "loc.cta":"Abrir en Google Maps","loc.open":"Ver en Google Maps →",
    "con.tag":"Agenda tu sesión","con.sub":"Escríbenos por WhatsApp o llámanos. Te ayudamos a elegir el paquete ideal y reservamos tu fecha.",
    "con.wa":"WhatsApp · Reservas","con.p1":"Teléfono 1","con.p2":"Teléfono 2","con.email":"Correo",
    "con.follow":"Síguenos en redes",
    "footer.desc":"Estudio Fotográfico · Santiago, RD",
    "footer.copy":"© 2025 Photo Studio Xuca · Santiago, República Dominicana",
    "a11y.title":"Accesibilidad","a11y.contrast":"Alto contraste",
    "a11y.bigtext":"Texto grande","a11y.links":"Subrayar enlaces","a11y.font":"Fuente legible"
  },
  en: {
    "nav.about":"About","nav.services":"Services","nav.catalog":"Catalog",
    "nav.gallery":"Gallery","nav.hours":"Hours","nav.location":"Location","nav.contact":"Contact",
    "hero.tag":"Santiago · DR · Est. 2024",
    "hero.l1":"Every moment","hero.l2":"deserves to be","hero.l3":"remembered.",
    "hero.sub":"Professional photography with a local soul. We capture your most special moments with love, light and talent in Santiago.",
    "hero.cta1":"Book a session","hero.cta2":"View services",
    "hc1":"Portraits","hc2":"Quinceañera","hc3":"Family","hc4":"Corporate","hc5":"Events",
    "about.tag":"Our story","about.tag2":"Capturing moments",
    "about.p1":"Photo Studio Xuca is a warm and professional space where every session is designed to make you feel comfortable, natural and happy. We believe the best photo is the one that captures who you truly are.",
    "about.p2":"With high-end equipment, varied backdrops and a team with an artistic eye, we turn any moment into an image you'll want to keep forever.",
    "about.cta":"Schedule a session",
    "ab.days":"open","ab.heart":"with heart","ab.city":"Santiago",
    "srv.tag":"What we offer","srv.title":"Our services",
    "srv.sub":"For every type of session, we have the perfect setting, equipment and experience.",
    "srv.pop":"⭐ Most requested",
    "s1.n":"Quinceañera","s1.d":"Your most special day, captured forever. Full session with multiple outfit changes and exclusive scenery.","s1.t":"From RD$4,500",
    "s2.n":"Family session","s2.d":"Natural and spontaneous portraits for the whole family. We capture the connection and love that binds you.","s2.t":"From RD$2,500",
    "s3.n":"Individual portraits","s3.d":"Headshots, artistic sessions or you just want an amazing photo of yourself. We make you look spectacular.","s3.t":"From RD$1,200",
    "s4.n":"Corporate & Branding","s4.d":"Team photos, professional headshots and brand imagery. Project a serious and modern image.","s4.t":"From RD$3,000",
    "s5.n":"Events & Celebrations","s5.d":"Birthdays, graduations, baptisms, weddings and every event worth remembering. Full coverage.","s5.t":"Ask for price",
    "s6.n":"Babies & Maternity","s6.d":"Newborn, pregnancy and first steps sessions. The most tender moments of life, captured with delicacy.","s6.t":"From RD$1,800",
    "cat.tag":"Inspiration","cat.title":"Our work",
    "cat.sub":"A sample of the styles and sessions available at Photo Studio Xuca.",
    "cat.all":"All","cat.c1":"Portraits","cat.c2":"Family","cat.c3":"Events","cat.c4":"Corporate",
    "ci1.n":"Artistic portrait","ci1.d":"Individual session with studio lighting.",
    "ci2.n":"Family in studio","ci2.d":"Warm session with neutral background.",
    "ci3.n":"Quinceañera","ci3.d":"Celebration full of color and emotion.",
    "ci4.n":"Corporate team","ci4.d":"Professional headshots for your company.",
    "ci5.n":"Newborn","ci5.d":"The baby's first days, preserved forever.",
    "ci6.n":"Graduation","ci6.d":"The achievement you earned so much, captured.",
    "ci7.n":"Glamour session","ci7.d":"Light, composition and personal elegance.",
    "ci8.n":"Maternity","ci8.d":"The beauty of pregnancy in its fullest expression.",
    "gal.tag":"The studio","gal.title":"Our space",
    "g1":"The studio","g2":"Lighting","g3":"Backdrops","g4":"Special decorations","g5":"Post-production",
    "gal.note":"✦ Real studio photos coming soon.",
    "hrs.tag":"When to visit us","hrs.desc":"We're available every day so you can schedule your session at the most convenient time. You can also book in advance.",
    "hrs.cta":"Book via WhatsApp","hrs.open":"Open today",
    "hrs.mon":"Monday","hrs.tue":"Tuesday","hrs.wed":"Wednesday","hrs.thu":"Thursday",
    "hrs.fri":"Friday","hrs.sat":"Saturday","hrs.sun":"Sunday",
    "loc.tag":"Where we are","loc.desc":"We're in the heart of Santiago, Dominican Republic. Spacious, air-conditioned and with parking available so you arrive comfortably to your session.",
    "loc.cta":"Open in Google Maps","loc.open":"View on Google Maps →",
    "con.tag":"Schedule your session","con.sub":"Message us on WhatsApp or call us. We help you choose the ideal package and book your date.",
    "con.wa":"WhatsApp · Bookings","con.p1":"Phone 1","con.p2":"Phone 2","con.email":"Email",
    "con.follow":"Follow us",
    "footer.desc":"Photography Studio · Santiago, DR",
    "footer.copy":"© 2025 Photo Studio Xuca · Santiago, Dominican Republic",
    "a11y.title":"Accessibility","a11y.contrast":"High contrast",
    "a11y.bigtext":"Large text","a11y.links":"Underline links","a11y.font":"Readable font"
  },
  fr: {
    "nav.about":"À propos","nav.services":"Services","nav.catalog":"Catalogue",
    "nav.gallery":"Galerie","nav.hours":"Horaires","nav.location":"Localisation","nav.contact":"Contact",
    "hero.tag":"Santiago · RD · Est. 2024",
    "hero.l1":"Chaque moment","hero.l2":"mérite d'être","hero.l3":"rappelé.",
    "hero.sub":"Photographie professionnelle avec une âme locale. Nous capturons vos moments les plus spéciaux avec amour, lumière et talent à Santiago.",
    "hero.cta1":"Réserver une séance","hero.cta2":"Voir les services",
    "hc1":"Portraits","hc2":"Quinceañera","hc3":"Famille","hc4":"Entreprise","hc5":"Événements",
    "about.tag":"Notre histoire","about.tag2":"Capturer des moments",
    "about.p1":"Photo Studio Xuca est un espace chaleureux et professionnel où chaque séance est conçue pour vous faire sentir à l'aise, naturel et heureux. Nous croyons que la meilleure photo est celle qui capture qui vous êtes vraiment.",
    "about.p2":"Avec des équipements haut de gamme, des arrière-plans variés et une équipe avec un œil artistique, nous transformons chaque moment en une image que vous voudrez garder pour toujours.",
    "about.cta":"Planifier une séance",
    "ab.days":"ouvert","ab.heart":"avec cœur","ab.city":"Santiago",
    "srv.tag":"Ce que nous offrons","srv.title":"Nos services",
    "srv.sub":"Pour chaque type de séance, nous avons le cadre, l'équipement et l'expérience parfaits.",
    "srv.pop":"⭐ Le plus demandé",
    "s1.n":"Quinceañera","s1.d":"Votre jour le plus spécial, capturé pour toujours. Séance complète avec plusieurs changements de tenue et décors exclusifs.","s1.t":"À partir de RD$4,500",
    "s2.n":"Séance familiale","s2.d":"Portraits naturels et spontanés pour toute la famille. Nous capturons la connexion et l'amour qui vous unit.","s2.t":"À partir de RD$2,500",
    "s3.n":"Portraits individuels","s3.d":"Headshots, séances artistiques ou vous voulez juste une incroyable photo de vous. Nous vous faisons paraître spectaculaire.","s3.t":"À partir de RD$1,200",
    "s4.n":"Entreprise & Marque","s4.d":"Photos d'équipe, headshots professionnels et images de marque. Projetez une image sérieuse et moderne.","s4.t":"À partir de RD$3,000",
    "s5.n":"Événements & Célébrations","s5.d":"Anniversaires, remises de diplômes, baptêmes, mariages et tout événement digne d'être rappelé. Couverture complète.","s5.t":"Demander le prix",
    "s6.n":"Bébés & Maternité","s6.d":"Séances nouveau-né, grossesse et premiers pas. Les moments les plus tendres de la vie, capturés avec délicatesse.","s6.t":"À partir de RD$1,800",
    "cat.tag":"Inspiration","cat.title":"Notre travail",
    "cat.sub":"Un échantillon des styles et séances disponibles chez Photo Studio Xuca.",
    "cat.all":"Tous","cat.c1":"Portraits","cat.c2":"Famille","cat.c3":"Événements","cat.c4":"Entreprise",
    "ci1.n":"Portrait artistique","ci1.d":"Séance individuelle avec éclairage de studio.",
    "ci2.n":"Famille en studio","ci2.d":"Séance chaleureuse avec fond neutre.",
    "ci3.n":"Quinceañera","ci3.d":"Célébration pleine de couleur et d'émotion.",
    "ci4.n":"Équipe d'entreprise","ci4.d":"Headshots professionnels pour votre société.",
    "ci5.n":"Nouveau-né","ci5.d":"Les premiers jours du bébé, préservés pour toujours.",
    "ci6.n":"Remise de diplôme","ci6.d":"Le succès que vous méritiez tant, capturé.",
    "ci7.n":"Séance glamour","ci7.d":"Lumière, composition et élégance personnelle.",
    "ci8.n":"Maternité","ci8.d":"La beauté de la grossesse dans sa plus belle expression.",
    "gal.tag":"Le studio","gal.title":"Notre espace",
    "g1":"Le studio","g2":"Éclairage","g3":"Fonds","g4":"Décors spéciaux","g5":"Post-production",
    "gal.note":"✦ Photos réelles du studio à venir prochainement.",
    "hrs.tag":"Quand nous rendre visite","hrs.desc":"Nous sommes disponibles tous les jours pour que vous puissiez planifier votre séance au moment le plus pratique. Vous pouvez également réserver à l'avance.",
    "hrs.cta":"Réserver par WhatsApp","hrs.open":"Ouvert aujourd'hui",
    "hrs.mon":"Lundi","hrs.tue":"Mardi","hrs.wed":"Mercredi","hrs.thu":"Jeudi",
    "hrs.fri":"Vendredi","hrs.sat":"Samedi","hrs.sun":"Dimanche",
    "loc.tag":"Où nous sommes","loc.desc":"Nous sommes au cœur de Santiago, République Dominicaine. Espace spacieux, climatisé et avec parking disponible pour que vous arriviez à l'aise à votre séance.",
    "loc.cta":"Ouvrir dans Google Maps","loc.open":"Voir sur Google Maps →",
    "con.tag":"Planifiez votre séance","con.sub":"Écrivez-nous sur WhatsApp ou appelez-nous. Nous vous aidons à choisir le forfait idéal et à réserver votre date.",
    "con.wa":"WhatsApp · Réservations","con.p1":"Téléphone 1","con.p2":"Téléphone 2","con.email":"E-mail",
    "con.follow":"Suivez-nous sur les réseaux",
    "footer.desc":"Studio Photographique · Santiago, RD",
    "footer.copy":"© 2025 Photo Studio Xuca · Santiago, République Dominicaine",
    "a11y.title":"Accessibilité","a11y.contrast":"Contraste élevé",
    "a11y.bigtext":"Grand texte","a11y.links":"Souligner les liens","a11y.font":"Police lisible"
  }
};

/* --- Estado --- */
let currentLang = 'es';

/* --- Aplicar idioma --- */
function setLang(lang) {
  currentLang = lang;
  const tr = i18n[lang];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (tr[key] !== undefined) {
      el.innerHTML = tr[key].replace(/\n/g, '<br>');
    }
  });

  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });

  document.getElementById('a11y-title').textContent   = tr['a11y.title'];
  document.getElementById('lbl-contrast').textContent = tr['a11y.contrast'];
  document.getElementById('lbl-bigtext').textContent  = tr['a11y.bigtext'];
  document.getElementById('lbl-links').textContent    = tr['a11y.links'];
  document.getElementById('lbl-font').textContent     = tr['a11y.font'];

  document.documentElement.lang = lang;
}

/* --- Tema --- */
function toggleTheme() {
  const isLight = document.documentElement.dataset.theme === 'light';
  document.documentElement.dataset.theme = isLight ? 'dark' : 'light';
  document.getElementById('icon-moon').style.display = isLight ? 'none'  : 'block';
  document.getElementById('icon-sun').style.display  = isLight ? 'block' : 'none';
}

/* --- Accesibilidad --- */
function toggleA11y() {
  const panel = document.getElementById('a11y-panel');
  const open  = panel.classList.toggle('open');
  panel.setAttribute('aria-hidden', String(!open));
}

function toggleHighContrast() {
  const on = document.documentElement.dataset.a11yContrast === 'true';
  document.documentElement.dataset.a11yContrast = String(!on);
  document.getElementById('btn-contrast').classList.toggle('on', !on);
}

function toggleBigText() {
  const on = document.documentElement.dataset.a11yBigtext === 'true';
  document.documentElement.dataset.a11yBigtext = String(!on);
  document.getElementById('btn-bigtext').classList.toggle('on', !on);
}

function toggleUnderlineLinks() {
  const on = document.documentElement.dataset.a11yUnderline === 'true';
  document.documentElement.dataset.a11yUnderline = String(!on);
  document.getElementById('btn-links').classList.toggle('on', !on);
}

function toggleReadableFont() {
  const on = document.documentElement.dataset.a11yReadable === 'true';
  document.documentElement.dataset.a11yReadable = String(!on);
  document.getElementById('btn-font').classList.toggle('on', !on);
}

/* --- Filtro catálogo --- */
function filterCat(btn) {
  const cat = btn.dataset.cat;
  document.querySelectorAll('.cat-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.cat-item').forEach(item => {
    item.style.display = (cat === 'all' || item.dataset.cat === cat) ? 'block' : 'none';
  });
}

/* --- Hamburguesa --- */
function toggleMenu() {
  document.getElementById('navMenu').classList.toggle('open');
}

/* --- Navbar scroll --- */
function initNavScroll() {
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    nav.style.boxShadow = window.scrollY > 30
      ? '0 2px 20px rgba(255,123,110,0.08)'
      : '';
  });
}

/* --- Animaciones de entrada --- */
function initScrollAnimations() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity   = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll(
    '.srv-card, .cat-item, .gal-item, .con-card, .mini-card, .h-row'
  ).forEach((el, i) => {
    el.style.opacity    = '0';
    el.style.transform  = 'translateY(16px)';
    el.style.transition = `opacity 0.45s ease ${i * 0.04}s, transform 0.45s ease ${i * 0.04}s`;
    observer.observe(el);
  });
}

/* --- Cerrar menú móvil --- */
function initMobileMenuClose() {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('navMenu').classList.remove('open');
    });
  });
}

/* --- Init --- */
document.addEventListener('DOMContentLoaded', () => {
  setLang('es');
  initNavScroll();
  initScrollAnimations();
  initMobileMenuClose();
});
