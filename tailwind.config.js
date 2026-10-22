// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Paleta RUMBERA - Energía tropical y fiesta
        brand: {
          DEFAULT: '#FF9500', // Naranja vibrante principal (energía, calor tropical)
          light: '#FFAA33',   // Naranja claro (brillo, resplandor)
          lighter: '#FFC466', // Para acentos y hover
          dark: '#CC7700',    // Naranja oscuro (profundidad, contraste)
          darker: '#995700',  // Para estados activos/presionado
        },
        dark: {
          bg: '#0A0A0A',       // Fondo principal profundo (negro casi puro)
          surface: '#141414',  // Tarjetas y módulos (gris muy oscuro)
          elevated: '#1F1F1F', // Elementos flotantes (menús, modales)
          border: '#2A2A2A',   // Bordes sutiles
        },
        text: {
          primary: '#FFFFFF',    // Blanco puro para máximo contraste
          secondary: '#FFD699',  // Amarillo suave (complementa el naranja)
          muted: '#B8B8B8',      // Gris claro para texto secundario
        },
        // Colores de acento para elementos especiales
        accent: {
          gold: '#FFD700',    // Dorado para elementos premium
          coral: '#FF6B35',   // Coral para llamadas a la acción
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        // Si desea una fuente más "rumbera/tropical" para títulos, puede agregar:
        // display: ['Bebas Neue', 'Impact', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #FF9500, 0 0 10px #FF9500' },
          '100%': { boxShadow: '0 0 20px #FF9500, 0 0 30px #FF9500' },
        }
      }
    },
  },
  plugins: [],
}