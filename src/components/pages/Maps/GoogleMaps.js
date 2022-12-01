import { height } from '@mui/system';
import React from 'react'
// import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import map1 from '../../Assests/map1.png'
// const containerStyle = {
//     width: '100%',
//     height: '200px'
// };

function Maps(props) {
    // const { latitude, longitude } = props;
    // const { isLoaded } = useJsApiLoader({
    //     id: 'google-map-script',
    //     googleMapsApiKey: "GOOGLE_API_KEY"
    // })
    // const center = {
    //     lat: latitude,
    //     lng: longitude
    // };
    // const position = {
    //     lat: latitude,
    //     lng: longitude
    // }

    // const [map, setMap] = React.useState(null)

    // const onLoad = marker => {
    //     console.log('marker: ', marker)
    // }
    // const onUnmount = React.useCallback(function callback(map) {
    //     setMap(null)
    // }, [])
    // console.log(map);
    // return isLoaded ? (
    //     <GoogleMap
    //         mapContainerStyle={containerStyle}
    //         center={center}
    //         zoom={10}
    //         onUnmount={onUnmount}
    //     >
    //         <Marker
    //             onLoad={onLoad}
    //             position={position}
    //         />
    //     </GoogleMap>
    // ) : <></>
    return(
        <div>
            <a href='https://www.google.com/maps/dir/11.0266807,78.2736726/Apollo+Dental+Clinic+-+Navalur,+Unit+2+and+3,+Gateway+House+House+of+Hiranandani,+5%2F63,+OMR+Egattur+Village,+Thalambur,+Post,+Chennai,+Tamil+Nadu+600130/@12.5826877,77.6675349,8z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3a525b8f8b6cc531:0xe9695b305b44244e!2m2!1d80.2300317!2d12.8353955'>
                <div>
                    <img src={map1} style={{borderRadius:"5px", width:"100%", height:"230px", objectFit:"cover"}} />
                </div>
            </a>
        </div>
    )
}

export default Maps;