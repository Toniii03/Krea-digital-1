export const CONTACT_EMAIL = 'kreadigitalteam@gmail.com'

export const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Sobre Nosotros', href: '#nosotros' },
  { label: 'Precios', href: '#precios' },
  { label: 'Contacto', href: '#contacto' },
] as const

export const KREA_LETTERS = [
  { letter: 'K', word: 'Creación', description: 'Diseñamos y construimos tu identidad digital desde cero.' },
  { letter: 'R', word: 'Redes', description: 'Gestionamos tus redes sociales con estrategia y creatividad.' },
  { letter: 'E', word: 'Experiencia', description: 'Creamos experiencias digitales que conectan con tu audiencia.' },
  { letter: 'A', word: 'Alcance', description: 'Ampliamos tu visibilidad y llevamos tu marca más lejos.' },
] as const

export const SERVICES = [
  {
    title: 'Mantenimiento Web Seguro',
    description:
      'Tu página web siempre actualizada, optimizada y protegida. Nos encargamos del mantenimiento técnico para que tú te centres en tu negocio.',
    icon: 'web' as const,
  },
  {
    title: 'Gestión de Redes Sociales',
    description:
      'Contenido profesional, calendario editorial y engagement constante. Construimos tu comunidad digital con estrategia y creatividad.',
    icon: 'social' as const,
  },
  {
    title: 'Creación de Eventos Impactantes',
    description:
      'Organizamos, promocionamos y cubrimos tus eventos. Desde la planificación hasta la difusión, hacemos que cada evento deje huella.',
    icon: 'events' as const,
  },
] as const

export const WHY_CHOOSE_US = [
  { label: 'Imagen profesional', icon: 'star' as const },
  { label: 'Más alcance y visibilidad', icon: 'users' as const },
  { label: 'Ahorro de tiempo', icon: 'clock' as const },
  { label: 'Estrategias personalizadas', icon: 'target' as const },
  { label: 'Crecimiento de marca', icon: 'chart' as const },
] as const

export const PACK_INCLUDES = [
  {
    title: 'Página Web',
    items: [
      'Creación y mantenimiento de la web',
      'Actualización de contenidos',
      'Optimización SEO básica',
    ],
    icon: 'web' as const,
  },
  {
    title: 'Redes Sociales',
    items: [
      'Gestión profesional de redes',
      'Diseño de publicaciones',
      'Calendario de contenidos mensual',
      'Atención básica a mensajes',
    ],
    icon: 'social' as const,
  },
  {
    title: 'Eventos',
    items: [
      'Organización y planificación',
      'Promoción en redes sociales',
      'Diseño de cartelería digital',
      'Cobertura y difusión del evento',
    ],
    icon: 'events' as const,
  },
] as const

export const PRICING_TIERS = [
  {
    id: 'basico',
    name: 'Básico',
    slogan: 'Impulsa tu negocio cada día',
    price: 350,
    featured: false,
    services: [
      {
        title: 'Página Web',
        items: ['Mantenimiento web', 'Actualización de contenidos', 'Optimización básica SEO'],
      },
      {
        title: 'Redes Sociales',
        items: ['Gestión de 2 redes sociales', '8 publicaciones al mes', '10 historias al mes', 'Atención básica a mensajes'],
      },
      {
        title: 'Eventos',
        items: ['Organización de 1 evento al mes', 'Promoción en redes sociales', 'Diseño de cartel digital', 'Cobertura básica del evento'],
      },
    ],
    benefits: ['Más visibilidad', 'Imagen profesional', 'Ahorro de tiempo', 'Crecimiento de marca'],
    footerSlogan: 'Tu éxito, nuestro objetivo',
  },
  {
    id: 'digital',
    name: 'Digital & Eventos',
    slogan: 'Tu empresa, más visible y más profesional',
    price: 650,
    featured: true,
    services: [
      {
        title: 'Página Web',
        items: ['Creación y mantenimiento de la web', 'Actualización de contenidos', 'Optimización SEO básica'],
      },
      {
        title: 'Redes Sociales',
        items: ['Gestión profesional de redes', 'Diseño de publicaciones', 'Calendario de contenidos mensual', 'Atención básica a mensajes'],
      },
      {
        title: 'Eventos',
        items: ['Organización y planificación', 'Promoción en redes sociales', 'Diseño de cartelería digital', 'Cobertura y difusión del evento'],
      },
    ],
    benefits: ['Gestión web', 'Redes sociales', 'Diseño gráfico', 'Promoción de eventos', 'Informe mensual de resultados'],
    footerSlogan: 'Impulsamos tu presencia digital',
  },
  {
    id: 'premium',
    name: 'Premium',
    slogan: 'Máxima visibilidad, máximos resultados',
    price: 1200,
    featured: false,
    isPremium: true,
    services: [
      {
        title: 'Página Web',
        items: ['Gestión web completa', 'Actualización constante de contenidos', 'Optimización SEO avanzada', 'Soporte técnico prioritario'],
      },
      {
        title: 'Redes Sociales',
        items: ['Gestión de todas las redes sociales', '25 publicaciones al mes', 'Historias ilimitadas', 'Atención prioritaria a mensajes', 'Estrategia de contenido personalizada'],
      },
      {
        title: 'Eventos',
        items: ['Organización y promoción de eventos ilimitados', 'Planificación completa', 'Diseño de material digital', 'Cobertura y difusión profesional', 'Informe de impacto de cada evento'],
      },
    ],
    benefits: ['Máximo alcance', 'Estrategias personalizadas', 'Liderazgo digital', 'Resultados reales'],
    footerSlogan: 'Tu marca, en lo más alto',
  },
] as const
