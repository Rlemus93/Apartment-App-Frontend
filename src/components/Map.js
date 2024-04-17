import React, { useState, useEffect } from "react"
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api"

const containerStyle = {
  width: "100%",
  height: "80vh",
}

const center = {
  lat: 39.0229,
  lng: -99.8906,
}

const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY

const Map = ({ apartments }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
  })

  const [markers, setMarkers] = useState([])

  useEffect(() => {
    apartments.forEach((apartment) => {
      fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          apartment.city,
          apartment.street,
          apartment.state
        )}&key=${GOOGLE_MAPS_API_KEY}`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.results[0]) {
            setMarkers((prevMarkers) => [
              ...prevMarkers,
              data.results[0].geometry.location,
            ])
          }
        })
        .catch((error) => console.log(error))
    })
  }, [apartments]) // Dependency on apartments

  return isLoaded ? (
    <div>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={6}>
        {markers.map((markerPosition, index) => (
          <Marker key={index} position={markerPosition} />
        ))}
      </GoogleMap>
    </div>
  ) : null
}

export default React.memo(Map)
