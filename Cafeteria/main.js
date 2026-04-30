/* Deli Xuca Cafetería — main.js */

/* --- Traducciones --- */
const i18n = {
  es: {
    "nav.about":"Nosotros","nav.menu":"Menú","nav.catalog":"Catálogo",
    "nav.gallery":"Galería","nav.hours":"Horarios","nav.location":"Ubicación","nav.contact":"Contacto",
    "hero.tag":"Santiago · RD · Abierto hoy",
    "hero.l1":"El rincón","hero.l2":"favorito","hero.l3":"de Santiago.",
    "hero.sub":"Café artesanal, desayunos ricos y postres que hacen daño al bolsillo pero bien al alma. Ven, siéntate, disfruta.",
    "hero.cta1":"Ver el menú","hero.cta2":"¿Cómo llegar?",
    "hb1":"Café artesanal","hb2":"Desayunos","hb3":"Postres","hb4":"Snacks",
    "hero.vtag":"Café del día",
    "hero.ft1":"¡Recién hecho!",
    "about.tag":"Nuestra historia",
    "about.p1":"Deli Xuca nació de una idea simple: crear el espacio donde Santiago se tome un descanso. Un café donde el olor a pan recién horneado y el sonido de una buena conversación se mezclan sin apuro.",
    "about.p2":"Ingredientes frescos, recetas propias y un equipo que pone cariño en cada taza y cada plato. Así somos nosotros.",
    "about.cta":"Explorar el menú",
    "ac1.t":"Ingredientes frescos","ac1.d":"Compramos local. Frescos todos los días, sin excepción.",
    "ac2.t":"Café artesanal","ac2.d":"Granos seleccionados, preparados con técnica y pasión.",
    "ac3.t":"Postres caseros","ac3.d":"Recetas propias, horneadas en el día. Irresistibles.",
    "ac4.t":"Ambiente acogedor","ac4.d":"El lugar donde quieres quedarte un rato más.",
    "menu.tag":"Lo que servimos","menu.title":"Nuestro menú",
    "menu.sub":"Todo preparado con amor. Cada ítem, una razón para volver.",
    "mt1":"Café","mt2":"Desayunos","mt3":"Postres","mt4":"Snacks","mt5":"Bebidas",
    "c1.n":"Espresso","c1.d":"Puro, intenso y aromático. El inicio perfecto del día.",
    "c2.n":"Latte artesanal","c2.d":"Espresso con leche vaporizada y arte en la taza.",
    "c3.n":"Cold brew","c3.d":"Café frío con 12 horas de extracción. Suave y potente.",
    "d1.n":"Mangú con los tres","d1.d":"El clásico dominicano. Plátano majado, huevos, salami y queso frito.",
    "d2.n":"Desayuno completo","d2.d":"Mangú, huevos, salami, queso, jugo natural y café. Todo incluido.",
    "d3.n":"Tostadas con aguacate","d3.d":"Pan artesanal tostado con aguacate fresco, sal y limón.",
    "p1.n":"Tres leches","p1.d":"Bizcocho húmedo bañado en tres leches. El favorito de siempre.",
    "p2.n":"Brownie caliente","p2.d":"Brownie de chocolate con helado de vainilla. Pecado delicioso.",
    "p3.n":"Flan de coco","p3.d":"Flan cremoso con leche de coco y caramelo artesanal.",
    "s1.n":"Sándwich del día","s1.d":"Pan artesanal con relleno fresco del día. Varía según disponibilidad.",
    "s2.n":"Empanadas caseras","s2.d":"Rellenas de queso, pollo o carne. Receta de la casa.",
    "s3.n":"Ensalada fresca","s3.d":"Vegetales frescos, aderezo de la casa y crutones artesanales.",
    "b1.n":"Jugo natural","b1.d":"Chinola, naranja, lechosa o tamarindo. Frescos del día.",
    "b2.n":"Batida tropical","b2.d":"Frutas tropicales con leche o agua de coco. Espesa y cremosa.",
    "b3.n":"Té artesanal","b3.d":"Variedad de tés especiales. Caliente o frío según prefieras.",
    "cat.tag":"Los favoritos","cat.title":"Especialidades de la casa",
    "cat.sub":"Los platos que nuestros clientes piden una y otra vez. Los que no pueden faltar.",
    "cat.fav":"Favorito","cat.new":"Nuevo","cat.best":"Lo mejor",
    "sp1.n":"Latte de matcha","sp1.d":"Matcha premium con leche de avena vaporizada. Verde, cremoso y adictivo.",
    "sp2.n":"Croissant de almendras","sp2.d":"Croissant horneado en el día con crema de almendras y azúcar glass.",
    "sp3.n":"Cheesecake de guayaba","sp3.d":"Cheesecake cremoso con mermelada de guayaba artesanal. 100% local.",
    "sp4.n":"Club sándwich Deli","sp4.d":"Pan artesanal, pollo a la parrilla, aguacate y alioli de la casa.",
    "gal.tag":"La cafetería","gal.title":"Nuestro espacio",
    "g1":"El bar","g2":"Panadería","g3":"Postres","g4":"Ambiente interior","g5":"Terraza",
    "gal.note":"✦ Próximamente fotos reales de la cafetería.",
    "hrs.tag":"Cuándo vernos","hrs.open":"Abierto hoy · Ven a vernos",
    "hrs.mon":"Lun","hrs.tue":"Mar","hrs.wed":"Mié","hrs.thu":"Jue","hrs.fri":"Vie","hrs.sat":"Sáb","hrs.sun":"Dom",
    "hrs.mon2":"Lunes – Viernes","hrs.sat2":"Sábado","hrs.sun2":"Domingo",
    "hrs.desc":"Desde el primer café de la mañana hasta el postre de la tarde. Abrimos los 7 días de la semana porque las ganas de comer rico no tienen día libre.",
    "hrs.cta":"Escríbenos",
    "loc.tag":"Dónde estamos","loc.desc":"Estamos en el corazón de Santiago, República Dominicana. Fácil de encontrar, con espacio para parquear y un ambiente que vale el viaje.",
    "loc.cta":"Abrir en Google Maps","loc.open":"Ver en Google Maps →",
    "con.tag":"Háblanos","con.sub":"Para pedidos, reservas o simplemente saber si hay cheesecake disponible. Respondemos rápido.",
    "con.wa":"WhatsApp · Pedidos","con.p1":"Teléfono 1","con.p2":"Teléfono 2","con.email":"Correo",
    "con.follow":"Síguenos",
    "footer.desc":"Cafetería · Santiago, RD",
    "footer.copy":"© 2025 Deli Xuca · Santiago, República Dominicana",
    "a11y.title":"Accesibilidad","a11y.contrast":"Alto contraste",
    "a11y.bigtext":"Texto grande","a11y.links":"Subrayar enlaces","a11y.font":"Fuente legible"
  },
  en: {
    "nav.about":"About","nav.menu":"Menu","nav.catalog":"Specials",
    "nav.gallery":"Gallery","nav.hours":"Hours","nav.location":"Location","nav.contact":"Contact",
    "hero.tag":"Santiago · DR · Open today",
    "hero.l1":"Santiago's","hero.l2":"favorite","hero.l3":"corner.",
    "hero.sub":"Artisan coffee, delicious breakfast and desserts that are worth every penny. Come in, sit down, enjoy.",
    "hero.cta1":"View the menu","hero.cta2":"How to get here?",
    "hb1":"Artisan coffee","hb2":"Breakfast","hb3":"Desserts","hb4":"Snacks",
    "hero.vtag":"Coffee of the day",
    "hero.ft1":"Freshly made!",
    "about.tag":"Our story",
    "about.p1":"Deli Xuca was born from a simple idea: create the space where Santiago takes a break. A café where the smell of freshly baked bread and the sound of good conversation blend without rush.",
    "about.p2":"Fresh ingredients, our own recipes and a team that puts love into every cup and every plate. That's who we are.",
    "about.cta":"Explore the menu",
    "ac1.t":"Fresh ingredients","ac1.d":"We buy local. Fresh every day, no exceptions.",
    "ac2.t":"Artisan coffee","ac2.d":"Selected beans, prepared with technique and passion.",
    "ac3.t":"Homemade desserts","ac3.d":"Our own recipes, baked daily. Irresistible.",
    "ac4.t":"Cozy atmosphere","ac4.d":"The place where you want to stay a little longer.",
    "menu.tag":"What we serve","menu.title":"Our menu",
    "menu.sub":"Everything prepared with love. Every item, a reason to come back.",
    "mt1":"Coffee","mt2":"Breakfast","mt3":"Desserts","mt4":"Snacks","mt5":"Drinks",
    "c1.n":"Espresso","c1.d":"Pure, intense and aromatic. The perfect start to the day.",
    "c2.n":"Artisan latte","c2.d":"Espresso with steamed milk and art in the cup.",
    "c3.n":"Cold brew","c3.d":"Cold coffee with 12-hour extraction. Smooth and powerful.",
    "d1.n":"Mangú with the three","d1.d":"The Dominican classic. Mashed plantain, eggs, salami and fried cheese.",
    "d2.n":"Full breakfast","d2.d":"Mangú, eggs, salami, cheese, natural juice and coffee. All included.",
    "d3.n":"Avocado toast","d3.d":"Toasted artisan bread with fresh avocado, salt and lemon.",
    "p1.n":"Tres leches","p1.d":"Moist cake soaked in three milks. The all-time favorite.",
    "p2.n":"Hot brownie","p2.d":"Chocolate brownie with vanilla ice cream. Delicious sin.",
    "p3.n":"Coconut flan","p3.d":"Creamy flan with coconut milk and artisan caramel.",
    "s1.n":"Sandwich of the day","s1.d":"Artisan bread with fresh daily filling. Varies by availability.",
    "s2.n":"Homemade empanadas","s2.d":"Filled with cheese, chicken or meat. House recipe.",
    "s3.n":"Fresh salad","s3.d":"Fresh vegetables, house dressing and artisan croutons.",
    "b1.n":"Natural juice","b1.d":"Passion fruit, orange, papaya or tamarind. Fresh daily.",
    "b2.n":"Tropical shake","b2.d":"Tropical fruits with milk or coconut water. Thick and creamy.",
    "b3.n":"Artisan tea","b3.d":"Variety of special teas. Hot or cold as you prefer.",
    "cat.tag":"The favorites","cat.title":"House specials",
    "cat.sub":"The dishes our customers order again and again. The ones that can't be missed.",
    "cat.fav":"Favorite","cat.new":"New","cat.best":"Best seller",
    "sp1.n":"Matcha latte","sp1.d":"Premium matcha with steamed oat milk. Green, creamy and addictive.",
    "sp2.n":"Almond croissant","sp2.d":"Day-fresh croissant with almond cream and powdered sugar.",
    "sp3.n":"Guava cheesecake","sp3.d":"Creamy cheesecake with artisan guava jam. 100% local.",
    "sp4.n":"Deli club sandwich","sp4.d":"Artisan bread, grilled chicken, avocado and house aioli.",
    "gal.tag":"The café","gal.title":"Our space",
    "g1":"The bar","g2":"Bakery","g3":"Desserts","g4":"Interior","g5":"Terrace",
    "gal.note":"✦ Real café photos coming soon.",
    "hrs.tag":"When to visit","hrs.open":"Open today · Come see us",
    "hrs.mon":"Mon","hrs.tue":"Tue","hrs.wed":"Wed","hrs.thu":"Thu","hrs.fri":"Fri","hrs.sat":"Sat","hrs.sun":"Sun",
    "hrs.mon2":"Monday – Friday","hrs.sat2":"Saturday","hrs.sun2":"Sunday",
    "hrs.desc":"From the first morning coffee to the afternoon dessert. Open 7 days a week because cravings have no day off.",
    "hrs.cta":"Message us",
    "loc.tag":"Where we are","loc.desc":"We're in the heart of Santiago, Dominican Republic. Easy to find, with parking and an atmosphere worth the trip.",
    "loc.cta":"Open in Google Maps","loc.open":"View on Google Maps →",
    "con.tag":"Talk to us","con.sub":"For orders, reservations or just to check if there's cheesecake available. We respond fast.",
    "con.wa":"WhatsApp · Orders","con.p1":"Phone 1","con.p2":"Phone 2","con.email":"Email",
    "con.follow":"Follow us",
    "footer.desc":"Café · Santiago, DR",
    "footer.copy":"© 2025 Deli Xuca · Santiago, Dominican Republic",
    "a11y.title":"Accessibility","a11y.contrast":"High contrast",
    "a11y.bigtext":"Large text","a11y.links":"Underline links","a11y.font":"Readable font"
  },
  fr: {
    "nav.about":"À propos","nav.menu":"Menu","nav.catalog":"Spécialités",
    "nav.gallery":"Galerie","nav.hours":"Horaires","nav.location":"Localisation","nav.contact":"Contact",
    "hero.tag":"Santiago · RD · Ouvert aujourd'hui",
    "hero.l1":"Le coin","hero.l2":"préféré","hero.l3":"de Santiago.",
    "hero.sub":"Café artisanal, délicieux petits-déjeuners et desserts qui valent chaque centime. Venez, asseyez-vous, profitez.",
    "hero.cta1":"Voir le menu","hero.cta2":"Comment y aller ?",
    "hb1":"Café artisanal","hb2":"Petit-déjeuner","hb3":"Desserts","hb4":"Snacks",
    "hero.vtag":"Café du jour",
    "hero.ft1":"Fraîchement préparé !",
    "about.tag":"Notre histoire",
    "about.p1":"Deli Xuca est né d'une idée simple : créer l'espace où Santiago fait une pause. Un café où l'odeur du pain fraîchement cuit et le son d'une bonne conversation se mélangent sans hâte.",
    "about.p2":"Ingrédients frais, recettes maison et une équipe qui met de l'amour dans chaque tasse et chaque plat. Voilà qui nous sommes.",
    "about.cta":"Explorer le menu",
    "ac1.t":"Ingrédients frais","ac1.d":"Nous achetons local. Frais chaque jour, sans exception.",
    "ac2.t":"Café artisanal","ac2.d":"Grains sélectionnés, préparés avec technique et passion.",
    "ac3.t":"Desserts maison","ac3.d":"Nos propres recettes, cuites chaque jour. Irrésistibles.",
    "ac4.t":"Atmosphère chaleureuse","ac4.d":"L'endroit où vous voulez rester un peu plus longtemps.",
    "menu.tag":"Ce que nous servons","menu.title":"Notre menu",
    "menu.sub":"Tout préparé avec amour. Chaque plat, une raison de revenir.",
    "mt1":"Café","mt2":"Petit-déjeuner","mt3":"Desserts","mt4":"Snacks","mt5":"Boissons",
    "c1.n":"Espresso","c1.d":"Pur, intense et aromatique. Le début de journée parfait.",
    "c2.n":"Latte artisanal","c2.d":"Espresso avec lait vapeur et art dans la tasse.",
    "c3.n":"Cold brew","c3.d":"Café froid avec 12 heures d'extraction. Doux et puissant.",
    "d1.n":"Mangú aux trois","d1.d":"Le classique dominicain. Plantain écrasé, œufs, salami et fromage frit.",
    "d2.n":"Petit-déjeuner complet","d2.d":"Mangú, œufs, salami, fromage, jus naturel et café. Tout inclus.",
    "d3.n":"Toast à l'avocat","d3.d":"Pain artisanal grillé avec avocat frais, sel et citron.",
    "p1.n":"Tres leches","p1.d":"Gâteau moelleux trempé dans trois laits. Le favori de toujours.",
    "p2.n":"Brownie chaud","p2.d":"Brownie au chocolat avec glace à la vanille. Péché délicieux.",
    "p3.n":"Flan à la noix de coco","p3.d":"Flan crémeux au lait de coco et caramel artisanal.",
    "s1.n":"Sandwich du jour","s1.d":"Pain artisanal avec garniture fraîche du jour. Varie selon disponibilité.",
    "s2.n":"Empanadas maison","s2.d":"Garnies de fromage, poulet ou viande. Recette maison.",
    "s3.n":"Salade fraîche","s3.d":"Légumes frais, vinaigrette maison et croûtons artisanaux.",
    "b1.n":"Jus naturel","b1.d":"Fruit de la passion, orange, papaye ou tamarin. Frais du jour.",
    "b2.n":"Milk-shake tropical","b2.d":"Fruits tropicaux avec lait ou eau de coco. Épais et crémeux.",
    "b3.n":"Thé artisanal","b3.d":"Variété de thés spéciaux. Chaud ou froid selon votre préférence.",
    "cat.tag":"Les favoris","cat.title":"Spécialités de la maison",
    "cat.sub":"Les plats que nos clients commandent encore et encore. Ceux qu'il ne faut pas manquer.",
    "cat.fav":"Favori","cat.new":"Nouveau","cat.best":"Le meilleur",
    "sp1.n":"Latte matcha","sp1.d":"Matcha premium avec lait d'avoine vapeur. Vert, crémeux et addictif.",
    "sp2.n":"Croissant aux amandes","sp2.d":"Croissant du jour avec crème d'amandes et sucre glace.",
    "sp3.n":"Cheesecake à la goyave","sp3.d":"Cheesecake crémeux avec confiture de goyave artisanale. 100% local.",
    "sp4.n":"Club sandwich Deli","sp4.d":"Pain artisanal, poulet grillé, avocat et aïoli maison.",
    "gal.tag":"Le café","gal.title":"Notre espace",
    "g1":"Le bar","g2":"Boulangerie","g3":"Desserts","g4":"Intérieur","g5":"Terrasse",
    "gal.note":"✦ Photos réelles du café à venir prochainement.",
    "hrs.tag":"Quand nous rendre visite","hrs.open":"Ouvert aujourd'hui · Venez nous voir",
    "hrs.mon":"Lun","hrs.tue":"Mar","hrs.wed":"Mer","hrs.thu":"Jeu","hrs.fri":"Ven","hrs.sat":"Sam","hrs.sun":"Dim",
    "hrs.mon2":"Lundi – Vendredi","hrs.sat2":"Samedi","hrs.sun2":"Dimanche",
    "hrs.desc":"Du premier café du matin au dessert de l'après-midi. Ouverts 7 jours sur 7 car les envies de bien manger n'ont pas de jour de repos.",
    "hrs.cta":"Écrivez-nous",
    "loc.tag":"Où nous sommes","loc.desc":"Nous sommes au cœur de Santiago, République Dominicaine. Facile à trouver, avec parking et une atmosphère qui vaut le déplacement.",
    "loc.cta":"Ouvrir dans Google Maps","loc.open":"Voir sur Google Maps →",
    "con.tag":"Parlez-nous","con.sub":"Pour des commandes, réservations ou simplement savoir s'il reste du cheesecake. Nous répondons vite.",
    "con.wa":"WhatsApp · Commandes","con.p1":"Téléphone 1","con.p2":"Téléphone 2","con.email":"E-mail",
    "con.follow":"Suivez-nous",
    "footer.desc":"Café · Santiago, RD",
    "footer.copy":"© 2025 Deli Xuca · Santiago, République Dominicaine",
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
    nav.style.boxShadow = window.scrollY > 30
      ? '0 2px 20px rgba(61,139,94,0.08)'
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
    '.menu-card, .cat-card, .acard, .gal-item, .con-card, .hl-row'
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
