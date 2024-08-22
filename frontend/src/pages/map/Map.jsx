import React, { useState, useRef, useEffect } from 'react';
import Map, {
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
} from 'react-map-gl';

const MapComponent = () => {
  const WEB_MAP_API = import.meta.env.VITE_WEB_GEO_API_KEY;

  const [viewState, setViewState] = useState({
    longitude: -81.200619,
    latitude: 28.602174,
    zoom: 15,
  });

  const [marker, setMarker] = useState(null);
  const [popupInfo, setPopupInfo] = useState(null);
  const [markerPosition, setMarkerPosition] = useState(null);
  const [popupPosition, setPopupPosition] = useState(null);

  const mapRef = useRef();

  const handleMapClick = (event) => {
    const { lngLat } = event;
    setMarker({
      longitude: lngLat.lng,
      latitude: lngLat.lat,
    });
    setPopupInfo({
      longitude: lngLat.lng,
      latitude: lngLat.lat,
      info: `Coordinates: [ ${lngLat.lat.toFixed(6)}, ${lngLat.lng.toFixed(
        6
      )}]`,
    });
  };

  const updateMarkerAndPopupPosition = () => {
    if (mapRef.current) {
      const mapbox = mapRef.current.getMap();
      if (marker) {
        const markerPos = getMarkerPositionStyle(
          mapbox,
          marker.longitude,
          marker.latitude
        );
        setMarkerPosition(markerPos);
      }
      if (popupInfo) {
        const popupPos = getMarkerPositionStyle(
          mapbox,
          popupInfo.longitude,
          popupInfo.latitude
        );
        setPopupPosition(popupPos);
      }
    }
  };

  const getMarkerPositionStyle = (mapbox, longitude, latitude) => {
    // Convert geographic coordinates to pixel coordinates
    const { x, y } = mapbox.project([longitude, latitude]);
    return {
      left: `${x}px`,
      top: `${y}px`,
    };
  };

  useEffect(() => {
    // Update marker and popup position whenever the view state or marker changes
    updateMarkerAndPopupPosition();
  }, [viewState, marker, popupInfo]);

  useEffect(() => {
    // Listen for the map's resize event and update positions accordingly
    if (mapRef.current) {
      const mapbox = mapRef.current.getMap();
      mapbox.on('resize', updateMarkerAndPopupPosition);

      // Clean up the event listener on component unmount
      return () => {
        mapbox.off('resize', updateMarkerAndPopupPosition);
      };
    }
  }, [mapRef.current]);

  return (
    <div className="justify-center items-center flex h-screen w-screen relative mx-auto overflow-hidden">
      <Map
        {...viewState}
        onMove={(evt) => setViewState(evt.viewState)}
        onClick={handleMapClick}
        style={{ width: '100%', height: '100%' }}
        mapStyle="mapbox://styles/mapbox/dark-v11"
        mapboxAccessToken={WEB_MAP_API}
        ref={mapRef}
      >
        {/* Additional map controls */}
        <NavigationControl />
        <FullscreenControl />
        <ScaleControl />
        <GeolocateControl />
      </Map>

      {/* Custom Marker */}
      {marker && markerPosition && (
        <div
          className="absolute"
          style={{
            ...markerPosition,
            transform: 'translate(-50%, -100%)',
          }}
        >
          <div className="bg-red-500 w-6 h-6 rounded-full border-2 border-white"></div>
        </div>
      )}

      {/* Custom Popup */}
      {popupInfo && popupPosition && (
        <div
          className="absolute bg-white p-5 text-black rounded shadow-md"
          style={{
            ...popupPosition,
            transform: 'translate(-50%, -150%)',
          }}
        >
          <button
            className="absolute top-0 right-0 p-1 text-sm"
            onClick={() => setPopupInfo(null)}
          >
            ×
          </button>
          <div>{popupInfo.info}</div>
        </div>
      )}
    </div>
  );
};

export default MapComponent;
