// ======================================================
// 🌸 Weather Teller Studio
// Location Service
// ======================================================

export async function getCurrentLocation() {

    return new Promise((resolve, reject) => {

        if (!navigator.geolocation) {

            reject(new Error("Geolocation is not supported"));

            return;

        }

        navigator.geolocation.getCurrentPosition(

            ({ coords }) => resolve({

                latitude: coords.latitude,

                longitude: coords.longitude

            }),

            () => reject(new Error("Location permission denied"))

        );

    });

}