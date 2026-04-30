/* Deli Xuca — main.js */

/* --- Traducciones --- */
const i18n = {
  es: {
    "nav.about": "Nosotros",
    "nav.menu": "Menú",
    "nav.gallery": "Galería",
    "nav.hours": "Horarios",
    "nav.location": "Ubicación",
    "nav.contact": "Contacto",
    "hero.tag": "Santiago, República Dominicana",
    "hero.subtitle": "Donde cada plato cuenta una historia.\nSabores que enamoran, momentos que perduran.",
    "hero.cta1": "Ver el menú",
    "hero.cta2": "Reservar mesa",
    "hero.hours": "Abierto hoy · 8:00 AM – 7:00 PM",
    "about.tag": "Nuestra historia",
    "about.title": "Hecho con amor,\nel sabor que enamora",
    "about.p1": "En Deli Xuca creemos que comer bien es uno de los placeres más honestos de la vida. Cada receta nace de la tradición dominicana, perfeccionada con técnica moderna y los mejores ingredientes frescos de Santiago.",
    "about.p2": "Somos un espacio donde la familia se reúne, los amigos celebran y los sabores hablan por sí solos. Bienvenido a tu nuevo restaurante favorito.",
    "about.open": "Abrimos",
    "about.close": "Cerramos",
    "about.days": "Toda la semana",
    "about.badge": "✦ Sabor dominicano auténtico",
    "menu.tag": "Lo que ofrecemos",
    "menu.title": "Nuestro menú",
    "menu.sub": "Platos preparados con ingredientes frescos todos los días.",
    "menu.cat1": "Desayunos",
    "menu.cat2": "Almuerzos",
    "menu.cat3": "Bebidas",
    "menu.cat4": "Postres",
    "dish.1.name": "Mangú con los tres golpes",
    "dish.1.desc": "Plátano verde majado con aceite de oliva, acompañado de huevos fritos, salami y queso frito.",
    "dish.2.name": "Huevos al gusto",
    "dish.2.desc": "Revueltos, fritos o pochados. Con pan tostado y jugo natural incluido.",
    "dish.3.name": "Desayuno completo",
    "dish.3.desc": "Mangú, huevos, salami, queso, jugo natural y café dominicano.",
    "dish.4.name": "Pollo guisado",
    "dish.4.desc": "Pollo criollo con arroz blanco, habichuelas rojas y ensalada fresca.",
    "dish.5.name": "Res al horno",
    "dish.5.desc": "Carne de res marinada al horno con papas y vegetales de temporada.",
    "dish.6.name": "Pescado al coco",
    "dish.6.desc": "Filete de pescado fresco en salsa de coco, con arroz y tostones.",
    "dish.7.name": "Jugo natural",
    "dish.7.desc": "Chinola, naranja, tamarindo o lechosa. Frescos y sin azúcar añadida.",
    "dish.8.name": "Café dominicano",
    "dish.8.desc": "Café molido artesanal, servido negro o con leche. Intenso y aromático.",
    "dish.9.name": "Batida de frutas",
    "dish.9.desc": "Batidas espesas de frutas tropicales con leche o agua de coco.",
    "dish.10.name": "Pudín de pan",
    "dish.10.desc": "Receta casera de la abuela. Esponjoso, dulce y con toque de canela.",
    "dish.11.name": "Tres leches",
    "dish.11.desc": "Bizcocho húmedo bañado en tres tipos de leche. Clásico irresistible.",
    "dish.12.name": "Flan de coco",
    "dish.12.desc": "Flan cremoso con leche de coco y caramelo artesanal.",
    "gallery.tag": "Nuestro espacio",
    "gallery.title": "Una mirada a Deli Xuca",
    "gallery.sub": "Próximamente fotos reales de nuestro restaurante y platos.",
    "gallery.ph1": "Ambiente principal",
    "gallery.ph2": "Platos del día",
    "gallery.ph3": "Desayunos",
    "gallery.ph4": "Terraza exterior",
    "gallery.ph5": "Postres",
    "hours.tag": "Cuándo visitarnos",
    "hours.title": "Horarios de atención",
    "hours.desc": "Estamos abiertos todos los días de la semana para servirte el mejor desayuno y almuerzo de Santiago.",
    "hours.cta": "Hacer una reserva",
    "hours.mon": "Lunes",
    "hours.tue": "Martes",
    "hours.wed": "Miércoles",
    "hours.thu": "Jueves",
    "hours.fri": "Viernes",
    "hours.sat": "Sábado",
    "hours.sun": "Domingo",
    "loc.tag": "Dónde estamos",
    "loc.title": "Encuéntranos en Santiago",
    "loc.desc": "Estamos ubicados en el corazón de Santiago, República Dominicana. Fácil acceso y estacionamiento disponible.",
    "loc.cta": "Abrir en Google Maps",
    "loc.open": "Ver en Google Maps →",
    "contact.tag": "Háblanos",
    "contact.title": "¿Listo para visitarnos?",
    "contact.sub": "Escríbenos por WhatsApp o llámanos directamente. Respondemos rápido.",
    "contact.wa": "WhatsApp",
    "contact.phone1": "Teléfono 1",
    "contact.phone2": "Teléfono 2",
    "contact.email": "Correo",
    "contact.follow": "Síguenos en redes",
    "footer.desc": "Sabores auténticos en el corazón de Santiago.",
    "footer.copy": "© 2025 Deli Xuca · Santiago, República Dominicana",
    "a11y.title": "Accesibilidad",
    "a11y.contrast": "Alto contraste",
    "a11y.bigtext": "Texto grande",
    "a11y.links": "Subrayar enlaces",
    "a11y.font": "Fuente legible"
  },
  en: {
    "nav.about": "About",
    "nav.menu": "Menu",
    "nav.gallery": "Gallery",
    "nav.hours": "Hours",
    "nav.location": "Location",
    "nav.contact": "Contact",
    "hero.tag": "Santiago, Dominican Republic",
    "hero.subtitle": "Where every dish tells a story.\nFlavors that captivate, moments that last.",
    "hero.cta1": "View the menu",
    "hero.cta2": "Reserve a table",
    "hero.hours": "Open today · 8:00 AM – 7:00 PM",
    "about.tag": "Our story",
    "about.title": "Made with love,\nthe flavor that enchants",
    "about.p1": "At Deli Xuca we believe that eating well is one of life's most honest pleasures. Every recipe is born from Dominican tradition, perfected with modern technique and the freshest ingredients from Santiago.",
    "about.p2": "We are a space where families gather, friends celebrate and flavors speak for themselves. Welcome to your new favorite restaurant.",
    "about.open": "Open",
    "about.close": "Close",
    "about.days": "All week",
    "about.badge": "✦ Authentic Dominican flavor",
    "menu.tag": "What we offer",
    "menu.title": "Our menu",
    "menu.sub": "Dishes prepared with fresh ingredients every day.",
    "menu.cat1": "Breakfast",
    "menu.cat2": "Lunch",
    "menu.cat3": "Drinks",
    "menu.cat4": "Desserts",
    "dish.1.name": "Mangú with the three hits",
    "dish.1.desc": "Mashed green plantain with olive oil, served with fried eggs, salami and fried cheese.",
    "dish.2.name": "Eggs your way",
    "dish.2.desc": "Scrambled, fried or poached. With toast and natural juice included.",
    "dish.3.name": "Full breakfast",
    "dish.3.desc": "Mangú, eggs, salami, cheese, natural juice and Dominican coffee.",
    "dish.4.name": "Stewed chicken",
    "dish.4.desc": "Creole chicken with white rice, red beans and fresh salad.",
    "dish.5.name": "Roast beef",
    "dish.5.desc": "Marinated roast beef with potatoes and seasonal vegetables.",
    "dish.6.name": "Coconut fish",
    "dish.6.desc": "Fresh fish fillet in coconut sauce, with rice and tostones.",
    "dish.7.name": "Natural juice",
    "dish.7.desc": "Passion fruit, orange, tamarind or papaya. Fresh with no added sugar.",
    "dish.8.name": "Dominican coffee",
    "dish.8.desc": "Artisan ground coffee, served black or with milk. Intense and aromatic.",
    "dish.9.name": "Fruit shake",
    "dish.9.desc": "Thick tropical fruit shakes with milk or coconut water.",
    "dish.10.name": "Bread pudding",
    "dish.10.desc": "Grandma's homemade recipe. Fluffy, sweet and with a touch of cinnamon.",
    "dish.11.name": "Tres leches",
    "dish.11.desc": "Moist cake soaked in three types of milk. An irresistible classic.",
    "dish.12.name": "Coconut flan",
    "dish.12.desc": "Creamy flan with coconut milk and artisan caramel.",
    "gallery.tag": "Our space",
    "gallery.title": "A look at Deli Xuca",
    "gallery.sub": "Real photos of our restaurant and dishes coming soon.",
    "gallery.ph1": "Main dining area",
    "gallery.ph2": "Daily specials",
    "gallery.ph3": "Breakfast",
    "gallery.ph4": "Outdoor terrace",
    "gallery.ph5": "Desserts",
    "hours.tag": "When to visit us",
    "hours.title": "Opening hours",
    "hours.desc": "We are open every day of the week to serve you the best breakfast and lunch in Santiago.",
    "hours.cta": "Make a reservation",
    "hours.mon": "Monday",
    "hours.tue": "Tuesday",
    "hours.wed": "Wednesday",
    "hours.thu": "Thursday",
    "hours.fri": "Friday",
    "hours.sat": "Saturday",
    "hours.sun": "Sunday",
    "loc.tag": "Where we are",
    "loc.title": "Find us in Santiago",
    "loc.desc": "We are located in the heart of Santiago, Dominican Republic. Easy access and parking available.",
    "loc.cta": "Open in Google Maps",
    "loc.open": "View on Google Maps →",
    "contact.tag": "Talk to us",
    "contact.title": "Ready to visit us?",
    "contact.sub": "Message us on WhatsApp or call us directly. We respond fast.",
    "contact.wa": "WhatsApp",
    "contact.phone1": "Phone 1",
    "contact.phone2": "Phone 2",
    "contact.email": "Email",
    "contact.follow": "Follow us on social media",
    "footer.desc": "Authentic flavors in the heart of Santiago.",
    "footer.copy": "© 2025 Deli Xuca · Santiago, Dominican Republic",
    "a11y.title": "Accessibility",
    "a11y.contrast": "High contrast",
    "a11y.bigtext": "Large text",
    "a11y.links": "Underline links",
    "a11y.font": "Readable font"
  },
  fr: {
    "nav.about": "À propos",
    "nav.menu": "Menu",
    "nav.gallery": "Galerie",
    "nav.hours": "Horaires",
    "nav.location": "Localisation",
    "nav.contact": "Contact",
    "hero.tag": "Santiago, République Dominicaine",
    "hero.subtitle": "Où chaque plat raconte une histoire.\nDes saveurs envoûtantes, des moments inoubliables.",
    "hero.cta1": "Voir le menu",
    "hero.cta2": "Réserver une table",
    "hero.hours": "Ouvert aujourd'hui · 8h00 – 19h00",
    "about.tag": "Notre histoire",
    "about.title": "Fait avec amour,\nla saveur qui enchante",
    "about.p1": "Chez Deli Xuca, nous croyons que bien manger est l'un des plaisirs les plus honnêtes de la vie. Chaque recette naît de la tradition dominicaine, perfectionnée avec des techniques modernes et les meilleurs ingrédients frais de Santiago.",
    "about.p2": "Nous sommes un espace où les familles se réunissent, les amis célèbrent et les saveurs parlent d'elles-mêmes. Bienvenue dans votre nouveau restaurant préféré.",
    "about.open": "Ouverture",
    "about.close": "Fermeture",
    "about.days": "Toute la semaine",
    "about.badge": "✦ Saveur dominicaine authentique",
    "menu.tag": "Ce que nous offrons",
    "menu.title": "Notre menu",
    "menu.sub": "Plats préparés avec des ingrédients frais chaque jour.",
    "menu.cat1": "Petit-déjeuner",
    "menu.cat2": "Déjeuner",
    "menu.cat3": "Boissons",
    "menu.cat4": "Desserts",
    "dish.1.name": "Mangú aux trois accompagnements",
    "dish.1.desc": "Plantain vert écrasé avec huile d'olive, accompagné d'œufs frits, salami et fromage frit.",
    "dish.2.name": "Œufs à votre goût",
    "dish.2.desc": "Brouillés, frits ou pochés. Avec pain grillé et jus naturel inclus.",
    "dish.3.name": "Petit-déjeuner complet",
    "dish.3.desc": "Mangú, œufs, salami, fromage, jus naturel et café dominicain.",
    "dish.4.name": "Poulet mijoté",
    "dish.4.desc": "Poulet créole avec riz blanc, haricots rouges et salade fraîche.",
    "dish.5.name": "Bœuf rôti",
    "dish.5.desc": "Bœuf mariné rôti avec pommes de terre et légumes de saison.",
    "dish.6.name": "Poisson à la noix de coco",
    "dish.6.desc": "Filet de poisson frais en sauce coco, avec riz et tostones.",
    "dish.7.name": "Jus naturel",
    "dish.7.desc": "Fruit de la passion, orange, tamarin ou papaye. Frais sans sucre ajouté.",
    "dish.8.name": "Café dominicain",
    "dish.8.desc": "Café moulu artisanal, servi noir ou au lait. Intense et aromatique.",
    "dish.9.name": "Milk-shake aux fruits",
    "dish.9.desc": "Épais milk-shakes aux fruits tropicaux avec lait ou eau de coco.",
    "dish.10.name": "Pouding au pain",
    "dish.10.desc": "Recette maison de grand-mère. Moelleux, sucré avec une touche de cannelle.",
    "dish.11.name": "Tres leches",
    "dish.11.desc": "Gâteau moelleux trempé dans trois types de lait. Un classique irrésistible.",
    "dish.12.name": "Flan à la noix de coco",
    "dish.12.desc": "Flan crémeux au lait de coco et caramel artisanal.",
    "gallery.tag": "Notre espace",
    "gallery.title": "Un aperçu de Deli Xuca",
    "gallery.sub": "Photos réelles de notre restaurant et de nos plats à venir.",
    "gallery.ph1": "Salle principale",
    "gallery.ph2": "Plats du jour",
    "gallery.ph3": "Petit-déjeuner",
    "gallery.ph4": "Terrasse extérieure",
    "gallery.ph5": "Desserts",
    "hours.tag": "Quand nous rendre visite",
    "hours.title": "Horaires d'ouverture",
    "hours.desc": "Nous sommes ouverts tous les jours de la semaine pour vous servir le meilleur petit-déjeuner et déjeuner de Santiago.",
    "hours.cta": "Faire une réservation",
    "hours.mon": "Lundi",
    "hours.tue": "Mardi",
    "hours.wed": "Mercredi",
    "hours.thu": "Jeudi",
    "hours.fri": "Vendredi",
    "hours.sat": "Samedi",
    "hours.sun": "Dimanche",
    "loc.tag": "Où nous sommes",
    "loc.title": "Retrouvez-nous à Santiago",
    "loc.desc": "Nous sommes situés au cœur de Santiago, République Dominicaine. Accès facile et parking disponible.",
    "loc.cta": "Ouvrir dans Google Maps",
    "loc.open": "Voir sur Google Maps →",
    "contact.tag": "Parlez-nous",
    "contact.title": "Prêt à nous rendre visite ?",
    "contact.sub": "Écrivez-nous sur WhatsApp ou appelez-nous directement. Nous répondons vite.",
    "contact.wa": "WhatsApp",
    "contact.phone1": "Téléphone 1",
    "contact.phone2": "Téléphone 2",
    "contact.email": "E-mail",
    "contact.follow": "Suivez-nous sur les réseaux",
    "footer.desc": "Des saveurs authentiques au cœur de Santiago.",
    "footer.copy": "© 2025 Deli Xuca · Santiago, République Dominicaine",
    "a11y.title": "Accessibilité",
    "a11y.contrast": "Contraste élevé",
    "a11y.bigtext": "Grand texte",
    "a11y.links": "Souligner les liens",
    "a11y.font": "Police lisible"
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
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = tr[key];
      } else {
        el.innerHTML = tr[key].replace(/\n/g, '<br>');
      }
    }
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
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
  document.getElementById('icon-sun').style.display  = isLight ? 'block' : 'none';
  document.getElementById('icon-moon').style.display = isLight ? 'none'  : 'block';
}

