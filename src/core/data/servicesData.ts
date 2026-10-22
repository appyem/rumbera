export interface Service {
  id: string;
  category: 'Audio' | 'Video' | 'Streaming' | 'Producción' | 'Radio/Podcast';
  title: string;
  description: string;
  equipment: string[];
  image: string;
}

export const servicesData: Service[] = [
  // 🎙️ AUDIO (1-6)
  {
    id: 's1', category: 'Audio', title: 'Alquiler de Consolas de Sonido',
    description: 'Consolas de mezcla profesionales analogas y digitales para eventos de cualquier escala.',
    equipment: ['Midas M32', 'Yamaha TF5', 'Allen & Heath QU-16', 'Cables y conectores XLR'],
    image: '/baile.jpg'
  },
  {
    id: 's2', category: 'Audio', title: 'Alquiler de Micrófonos Profesionales',
    description: 'Micrófonos de alta gama para voz, instrumentos y captación ambiental.',
    equipment: ['Shure SM58', 'Sennheiser EW 100 G4 (Inalámbricos)', 'Rode NTG-3 (Shotgun)', 'Soportes y bases'],
    image: '/baile.jpg'
  },
  {
    id: 's3', category: 'Audio', title: 'Alquiler de Sistemas de Parlantes',
    description: 'Sistemas de sonido line array y point source para cobertura total.',
    equipment: ['JBL PRX800', 'QSC K12.2', 'Subwoofers 18"', 'Monitores de piso'],
    image: '/baile.jpg'
  },
  {
    id: 's4', category: 'Audio', title: 'Grabación de Audio en Locación',
    description: 'Captación de audio profesional en exteriores o estudios temporales.',
    equipment: ['Grabadora Zoom F8n', 'Micrófonos de ambiente', 'Aislantes acústicos portátiles'],
    image: '/baile.jpg'
  },
  {
    id: 's5', category: 'Audio', title: 'Producción de Cuñas y Radios Comerciales',
    description: 'Creación de spots publicitarios con voz profesional y producción musical.',
    equipment: ['Estudio de postproducción', 'Bancos de sonido licenciados', 'Voces en off profesionales'],
    image: '/baile.jpg'
  },
  {
    id: 's6', category: 'Audio', title: 'Edición y Masterización de Audio',
    description: 'Procesamiento final de pistas para lograr calidad de broadcast.',
    equipment: ['Pro Tools', 'Plugins Waves/UAD', 'Monitores de referencia'],
    image: '/baile.jpg'
  },

  // 📹 VIDEO (7-12)
  {
    id: 's7', category: 'Video', title: 'Alquiler de Cámaras Profesionales 4K',
    description: 'Cámaras cinema y DSLR para grabación de alta resolución.',
    equipment: ['Sony A7S III', 'Blackmagic Pocket 6K', 'Lentes G Master', 'Tarjetas CFexpress'],
    image: '/baile.jpg'
  },
  {
    id: 's8', category: 'Video', title: 'Alquiler de Drones para Tomas Aéreas',
    description: 'Captura de video y foto aérea con pilotos certificados.',
    equipment: ['DJI Mavic 3 Pro', 'DJI Inspire 2', 'Filtros ND', 'Baterías de vuelo extendidas'],
    image: '/baile.jpg'
  },
  {
    id: 's9', category: 'Video', title: 'Alquiler de Iluminación Profesional',
    description: 'Esquemas de iluminación para video, fotografía y escenarios.',
    equipment: ['Aputure 300d II', 'Paneles LED RGB', 'Softbox y rejillas', 'Trípodes C-Stand'],
    image: '/baile.jpg'
  },
  {
    id: 's10', category: 'Video', title: 'Grabación de Eventos (Bodas, Conciertos)',
    description: 'Cobertura multicámara con operadores profesionales.',
    equipment: ['3 Cámaras 4K', 'Mezclador de video ATEM', 'Grabación en SSD'],
    image: '/baile.jpg'
  },
  {
    id: 's11', category: 'Video', title: 'Edición y Postproducción de Video',
    description: 'Montaje, corrección de color y efectos visuales.',
    equipment: ['Adobe Premiere Pro', 'DaVinci Resolve Studio', 'After Effects'],
    image: '/baile.jpg'
  },
  {
    id: 's12', category: 'Video', title: 'Producción de Contenido Audiovisual',
    description: 'Videos corporativos, testimoniales y promocionales.',
    equipment: ['Equipo completo de cine', 'Guionistas', 'Directores de arte'],
    image: '/baile.jpg'
  },

  // 📡 STREAMING (13-16)
  {
    id: 's13', category: 'Streaming', title: 'Streaming Multiredes Simultáneo',
    description: 'Transmisión en vivo a YouTube, Facebook, Instagram y TikTok al mismo tiempo.',
    equipment: ['vMix o OBS Studio Pro', 'Codificador hardware', 'Bonding de internet'],
    image: '/baile.jpg'
  },
  {
    id: 's14', category: 'Streaming', title: 'Transmisión Profesional de Eventos',
    description: 'Producción en vivo con gráficos, cámaras múltiples y audio mezclado.',
    equipment: ['Switcher ATEM Mini Extreme', 'Cámaras PTZ', 'Comms para equipo'],
    image: '/baile.jpg'
  },
  {
    id: 's15', category: 'Streaming', title: 'Unidades Móviles de Transmisión',
    description: 'Estudio de TV portátil para cubrir eventos fuera de la planta.',
    equipment: ['Van equipada', 'Generador eléctrico', 'Enlace de microondas/4G'],
    image: '/baile.jpg'
  },
  {
    id: 's16', category: 'Streaming', title: 'Producción de Transmisiones Deportivas',
    description: 'Cobertura de partidos con cámaras de acción, marcadores y repetición.',
    equipment: ['Cámaras de largo alcance', 'Software de gráficos deportivos', 'Slow motion'],
    image: '/baile.jpg'
  },

  // 🎬 PRODUCCIÓN INTEGRAL (17-22)
  {
    id: 's17', category: 'Producción', title: 'Producción Integral de Eventos',
    description: 'Nos encargamos de todo: audio, video, iluminación y logística.',
    equipment: ['Equipo completo de las 3 áreas', 'Coordinador de producción', 'Logística'],
    image: '/baile.jpg'
  },
  {
    id: 's18', category: 'Producción', title: 'Cobertura Completa (Foto + Video + Audio)',
    description: 'Paquete todo en uno para no perder ningún detalle de su evento.',
    equipment: ['Fotógrafos', 'Videógrafos', 'Ingeniero de audio'],
    image: '/baile.jpg'
  },
  {
    id: 's19', category: 'Producción', title: 'Dirección Técnica de Eventos',
    description: 'Supervisión profesional de todos los aspectos técnicos del evento.',
    equipment: ['Director técnico certificado', 'Planos de planta', 'Checklists de seguridad'],
    image: '/baile.jpg'
  },
  {
    id: 's20', category: 'Producción', title: 'Creación de Contenido para Redes Sociales',
    description: 'Clips, reels y fotos optimizadas para Instagram, TikTok y Facebook.',
    equipment: ['Cámaras verticales', 'Luces de aro', 'Edición en móvil/PC'],
    image: '/baile.jpg'
  },
  {
    id: 's21', category: 'Producción', title: 'Gestión y Community Management',
    description: 'Administración profesional de sus redes durante el evento.',
    equipment: ['Equipo de redacción', 'Herramientas de programación', 'Monitoreo en vivo'],
    image: '/baile.jpg'
  },
  {
    id: 's22', category: 'Producción', title: 'Diseño Gráfico y Branding para Eventos',
    description: 'Piezas visuales, pantallas LED y material impreso personalizado.',
    equipment: ['Diseñadores senior', 'Software Adobe Creative Cloud', 'Impresión de alta calidad'],
    image: '/baile.jpg'
  },

  // 🎵 RADIO Y PODCAST (23-28)
  {
    id: 's23', category: 'Radio/Podcast', title: 'Producción de Podcasts Profesionales',
    description: 'Grabación, edición y publicación de su podcast con calidad de estudio.',
    equipment: ['Micrófonos Shure SM7B', 'Interfaz Focusrite', 'Cabina insonorizada'],
    image: '/baile.jpg'
  },
  {
    id: 's24', category: 'Radio/Podcast', title: 'Alquiler de Estudio de Grabación',
    description: 'Espacio profesional equipado listo para usar por hora o día.',
    equipment: ['Consola digital', 'Monitores de estudio', 'Aire acondicionado', 'Wifi'],
    image: '/baile.jpg'
  },
  {
    id: 's25', category: 'Radio/Podcast', title: 'Locución Profesional y Voice Over',
    description: 'Voces talentosas para comerciales, documentales y narraciones.',
    equipment: ['Cabina de voz', 'Procesadores de voz', 'Catálogo de locutores'],
    image: '/baile.jpg'
  },
  {
    id: 's26', category: 'Radio/Podcast', title: 'Asesoría en Creación de Emisoras Online',
    description: 'Consultoría técnica y legal para lanzar su propia estación de radio.',
    equipment: ['Servidores de streaming', 'Software de automatización', 'Plan de negocios'],
    image: '/baile.jpg'
  },
  {
    id: 's27', category: 'Radio/Podcast', title: 'Mantenimiento y Configuración de Equipos',
    description: 'Servicio técnico preventivo y correctivo para sus equipos de medios.',
    equipment: ['Herramientas de diagnóstico', 'Repuestos originales', 'Técnicos certificados'],
    image: '/baile.jpg'
  },
  {
    id: 's28', category: 'Radio/Podcast', title: 'Capacitación en Operación de Equipos',
    description: 'Cursos prácticos para su personal en manejo de consolas, cámaras y streaming.',
    equipment: ['Material didáctico', 'Equipos de práctica', 'Instructores expertos'],
    image: '/baile.jpg'
  }
];