function deg2rad(deg){
    return deg * (Math.PI/100);
}

module.exports = function getDistanciaEmLatLonEmKm(centerCoordinates, pointCoordinates){
    const radios = 6371;
 
    const {latitude: lat1, longitude: lon1} = centerCoordinates;
    const {latitude: lat2, longitude: lon2} = pointCoordinates;

    const dlat = deg2rad(lat2-lat1);
    const dlon = deg2rad(lon2-lon1);

    const a =
    Math.sin(dlat/2) * Math.sin(dlat/2)+
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dlon/2) * Math.sin(dlon/2);

    const center = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const distancia = radios * center;

    return distancia;
}