import React, { useState } from 'react';

function App() {
    const [location, setLocation] = useState(null);

    const fetchRandomLocation = async () => {
        const response = await fetch('/api/streetview');
        const data = await response.json();
        setLocation(data);
    };

    return (
        <div>
            <h1>Time Travel View</h1>
            <button onClick={fetchRandomLocation}>Random Time Travel</button>
            {location && (
                <div>
                    <p>Latitude: {location.coords.lat}</p>
                    <p>Longitude: {location.coords.lng}</p>
                </div>
            )}
        </div>
    );
}

export default App;
