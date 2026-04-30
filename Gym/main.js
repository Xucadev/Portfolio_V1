/* Gym Xuca — main.js */

/* --- Traducciones --- */
const i18n = {
  es: {
    "nav.about":"Nosotros","nav.plans":"Planes","nav.classes":"Clases",
    "nav.gallery":"Galería","nav.hours":"Horarios","nav.location":"Ubicación","nav.contact":"Contacto",
    "hero.pre":"Santiago · RD · Abierto ahora",
    "hero.l1":"SIN","hero.l2":"EXCUSAS.","hero.l3":"SIN LÍMITES.",
    "hero.sub":"El gimnasio que estabas buscando. Equipos de alta gama, entrenadores certificados y una comunidad que te empuja a dar más.",
    "hero.cta1":"Empezar ahora","hero.cta2":"Ver planes",
    "hero.s1":"días / semana","hero.s2":"apertura","hero.s3":"dedicación",
    "hero.vtag":"#GymXuca · Santiago",
    "about.tag":"Por qué elegirnos",
    "about.p1":"Gym Xuca nació para romper la excusa de que no hay un buen gimnasio en Santiago. Equipos modernos, clases grupales, entrenadores personales y un ambiente que te motiva desde el primer día.",
    "about.p2":"No importa si estás empezando o si ya eres avanzado. Aquí encontrarás tu lugar y tu comunidad.",
    "about.cta":"Ver planes",
    "ac1.t":"Equipos modernos","ac1.d":"Máquinas de última generación para cada grupo muscular.",
    "ac2.t":"Entrenadores certificados","ac2.d":"Personal calificado que te guía y corrige en cada ejercicio.",
    "ac3.t":"Clases grupales","ac3.d":"Spinning, crossfit, yoga, zumba y más. Cada semana.",
    "ac4.t":"Asesoría nutricional","ac4.d":"Plan alimenticio personalizado para maximizar tus resultados.",
    "plans.tag":"Membresías","plans.title":"ELIGE TU PLAN",
    "plans.sub":"Sin contratos largos. Sin letras pequeñas. Solo resultados.",
    "plan.mo":"/mes","plan.cta":"Elegir plan","plan.pop":"Más popular",
    "p1.label":"Básico",
    "p1.f1":"✓ Acceso sala de pesas","p1.f2":"✓ Área de cardio","p1.f3":"✓ Vestuarios y duchas",
    "p1.f4":"✗ Clases grupales","p1.f5":"✗ Entrenador personal",
    "p2.label":"Pro",
    "p2.f1":"✓ Todo lo del plan básico","p2.f2":"✓ Clases grupales ilimitadas",
    "p2.f3":"✓ Evaluación física","p2.f4":"✓ App de seguimiento","p2.f5":"✗ Entrenador personal",
    "p3.label":"Elite",
    "p3.f1":"✓ Todo lo del plan Pro","p3.f2":"✓ Entrenador personal (4 sesiones)",
    "p3.f3":"✓ Plan nutricional","p3.f4":"✓ Acceso prioritario","p3.f5":"✓ Suplementos de bienvenida",
    "cls.tag":"Programas","cls.title":"CLASES GRUPALES",
    "cls.sub":"Entrena acompañado. La energía del grupo multiplica tus resultados.",
    "cls.hot":"🔥 Popular",
    "cl1.n":"Spinning","cl1.d":"Cardio de alta intensidad en bicicleta estática. Quema hasta 600 kcal por sesión.","cl1.t":"Cardio · 45 min",
    "cl2.n":"CrossFit","cl2.d":"Entrenamiento funcional de alta intensidad. Fuerza, resistencia y agilidad al límite.","cl2.t":"Funcional · 60 min",
    "cl3.n":"Yoga & Meditación","cl3.d":"Flexibilidad, equilibrio y bienestar mental. El complemento perfecto al entrenamiento fuerte.","cl3.t":"Bienestar · 50 min",
    "cl4.n":"Zumba","cl4.d":"Baile y cardio fusionados en una clase que no parece ejercicio pero sí lo es.","cl4.t":"Cardio · 50 min",
    "cl5.n":"Box Fitness","cl5.d":"Técnicas de boxeo aplicadas al fitness. Coordinación, fuerza y explosividad.","cl5.t":"Combate · 55 min",
    "cl6.n":"HIIT","cl6.d":"Intervalos de alta intensidad. Máximo resultado en el mínimo tiempo posible.","cl6.t":"Intensidad · 30 min",
    "gal.tag":"El gym","gal.title":"NUESTRAS INSTALACIONES",
    "g1":"Sala de pesas","g2":"Spinning","g3":"CrossFit","g4":"Área de cardio","g5":"Yoga",
    "gal.note":"✦ Próximamente fotos reales del gimnasio.",
    "hrs.tag":"Cuándo vernos","hrs.desc":"No hay días de descanso del progreso. Abrimos 7 días a la semana para que nunca tengas que saltarte tu entrenamiento.",
    "hrs.cta":"Inscribirse ahora","hrs.to":"a las",
    "hrs.mon":"Lunes","hrs.tue":"Martes","hrs.wed":"Miércoles","hrs.thu":"Jueves",
    "hrs.fri":"Viernes","hrs.sat":"Sábado","hrs.sun":"Domingo",
    "loc.tag":"Dónde estamos","loc.desc":"Ubicados en Santiago, República Dominicana. Fácil acceso, estacionamiento disponible y zona segura para que te concentres solo en entrenar.",
    "loc.cta":"Abrir en Google Maps","loc.open":"Ver en Google Maps →",
    "con.tag":"Únete al gym","con.sub":"Escríbenos por WhatsApp o llámanos. Te orientamos con el plan que mejor se adapta a tus metas.",
    "con.wa":"WhatsApp · Inscripciones","con.p1":"Teléfono 1","con.p2":"Teléfono 2","con.email":"Correo",
    "con.follow":"Síguenos",
    "footer.desc":"Gimnasio Profesional · Santiago, RD",
    "footer.copy":"© 2025 Gym Xuca · Santiago, República Dominicana",
    "a11y.title":"Accesibilidad","a11y.contrast":"Alto contraste",
    "a11y.bigtext":"Texto grande","a11y.links":"Subrayar enlaces","a11y.font":"Fuente legible"
  },
  en: {
    "nav.about":"About","nav.plans":"Plans","nav.classes":"Classes",
    "nav.gallery":"Gallery","nav.hours":"Hours","nav.location":"Location","nav.contact":"Contact",
    "hero.pre":"Santiago · DR · Open now",
    "hero.l1":"NO","hero.l2":"EXCUSES.","hero.l3":"NO LIMITS.",
    "hero.sub":"The gym you were looking for. Top-tier equipment, certified trainers and a community that pushes you to give more.",
    "hero.cta1":"Start now","hero.cta2":"View plans",
    "hero.s1":"days / week","hero.s2":"opening","hero.s3":"dedication",
    "hero.vtag":"#GymXuca · Santiago",
    "about.tag":"Why choose us",
    "about.p1":"Gym Xuca was born to break the excuse that there's no good gym in Santiago. Modern equipment, group classes, personal trainers and an environment that motivates you from day one.",
    "about.p2":"Whether you're just starting out or already advanced. Here you'll find your place and your community.",
    "about.cta":"View plans",
    "ac1.t":"Modern equipment","ac1.d":"Latest generation machines for every muscle group.",
    "ac2.t":"Certified trainers","ac2.d":"Qualified staff that guides and corrects you in every exercise.",
    "ac3.t":"Group classes","ac3.d":"Spinning, crossfit, yoga, zumba and more. Every week.",
    "ac4.t":"Nutritional advice","ac4.d":"Personalized meal plan to maximize your results.",
    "plans.tag":"Memberships","plans.title":"CHOOSE YOUR PLAN",
    "plans.sub":"No long contracts. No fine print. Just results.",
    "plan.mo":"/month","plan.cta":"Choose plan","plan.pop":"Most popular",
    "p1.label":"Basic",
    "p1.f1":"✓ Weight room access","p1.f2":"✓ Cardio area","p1.f3":"✓ Locker rooms & showers",
    "p1.f4":"✗ Group classes","p1.f5":"✗ Personal trainer",
    "p2.label":"Pro",
    "p2.f1":"✓ Everything in Basic","p2.f2":"✓ Unlimited group classes",
    "p2.f3":"✓ Physical assessment","p2.f4":"✓ Tracking app","p2.f5":"✗ Personal trainer",
    "p3.label":"Elite",
    "p3.f1":"✓ Everything in Pro","p3.f2":"✓ Personal trainer (4 sessions)",
    "p3.f3":"✓ Nutrition plan","p3.f4":"✓ Priority access","p3.f5":"✓ Welcome supplements",
    "cls.tag":"Programs","cls.title":"GROUP CLASSES",
    "cls.sub":"Train together. The group's energy multiplies your results.",
    "cls.hot":"🔥 Popular",
    "cl1.n":"Spinning","cl1.d":"High-intensity cardio on a stationary bike. Burns up to 600 kcal per session.","cl1.t":"Cardio · 45 min",
    "cl2.n":"CrossFit","cl2.d":"High-intensity functional training. Strength, endurance and agility to the limit.","cl2.t":"Functional · 60 min",
    "cl3.n":"Yoga & Meditation","cl3.d":"Flexibility, balance and mental well-being. The perfect complement to intense training.","cl3.t":"Wellness · 50 min",
    "cl4.n":"Zumba","cl4.d":"Dance and cardio fused in a class that doesn't feel like exercise but definitely is.","cl4.t":"Cardio · 50 min",
    "cl5.n":"Box Fitness","cl5.d":"Boxing techniques applied to fitness. Coordination, strength and explosiveness.","cl5.t":"Combat · 55 min",
    "cl6.n":"HIIT","cl6.d":"High-intensity intervals. Maximum results in the shortest time possible.","cl6.t":"Intensity · 30 min",
    "gal.tag":"The gym","gal.title":"OUR FACILITIES",
    "g1":"Weight room","g2":"Spinning","g3":"CrossFit","g4":"Cardio area","g5":"Yoga",
    "gal.note":"✦ Real gym photos coming soon.",
    "hrs.tag":"When to visit","hrs.desc":"There are no rest days from progress. Open 7 days a week so you never have to skip your workout.",
    "hrs.cta":"Sign up now","hrs.to":"to",
    "hrs.mon":"Monday","hrs.tue":"Tuesday","hrs.wed":"Wednesday","hrs.thu":"Thursday",
    "hrs.fri":"Friday","hrs.sat":"Saturday","hrs.sun":"Sunday",
    "loc.tag":"Where we are","loc.desc":"Located in Santiago, Dominican Republic. Easy access, parking available and a safe area so you can focus only on training.",
    "loc.cta":"Open in Google Maps","loc.open":"View on Google Maps →",
    "con.tag":"Join the gym","con.sub":"Message us on WhatsApp or call us. We'll guide you to the plan that best fits your goals.",
    "con.wa":"WhatsApp · Sign-ups","con.p1":"Phone 1","con.p2":"Phone 2","con.email":"Email",
    "con.follow":"Follow us",
    "footer.desc":"Professional Gym · Santiago, DR",
    "footer.copy":"© 2025 Gym Xuca · Santiago, Dominican Republic",
    "a11y.title":"Accessibility","a11y.contrast":"High contrast",
    "a11y.bigtext":"Large text","a11y.links":"Underline links","a11y.font":"Readable font"
  },
  fr: {
    "nav.about":"À propos","nav.plans":"Abonnements","nav.classes":"Cours",
    "nav.gallery":"Galerie","nav.hours":"Horaires","nav.location":"Localisation","nav.contact":"Contact",
    "hero.pre":"Santiago · RD · Ouvert maintenant",
    "hero.l1":"SANS","hero.l2":"EXCUSES.","hero.l3":"SANS LIMITES.",
    "hero.sub":"La salle de sport que vous cherchiez. Équipements haut de gamme, entraîneurs certifiés et une communauté qui vous pousse à donner plus.",
    "hero.cta1":"Commencer maintenant","hero.cta2":"Voir les abonnements",
    "hero.s1":"jours / semaine","hero.s2":"ouverture","hero.s3":"dédication",
    "hero.vtag":"#GymXuca · Santiago",
    "about.tag":"Pourquoi nous choisir",
    "about.p1":"Gym Xuca est né pour briser l'excuse qu'il n'y a pas de bonne salle de sport à Santiago. Équipements modernes, cours collectifs, entraîneurs personnels et une atmosphère qui vous motive dès le premier jour.",
    "about.p2":"Peu importe si vous débutez ou si vous êtes avancé. Vous trouverez ici votre place et votre communauté.",
    "about.cta":"Voir les abonnements",
    "ac1.t":"Équipements modernes","ac1.d":"Machines de dernière génération pour chaque groupe musculaire.",
    "ac2.t":"Entraîneurs certifiés","ac2.d":"Personnel qualifié qui vous guide et vous corrige dans chaque exercice.",
    "ac3.t":"Cours collectifs","ac3.d":"Spinning, crossfit, yoga, zumba et plus. Chaque semaine.",
    "ac4.t":"Conseils nutritionnels","ac4.d":"Plan alimentaire personnalisé pour maximiser vos résultats.",
    "plans.tag":"Abonnements","plans.title":"CHOISISSEZ VOTRE PLAN",
    "plans.sub":"Sans longs contrats. Sans petits caractères. Juste des résultats.",
    "plan.mo":"/mois","plan.cta":"Choisir ce plan","plan.pop":"Le plus populaire",
    "p1.label":"Basique",
    "p1.f1":"✓ Accès salle de musculation","p1.f2":"✓ Zone cardio","p1.f3":"✓ Vestiaires et douches",
    "p1.f4":"✗ Cours collectifs","p1.f5":"✗ Entraîneur personnel",
    "p2.label":"Pro",
    "p2.f1":"✓ Tout du plan Basique","p2.f2":"✓ Cours collectifs illimités",
    "p2.f3":"✓ Évaluation physique","p2.f4":"✓ Application de suivi","p2.f5":"✗ Entraîneur personnel",
    "p3.label":"Élite",
    "p3.f1":"✓ Tout du plan Pro","p3.f2":"✓ Entraîneur personnel (4 séances)",
    "p3.f3":"✓ Plan nutritionnel","p3.f4":"✓ Accès prioritaire","p3.f5":"✓ Suppléments de bienvenue",
    "cls.tag":"Programmes","cls.title":"COURS COLLECTIFS",
    "cls.sub":"Entraînez-vous ensemble. L'énergie du groupe multiplie vos résultats.",
    "cls.hot":"🔥 Populaire",
    "cl1.n":"Spinning","cl1.d":"Cardio haute intensité sur vélo stationnaire. Brûle jusqu'à 600 kcal par séance.","cl1.t":"Cardio · 45 min",
    "cl2.n":"CrossFit","cl2.d":"Entraînement fonctionnel haute intensité. Force, endurance et agilité à la limite.","cl2.t":"Fonctionnel · 60 min",
    "cl3.n":"Yoga & Méditation","cl3.d":"Flexibilité, équilibre et bien-être mental. Le complément parfait à l'entraînement intense.","cl3.t":"Bien-être · 50 min",
    "cl4.n":"Zumba","cl4.d":"Danse et cardio fusionnés dans un cours qui ne ressemble pas à de l'exercice mais l'est vraiment.","cl4.t":"Cardio · 50 min",
    "cl5.n":"Box Fitness","cl5.d":"Techniques de boxe appliquées au fitness. Coordination, force et explosivité.","cl5.t":"Combat · 55 min",
    "cl6.n":"HIIT","cl6.d":"Intervalles haute intensité. Résultats maximum en un minimum de temps.","cl6.t":"Intensité · 30 min",
    "gal.tag":"La salle","gal.title":"NOS INSTALLATIONS",
    "g1":"Salle de musculation","g2":"Spinning","g3":"CrossFit","g4":"Zone cardio","g5":"Yoga",
    "gal.note":"✦ Photos réelles de la salle à venir prochainement.",
    "hrs.tag":"Quand nous rendre visite","hrs.desc":"Il n'y a pas de jours de repos du progrès. Ouvert 7 jours sur 7 pour que vous ne manquiez jamais votre entraînement.",
    "hrs.cta":"S'inscrire maintenant","hrs.to":"à",
    "hrs.mon":"Lundi","hrs.tue":"Mardi","hrs.wed":"Mercredi","hrs.thu":"Jeudi",
    "hrs.fri":"Vendredi","hrs.sat":"Samedi","hrs.sun":"Dimanche",
    "loc.tag":"Où nous sommes","loc.desc":"Situés à Santiago, République Dominicaine. Accès facile, parking disponible et zone sécurisée pour que vous vous concentriez uniquement sur l'entraînement.",
    "loc.cta":"Ouvrir dans Google Maps","loc.open":"Voir sur Google Maps →",
    "con.tag":"Rejoignez le gym","con.sub":"Écrivez-nous sur WhatsApp ou appelez-nous. Nous vous orientons vers le plan qui correspond le mieux à vos objectifs.",
    "con.wa":"WhatsApp · Inscriptions","con.p1":"Téléphone 1","con.p2":"Téléphone 2","con.email":"E-mail",
    "con.follow":"Suivez-nous",
    "footer.desc":"Salle de Sport Professionnelle · Santiago, RD",
    "footer.copy":"© 2025 Gym Xuca · Santiago, République Dominicaine",
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

/* --- Hamburguesa --- */
function toggleMenu() {
  document.getElementById('navMenu').classList.toggle('open');
}

/* --- Navbar scroll --- */
function initNavScroll() {
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    nav.style.opacity = window.scrollY > 20 ? '1' : '1';
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
    '.plan-card, .cls-card, .acard, .gal-item, .con-card, .h-row'
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
