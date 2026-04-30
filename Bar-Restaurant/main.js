/* Deli-Bar Xuca — main.js */

/* --- Traducciones --- */
const i18n = {
  es: {
    "nav.about":"Nosotros","nav.menu":"Menú","nav.bar":"Bar","nav.gallery":"Galería",
    "nav.hours":"Horarios","nav.location":"Ubicación","nav.contact":"Contacto",
    "hero.badge":"Santiago, República Dominicana",
    "hero.line1":"COME.","hero.line2":"BEBE.","hero.line3":"DISFRUTA.",
    "hero.sub":"Bar & restaurante en el corazón de Santiago. La vibra que buscabas, la comida que necesitabas.",
    "hero.cta1":"Ver el menú","hero.cta2":"Ver el bar",
    "hero.strip1":"Comida fresca","hero.strip2":"Cócteles artesanales",
    "hero.strip3":"Ambiente único","hero.strip4":"8AM – 7PM",
    "about.tag":"Quiénes somos","about.title":"NO ES SOLO UN BAR.\nES TU LUGAR.",
    "about.p1":"Deli-Bar Xuca nació con una idea simple: un espacio donde puedas desayunar tranquilo, almorzar rico y tomar algo bueno en el mismo lugar. Sin complicaciones, sin pretensiones.",
    "about.p2":"Música, comida de verdad y cócteles hechos con cariño. Eso somos nosotros.",
    "about.days":"días a la semana","about.open":"abrimos",
    "about.vibe":"buena vibra","about.city":"Santiago, RD",
    "menu.tag":"Para comer","menu.title":"LA CARTA",
    "menu.sub":"Desde el desayuno hasta el almuerzo. Todo fresco, todo rico.",
    "menu.cat1":"Desayunos","menu.cat2":"Almuerzos","menu.cat3":"Snacks","menu.cat4":"Postres",
    "d1.name":"Mangú con los tres golpes","d1.desc":"Plátano verde majado, huevos fritos, salami y queso. El clásico de siempre.",
    "d2.name":"Desayuno completo","d2.desc":"Mangú, huevos, salami, queso, jugo y café dominicano incluidos.",
    "d3.name":"Pan con huevo y salami","d3.desc":"Pan crujiente, huevo frito y salami. Rápido y delicioso.",
    "d4.name":"Pollo guisado","d4.desc":"Arroz, habichuelas, pollo criollo y ensalada. El almuerzo de verdad.",
    "d5.name":"Res al horno","d5.desc":"Carne marinada, papas y vegetales. Cocinado lento para más sabor.",
    "d6.name":"Pescado al coco","d6.desc":"Filete fresco en salsa de coco con arroz y tostones.",
    "d7.name":"Tostones con dip","d7.desc":"Tostones crujientes con salsa de ajo y dip de aguacate.",
    "d8.name":"Alitas BBQ","d8.desc":"Alitas de pollo bañadas en salsa BBQ casera. Perfectas para compartir.",
    "d9.name":"Wrap de pollo","d9.desc":"Pollo a la parrilla, vegetales frescos y aderezo de la casa.",
    "d10.name":"Pudín de pan","d10.desc":"Receta casera con canela y toque de vainilla.",
    "d11.name":"Tres leches","d11.desc":"Bizcocho húmedo en tres leches. El postre que no puede faltar.",
    "d12.name":"Brownie caliente","d12.desc":"Brownie de chocolate con helado de vainilla. Caliente y frío a la vez.",
    "bar.tag":"Para tomar","bar.title":"EL BAR",
    "bar.sub":"Desde el café de la mañana hasta el cóctel de la tarde.",
    "bar.special":"Especial",
    "b1.name":"Cóctel de la casa","b1.desc":"La mezcla secreta del bartender. Diferente cada semana.",
    "b2.name":"Ron sour","b2.desc":"Ron dominicano, limón, azúcar y espuma de clara.",
    "b3.name":"Cerveza fría","b3.desc":"Nacional, Presidente o importada. Bien helada.",
    "b4.name":"Jugo natural","b4.desc":"Chinola, naranja, tamarindo o lechosa. Sin azúcar añadida.",
    "b5.name":"Café dominicano","b5.desc":"Negro o con leche. Molido en el día, intenso y aromático.",
    "b6.name":"Batida tropical","b6.desc":"Frutas tropicales con leche o agua de coco.",
    "gallery.tag":"El ambiente","gallery.title":"ASÍ ES DELI-BAR XUCA",
    "gph1":"El bar","gph2":"La cocina","gph3":"El ambiente","gph4":"Vista nocturna","gph5":"Celebraciones",
    "gallery.note":"✦ Próximamente fotos reales del local.",
    "hours.tag":"Cuándo vernos","hours.title":"SIEMPRE ABIERTO",
    "hours.desc":"Todos los días de la semana. Desde el primer café hasta el último cóctel de la tarde.",
    "hours.cta":"Reservar mesa",
    "hours.mon":"Lun","hours.tue":"Mar","hours.wed":"Mié","hours.thu":"Jue",
    "hours.fri":"Vie","hours.sat":"Sáb","hours.sun":"Dom",
    "loc.tag":"Dónde estamos","loc.title":"ENCUÉNTRANOS",
    "loc.desc":"En el corazón de Santiago, República Dominicana. Fácil acceso y estacionamiento disponible.",
    "loc.cta":"Abrir en Google Maps","loc.open":"Ver en Google Maps →",
    "contact.tag":"Háblanos","contact.title":"¿VIENES HOY?",
    "contact.sub":"Reserva tu mesa o escríbenos directo. Respondemos rápido.",
    "contact.wa":"WhatsApp","contact.p1":"Teléfono 1","contact.p2":"Teléfono 2","contact.email":"Correo",
    "contact.follow":"Síguenos",
    "footer.desc":"Bar & Restaurante · Santiago, RD",
    "footer.copy":"© 2025 Deli-Bar Xuca · Santiago, República Dominicana",
    "a11y.title":"Accesibilidad","a11y.contrast":"Alto contraste",
    "a11y.bigtext":"Texto grande","a11y.links":"Subrayar enlaces","a11y.font":"Fuente legible"
  },
  en: {
    "nav.about":"About","nav.menu":"Menu","nav.bar":"Bar","nav.gallery":"Gallery",
    "nav.hours":"Hours","nav.location":"Location","nav.contact":"Contact",
    "hero.badge":"Santiago, Dominican Republic",
    "hero.line1":"EAT.","hero.line2":"DRINK.","hero.line3":"ENJOY.",
    "hero.sub":"Bar & restaurant in the heart of Santiago. The vibe you were looking for, the food you needed.",
    "hero.cta1":"View the menu","hero.cta2":"View the bar",
    "hero.strip1":"Fresh food","hero.strip2":"Craft cocktails",
    "hero.strip3":"Unique atmosphere","hero.strip4":"8AM – 7PM",
    "about.tag":"Who we are","about.title":"NOT JUST A BAR.\nIT'S YOUR PLACE.",
    "about.p1":"Deli-Bar Xuca was born with a simple idea: a space where you can have a peaceful breakfast, a great lunch and a good drink all in the same place. No fuss, no pretense.",
    "about.p2":"Music, real food and cocktails made with care. That's who we are.",
    "about.days":"days a week","about.open":"we open",
    "about.vibe":"good vibes","about.city":"Santiago, DR",
    "menu.tag":"To eat","menu.title":"THE MENU",
    "menu.sub":"From breakfast to lunch. All fresh, all delicious.",
    "menu.cat1":"Breakfast","menu.cat2":"Lunch","menu.cat3":"Snacks","menu.cat4":"Desserts",
    "d1.name":"Mangú with the three hits","d1.desc":"Mashed green plantain, fried eggs, salami and cheese. The timeless classic.",
    "d2.name":"Full breakfast","d2.desc":"Mangú, eggs, salami, cheese, juice and Dominican coffee included.",
    "d3.name":"Bread with egg and salami","d3.desc":"Crispy bread, fried egg and salami. Fast and delicious.",
    "d4.name":"Stewed chicken","d4.desc":"Rice, beans, creole chicken and salad. A real lunch.",
    "d5.name":"Roast beef","d5.desc":"Marinated beef, potatoes and vegetables. Slow-cooked for more flavor.",
    "d6.name":"Coconut fish","d6.desc":"Fresh fillet in coconut sauce with rice and tostones.",
    "d7.name":"Tostones with dip","d7.desc":"Crispy tostones with garlic sauce and avocado dip.",
    "d8.name":"BBQ wings","d8.desc":"Chicken wings in homemade BBQ sauce. Perfect for sharing.",
    "d9.name":"Chicken wrap","d9.desc":"Grilled chicken, fresh vegetables and house dressing.",
    "d10.name":"Bread pudding","d10.desc":"Homemade recipe with cinnamon and a touch of vanilla.",
    "d11.name":"Tres leches","d11.desc":"Moist cake soaked in three milks. A must-have dessert.",
    "d12.name":"Hot brownie","d12.desc":"Chocolate brownie with vanilla ice cream. Hot and cold at once.",
    "bar.tag":"To drink","bar.title":"THE BAR",
    "bar.sub":"From the morning coffee to the afternoon cocktail.",
    "bar.special":"Special",
    "b1.name":"House cocktail","b1.desc":"The bartender's secret mix. Different every week.",
    "b2.name":"Rum sour","b2.desc":"Dominican rum, lemon, sugar and egg white foam.",
    "b3.name":"Cold beer","b3.desc":"Nacional, Presidente or imported. Ice cold.",
    "b4.name":"Natural juice","b4.desc":"Passion fruit, orange, tamarind or papaya. No added sugar.",
    "b5.name":"Dominican coffee","b5.desc":"Black or with milk. Freshly ground, intense and aromatic.",
    "b6.name":"Tropical shake","b6.desc":"Tropical fruits with milk or coconut water.",
    "gallery.tag":"The atmosphere","gallery.title":"THIS IS DELI-BAR XUCA",
    "gph1":"The bar","gph2":"The kitchen","gph3":"The vibe","gph4":"Night view","gph5":"Celebrations",
    "gallery.note":"✦ Real photos of the venue coming soon.",
    "hours.tag":"When to visit","hours.title":"ALWAYS OPEN",
    "hours.desc":"Every day of the week. From the first coffee to the last afternoon cocktail.",
    "hours.cta":"Reserve a table",
    "hours.mon":"Mon","hours.tue":"Tue","hours.wed":"Wed","hours.thu":"Thu",
    "hours.fri":"Fri","hours.sat":"Sat","hours.sun":"Sun",
    "loc.tag":"Where we are","loc.title":"FIND US",
    "loc.desc":"In the heart of Santiago, Dominican Republic. Easy access and parking available.",
    "loc.cta":"Open in Google Maps","loc.open":"View on Google Maps →",
    "contact.tag":"Talk to us","contact.title":"COMING TODAY?",
    "contact.sub":"Reserve your table or message us directly. We respond fast.",
    "contact.wa":"WhatsApp","contact.p1":"Phone 1","contact.p2":"Phone 2","contact.email":"Email",
    "contact.follow":"Follow us",
    "footer.desc":"Bar & Restaurant · Santiago, DR",
    "footer.copy":"© 2025 Deli-Bar Xuca · Santiago, Dominican Republic",
    "a11y.title":"Accessibility","a11y.contrast":"High contrast",
    "a11y.bigtext":"Large text","a11y.links":"Underline links","a11y.font":"Readable font"
  },
  fr: {
    "nav.about":"À propos","nav.menu":"Menu","nav.bar":"Bar","nav.gallery":"Galerie",
    "nav.hours":"Horaires","nav.location":"Localisation","nav.contact":"Contact",
    "hero.badge":"Santiago, République Dominicaine",
    "hero.line1":"MANGE.","hero.line2":"BOIS.","hero.line3":"PROFITE.",
    "hero.sub":"Bar & restaurant au cœur de Santiago. L'ambiance que vous cherchiez, la cuisine dont vous aviez besoin.",
    "hero.cta1":"Voir le menu","hero.cta2":"Voir le bar",
    "hero.strip1":"Cuisine fraîche","hero.strip2":"Cocktails artisanaux",
    "hero.strip3":"Ambiance unique","hero.strip4":"8h – 19h",
    "about.tag":"Qui nous sommes","about.title":"PAS SEULEMENT UN BAR.\nC'EST VOTRE ENDROIT.",
    "about.p1":"Deli-Bar Xuca est né d'une idée simple : un espace où vous pouvez prendre un petit-déjeuner tranquille, déjeuner et prendre un verre dans le même endroit. Sans complications, sans prétention.",
    "about.p2":"Musique, vraie cuisine et cocktails faits avec soin. C'est nous.",
    "about.days":"jours par semaine","about.open":"on ouvre",
    "about.vibe":"bonne ambiance","about.city":"Santiago, RD",
    "menu.tag":"Pour manger","menu.title":"LA CARTE",
    "menu.sub":"Du petit-déjeuner au déjeuner. Tout frais, tout délicieux.",
    "menu.cat1":"Petit-déjeuner","menu.cat2":"Déjeuner","menu.cat3":"Snacks","menu.cat4":"Desserts",
    "d1.name":"Mangú aux trois accompagnements","d1.desc":"Plantain vert écrasé, œufs frits, salami et fromage. Le classique intemporel.",
    "d2.name":"Petit-déjeuner complet","d2.desc":"Mangú, œufs, salami, fromage, jus et café dominicain inclus.",
    "d3.name":"Pain avec œuf et salami","d3.desc":"Pain croustillant, œuf frit et salami. Rapide et délicieux.",
    "d4.name":"Poulet mijoté","d4.desc":"Riz, haricots, poulet créole et salade. Un vrai déjeuner.",
    "d5.name":"Bœuf rôti","d5.desc":"Bœuf mariné, pommes de terre et légumes. Cuit lentement pour plus de saveur.",
    "d6.name":"Poisson à la noix de coco","d6.desc":"Filet frais en sauce coco avec riz et tostones.",
    "d7.name":"Tostones avec dip","d7.desc":"Tostones croustillants avec sauce à l'ail et dip d'avocat.",
    "d8.name":"Ailes BBQ","d8.desc":"Ailes de poulet nappées de sauce BBQ maison. Parfaites à partager.",
    "d9.name":"Wrap au poulet","d9.desc":"Poulet grillé, légumes frais et vinaigrette maison.",
    "d10.name":"Pudding au pain","d10.desc":"Recette maison à la cannelle et touche de vanille.",
    "d11.name":"Tres leches","d11.desc":"Gâteau moelleux trempé dans trois laits. Un dessert incontournable.",
    "d12.name":"Brownie chaud","d12.desc":"Brownie au chocolat avec crème glacée à la vanille. Chaud et froid à la fois.",
    "bar.tag":"Pour boire","bar.title":"LE BAR",
    "bar.sub":"Du café du matin au cocktail de l'après-midi.",
    "bar.special":"Spécial",
    "b1.name":"Cocktail maison","b1.desc":"Le mélange secret du barman. Différent chaque semaine.",
    "b2.name":"Rhum sour","b2.desc":"Rhum dominicain, citron, sucre et mousse de blanc d'œuf.",
    "b3.name":"Bière fraîche","b3.desc":"Nacional, Presidente ou importée. Bien fraîche.",
    "b4.name":"Jus naturel","b4.desc":"Fruit de la passion, orange, tamarin ou papaye. Sans sucre ajouté.",
    "b5.name":"Café dominicain","b5.desc":"Noir ou au lait. Fraîchement moulu, intense et aromatique.",
    "b6.name":"Milk-shake tropical","b6.desc":"Fruits tropicaux avec lait ou eau de coco.",
    "gallery.tag":"L'ambiance","gallery.title":"VOILÀ DELI-BAR XUCA",
    "gph1":"Le bar","gph2":"La cuisine","gph3":"L'ambiance","gph4":"Vue nocturne","gph5":"Célébrations",
    "gallery.note":"✦ Photos réelles du local à venir prochainement.",
    "hours.tag":"Quand nous rendre visite","hours.title":"TOUJOURS OUVERT",
    "hours.desc":"Tous les jours de la semaine. Du premier café au dernier cocktail de l'après-midi.",
    "hours.cta":"Réserver une table",
    "hours.mon":"Lun","hours.tue":"Mar","hours.wed":"Mer","hours.thu":"Jeu",
    "hours.fri":"Ven","hours.sat":"Sam","hours.sun":"Dim",
    "loc.tag":"Où nous sommes","loc.title":"TROUVEZ-NOUS",
    "loc.desc":"Au cœur de Santiago, République Dominicaine. Accès facile et parking disponible.",
    "loc.cta":"Ouvrir dans Google Maps","loc.open":"Voir sur Google Maps →",
    "contact.tag":"Parlez-nous","contact.title":"VOUS VENEZ AUJOURD'HUI ?",
    "contact.sub":"Réservez votre table ou écrivez-nous directement. Nous répondons vite.",
    "contact.wa":"WhatsApp","contact.p1":"Téléphone 1","contact.p2":"Téléphone 2","contact.email":"E-mail",
    "contact.follow":"Suivez-nous",
    "footer.desc":"Bar & Restaurant · Santiago, RD",
    "footer.copy":"© 2025 Deli-Bar Xuca · Santiago, République Dominicaine",
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
  document.getElementById('icon-sun').style.display  = isLight ? 'block' : 'none';
  document.getElementById('icon-moon').style.display = isLight ? 'none'  : 'block';
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

/* --- Filtro menú --- */
function filterMenu(btn) {
  const cat = btn.dataset.cat;
  document.querySelectorAll('.menu-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.menu-card').forEach(card => {
    card.style.display = (cat === 'all' || card.dataset.cat === cat) ? 'flex' : 'none';
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
    nav.style.borderBottomColor = window.scrollY > 30
      ? 'rgba(29,111,245,0.25)'
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
    '.menu-card, .bar-card, .gallery-item, .contact-card, .stat-box'
  ).forEach((el, i) => {
    el.style.opacity    = '0';
    el.style.transform  = 'translateY(18px)';
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
