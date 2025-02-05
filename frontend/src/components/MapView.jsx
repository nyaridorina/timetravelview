import React, { useEffect } from 'react';

function MapView({ coords }) {
    useEffect(() => {
        const initMap = () => {
            new google.maps.StreetViewPanorama(document.getElementById('map'), {
                position: coords,
                pov: { heading: 165, pitch: 0 },
                zoom: 1
            });
        };

        window.initMap = initMap;

        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&callback=initMap`;
        script.async = true;
        document.body.appendChild(script);
    }, [coords]);

    return <div id="map" style={{ height: '500px', width: '100%' }} />;
}

export default MapView;
