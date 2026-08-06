// ======================================================
// 🌸 Weather Teller Studio
// Location Service
// ======================================================

export function getCurrentLocation() {

    return new Promise((resolve, reject) => {

        if (!navigator.geolocation) {

            reject(new Error("Geolocation is not supported."));

            return;

        }

        navigator.geolocation.getCurrentPosition(

            ({ coords }) => {

                resolve({

                    latitude: coords.latitude,

                    longitude: coords.longitude,

                    accuracy: coords.accuracy

                });

            },

            (error) => {

                reject(error);

            },

            {

                enableHighAccuracy: true,

                timeout: 10000,

                maximumAge: 300000

            }

        );

    });

}