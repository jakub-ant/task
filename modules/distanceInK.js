export function distanceInK(userLat1, userLon1, userLat2, userLon2) {
    const lat1 = +userLat1, lon1 = +userLon1, lat2 = +userLat2, lon2 = +userLon2
    if ((lat1 == lat2) && (lon1 == lon2)) {
        return 0;
    } else {
        const degrees_to_radians = degrees => degrees * Math.PI / 180
        return +(Math.acos(Math.sin(degrees_to_radians(lat1)) * Math.sin(degrees_to_radians(lat2)) + Math.cos(degrees_to_radians(lat1)) * Math.cos(degrees_to_radians(lat2)) * Math.cos(degrees_to_radians(lon2 - lon1))) * 6371)
    }
}

 