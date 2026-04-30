/* Xuca BarberShop — main.js */

/* --- Traducciones --- */
const i18n = {
  es: {
    "nav.about":"Nosotros","nav.services":"Servicios","nav.catalog":"Catálogo",
    "nav.gallery":"Galería","nav.hours":"Horarios","nav.location":"Ubicación","nav.contact":"Contacto",
    "hero.tag":"Santiago · RD · Est. 2024",
    "hero.line1":"EL CORTE","hero.line2":"DEFINE","hero.line3":"AL","hero.line4":"HOMBRE.",
    "hero.sub":"Precisión, estilo y actitud. En Xuca BarberShop cada corte es una obra de arte.",
    "hero.cta1":"Reservar turno","hero.cta2":"Ver servicios",
    "about.tag":"Quiénes somos",
    "about.p1":"En Xuca BarberShop entendemos que el estilo es una extensión de tu personalidad. Cada cliente entra con una idea y sale con una identidad.",
    "about.p2":"Barberos con experiencia real, tijeras afiladas y el mismo respeto por el detalle desde el primer minuto hasta el último acabado.",
    "about.cta":"Reservar ahora","about.days":"días","about.pro":"profesional",
    "srv.tag":"Lo que hacemos","srv.title":"SERVICIOS",
    "srv.sub":"Todo lo que necesitas, bajo el mismo techo.",
    "s1.name":"Corte clásico","s1.desc":"Corte a tijera o máquina con acabado limpio. Incluye lavado y secado.",
    "s2.name":"Degradado & Fade","s2.desc":"Low fade, mid fade o high fade. Transición perfecta de piel a cabello.",
    "s3.name":"Arreglo de barba","s3.desc":"Perfilado, relleno y acabado con navaja. Barba alineada al milímetro.",
    "s4.name":"Diseño & Líneas","s4.desc":"Diseños personalizados, líneas artísticas y patrones únicos en cabello o barba.",
    "s5.name":"Corte + Barba","s5.desc":"El combo completo. Corte, fade y arreglo de barba en una sola sesión.",
    "s6.name":"Tratamiento capilar","s6.desc":"Hidratación y nutrición para el cuero cabelludo. Cabello saludable y fuerte.",
    "cat.tag":"Estilos","cat.title":"CATÁLOGO",
    "cat.sub":"¿Tienes el estilo en mente? Tráenos la foto, nosotros lo hacemos realidad.",
    "cat.c1":"Cortes","cat.c2":"Barba","cat.c3":"Diseños",
    "c1.name":"Skin fade","c1.desc":"Degradado a piel con transición suave.",
    "c2.name":"Texturizado","c2.desc":"Movimiento y volumen para cabello largo.",
    "c3.name":"Undercut moderno","c3.desc":"Lados cortos con volumen arriba. Clásico urbano.",
    "c4.name":"Barba cuadrada","c4.desc":"Líneas definidas para un look poderoso.",
    "c5.name":"Barba con navaja","c5.desc":"Afeitado clásico con navaja de barbero.",
    "c6.name":"Barba estilo","c6.desc":"Forma y volumen para barba larga.",
    "c7.name":"Línea artística","c7.desc":"Líneas finas y precisas en fade o barba.",
    "c8.name":"Patrón geométrico","c8.desc":"Diseños con figuras y formas personalizadas.",
    "c9.name":"Logo o inicial","c9.desc":"Tu nombre, inicial o logo en tu corte.",
    "gal.tag":"El shop","gal.title":"XUCA BARBERSHOP",
    "g1":"El shop","g2":"En acción","g3":"Detalle","g4":"El equipo","g5":"Diseños",
    "gal.note":"✦ Próximamente fotos reales del shop.",
    "hrs.tag":"Cuándo vernos","hrs.desc":"No hay excusas para andar mal cortado. Abrimos de lunes a domingo para que siempre estés presentable.",
    "hrs.cta":"Reservar turno",
    "hrs.mon":"Lunes","hrs.tue":"Martes","hrs.wed":"Miércoles","hrs.thu":"Jueves",
    "hrs.fri":"Viernes","hrs.sat":"Sábado","hrs.sun":"Domingo",
    "loc.tag":"Dónde estamos","loc.desc":"Ubicados en Santiago, República Dominicana. Fácil acceso y estacionamiento disponible para nuestros clientes.",
    "loc.cta":"Abrir en Google Maps","loc.open":"Ver en Google Maps →",
    "con.tag":"Reserva tu turno","con.sub":"Escríbenos por WhatsApp o llámanos. Sin filas, sin esperas innecesarias.",
    "con.wa":"WhatsApp · Turnos","con.p1":"Teléfono 1","con.p2":"Teléfono 2","con.email":"Correo",
    "con.follow":"Síguenos",
    "footer.desc":"Barbería Profesional · Santiago, RD",
    "footer.copy":"© 2025 Xuca BarberShop · Santiago, República Dominicana",
    "a11y.title":"Accesibilidad","a11y.contrast":"Alto contraste",
    "a11y.bigtext":"Texto grande","a11y.links":"Subrayar enlaces","a11y.font":"Fuente legible"
  },
  en: {
    "nav.about":"About","nav.services":"Services","nav.catalog":"Catalog",
    "nav.gallery":"Gallery","nav.hours":"Hours","nav.location":"Location","nav.contact":"Contact",
    "hero.tag":"Santiago · DR · Est. 2024",
    "hero.line1":"THE CUT","hero.line2":"DEFINES","hero.line3":"THE","hero.line4":"MAN.",
    "hero.sub":"Precision, style and attitude. At Xuca BarberShop every cut is a work of art.",
    "hero.cta1":"Book a turn","hero.cta2":"View services",
    "about.tag":"Who we are",
    "about.p1":"At Xuca BarberShop we understand that style is an extension of your personality. Every client walks in with an idea and leaves with an identity.",
    "about.p2":"Barbers with real experience, sharp scissors and the same respect for detail from the first minute to the last finish.",
    "about.cta":"Book now","about.days":"days","about.pro":"professional",
    "srv.tag":"What we do","srv.title":"SERVICES",
    "srv.sub":"Everything you need, under the same roof.",
    "s1.name":"Classic cut","s1.desc":"Scissor or clipper cut with clean finish. Includes wash and blow dry.",
    "s2.name":"Fade & Taper","s2.desc":"Low fade, mid fade or high fade. Perfect skin-to-hair transition.",
    "s3.name":"Beard trim","s3.desc":"Edge-up, fill and razor finish. Beard aligned to the millimeter.",
    "s4.name":"Designs & Lines","s4.desc":"Custom designs, artistic lines and unique patterns on hair or beard.",
    "s5.name":"Cut + Beard","s5.desc":"The full combo. Cut, fade and beard trim in a single session.",
    "s6.name":"Hair treatment","s6.desc":"Hydration and nutrition for the scalp. Healthy and strong hair.",
    "cat.tag":"Styles","cat.title":"CATALOG",
    "cat.sub":"Got the style in mind? Bring the photo, we'll make it happen.",
    "cat.c1":"Cuts","cat.c2":"Beard","cat.c3":"Designs",
    "c1.name":"Skin fade","c1.desc":"Skin-level fade with smooth transition.",
    "c2.name":"Textured","c2.desc":"Movement and volume for longer hair.",
    "c3.name":"Modern undercut","c3.desc":"Short sides with volume on top. Urban classic.",
    "c4.name":"Square beard","c4.desc":"Defined lines for a powerful look.",
    "c5.name":"Razor beard","c5.desc":"Classic shave with a straight razor.",
    "c6.name":"Styled beard","c6.desc":"Shape and volume for longer beards.",
    "c7.name":"Artistic line","c7.desc":"Fine precise lines on fade or beard.",
    "c8.name":"Geometric pattern","c8.desc":"Designs with custom shapes and figures.",
    "c9.name":"Logo or initial","c9.desc":"Your name, initial or logo in your cut.",
    "gal.tag":"The shop","gal.title":"XUCA BARBERSHOP",
    "g1":"The shop","g2":"In action","g3":"Detail","g4":"The team","g5":"Designs",
    "gal.note":"✦ Real shop photos coming soon.",
    "hrs.tag":"When to visit","hrs.desc":"No excuses for a bad cut. Open Monday through Sunday so you're always looking sharp.",
    "hrs.cta":"Book a turn",
    "hrs.mon":"Monday","hrs.tue":"Tuesday","hrs.wed":"Wednesday","hrs.thu":"Thursday",
    "hrs.fri":"Friday","hrs.sat":"Saturday","hrs.sun":"Sunday",
    "loc.tag":"Where we are","loc.desc":"Located in Santiago, Dominican Republic. Easy access and parking available for our clients.",
    "loc.cta":"Open in Google Maps","loc.open":"View on Google Maps →",
    "con.tag":"Book your turn","con.sub":"Message us on WhatsApp or call us. No lines, no unnecessary waits.",
    "con.wa":"WhatsApp · Bookings","con.p1":"Phone 1","con.p2":"Phone 2","con.email":"Email",
    "con.follow":"Follow us",
    "footer.desc":"Professional Barbershop · Santiago, DR",
    "footer.copy":"© 2025 Xuca BarberShop · Santiago, Dominican Republic",
    "a11y.title":"Accessibility","a11y.contrast":"High contrast",
    "a11y.bigtext":"Large text","a11y.links":"Underline links","a11y.font":"Readable font"
  },
  fr: {
    "nav.about":"À propos","nav.services":"Services","nav.catalog":"Catalogue",
    "nav.gallery":"Galerie","nav.hours":"Horaires","nav.location":"Localisation","nav.contact":"Contact",
    "hero.tag":"Santiago · RD · Est. 2024",
    "hero.line1":"LA COUPE","hero.line2":"DÉFINIT","hero.line3":"L'","hero.line4":"HOMME.",
    "hero.sub":"Précision, style et attitude. Chez Xuca BarberShop chaque coupe est une œuvre d'art.",
    "hero.cta1":"Réserver un tour","hero.cta2":"Voir les services",
    "about.tag":"Qui nous sommes",
    "about.p1":"Chez Xuca BarberShop nous comprenons que le style est une extension de votre personnalité. Chaque client entre avec une idée et repart avec une identité.",
    "about.p2":"Barbiers avec une vraie expérience, ciseaux aiguisés et le même respect du détail de la première à la dernière minute.",
    "about.cta":"Réserver maintenant","about.days":"jours","about.pro":"professionnel",
    "srv.tag":"Ce que nous faisons","srv.title":"SERVICES",
    "srv.sub":"Tout ce dont vous avez besoin, sous le même toit.",
    "s1.name":"Coupe classique","s1.desc":"Coupe aux ciseaux ou à la tondeuse avec finition nette. Lavage et séchage inclus.",
    "s2.name":"Dégradé & Fade","s2.desc":"Low fade, mid fade ou high fade. Transition parfaite de la peau aux cheveux.",
    "s3.name":"Taille de barbe","s3.desc":"Contour, remplissage et finition au rasoir. Barbe alignée au millimètre.",
    "s4.name":"Dessins & Lignes","s4.desc":"Dessins personnalisés, lignes artistiques et motifs uniques sur cheveux ou barbe.",
    "s5.name":"Coupe + Barbe","s5.desc":"Le combo complet. Coupe, fade et taille de barbe en une seule séance.",
    "s6.name":"Traitement capillaire","s6.desc":"Hydratation et nutrition pour le cuir chevelu. Cheveux sains et forts.",
    "cat.tag":"Styles","cat.title":"CATALOGUE",
    "cat.sub":"Le style est dans ta tête ? Apporte la photo, on le réalise.",
    "cat.c1":"Coupes","cat.c2":"Barbe","cat.c3":"Dessins",
    "c1.name":"Skin fade","c1.desc":"Dégradé à peau avec transition douce.",
    "c2.name":"Texturisé","c2.desc":"Mouvement et volume pour cheveux longs.",
    "c3.name":"Undercut moderne","c3.desc":"Côtés courts avec volume en haut. Classique urbain.",
    "c4.name":"Barbe carrée","c4.desc":"Lignes définies pour un look puissant.",
    "c5.name":"Barbe au rasoir","c5.desc":"Rasage classique au rasoir droit.",
    "c6.name":"Barbe stylée","c6.desc":"Forme et volume pour barbe longue.",
    "c7.name":"Ligne artistique","c7.desc":"Lignes fines et précises sur fade ou barbe.",
    "c8.name":"Motif géométrique","c8.desc":"Dessins avec formes et figures personnalisées.",
    "c9.name":"Logo ou initiale","c9.desc":"Votre nom, initiale ou logo dans votre coupe.",
    "gal.tag":"Le shop","gal.title":"XUCA BARBERSHOP",
    "g1":"Le shop","g2":"En action","g3":"Détail","g4":"L'équipe","g5":"Dessins",
    "gal.note":"✦ Photos réelles du shop à venir.",
    "hrs.tag":"Quand nous rendre visite","hrs.desc":"Plus d'excuses pour une mauvaise coupe. Ouvert du lundi au dimanche pour que vous soyez toujours impeccable.",
    "hrs.cta":"Réserver un tour",
    "hrs.mon":"Lundi","hrs.tue":"Mardi","hrs.wed":"Mercredi","hrs.thu":"Jeudi",
    "hrs.fri":"Vendredi","hrs.sat":"Samedi","hrs.sun":"Dimanche",
    "loc.tag":"Où nous sommes","loc.desc":"Situés à Santiago, République Dominicaine. Accès facile et parking disponible pour nos clients.",
    "loc.cta":"Ouvrir dans Google Maps","loc.open":"Voir sur Google Maps →",
    "con.tag":"Réservez votre tour","con.sub":"Écrivez-nous sur WhatsApp ou appelez-nous. Sans files, sans attentes inutiles.",
    "con.wa":"WhatsApp · Tours","con.p1":"Téléphone 1","con.p2":"Téléphone 2","con.email":"E-mail",
    "con.follow":"Suivez-nous",
    "footer.desc":"Barbershop Professionnel · Santiago, RD",
    "footer.copy":"© 2025 Xuca BarberShop · Santiago, République Dominicaine",
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
  const isDark = document.documentElement.dataset.theme === 'dark';
  document.documentElement.dataset.theme = isDark ? 'light' : 'dark';
  document.getElementById('icon-sun').style.display  = isDark ? 'none'  : 'block';
  document.getElementById('icon-moon').style.display = isDark ? 'block' : 'none';
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
  document.querySelectorAll('.cat-card').forEach(card => {
    card.style.display = (cat === 'all' || card.dataset.cat === cat) ? 'block' : 'none';
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
    if (window.scrollY > 30) {
      nav.style.borderBottomColor = 'rgba(26,79,214,0.3)';
    } else {
      nav.style.borderBottomColor = '';
    }
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
    '.srv-card, .cat-card, .gal-item, .con-card, .num-box, .h-row'
  ).forEach((el, i) => {
    el.style.opacity    = '0';
    el.style.transform  = 'translateY(16px)';
    el.style.transition = `opacity 0.4s ease ${i * 0.04}s, transform 0.4s ease ${i * 0.04}s`;
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
