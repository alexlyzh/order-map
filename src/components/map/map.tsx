import './map.css'
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import useMap from '../../hooks/use-map';
import { useEffect, useRef } from 'react';
import { centerOfAmsterdam } from '../../const';

type Props = {
  waypoints: number[][],
}

L.Marker.prototype.options.icon = L.icon({
  iconUrl: 'img/pin.svg',
  iconSize: [30, 40],
  iconAnchor: [20, 40],
});

function Map({waypoints}: Props): JSX.Element {
  const mapRef = useRef(null);

  const map = useMap(mapRef, centerOfAmsterdam);

  useEffect(() => {
    if (!map) {
      return;
    }

    const routing = L.Routing.control({
      waypoints: waypoints.map((point) => L.latLng(point[0], point[1])),
      lineOptions: {
        styles: [{
          color: "blue",
          opacity: 0.6,
          weight: 5
        }],
        extendToWaypoints: true,
        missingRouteTolerance: 1,
      },
      show: false,
      fitSelectedRoutes: true,
    }).addTo(map);

    return () => {
      map.removeControl(routing);
    };
  }, [map, waypoints]);

  return (
    <section className="map">
      <div style={{height: '100%'}} ref={mapRef}/>
    </section>
  );
}

export default Map;
