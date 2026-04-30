/* Instituto Xuca — main.js */

/* --- Traducciones --- */
const i18n = {
  es: {
    "nav.about":"Nosotros","nav.programs":"Programas","nav.catalog":"Catálogo",
    "nav.gallery":"Galería","nav.hours":"Horarios","nav.location":"Ubicación","nav.contact":"Contacto",
    "hero.over":"Instituto · Santiago · RD",
    "hero.l1":"Formación que","hero.l2":"transforma","hero.l3":"vidas.",
    "hero.sub":"Programas especializados diseñados para elevar tus habilidades profesionales. Docentes calificados, metodología moderna y certificaciones reconocidas.",
    "hero.cta1":"Ver programas","hero.cta2":"Inscribirse ahora",
    "hero.p1":"Certificado","hero.p2":"Horarios","hero.p3":"Santiago",
    "hero.crest":"Instituto Xuca",
    "hero.t1":"Excelencia académica","hero.t2":"Certificaciones","hero.t3":"Docentes expertos",
    "about.tag":"Nuestra misión",
    "about.p1":"Instituto Xuca es una institución educativa comprometida con la formación técnica y profesional de calidad en Santiago. Ofrecemos programas diseñados para responder a las demandas reales del mercado laboral dominicano.",
    "about.p2":"Nuestro equipo de docentes especializados combina conocimiento teórico con experiencia práctica, garantizando que cada estudiante adquiera las herramientas para destacar en su área.",
    "about.cta":"Conocer los programas",
    "ab.s1n":"+10","ab.s1l":"Programas","ab.s2n":"100%","ab.s2l":"Certificado","ab.s3n":"7d","ab.s3l":"Atención",
    "prog.tag":"Oferta académica","prog.title":"Programas especializados",
    "prog.sub":"Cada programa está diseñado para que adquieras conocimientos aplicables desde el primer día.",
    "prog.pop":"✦ Más inscrito","pc.cert":"Certificado",
    "p1.n":"Tecnología e Informática","p1.d":"Programación, diseño web, redes y soporte técnico. Preparación para el mundo digital.","p1.dur":"3 meses",
    "p2.n":"Administración & Contabilidad","p2.d":"Gestión empresarial, contabilidad básica y avanzada, nómina y administración de negocios.","p2.dur":"4 meses",
    "p3.n":"Idiomas & Comunicación","p3.d":"Inglés, francés y español avanzado. Comunicación profesional y habilidades de presentación.","p3.dur":"6 meses",
    "p4.n":"Marketing Digital","p4.d":"Redes sociales, SEO, publicidad digital, branding y estrategias de contenido para negocios.","p4.dur":"3 meses",
    "p5.n":"Diseño & Moda","p5.d":"Diseño gráfico, ilustración, corte y confección. Creatividad aplicada con herramientas actuales.","p5.dur":"4 meses",
    "p6.n":"Gastronomía & Pastelería","p6.d":"Técnicas culinarias, repostería profesional y gestión de cocina para emprendedores del sector.","p6.dur":"5 meses",
    "cat.tag":"Todos los cursos","cat.title":"Catálogo completo",
    "cat.sub":"Cursos cortos, talleres y diplomados disponibles según demanda. Consulta inscripciones y fechas.",
    "cat.all":"Todos","cat.c1":"Tecnología","cat.c2":"Negocios","cat.c3":"Arte & Diseño","cat.c4":"Idiomas",
    "cr.tech":"Tecnología","cr.biz":"Negocios","cr.art":"Arte","cr.lang":"Idioma",
    "cr1.n":"Microsoft Office avanzado","cr1.d":"Word, Excel, PowerPoint y Outlook a nivel profesional.","cr1.dur":"6 semanas",
    "cr2.n":"Diseño web básico","cr2.d":"HTML, CSS y fundamentos del desarrollo frontend.","cr2.dur":"8 semanas",
    "cr3.n":"Emprendimiento y negocios","cr3.d":"Plan de negocios, finanzas básicas y estrategia empresarial.","cr3.dur":"4 semanas",
    "cr4.n":"Contabilidad básica","cr4.d":"Introducción a la contabilidad, registros y estados financieros.","cr4.dur":"6 semanas",
    "cr5.n":"Diseño gráfico con Canva","cr5.d":"Diseño profesional para redes sociales y material impreso.","cr5.dur":"4 semanas",
    "cr6.n":"Fotografía digital","cr6.d":"Composición, iluminación y edición básica con Lightroom.","cr6.dur":"5 semanas",
    "cr7.n":"Inglés conversacional","cr7.d":"Niveles básico, intermedio y avanzado. Metodología comunicativa.","cr7.dur":"12 semanas",
    "cr8.n":"Francés básico","cr8.d":"Introducción a la lengua francesa para principiantes.","cr8.dur":"8 semanas",
    "cat.note":"✦ Consulta disponibilidad y fechas de inicio por WhatsApp o llamando directamente.",
    "gal.tag":"El instituto","gal.title":"Nuestras instalaciones",
    "g1":"El instituto","g2":"Laboratorio","g3":"Biblioteca","g4":"Salón de clases","g5":"Graduaciones",
    "gal.note":"✦ Próximamente fotos reales del instituto.",
    "hrs.tag":"Cuándo visitarnos","hrs.desc":"Atendemos todos los días de la semana. Puedes inscribirte, consultar información o visitar nuestras instalaciones en cualquiera de nuestros horarios.",
    "hrs.cta":"Consultar inscripción",
    "ht.day":"Día","ht.time":"Horario","ht.status":"Estado",
    "hrs.mon":"Lunes","hrs.tue":"Martes","hrs.wed":"Miércoles","hrs.thu":"Jueves",
    "hrs.fri":"Viernes","hrs.sat":"Sábado","hrs.sun":"Domingo","hrs.open":"Abierto",
    "loc.tag":"Encuéntranos","loc.desc":"Instituto Xuca está ubicado en Santiago, República Dominicana. Fácil acceso en transporte público y privado, con zona de estacionamiento disponible.",
    "loc.cta":"Abrir en Google Maps","loc.open":"Ver en Google Maps →",
    "con.tag":"Inscripciones abiertas","con.sub":"Contáctanos por WhatsApp o llámanos para orientarte sobre el programa ideal para tus metas profesionales. Respondemos de inmediato.",
    "con.wa":"WhatsApp · Inscripciones","con.p1":"Teléfono 1","con.p2":"Teléfono 2","con.email":"Correo institucional",
    "con.follow":"Síguenos",
    "footer.desc":"Clases Especializadas · Santiago, RD",
    "footer.copy":"© 2025 Instituto Xuca · Santiago, República Dominicana",
    "a11y.title":"Accesibilidad","a11y.contrast":"Alto contraste",
    "a11y.bigtext":"Texto grande","a11y.links":"Subrayar enlaces","a11y.font":"Fuente legible"
  },
  en: {
    "nav.about":"About","nav.programs":"Programs","nav.catalog":"Catalog",
    "nav.gallery":"Gallery","nav.hours":"Hours","nav.location":"Location","nav.contact":"Contact",
    "hero.over":"Institute · Santiago · DR",
    "hero.l1":"Education that","hero.l2":"transforms","hero.l3":"lives.",
    "hero.sub":"Specialized programs designed to elevate your professional skills. Qualified instructors, modern methodology and recognized certifications.",
    "hero.cta1":"View programs","hero.cta2":"Enroll now",
    "hero.p1":"Certified","hero.p2":"Schedules","hero.p3":"Santiago",
    "hero.crest":"Instituto Xuca",
    "hero.t1":"Academic excellence","hero.t2":"Certifications","hero.t3":"Expert instructors",
    "about.tag":"Our mission",
    "about.p1":"Instituto Xuca is an educational institution committed to quality technical and professional training in Santiago. We offer programs designed to meet the real demands of the Dominican labor market.",
    "about.p2":"Our team of specialized instructors combines theoretical knowledge with practical experience, ensuring that every student acquires the tools to stand out in their field.",
    "about.cta":"Explore programs",
    "ab.s1n":"+10","ab.s1l":"Programs","ab.s2n":"100%","ab.s2l":"Certified","ab.s3n":"7d","ab.s3l":"Service",
    "prog.tag":"Academic offer","prog.title":"Specialized programs",
    "prog.sub":"Each program is designed so you acquire applicable knowledge from day one.",
    "prog.pop":"✦ Most enrolled","pc.cert":"Certified",
    "p1.n":"Technology & Computing","p1.d":"Programming, web design, networks and technical support. Preparation for the digital world.","p1.dur":"3 months",
    "p2.n":"Administration & Accounting","p2.d":"Business management, basic and advanced accounting, payroll and business administration.","p2.dur":"4 months",
    "p3.n":"Languages & Communication","p3.d":"English, French and advanced Spanish. Professional communication and presentation skills.","p3.dur":"6 months",
    "p4.n":"Digital Marketing","p4.d":"Social media, SEO, digital advertising, branding and content strategies for businesses.","p4.dur":"3 months",
    "p5.n":"Design & Fashion","p5.d":"Graphic design, illustration, cutting and sewing. Applied creativity with current tools.","p5.dur":"4 months",
    "p6.n":"Gastronomy & Pastry","p6.d":"Culinary techniques, professional baking and kitchen management for sector entrepreneurs.","p6.dur":"5 months",
    "cat.tag":"All courses","cat.title":"Full catalog",
    "cat.sub":"Short courses, workshops and diploma programs available on demand. Check enrollments and dates.",
    "cat.all":"All","cat.c1":"Technology","cat.c2":"Business","cat.c3":"Art & Design","cat.c4":"Languages",
    "cr.tech":"Technology","cr.biz":"Business","cr.art":"Art","cr.lang":"Language",
    "cr1.n":"Advanced Microsoft Office","cr1.d":"Word, Excel, PowerPoint and Outlook at professional level.","cr1.dur":"6 weeks",
    "cr2.n":"Basic web design","cr2.d":"HTML, CSS and frontend development fundamentals.","cr2.dur":"8 weeks",
    "cr3.n":"Entrepreneurship & business","cr3.d":"Business plan, basic finance and business strategy.","cr3.dur":"4 weeks",
    "cr4.n":"Basic accounting","cr4.d":"Introduction to accounting, records and financial statements.","cr4.dur":"6 weeks",
    "cr5.n":"Graphic design with Canva","cr5.d":"Professional design for social media and print materials.","cr5.dur":"4 weeks",
    "cr6.n":"Digital photography","cr6.d":"Composition, lighting and basic editing with Lightroom.","cr6.dur":"5 weeks",
    "cr7.n":"Conversational English","cr7.d":"Basic, intermediate and advanced levels. Communicative methodology.","cr7.dur":"12 weeks",
    "cr8.n":"Basic French","cr8.d":"Introduction to the French language for beginners.","cr8.dur":"8 weeks",
    "cat.note":"✦ Check availability and start dates via WhatsApp or by calling directly.",
    "gal.tag":"The institute","gal.title":"Our facilities",
    "g1":"The institute","g2":"Laboratory","g3":"Library","g4":"Classroom","g5":"Graduations",
    "gal.note":"✦ Real institute photos coming soon.",
    "hrs.tag":"When to visit us","hrs.desc":"We serve every day of the week. You can enroll, request information or visit our facilities during any of our operating hours.",
    "hrs.cta":"Enrollment inquiry",
    "ht.day":"Day","ht.time":"Hours","ht.status":"Status",
    "hrs.mon":"Monday","hrs.tue":"Tuesday","hrs.wed":"Wednesday","hrs.thu":"Thursday",
    "hrs.fri":"Friday","hrs.sat":"Saturday","hrs.sun":"Sunday","hrs.open":"Open",
    "loc.tag":"Find us","loc.desc":"Instituto Xuca is located in Santiago, Dominican Republic. Easy access by public and private transport, with parking available.",
    "loc.cta":"Open in Google Maps","loc.open":"View on Google Maps →",
    "con.tag":"Enrollments open","con.sub":"Contact us via WhatsApp or call us for guidance on the ideal program for your professional goals. We respond immediately.",
    "con.wa":"WhatsApp · Enrollments","con.p1":"Phone 1","con.p2":"Phone 2","con.email":"Institutional email",
    "con.follow":"Follow us",
    "footer.desc":"Specialized Courses · Santiago, DR",
    "footer.copy":"© 2025 Instituto Xuca · Santiago, Dominican Republic",
    "a11y.title":"Accessibility","a11y.contrast":"High contrast",
    "a11y.bigtext":"Large text","a11y.links":"Underline links","a11y.font":"Readable font"
  },
  fr: {
    "nav.about":"À propos","nav.programs":"Programmes","nav.catalog":"Catalogue",
    "nav.gallery":"Galerie","nav.hours":"Horaires","nav.location":"Localisation","nav.contact":"Contact",
    "hero.over":"Institut · Santiago · RD",
    "hero.l1":"Une formation qui","hero.l2":"transforme","hero.l3":"des vies.",
    "hero.sub":"Programmes spécialisés conçus pour élever vos compétences professionnelles. Enseignants qualifiés, méthodologie moderne et certifications reconnues.",
    "hero.cta1":"Voir les programmes","hero.cta2":"S'inscrire maintenant",
    "hero.p1":"Certifié","hero.p2":"Horaires","hero.p3":"Santiago",
    "hero.crest":"Instituto Xuca",
    "hero.t1":"Excellence académique","hero.t2":"Certifications","hero.t3":"Experts enseignants",
    "about.tag":"Notre mission",
    "about.p1":"Instituto Xuca est un établissement d'enseignement engagé dans la formation technique et professionnelle de qualité à Santiago. Nous proposons des programmes conçus pour répondre aux besoins réels du marché du travail dominicain.",
    "about.p2":"Notre équipe d'enseignants spécialisés combine connaissances théoriques et expérience pratique, garantissant que chaque étudiant acquière les outils pour se démarquer dans son domaine.",
    "about.cta":"Découvrir les programmes",
    "ab.s1n":"+10","ab.s1l":"Programmes","ab.s2n":"100%","ab.s2l":"Certifié","ab.s3n":"7j","ab.s3l":"Service",
    "prog.tag":"Offre académique","prog.title":"Programmes spécialisés",
    "prog.sub":"Chaque programme est conçu pour que vous acquériez des connaissances applicables dès le premier jour.",
    "prog.pop":"✦ Le plus inscrit","pc.cert":"Certifié",
    "p1.n":"Technologie & Informatique","p1.d":"Programmation, conception web, réseaux et support technique. Préparation au monde numérique.","p1.dur":"3 mois",
    "p2.n":"Administration & Comptabilité","p2.d":"Gestion d'entreprise, comptabilité de base et avancée, paie et administration des affaires.","p2.dur":"4 mois",
    "p3.n":"Langues & Communication","p3.d":"Anglais, français et espagnol avancé. Communication professionnelle et compétences de présentation.","p3.dur":"6 mois",
    "p4.n":"Marketing Digital","p4.d":"Réseaux sociaux, SEO, publicité numérique, branding et stratégies de contenu pour les entreprises.","p4.dur":"3 mois",
    "p5.n":"Design & Mode","p5.d":"Design graphique, illustration, coupe et couture. Créativité appliquée avec les outils actuels.","p5.dur":"4 mois",
    "p6.n":"Gastronomie & Pâtisserie","p6.d":"Techniques culinaires, pâtisserie professionnelle et gestion de cuisine pour les entrepreneurs du secteur.","p6.dur":"5 mois",
    "cat.tag":"Tous les cours","cat.title":"Catalogue complet",
    "cat.sub":"Cours courts, ateliers et diplômes disponibles sur demande. Consultez les inscriptions et les dates.",
    "cat.all":"Tous","cat.c1":"Technologie","cat.c2":"Affaires","cat.c3":"Art & Design","cat.c4":"Langues",
    "cr.tech":"Technologie","cr.biz":"Affaires","cr.art":"Art","cr.lang":"Langue",
    "cr1.n":"Microsoft Office avancé","cr1.d":"Word, Excel, PowerPoint et Outlook au niveau professionnel.","cr1.dur":"6 semaines",
    "cr2.n":"Conception web de base","cr2.d":"HTML, CSS et fondamentaux du développement frontend.","cr2.dur":"8 semaines",
    "cr3.n":"Entrepreneuriat & affaires","cr3.d":"Plan d'affaires, finances de base et stratégie d'entreprise.","cr3.dur":"4 semaines",
    "cr4.n":"Comptabilité de base","cr4.d":"Introduction à la comptabilité, enregistrements et états financiers.","cr4.dur":"6 semaines",
    "cr5.n":"Design graphique avec Canva","cr5.d":"Design professionnel pour les réseaux sociaux et l'imprimerie.","cr5.dur":"4 semaines",
    "cr6.n":"Photographie numérique","cr6.d":"Composition, éclairage et retouche de base avec Lightroom.","cr6.dur":"5 semaines",
    "cr7.n":"Anglais conversationnel","cr7.d":"Niveaux débutant, intermédiaire et avancé. Méthodologie communicative.","cr7.dur":"12 semaines",
    "cr8.n":"Français de base","cr8.d":"Introduction à la langue française pour débutants.","cr8.dur":"8 semaines",
    "cat.note":"✦ Vérifiez la disponibilité et les dates de début par WhatsApp ou en appelant directement.",
    "gal.tag":"L'institut","gal.title":"Nos installations",
    "g1":"L'institut","g2":"Laboratoire","g3":"Bibliothèque","g4":"Salle de classe","g5":"Remises de diplômes",
    "gal.note":"✦ Photos réelles de l'institut à venir prochainement.",
    "hrs.tag":"Quand nous rendre visite","hrs.desc":"Nous servons tous les jours de la semaine. Vous pouvez vous inscrire, demander des informations ou visiter nos installations pendant nos heures de fonctionnement.",
    "hrs.cta":"Renseignements d'inscription",
    "ht.day":"Jour","ht.time":"Horaires","ht.status":"Statut",
    "hrs.mon":"Lundi","hrs.tue":"Mardi","hrs.wed":"Mercredi","hrs.thu":"Jeudi",
    "hrs.fri":"Vendredi","hrs.sat":"Samedi","hrs.sun":"Dimanche","hrs.open":"Ouvert",
    "loc.tag":"Trouvez-nous","loc.desc":"Instituto Xuca est situé à Santiago, République Dominicaine. Accès facile en transports en commun et privés, avec parking disponible.",
    "loc.cta":"Ouvrir dans Google Maps","loc.open":"Voir sur Google Maps →",
    "con.tag":"Inscriptions ouvertes","con.sub":"Contactez-nous par WhatsApp ou appelez-nous pour des conseils sur le programme idéal pour vos objectifs professionnels. Nous répondons immédiatement.",
    "con.wa":"WhatsApp · Inscriptions","con.p1":"Téléphone 1","con.p2":"Téléphone 2","con.email":"E-mail institutionnel",
    "con.follow":"Suivez-nous",
    "footer.desc":"Cours Spécialisés · Santiago, RD",
    "footer.copy":"© 2025 Instituto Xuca · Santiago, République Dominicaine",
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
  document.querySelectorAll('.cat-row').forEach(row => {
    row.style.display = (cat === 'all' || row.dataset.cat === cat) ? 'grid' : 'none';
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
      ? '0 2px 20px rgba(26,42,74,0.08)'
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
    '.prog-card, .cat-row, .gal-item, .con-card, .ht-row, .acard'
  ).forEach((el, i) => {
    el.style.opacity    = '0';
    el.style.transform  = 'translateY(14px)';
    el.style.transition = `opacity 0.4s ease ${i * 0.035}s, transform 0.4s ease ${i * 0.035}s`;
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
