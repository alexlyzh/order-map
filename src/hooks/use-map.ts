import { MutableRefObject, useEffect, useState } from 'react';
import { Map, TileLayer } from 'leaflet';
import { Location } from '../types/types';

const URL_TEMPLATE = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  location: Location,
): Map | null {
  const [map, setMap] = useState<Map | null>(null);

  useEffect(() => {
    let instance: Map;

    if (mapRef.current !== null && map === null) {
      instance = new Map(mapRef.current, {
        center: {
          lat: location.latitude,
          lng: location.longitude,
        },
        zoom: location.zoom,
        scrollWheelZoom: true,
      });

      const layer = new TileLayer(URL_TEMPLATE);

      instance.addLayer(layer);

      setMap(instance);
    }
  }, [mapRef, map, location]);

  return map;
}

export default useMap;
