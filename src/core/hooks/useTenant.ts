import { useMemo } from 'react';

// Configuración de tenant para RUMBERA
export const useTenant = () => {
  const tenantConfig = useMemo(() => ({
    name: 'RUMBERA',
    slogan: 'La que te hace bailar', // Configurable
    logoUrl: '/logo_rumbera.png', // Logo nuevo en carpeta public
    theme: {
      primaryColor: '#FF9500', // Naranja vibrante Rumbera
      backgroundColor: '#0A0A0A',
    },
    features: {
      hasLiveRadio: true,
      hasLiveTV: true,
      hasPodcasts: true,
      hasNews: true,
    }
  }), []);

  return tenantConfig;
};