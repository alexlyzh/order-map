import {useRef, useEffect} from 'react';
import 'leaflet/dist/leaflet.css';
import {Icon, Marker} from 'leaflet';


function Map(): JSX.Element {
    const mapRef = useRef(null);


    return (
        <section className="map">
            <div style={{height: '100%'}} ref={mapRef}/>
        </section>
    );
}

export default Map;
