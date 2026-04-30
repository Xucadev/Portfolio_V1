/* D'Xuca Salon — main.js */

/* --- Traducciones --- */
const i18n = {
  es: {
    "nav.about":"Nosotros","nav.services":"Servicios","nav.catalog":"Catálogo",
    "nav.gallery":"Galería","nav.hours":"Horarios","nav.location":"Ubicación","nav.contact":"Contacto",
    "hero.eyebrow":"Santiago · República Dominicana",
    "hero.line1":"Donde tu","hero.line2":"belleza","hero.line3":"florece.",
    "hero.sub":"Experiencias de belleza personalizadas para la mujer moderna. Cada visita, un momento tuyo.",
    "hero.cta1":"Reservar cita","hero.cta2":"Ver servicios",
    "hero.t1":"Atención personalizada","hero.t2":"Productos premium","hero.t3":"7 días a la semana",
    "hero.img":"Foto del salón",
    "about.tag":"Nuestra historia","about.title":"Más que un salón,",
    "about.p1":"En D'Xuca Salon nos especializamos en realzar tu belleza natural. Contamos con estilistas apasionadas, productos de primera calidad y un ambiente donde te sentirás cómoda desde el momento en que entras.",
    "about.p2":"Cada cliente es única. Por eso cada servicio es diseñado especialmente para ti, para que salgas sintiéndote exactamente como siempre quisiste.",
    "about.cta":"Reserva tu cita",
    "about.since":"Salón de confianza","about.days":"abierto","about.care":"dedicación","about.city":"Santiago",
    "srv.tag":"Lo que hacemos","srv.title":"Nuestros servicios",
    "srv.sub":"Desde el corte más simple hasta la transformación más completa.",
    "srv.popular":"Más solicitado",
    "s1.name":"Corte & Estilo","s1.desc":"Cortes personalizados según tu tipo de rostro, cabello y estilo de vida. Secado y peinado incluidos.","s1.price":"desde RD$400",
    "s2.name":"Color & Mechas","s2.desc":"Coloración completa, mechas balayage, ombré y técnicas modernas con productos de alta gama.","s2.price":"desde RD$1,200",
    "s3.name":"Tratamientos","s3.desc":"Hidratación profunda, keratina, alisados y tratamientos reconstructores para un cabello radiante.","s3.price":"desde RD$800",
    "s4.name":"Manicura & Pedicura","s4.desc":"Uñas tradicionales, acrílicas, gel y diseños. Manos y pies perfectos siempre.","s4.price":"desde RD$350",
    "s5.name":"Maquillaje","s5.desc":"Social, de noche o de novia. Maquillaje profesional para cada ocasión especial.","s5.price":"desde RD$600",
    "s6.name":"Peinados de novia","s6.desc":"Recogidos, ondas, trenzas y estilos especiales para el día más importante de tu vida.","s6.price":"desde RD$1,500",
    "cat.tag":"Inspiración","cat.title":"Catálogo de estilos",
    "cat.sub":"Elige el look que quieres y nosotras lo hacemos realidad.",
    "cat.c1":"Cabello","cat.c2":"Uñas","cat.c3":"Maquillaje",
    "c1.name":"Balayage natural","c1.desc":"Degradado suave con tonos miel y caramelo.",
    "c2.name":"Bob liso","c2.desc":"Corte recto y moderno con acabado perfecto.",
    "c3.name":"Rizos definidos","c3.desc":"Hidratación y definición para rizos perfectos.",
    "c4.name":"French clásico","c4.desc":"El clásico elegante que nunca pasa de moda.",
    "c5.name":"Diseño floral","c5.desc":"Arte en tus manos con diseños únicos a mano.",
    "c6.name":"Gel brillante","c6.desc":"Larga duración con acabado espejo reluciente.",
    "c7.name":"Smoky eye","c7.desc":"Mirada intensa y sofisticada para la noche.",
    "c8.name":"Maquillaje natural","c8.desc":"Realza tu belleza natural con toques sutiles.",
    "c9.name":"Maquillaje de novia","c9.desc":"Perfecto para el día más especial de tu vida.",
    "gal.tag":"Nuestro espacio","gal.title":"El ambiente de D'Xuca",
    "g1":"El salón","g2":"Área de corte","g3":"Área de uñas","g4":"Espacio de relajación","g5":"Maquillaje",
    "gal.note":"✦ Próximamente fotos reales del salón.",
    "hrs.tag":"Cuándo visitarnos","hrs.title":"Siempre aquí para ti.",
    "hrs.desc":"Abrimos todos los días para que puedas reservar tu cita en el horario que mejor se adapte a ti.",
    "hrs.cta":"Reservar por WhatsApp",
    "hrs.mon":"Lunes","hrs.tue":"Martes","hrs.wed":"Miércoles","hrs.thu":"Jueves",
    "hrs.fri":"Viernes","hrs.sat":"Sábado","hrs.sun":"Domingo","hrs.open":"Abierto hoy",
    "loc.tag":"Dónde estamos","loc.title":"Visítanos en Santiago.",
    "loc.desc":"Estamos en el corazón de Santiago, República Dominicana. Fácil acceso y estacionamiento disponible para nuestras clientas.",
    "loc.cta":"Abrir en Google Maps","loc.open":"Ver en Google Maps →",
    "con.tag":"Reserva tu cita","con.title":"¿Lista para lucir increíble?",
    "con.sub":"Escríbenos por WhatsApp o llámanos. Confirmamos tu cita en minutos.",
    "con.wa":"WhatsApp · Reservas","con.p1":"Teléfono 1","con.p2":"Teléfono 2","con.email":"Correo",
    "con.follow":"Síguenos en redes",
    "footer.desc":"Salón de Belleza · Santiago, RD",
    "footer.copy":"© 2025 D'Xuca Salon · Santiago, República Dominicana",
    "a11y.title":"Accesibilidad","a11y.contrast":"Alto contraste",
    "a11y.bigtext":"Texto grande","a11y.links":"Subrayar enlaces","a11y.font":"Fuente legible"
  },
  en: {
    "nav.about":"About","nav.services":"Services","nav.catalog":"Catalog",
    "nav.gallery":"Gallery","nav.hours":"Hours","nav.location":"Location","nav.contact":"Contact",
    "hero.eyebrow":"Santiago · Dominican Republic",
    "hero.line1":"Where your","hero.line2":"beauty","hero.line3":"blooms.",
    "hero.sub":"Personalized beauty experiences for the modern woman. Every visit, a moment just for you.",
    "hero.cta1":"Book appointment","hero.cta2":"View services",
    "hero.t1":"Personalized care","hero.t2":"Premium products","hero.t3":"7 days a week",
    "hero.img":"Salon photo",
    "about.tag":"Our story","about.title":"More than a salon,",
    "about.p1":"At D'Xuca Salon we specialize in enhancing your natural beauty. We have passionate stylists, top-quality products and an atmosphere where you'll feel comfortable from the moment you walk in.",
    "about.p2":"Every client is unique. That's why every service is designed especially for you, so you leave feeling exactly how you always wanted.",
    "about.cta":"Book your appointment",
    "about.since":"Your trusted salon","about.days":"open","about.care":"dedication","about.city":"Santiago",
    "srv.tag":"What we do","srv.title":"Our services",
    "srv.sub":"From the simplest cut to the most complete transformation.",
    "srv.popular":"Most requested",
    "s1.name":"Cut & Style","s1.desc":"Personalized cuts according to your face type, hair and lifestyle. Blow dry and styling included.","s1.price":"from RD$400",
    "s2.name":"Color & Highlights","s2.desc":"Full coloring, balayage highlights, ombré and modern techniques with high-end products.","s2.price":"from RD$1,200",
    "s3.name":"Treatments","s3.desc":"Deep hydration, keratin, straightening and reconstructive treatments for radiant hair.","s3.price":"from RD$800",
    "s4.name":"Manicure & Pedicure","s4.desc":"Traditional, acrylic, gel nails and nail art. Perfect hands and feet always.","s4.price":"from RD$350",
    "s5.name":"Makeup","s5.desc":"Social, evening or bridal. Professional makeup for every special occasion.","s5.price":"from RD$600",
    "s6.name":"Bridal styling","s6.desc":"Updos, waves, braids and special styles for the most important day of your life.","s6.price":"from RD$1,500",
    "cat.tag":"Inspiration","cat.title":"Style catalog",
    "cat.sub":"Choose the look you want and we'll make it happen.",
    "cat.c1":"Hair","cat.c2":"Nails","cat.c3":"Makeup",
    "c1.name":"Natural balayage","c1.desc":"Soft gradient with honey and caramel tones.",
    "c2.name":"Sleek bob","c2.desc":"Straight modern cut with perfect finish.",
    "c3.name":"Defined curls","c3.desc":"Hydration and definition for perfect curls.",
    "c4.name":"Classic French","c4.desc":"The elegant classic that never goes out of style.",
    "c5.name":"Floral design","c5.desc":"Art on your hands with unique handmade designs.",
    "c6.name":"Shiny gel","c6.desc":"Long-lasting with a mirror-like shiny finish.",
    "c7.name":"Smoky eye","c7.desc":"Intense and sophisticated look for the night.",
    "c8.name":"Natural makeup","c8.desc":"Enhance your natural beauty with subtle touches.",
    "c9.name":"Bridal makeup","c9.desc":"Perfect for the most special day of your life.",
    "gal.tag":"Our space","gal.title":"The D'Xuca atmosphere",
    "g1":"The salon","g2":"Cutting area","g3":"Nail area","g4":"Relaxation space","g5":"Makeup",
    "gal.note":"✦ Real salon photos coming soon.",
    "hrs.tag":"When to visit us","hrs.title":"Always here for you.",
    "hrs.desc":"We're open every day so you can book your appointment at the time that works best for you.",
    "hrs.cta":"Book via WhatsApp",
    "hrs.mon":"Monday","hrs.tue":"Tuesday","hrs.wed":"Wednesday","hrs.thu":"Thursday",
    "hrs.fri":"Friday","hrs.sat":"Saturday","hrs.sun":"Sunday","hrs.open":"Open today",
    "loc.tag":"Where we are","loc.title":"Visit us in Santiago.",
    "loc.desc":"We are in the heart of Santiago, Dominican Republic. Easy access and parking available for our clients.",
    "loc.cta":"Open in Google Maps","loc.open":"View on Google Maps →",
    "con.tag":"Book your appointment","con.title":"Ready to look amazing?",
    "con.sub":"Message us on WhatsApp or call us. We confirm your appointment in minutes.",
    "con.wa":"WhatsApp · Bookings","con.p1":"Phone 1","con.p2":"Phone 2","con.email":"Email",
    "con.follow":"Follow us",
    "footer.desc":"Beauty Salon · Santiago, DR",
    "footer.copy":"© 2025 D'Xuca Salon · Santiago, Dominican Republic",
    "a11y.title":"Accessibility","a11y.contrast":"High contrast",
    "a11y.bigtext":"Large text","a11y.links":"Underline links","a11y.font":"Readable font"
  },
  fr: {
    "nav.about":"À propos","nav.services":"Services","nav.catalog":"Catalogue",
    "nav.gallery":"Galerie","nav.hours":"Horaires","nav.location":"Localisation","nav.contact":"Contact",
    "hero.eyebrow":"Santiago · République Dominicaine",
    "hero.line1":"Là où votre","hero.line2":"beauté","hero.line3":"s'épanouit.",
    "hero.sub":"Expériences de beauté personnalisées pour la femme moderne. Chaque visite, un moment rien que pour vous.",
    "hero.cta1":"Réserver un rendez-vous","hero.cta2":"Voir les services",
    "hero.t1":"Soin personnalisé","hero.t2":"Produits premium","hero.t3":"7 jours sur 7",
    "hero.img":"Photo du salon",
    "about.tag":"Notre histoire","about.title":"Plus qu'un salon,",
    "about.p1":"Chez D'Xuca Salon, nous nous spécialisons dans la mise en valeur de votre beauté naturelle. Nous avons des stylistes passionnées, des produits de première qualité et une atmosphère où vous vous sentirez à l'aise dès que vous entrez.",
    "about.p2":"Chaque cliente est unique. C'est pourquoi chaque service est conçu spécialement pour vous, afin que vous repartiez en vous sentant exactement comme vous l'avez toujours voulu.",
    "about.cta":"Réserver votre rendez-vous",
    "about.since":"Votre salon de confiance","about.days":"ouvert","about.care":"dévouement","about.city":"Santiago",
    "srv.tag":"Ce que nous faisons","srv.title":"Nos services",
    "srv.sub":"De la coupe la plus simple à la transformation la plus complète.",
    "srv.popular":"Le plus demandé",
    "s1.name":"Coupe & Style","s1.desc":"Coupes personnalisées selon votre type de visage, cheveux et style de vie. Séchage et coiffage inclus.","s1.price":"à partir de RD$400",
    "s2.name":"Couleur & Mèches","s2.desc":"Coloration complète, mèches balayage, ombré et techniques modernes avec des produits haut de gamme.","s2.price":"à partir de RD$1,200",
    "s3.name":"Traitements","s3.desc":"Hydratation profonde, kératine, lissages et traitements reconstructeurs pour des cheveux radieux.","s3.price":"à partir de RD$800",
    "s4.name":"Manucure & Pédicure","s4.desc":"Ongles traditionnels, acryliques, gel et nail art. Des mains et pieds parfaits toujours.","s4.price":"à partir de RD$350",
    "s5.name":"Maquillage","s5.desc":"Social, de soirée ou de mariée. Maquillage professionnel pour chaque occasion spéciale.","s5.price":"à partir de RD$600",
    "s6.name":"Coiffure de mariée","s6.desc":"Chignons, ondulations, tresses et styles spéciaux pour le jour le plus important de votre vie.","s6.price":"à partir de RD$1,500",
    "cat.tag":"Inspiration","cat.title":"Catalogue de styles",
    "cat.sub":"Choisissez le look que vous souhaitez et nous le réalisons.",
    "cat.c1":"Cheveux","cat.c2":"Ongles","cat.c3":"Maquillage",
    "c1.name":"Balayage naturel","c1.desc":"Dégradé doux avec des tons miel et caramel.",
    "c2.name":"Bob lisse","c2.desc":"Coupe droite et moderne avec un finish parfait.",
    "c3.name":"Boucles définies","c3.desc":"Hydratation et définition pour des boucles parfaites.",
    "c4.name":"French classique","c4.desc":"Le classique élégant qui ne se démode jamais.",
    "c5.name":"Dessin floral","c5.desc":"Art sur vos mains avec des designs uniques faits main.",
    "c6.name":"Gel brillant","c6.desc":"Longue durée avec une finition miroir éclatante.",
    "c7.name":"Smoky eye","c7.desc":"Regard intense et sophistiqué pour la nuit.",
    "c8.name":"Maquillage naturel","c8.desc":"Sublimez votre beauté naturelle avec des touches subtiles.",
    "c9.name":"Maquillage de mariée","c9.desc":"Parfait pour le jour le plus spécial de votre vie.",
    "gal.tag":"Notre espace","gal.title":"L'ambiance de D'Xuca",
    "g1":"Le salon","g2":"Zone de coupe","g3":"Zone ongles","g4":"Espace détente","g5":"Maquillage",
    "gal.note":"✦ Photos réelles du salon à venir prochainement.",
    "hrs.tag":"Quand nous rendre visite","hrs.title":"Toujours là pour vous.",
    "hrs.desc":"Nous sommes ouverts tous les jours pour que vous puissiez réserver votre rendez-vous à l'heure qui vous convient le mieux.",
    "hrs.cta":"Réserver par WhatsApp",
    "hrs.mon":"Lundi","hrs.tue":"Mardi","hrs.wed":"Mercredi","hrs.thu":"Jeudi",
    "hrs.fri":"Vendredi","hrs.sat":"Samedi","hrs.sun":"Dimanche","hrs.open":"Ouvert aujourd'hui",
    "loc.tag":"Où nous sommes","loc.title":"Rendez-nous visite à Santiago.",
    "loc.desc":"Nous sommes au cœur de Santiago, République Dominicaine. Accès facile et parking disponible pour nos clientes.",
    "loc.cta":"Ouvrir dans Google Maps","loc.open":"Voir sur Google Maps →",
    "con.tag":"Réservez votre rendez-vous","con.title":"Prête à être magnifique ?",
    "con.sub":"Écrivez-nous sur WhatsApp ou appelez-nous. Nous confirmons votre rendez-vous en quelques minutes.",
    "con.wa":"WhatsApp · Réservations","con.p1":"Téléphone 1","con.p2":"Téléphone 2","con.email":"E-mail",
    "con.follow":"Suivez-nous sur les réseaux",
    "footer.desc":"Salon de Beauté · Santiago, RD",
    "footer.copy":"© 2025 D'Xuca Salon · Santiago, République Dominicaine",
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
  document.getElementById('icon-moon').style.display = isDark ? 'block' : 'none';
  document.getElementById('icon-sun').style.display  = isDark ? 'none'  : 'block';
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
    nav.style.boxShadow = window.scrollY > 30
      ? '0 2px 20px rgba(201,123,138,0.1)'
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
    '.srv-card, .cat-card, .gal-item, .con-card, .mini-stat, .h-row'
  ).forEach((el, i) => {
    el.style.opacity    = '0';
    el.style.transform  = 'translateY(16px)';
    el.style.transition = `opacity 0.45s ease ${i * 0.04}s, transform 0.45s ease ${i * 0.04}s`;
    observer.observe(el);
  });
}

/* --- Cerrar menú móvil al navegar --- */
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