/* --- Panel de accesibilidad --- */
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

/* --- Filtro de menú --- */
function filterMenu(btn) {
  const cat = btn.dataset.cat;

  document.querySelectorAll('.menu-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  document.querySelectorAll('.menu-card').forEach(card => {
    card.style.display = (cat === 'all' || card.dataset.cat === cat) ? 'block' : 'none';
  });
}

/* --- Menú hamburguesa --- */
function toggleMenu() {
  document.getElementById('navMenu').classList.toggle('open');
}

/* --- Navbar scroll --- */
function initNavScroll() {
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    nav.style.borderBottomColor = window.scrollY > 30
      ? 'rgba(126,184,212,0.2)'
      : '';
  });
}

/* --- Animaciones de scroll --- */
function initScrollAnimations() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity   = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(
    '.menu-card, .cert-card, .about-card, .contact-card, .gallery-item, .hours-row'
  ).forEach((el, i) => {
    el.style.opacity    = '0';
    el.style.transform  = 'translateY(20px)';
    el.style.transition = `opacity 0.5s ease ${i * 0.05}s, transform 0.5s ease ${i * 0.05}s`;
    observer.observe(el);
  });
}

/* --- Cerrar menú al hacer clic en un enlace --- */
function initMobileMenuClose() {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('navMenu').classList.remove('open');
    });
  });
}

/* --- Init --- */
document.addEventListener('DOMContentLoaded', () => {
  initNavScroll();
  initScrollAnimations();
  initMobileMenuClose();
  setLang('es');
});
