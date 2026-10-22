// ============================================
// MOCK DATA - RUMBERA MVP
// Estos datos serán reemplazados por Firestore en Fase 5
// ============================================

export const mockPrograms = [
  {
    id: 'prog-1',
    title: 'RUMBERA en VIVO',
    host: 'Carlos Martínez',
    time: '06:00 - 10:00',
    category: 'Magazine',
    image: '/baile.jpg',
    isLive: true,
    listeners: 1247,
  },
  {
    id: 'prog-2',
    title: 'Ritmo Tropical',
    host: 'María Fernanda López',
    time: '10:00 - 13:00',
    category: 'Música',
    image: '/baile.jpg',
    isLive: false,
    listeners: 0,
  },
  {
    id: 'prog-3',
    title: 'Noticias del Mediodía',
    host: 'Equipo Periodístico',
    time: '13:00 - 14:00',
    category: 'Noticias',
    image: '/baile.jpg',
    isLive: false,
    listeners: 0,
  },
  {
    id: 'prog-4',
    title: 'Tarde Deportiva',
    host: 'Andrés Ruiz',
    time: '14:00 - 16:00',
    category: 'Deportes',
    image: '/baile.jpg',
    isLive: false,
    listeners: 0,
  },
  {
    id: 'prog-5',
    title: 'Noche de Rock',
    host: 'Laura Gómez',
    time: '20:00 - 23:00',
    category: 'Música',
    image: '/baile.jpg',
    isLive: false,
    listeners: 0,
  },
];

export const mockPodcasts = [
  {
    id: 'pod-1',
    title: 'Historias de la Ciudad',
    author: 'Carlos Martínez',
    episodes: 24,
    duration: '45 min',
    image: '/baile.jpg',
    category: 'Documental',
  },
  {
    id: 'pod-2',
    title: 'Mesa Política',
    author: 'Equipo Periodístico',
    episodes: 52,
    duration: '60 min',
    image: '/baile.jpg',
    category: 'Política',
  },
  {
    id: 'pod-3',
    title: 'Ciencia y Futuro',
    author: 'Dra. Patricia Solano',
    episodes: 18,
    duration: '35 min',
    image: '/baile.jpg',
    category: 'Ciencia',
  },
  {
    id: 'pod-4',
    title: 'Cocina Poderosa',
    author: 'Chef Roberto Vargas',
    episodes: 30,
    duration: '25 min',
    image: '/baile.jpg',
    category: 'Lifestyle',
  },
];

export const mockNews = [
  {
    id: 'news-1',
    title: 'Gran concierto marca el inicio del festival de verano',
    summary: 'Más de 20.000 personas asistieron al evento inaugural que contó con artistas internacionales.',
    author: 'Redacción RUMBERA',
    date: '2026-07-15',
    category: 'Cultura',
    image: '/baile.jpg',
    isFeatured: true,
    readTime: '4 min',
  },
  {
    id: 'news-2',
    title: 'Nuevas inversiones transforman el sector tecnológico regional',
    summary: 'Empresas multinacionales anuncian la apertura de centros de desarrollo en la ciudad.',
    author: 'Andrés Ruiz',
    date: '2026-07-14',
    category: 'Economía',
    image: '/baile.jpg',
    isFeatured: false,
    readTime: '3 min',
  },
  {
    id: 'news-3',
    title: 'Equipo local clasifica a la final del campeonato nacional',
    summary: 'Tras una victoria histórica, el equipo disputará el título el próximo fin de semana.',
    author: 'María Fernanda López',
    date: '2026-07-14',
    category: 'Deportes',
    image: '/baile.jpg',
    isFeatured: false,
    readTime: '2 min',
  },
];

export const mockEvents = [
  {
    id: 'evt-1',
    title: 'Festival de Verano RUMBERA',
    date: '2026-08-15',
    time: '18:00',
    location: 'Parque Central',
    image: '/baile.jpg',
    attendees: 3420,
    price: 'Entrada libre',
  },
  {
    id: 'evt-2',
    title: 'Concierto Acústico en Vivo',
    date: '2026-07-28',
    time: '20:00',
    location: 'Teatro Municipal',
    image: '/baile.jpg',
    attendees: 850,
    price: '$25.000',
  },
];

export const mockGalleries = [
  {
    id: 'gal-1',
    title: 'Cobertura Festival 2025',
    cover: '/baile.jpg',
    photos: 48,
    category: 'Eventos',
  },
  {
    id: 'gal-2',
    title: 'Detrás de Cámaras',
    cover: '/baile.jpg',
    photos: 24,
    category: 'Estudio',
  },
  {
    id: 'gal-3',
    title: 'Conciertos del Mes',
    cover: '/baile.jpg',
    photos: 36,
    category: 'Música',
  },
];

export const mockSchedule = [
  { day: 'Lunes', programs: ['RUMBERA en VIVO', 'Ritmo Tropical', 'Noticias del Mediodía', 'Tarde Deportiva', 'Noche de Rock'] },
  { day: 'Martes', programs: ['RUMBERA en VIVO', 'Ritmo Tropical', 'Noticias del Mediodía', 'Tarde Deportiva', 'Noche de Rock'] },
  { day: 'Miércoles', programs: ['RUMBERA en VIVO', 'Ritmo Tropical', 'Noticias del Mediodía', 'Tarde Deportiva', 'Noche de Rock'] },
  { day: 'Jueves', programs: ['RUMBERA en VIVO', 'Ritmo Tropical', 'Noticias del Mediodía', 'Tarde Deportiva', 'Noche de Rock'] },
  { day: 'Viernes', programs: ['RUMBERA en VIVO', 'Ritmo Tropical', 'Noticias del Mediodía', 'Tarde Deportiva', 'Noche de Rock'] },
  { day: 'Sábado', programs: ['Mañana Familiar', 'Sábado Musical', 'Deportes Total', 'Fiesta Nocturna'] },
  { day: 'Domingo', programs: ['Domingo Relax', 'Clásicos Inmortales', 'Revista Dominical', 'Cierre Musical'] },
];

export const mockSponsors = [
  { id: 'sp-1', name: 'Banco Nacional', logo: '🏦' },
  { id: 'sp-2', name: 'Telecomunicaciones Plus', logo: '📡' },
  { id: 'sp-3', name: 'Aerolíneas del País', logo: '✈️' },
  { id: 'sp-4', name: 'Seguros Confianza', logo: '🛡️' },
  { id: 'sp-5', name: 'Autos Premium', logo: '🚗' },
  { id: 'sp-6', name: 'Supermercados del Pueblo', logo: '🛒' },
];