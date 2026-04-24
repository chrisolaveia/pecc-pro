export interface Area {
  slug: string
  emoji: string
  title: string
  description: string
  examples: string[]
  accent: 'green' | 'blue' | 'sky' | 'gold'
}

export const areas: Area[] = [
  {
    slug: 'prospeccion',
    emoji: '🎯',
    title: 'Prospección',
    description:
      'Construcción y reactivación de listas de contactos. Invitación auténtica, sin rogar ni manipular.',
    examples: [
      'La ciencia de construir una lista',
      'Invitar sin rogar es liderazgo',
      'Cómo encontrar prospectos',
    ],
    accent: 'green',
  },
  {
    slug: 'presentacion',
    emoji: '🎤',
    title: 'Presentación de Negocio',
    description:
      'Presentaciones de oportunidad FWP en vivo y conocimiento profundo de producto.',
    examples: [
      'Presentación de Negocios FWP',
      'Conoce los productos: LIV · 24 Burn · E-Boost',
      'Comparte y gana',
    ],
    accent: 'blue',
  },
  {
    slug: 'cierre-seguimiento',
    emoji: '🤝',
    title: 'Cierre & Seguimiento',
    description:
      'Técnicas conversacionales para ayudar a decidir. El seguimiento que convierte agendas en resultados.',
    examples: [
      'Dominando los cierres FWP+',
      'Cerrar no es empujar, es ayudar a decidir',
      'El seguimiento que llena aviones',
    ],
    accent: 'green',
  },
  {
    slug: 'redes-sociales',
    emoji: '📱',
    title: 'Redes Sociales',
    description:
      'TikTok, Instagram y WhatsApp Business para el networker moderno. Identidad digital que vende.',
    examples: [
      'Vende tus productos por redes sociales',
      'Optimiza tu perfil de IG',
      'WhatsApp Business: etiquetas, historias, edición',
    ],
    accent: 'sky',
  },
  {
    slug: 'inteligencia-artificial',
    emoji: '🤖',
    title: 'Inteligencia Artificial',
    description:
      'IA aplicada al network marketing. Automatización, copy, ventas y productividad con herramientas reales.',
    examples: [
      'Aplica inteligencia artificial a tu negocio',
      'Vende tus productos con IA',
      'Taller híbrido FWP+IA',
    ],
    accent: 'blue',
  },
  {
    slug: 'liderazgo-mastermind',
    emoji: '⭐',
    title: 'Liderazgo & Mastermind',
    description:
      'Llamadas semanales de líderes activos. Cultura, movimiento y habilidades invisibles que sostienen resultados.',
    examples: [
      'Llamadas Mastermind recurrentes',
      'Liderar sin cargar',
      'El arte de crear movimiento',
    ],
    accent: 'gold',
  },
  {
    slug: 'eventos-cultura',
    emoji: '🎪',
    title: 'Eventos & Cultura',
    description:
      'Eventos online y presenciales que construyen pertenencia. La energía que duplica el sistema.',
    examples: [
      'Noche de Éxito (ciclos recurrentes)',
      'Timer Momentum (presenciales regionales)',
      'Cultura de grandes eventos',
    ],
    accent: 'gold',
  },
  {
    slug: 'construccion-residual',
    emoji: '💰',
    title: 'Construcción de Residual',
    description:
      'Sistemas probados para construir ingreso pasivo sostenible. Plan de 90 días y rutina del networker profesional.',
    examples: [
      'Construye tu residual (serie recurrente)',
      'Lanzamiento Plan de 90 Días',
      'Rutina diaria de un networker profesional',
    ],
    accent: 'green',
  },
]

export const academyStats = {
  trainings6Months: 192,
  instructors: 18,
  frequencyPerWeek: 8,
}
