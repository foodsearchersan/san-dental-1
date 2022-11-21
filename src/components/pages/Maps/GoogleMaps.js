import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '200px'
};

function Maps(props) {
    const { latitude, longitude } = props;
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "GOOGLE_API_KEY"
    })
    const center = {
        lat: latitude,
        lng: longitude
    };
    const position = {
        lat: latitude,
        lng: longitude
    }

    const [map, setMap] = React.useState(null)

    const onLoad = marker => {
        console.log('marker: ', marker)
    }
    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])
    console.log(map);
    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onUnmount={onUnmount}
        >
            <Marker
                onLoad={onLoad}
                position={position}
            />
        </GoogleMap>
    ) : <></>
}

export default Maps;