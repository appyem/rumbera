import { useState, useEffect } from 'react';

interface Metadata {
  artist: string;
  title: string;
}

export const useRadioMetadata = () => {
  const [metadata, setMetadata] = useState<Metadata>({ 
    artist: 'RUMBERA', 
    title: 'Transmitiendo en Vivo' 
  });

  useEffect(() => {
    const fetchMetadata = async () => {
      try {
        const targetUrl = 'https://radiohd2.streaminghd.co:7229/status-json.xsl';
        // Usamos AllOrigins, que es estable y no bloquea solicitudes de streaming como corsproxy.io
        const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(targetUrl)}`;
        
        const response = await fetch(proxyUrl);
        if (!response.ok) throw new Error('Network response was not ok');
        
        const data = await response.json();
        
        const sources = data.icestats?.source;
        const currentSource = Array.isArray(sources) 
          ? sources[0] // Tomamos la primera fuente activa
          : sources;

        if (currentSource && currentSource.title) {
          const parts = currentSource.title.split(' - ');
          const artist = parts.length > 1 ? parts[0].trim() : 'RUMBERA';
          const title = parts.length > 1 ? parts.slice(1).join(' - ').trim() : currentSource.title;
          
          setMetadata({ artist, title });
        }
      } catch (error) {
        // Silencioso: si falla, mantiene el valor por defecto sin saturar la consola
        console.warn('Metadatos de streaming no disponibles temporalmente');
      }
    };

    fetchMetadata();
    const interval = setInterval(fetchMetadata, 15000);

    return () => clearInterval(interval);
  }, []);

  return metadata;
};
