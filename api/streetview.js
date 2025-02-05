import axios from 'axios';

export default async function handler(req, res) {
    try {
        const randomCoords = {
            lat: Math.random() * 180 - 90,
            lng: Math.random() * 360 - 180
        };
        const apiKey = process.env.GOOGLE_API_KEY;

        const response = await axios.get(`https://maps.googleapis.com/maps/api/streetview/metadata`, {
            params: {
                location: `${randomCoords.lat},${randomCoords.lng}`,
                key: apiKey
            }
        });

        res.status(200).json({ coords: randomCoords, metadata: response.data });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch street view data' });
    }
}
