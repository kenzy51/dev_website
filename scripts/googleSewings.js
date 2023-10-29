const axios = require('axios');

const GOOGLE_API_KEY = 'AIzaSyCgR0JWc3mHXV1k6slvdjG4H6_2QXO6Juw';

async function getPlaceDetails(placeId) {
    const detailsEndpoint = `https://maps.googleapis.com/maps/api/place/details/json`;

    try {
        const response = await axios.get(detailsEndpoint, {
            params: {
                place_id: placeId,
                key: GOOGLE_API_KEY,
                fields: 'name,formatted_address,formatted_phone_number,website,geometry,photos'
            }
        });

        const details = response.data.result;

        let photoUrls = [];

        if (details.photos && details.photos.length > 0) {
            // Constructing photo URL using the photo reference
            photoUrls = details.photos.map(i => {return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${i.photo_reference}&key=${GOOGLE_API_KEY}`;})
            
            
        }

        return {
            name: details.name,
            address: details.formatted_address,
            phoneNumber: details.formatted_phone_number || null,
            website: details.website || null,
            latitude: details.geometry.location.lat,
            longitude: details.geometry.location.lng,
            photoUrl: photoUrls
        };
    } catch (error) {
        console.error('Error fetching place details:', error);
        return null;
    }
}

async function searchSewingWorkshopsInBishkek() {
    const endpoint = `https://maps.googleapis.com/maps/api/place/textsearch/json`;
    const query = 'Швейный цех in Bishkek';

    let results = [];
    let nextPageToken;

    do {
        try {
            const response = await axios.get(endpoint, {
                params: {
                    query: query,
                    key: GOOGLE_API_KEY,
                    pagetoken: nextPageToken
                }
            });

            for (const place of response.data.results) {
                const details = await getPlaceDetails(place.place_id);
                results.push(details);
            }

            nextPageToken = response.data.next_page_token;
            if (nextPageToken) {
                await new Promise(resolve => setTimeout(resolve, 3000));
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            nextPageToken = null;
        }
    } while (nextPageToken);

    return results;
}

// // Example usage:
// (async () => {
//     const results = await searchSewingWorkshopsInBishkek();
//     console.log(results.length);
// })();


const exports = {};

// Assign your function to a property of the export object
exports.searchSewingWorkshopsInBishkek = async function() {
    const results = await searchSewingWorkshopsInBishkek();
    return results;
}

// Export the export object
module.exports = exports;