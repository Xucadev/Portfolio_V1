/* D'Xuca Smartphone — main.js */

/* --- Traducciones --- */
const i18n = {
  es: {
    "nav.about":"Nosotros","nav.catalog":"Catálogo","nav.services":"Servicios",
    "nav.gallery":"Galería","nav.hours":"Horarios","nav.location":"Ubicación","nav.contact":"Contacto",
    "hero.chip":"Santiago · RD · Tienda oficial",
    "hero.l1":"TECNOLOGÍA","hero.l2":"EN TUS","hero.l3":"MANOS.",
    "hero.sub":"Los mejores smartphones, accesorios y servicio técnico en Santiago. Encuentra el equipo que necesitas al precio que buscas.",
    "hero.cta1":"Ver catálogo","hero.cta2":"Contactar",
    "hero.brands":"Manejamos:","hero.dtag":"Tu próximo phone",
    "about.tag":"Quiénes somos",
    "about.p1":"En D'Xuca Smartphone encontrarás los modelos más recientes de las mejores marcas, accesorios originales y un equipo técnico listo para resolver cualquier problema con tu dispositivo.",
    "about.p2":"Atención personalizada, precios competitivos y garantía en todos nuestros productos. Visítanos o escríbenos, estamos aquí para ayudarte.",
    "about.cta":"Ver productos",
    "sb1.n":"Gama alta","sb1.l":"y media disponible",
    "sb2.n":"Técnicos","sb2.l":"certificados",
    "sb3.n":"Garantía","sb3.l":"en todos los productos",
    "sb4.n":"7 días","sb4.l":"a la semana",
    "cat.tag":"Productos","cat.title":"NUESTRO CATÁLOGO",
    "cat.sub":"Los modelos más populares siempre disponibles. Consulta por stock y precio actualizado.",
    "cat.c1":"Celulares","cat.c2":"Accesorios","cat.c3":"Servicio",
    "cat.new":"Nuevo",
    "p1.desc":"Titanio, chip A17 Pro, cámara de 48MP. El más avanzado de Apple.","p1.price":"Consultar precio",
    "p2.desc":"Galaxy AI, pantalla Dynamic AMOLED y cámara de 50MP.","p2.price":"Consultar precio",
    "p3.desc":"Snapdragon 8 Gen 3, cámara Leica y carga rápida 90W.","p3.price":"Consultar precio",
    "p4.desc":"Pantalla pOLED 144Hz, cámara de 50MP y batería de 5000mAh.","p4.price":"Consultar precio",
    "p5.desc":"El iPhone más accesible con chip A15 Bionic y 5G.","p5.price":"Consultar precio",
    "p6.desc":"Gama media premium con pantalla Super AMOLED y 5G.","p6.price":"Consultar precio",
    "a1.desc":"Cancelación activa de ruido, audio espacial y chip H2.","a1.price":"Consultar precio",
    "a2.desc":"Carga rápida 65W compatible con todos los dispositivos.","a2.price":"Consultar precio",
    "a3.desc":"Fundas, protectores de pantalla y cargadores para todas las marcas.","a3.price":"Desde RD$200",
    "a4.desc":"Monitoreo de salud, GPS y batería de larga duración.","a4.price":"Consultar precio",
    "srv.tech":"Técnico",
    "s1.name":"Reparación de pantalla","s1.desc":"Cambio de pantallas originales para iPhone, Samsung y más marcas.","s1.price":"Consultar precio",
    "s2.name":"Cambio de batería","s2.desc":"Baterías originales con garantía de 6 meses. Servicio el mismo día.","s2.price":"Consultar precio",
    "s3.name":"Daño por agua","s3.desc":"Diagnóstico y recuperación de equipos con daño por líquidos.","s3.price":"Consultar precio",
    "s4.name":"Reparación de software","s4.desc":"Restauración, actualización, desbloqueo y recuperación de datos.","s4.price":"Consultar precio",
    "cat.note":"✦ Precios sujetos a cambio. Consultar disponibilidad por WhatsApp.",
    "srv.tag":"Lo que hacemos","srv.title":"SERVICIOS DISPONIBLES",
    "sr1.t":"Venta de celulares","sr1.d":"Smartphones nuevos y en excelente estado. Gama alta y media de las mejores marcas.",
    "sr2.t":"Servicio técnico","sr2.d":"Reparación de pantallas, baterías, daños por agua y problemas de software.",
    "sr3.t":"Accesorios originales","sr3.d":"Audífonos, cargadores, cases, protectores y más. Todo original con garantía.",
    "sr4.t":"Desbloqueo","sr4.d":"Desbloqueo de operadora para que uses tu equipo con cualquier SIM del mundo.",
    "gal.tag":"La tienda","gal.title":"D'XUCA SMARTPHONE",
    "g1":"La tienda","g2":"Celulares","g3":"Accesorios","g4":"Servicio técnico","g5":"Wearables",
    "gal.note":"✦ Próximamente fotos reales de la tienda.",
    "hrs.tag":"Cuándo visitarnos","hrs.desc":"Abrimos todos los días de la semana. Visítanos o escríbenos por WhatsApp en cualquier horario dentro de nuestra atención.",
    "hrs.cta":"Escribirnos ahora","hrs.open":"Abierto hoy",
    "hrs.mon":"Lunes","hrs.tue":"Martes","hrs.wed":"Miércoles","hrs.thu":"Jueves",
    "hrs.fri":"Viernes","hrs.sat":"Sábado","hrs.sun":"Domingo",
    "loc.tag":"Dónde estamos","loc.desc":"Estamos en Santiago, República Dominicana. Fácil acceso y estacionamiento disponible. También atendemos por WhatsApp si no puedes venir.",
    "loc.cta":"Abrir en Google Maps","loc.open":"Ver en Google Maps →",
    "con.tag":"Háblanos","con.sub":"Escríbenos por WhatsApp para cotizar, consultar disponibilidad o agendar tu servicio técnico. Respondemos rápido.",
    "con.wa":"WhatsApp · Cotizar","con.p1":"Teléfono 1","con.p2":"Teléfono 2","con.email":"Correo",
    "con.follow":"Síguenos",
    "footer.desc":"Tienda de Celulares · Santiago, RD",
    "footer.copy":"© 2025 D'Xuca Smartphone · Santiago, República Dominicana",
    "a11y.title":"Accesibilidad","a11y.contrast":"Alto contraste",
    "a11y.bigtext":"Texto grande","a11y.links":"Subrayar enlaces","a11y.font":"Fuente legible"
  },
  en: {
    "nav.about":"About","nav.catalog":"Catalog","nav.services":"Services",
    "nav.gallery":"Gallery","nav.hours":"Hours","nav.location":"Location","nav.contact":"Contact",
    "hero.chip":"Santiago · DR · Official store",
    "hero.l1":"TECHNOLOGY","hero.l2":"IN YOUR","hero.l3":"HANDS.",
    "hero.sub":"The best smartphones, accessories and technical service in Santiago. Find the device you need at the price you're looking for.",
    "hero.cta1":"View catalog","hero.cta2":"Contact us",
    "hero.brands":"We carry:","hero.dtag":"Your next phone",
    "about.tag":"Who we are",
    "about.p1":"At D'Xuca Smartphone you'll find the latest models from the best brands, original accessories and a technical team ready to solve any problem with your device.",
    "about.p2":"Personalized service, competitive prices and warranty on all our products. Visit us or message us, we're here to help.",
    "about.cta":"View products",
    "sb1.n":"High end","sb1.l":"and mid range available",
    "sb2.n":"Technicians","sb2.l":"certified",
    "sb3.n":"Warranty","sb3.l":"on all products",
    "sb4.n":"7 days","sb4.l":"a week",
    "cat.tag":"Products","cat.title":"OUR CATALOG",
    "cat.sub":"The most popular models always available. Ask about stock and updated pricing.",
    "cat.c1":"Phones","cat.c2":"Accessories","cat.c3":"Service",
    "cat.new":"New",
    "p1.desc":"Titanium, A17 Pro chip, 48MP camera. Apple's most advanced phone.","p1.price":"Ask for price",
    "p2.desc":"Galaxy AI, Dynamic AMOLED display and 50MP camera.","p2.price":"Ask for price",
    "p3.desc":"Snapdragon 8 Gen 3, Leica camera and 90W fast charging.","p3.price":"Ask for price",
    "p4.desc":"144Hz pOLED display, 50MP camera and 5000mAh battery.","p4.price":"Ask for price",
    "p5.desc":"The most affordable iPhone with A15 Bionic chip and 5G.","p5.price":"Ask for price",
    "p6.desc":"Premium mid-range with Super AMOLED display and 5G.","p6.price":"Ask for price",
    "a1.desc":"Active noise cancellation, spatial audio and H2 chip.","a1.price":"Ask for price",
    "a2.desc":"65W fast charging compatible with all devices.","a2.price":"Ask for price",
    "a3.desc":"Cases, screen protectors and chargers for all brands.","a3.price":"From RD$200",
    "a4.desc":"Health monitoring, GPS and long-lasting battery.","a4.price":"Ask for price",
    "srv.tech":"Technical",
    "s1.name":"Screen repair","s1.desc":"Original screen replacement for iPhone, Samsung and more brands.","s1.price":"Ask for price",
    "s2.name":"Battery replacement","s2.desc":"Original batteries with 6-month warranty. Same-day service.","s2.price":"Ask for price",
    "s3.name":"Water damage","s3.desc":"Diagnosis and recovery of devices with liquid damage.","s3.price":"Ask for price",
    "s4.name":"Software repair","s4.desc":"Restore, update, unlock and data recovery.","s4.price":"Ask for price",
    "cat.note":"✦ Prices subject to change. Check availability via WhatsApp.",
    "srv.tag":"What we do","srv.title":"AVAILABLE SERVICES",
    "sr1.t":"Phone sales","sr1.d":"New smartphones in excellent condition. High and mid range from the best brands.",
    "sr2.t":"Technical service","sr2.d":"Screen repair, batteries, water damage and software issues.",
    "sr3.t":"Original accessories","sr3.d":"Headphones, chargers, cases, protectors and more. All original with warranty.",
    "sr4.t":"Unlocking","sr4.d":"Carrier unlock so you can use your device with any SIM worldwide.",
    "gal.tag":"The store","gal.title":"D'XUCA SMARTPHONE",
    "g1":"The store","g2":"Phones","g3":"Accessories","g4":"Technical service","g5":"Wearables",
    "gal.note":"✦ Real store photos coming soon.",
    "hrs.tag":"When to visit us","hrs.desc":"Open every day of the week. Visit us or message us on WhatsApp during our business hours.",
    "hrs.cta":"Message us now","hrs.open":"Open today",
    "hrs.mon":"Monday","hrs.tue":"Tuesday","hrs.wed":"Wednesday","hrs.thu":"Thursday",
    "hrs.fri":"Friday","hrs.sat":"Saturday","hrs.sun":"Sunday",
    "loc.tag":"Where we are","loc.desc":"We are in Santiago, Dominican Republic. Easy access and parking available. We also serve via WhatsApp if you can't come in.",
    "loc.cta":"Open in Google Maps","loc.open":"View on Google Maps →",
    "con.tag":"Talk to us","con.sub":"Message us on WhatsApp to get a quote, check availability or schedule your technical service. We respond fast.",
    "con.wa":"WhatsApp · Quote","con.p1":"Phone 1","con.p2":"Phone 2","con.email":"Email",
    "con.follow":"Follow us",
    "footer.desc":"Smartphone Store · Santiago, DR",
    "footer.copy":"© 2025 D'Xuca Smartphone · Santiago, Dominican Republic",
    "a11y.title":"Accessibility","a11y.contrast":"High contrast",
    "a11y.bigtext":"Large text","a11y.links":"Underline links","a11y.font":"Readable font"
  },
  fr: {
    "nav.about":"À propos","nav.catalog":"Catalogue","nav.services":"Services",
    "nav.gallery":"Galerie","nav.hours":"Horaires","nav.location":"Localisation","nav.contact":"Contact",
    "hero.chip":"Santiago · RD · Boutique officielle",
    "hero.l1":"TECHNOLOGIE","hero.l2":"ENTRE VOS","hero.l3":"MAINS.",
    "hero.sub":"Les meilleurs smartphones, accessoires et service technique à Santiago. Trouvez l'appareil qu'il vous faut au prix que vous cherchez.",
    "hero.cta1":"Voir le catalogue","hero.cta2":"Nous contacter",
    "hero.brands":"Nous vendons :","hero.dtag":"Votre prochain téléphone",
    "about.tag":"Qui nous sommes",
    "about.p1":"Chez D'Xuca Smartphone, vous trouverez les modèles les plus récents des meilleures marques, des accessoires originaux et une équipe technique prête à résoudre tout problème avec votre appareil.",
    "about.p2":"Service personnalisé, prix compétitifs et garantie sur tous nos produits. Visitez-nous ou écrivez-nous, nous sommes là pour vous aider.",
    "about.cta":"Voir les produits",
    "sb1.n":"Haut de gamme","sb1.l":"et milieu disponibles",
    "sb2.n":"Techniciens","sb2.l":"certifiés",
    "sb3.n":"Garantie","sb3.l":"sur tous les produits",
    "sb4.n":"7 jours","sb4.l":"par semaine",
    "cat.tag":"Produits","cat.title":"NOTRE CATALOGUE",
    "cat.sub":"Les modèles les plus populaires toujours disponibles. Renseignez-vous sur le stock et les prix actualisés.",
    "cat.c1":"Téléphones","cat.c2":"Accessoires","cat.c3":"Service",
    "cat.new":"Nouveau",
    "p1.desc":"Titane, puce A17 Pro, caméra 48MP. Le plus avancé d'Apple.","p1.price":"Demander le prix",
    "p2.desc":"Galaxy AI, écran Dynamic AMOLED et caméra 50MP.","p2.price":"Demander le prix",
    "p3.desc":"Snapdragon 8 Gen 3, caméra Leica et charge rapide 90W.","p3.price":"Demander le prix",
    "p4.desc":"Écran pOLED 144Hz, caméra 50MP et batterie 5000mAh.","p4.price":"Demander le prix",
    "p5.desc":"L'iPhone le plus accessible avec puce A15 Bionic et 5G.","p5.price":"Demander le prix",
    "p6.desc":"Milieu de gamme premium avec écran Super AMOLED et 5G.","p6.price":"Demander le prix",
    "a1.desc":"Réduction active du bruit, audio spatial et puce H2.","a1.price":"Demander le prix",
    "a2.desc":"Charge rapide 65W compatible avec tous les appareils.","a2.price":"Demander le prix",
    "a3.desc":"Coques, protecteurs d'écran et chargeurs pour toutes les marques.","a3.price":"À partir de RD$200",
    "a4.desc":"Surveillance de la santé, GPS et longue durée de batterie.","a4.price":"Demander le prix",
    "srv.tech":"Technique",
    "s1.name":"Réparation d'écran","s1.desc":"Remplacement d'écrans originaux pour iPhone, Samsung et autres marques.","s1.price":"Demander le prix",
    "s2.name":"Remplacement de batterie","s2.desc":"Batteries originales avec garantie de 6 mois. Service le même jour.","s2.price":"Demander le prix",
    "s3.name":"Dommages par l'eau","s3.desc":"Diagnostic et récupération d'appareils endommagés par des liquides.","s3.price":"Demander le prix",
    "s4.name":"Réparation logicielle","s4.desc":"Restauration, mise à jour, déverrouillage et récupération de données.","s4.price":"Demander le prix",
    "cat.note":"✦ Prix susceptibles de changer. Vérifier la disponibilité par WhatsApp.",
    "srv.tag":"Ce que nous faisons","srv.title":"SERVICES DISPONIBLES",
    "sr1.t":"Vente de téléphones","sr1.d":"Smartphones neufs en excellent état. Haut et milieu de gamme des meilleures marques.",
    "sr2.t":"Service technique","sr2.d":"Réparation d'écrans, batteries, dommages par l'eau et problèmes logiciels.",
    "sr3.t":"Accessoires originaux","sr3.d":"Écouteurs, chargeurs, coques, protecteurs et plus. Tout original avec garantie.",
    "sr4.t":"Déverrouillage","sr4.d":"Déverrouillage d'opérateur pour utiliser votre appareil avec n'importe quelle SIM dans le monde.",
    "gal.tag":"La boutique","gal.title":"D'XUCA SMARTPHONE",
    "g1":"La boutique","g2":"Téléphones","g3":"Accessoires","g4":"Service technique","g5":"Wearables",
    "gal.note":"✦ Photos réelles de la boutique à venir prochainement.",
    "hrs.tag":"Quand nous rendre visite","hrs.desc":"Ouverts tous les jours de la semaine. Visitez-nous ou écrivez-nous sur WhatsApp pendant nos heures d'ouverture.",
    "hrs.cta":"Nous écrire maintenant","hrs.open":"Ouvert aujourd'hui",
    "hrs.mon":"Lundi","hrs.tue":"Mardi","hrs.wed":"Mercredi","hrs.thu":"Jeudi",
    "hrs.fri":"Vendredi","hrs.sat":"Samedi","hrs.sun":"Dimanche",
    "loc.tag":"Où nous sommes","loc.desc":"Nous sommes à Santiago, République Dominicaine. Accès facile et parking disponible. Nous servons aussi via WhatsApp si vous ne pouvez pas venir.",
    "loc.cta":"Ouvrir dans Google Maps","loc.open":"Voir sur Google Maps →",
    "con.tag":"Parlez-nous","con.sub":"Écrivez-nous sur WhatsApp pour obtenir un devis, vérifier la disponibilité ou planifier votre service technique. Nous répondons rapidement.",
    "con.wa":"WhatsApp · Devis","con.p1":"Téléphone 1","con.p2":"Téléphone 2","con.email":"E-mail",
    "con.follow":"Suivez-nous",
    "footer.desc":"Boutique de Smartphones · Santiago, RD",
    "footer.copy":"© 2025 D'Xuca Smartphone · Santiago, République Dominicaine",
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
    nav.style.boxShadow = window.scrollY > 30
      ? '0 2px 20px rgba(0,200,255,0.06)'
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
    '.cat-card, .srv-item, .gal-item, .con-card, .stat-box, .h-row'
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
