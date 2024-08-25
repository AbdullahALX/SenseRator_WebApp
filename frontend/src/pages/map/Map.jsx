import React, { useState, useRef, useEffect } from 'react';
import Map, {
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
} from 'react-map-gl';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from '@nextui-org/react';
import { Accordion, AccordionItem, Avatar } from '@nextui-org/react';

import green from '../../assets/green.png';
import cross from '../../assets/cross4.png';
import light from '../../assets/Lights.png';
import bench from '../../assets/bench.png';

import { Icon } from '@iconify/react';

const MapComponent = () => {
  const WEB_MAP_API = import.meta.env.VITE_WEB_GEO_API_KEY;

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const defaultContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

  const [viewState, setViewState] = useState({
    longitude: -81.200619,
    latitude: 28.602174,
    zoom: 15,
  });

  const markers = [
    { longitude: -81.198495, latitude: 28.60484 },
    { longitude: -81.200319, latitude: 28.603427 },
    { longitude: -81.204417, latitude: 28.603295 },
    { longitude: -81.200168, latitude: 28.601901 },
    { longitude: -81.201027, latitude: 28.599715 },
    { longitude: -81.196671, latitude: 28.59964 },
    { longitude: -81.205082, latitude: 28.599753 },
    { longitude: -81.204245, latitude: 28.603446 },
    { longitude: -81.199911, latitude: 28.604303 },
    { longitude: -81.205318, latitude: 28.600328 },
    { longitude: -81.204406, latitude: 28.603069 },
    { longitude: -81.20083, latitude: 28.598628 },
    { longitude: -81.195655, latitude: 28.601103 },
  ];

  const [visiblePopupIndex, setVisiblePopupIndex] = useState(null);
  const [markerPositions, setMarkerPositions] = useState([]);

  const mapRef = useRef();

  const getMarkerPositionStyle = (mapbox, longitude, latitude) => {
    const { x, y } = mapbox.project([longitude, latitude]);
    return {
      left: `${x}px`,
      top: `${y}px`,
    };
  };
  const darkMode = true;
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  const updateMarkerPositions = () => {
    if (mapRef.current) {
      const mapbox = mapRef.current.getMap();
      const updatedMarkerPositions = markers.map((marker) =>
        getMarkerPositionStyle(mapbox, marker.longitude, marker.latitude)
      );
      setMarkerPositions(updatedMarkerPositions);
    }
  };

  useEffect(() => {
    updateMarkerPositions();
  }, [viewState, markers]);

  useEffect(() => {
    if (mapRef.current) {
      const mapbox = mapRef.current.getMap();
      mapbox.on('resize', updateMarkerPositions);

      return () => {
        mapbox.off('resize', updateMarkerPositions);
      };
    }
  }, [mapRef.current]);

  const handleMarkerClick = (index) => {
    setVisiblePopupIndex(index === visiblePopupIndex ? null : index);
    onOpen();
  };

  return (
    <div className="justify-center items-center flex h-screen w-screen relative mx-auto overflow-hidden">
      <Map
        {...viewState}
        onMove={(evt) => setViewState(evt.viewState)}
        style={{ width: '100%', height: '100%' }}
        mapStyle="mapbox://styles/mapbox/dark-v11"
        mapboxAccessToken={WEB_MAP_API}
        ref={mapRef}
      >
        <NavigationControl />
        <FullscreenControl />
        <ScaleControl />
        <GeolocateControl />
      </Map>

      {markers.map((marker, index) => (
        <React.Fragment key={index}>
          <div
            className="absolute cursor-pointer"
            style={{
              ...markerPositions[index],
              transform: 'translate(-50%, -100%)',
            }}
            onClick={() => handleMarkerClick(index)}
            onPress={onOpen}
          >
            <div className="bg-red-500 w-6 h-6 rounded-full border-2 border-white"></div>
          </div>
          {visiblePopupIndex === index && (
            <Modal
              isOpen={isOpen}
              onOpenChange={onOpenChange}
              isDismissable={false}
              isKeyboardDismissDisabled={true}
            >
              <ModalContent className="text-white">
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1 ">
                      Overall Walkability Score: 8.5
                    </ModalHeader>
                    <ModalBody>
                      <Accordion selectionMode="multiple">
                        <AccordionItem
                          key="1"
                          aria-label="Trees"
                          startContent={
                            <Avatar
                              className="bg-white"
                              isBordered
                              color="green"
                              radius="lg"
                              src={green}
                            />
                          }
                          subtitle=" Score 7.5"
                          title="Trees"
                        >
                          {defaultContent}
                        </AccordionItem>
                        <AccordionItem
                          key="2"
                          aria-label="Benches"
                          startContent={
                            <Avatar
                              className="bg-white"
                              isBordered
                              color="green"
                              radius="lg"
                              src={bench}
                            />
                          }
                          subtitle=" Score 9"
                          title="Benches"
                        >
                          {defaultContent}
                        </AccordionItem>
                        <AccordionItem
                          key="3"
                          aria-label="Street Lights"
                          startContent={
                            <Avatar
                              className="bg-white"
                              isBordered
                              color="green"
                              radius="lg"
                              src={light}
                            />
                          }
                          subtitle=" Score 6.3"
                          title="Street Lights"
                        >
                          {defaultContent}
                        </AccordionItem>
                        <AccordionItem
                          key="4"
                          aria-label="Crosswalks"
                          startContent={
                            <Avatar
                              className="bg-white"
                              isBordered
                              color="white"
                              radius="lg"
                              src={cross}
                            />
                          }
                          subtitle=" Score 6.3"
                          title="Crosswalks"
                        >
                          {defaultContent}
                        </AccordionItem>
                      </Accordion>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="danger" variant="light" onPress={onClose}>
                        Close
                      </Button>
                      <Button color="primary" onPress={onClose}>
                        View more
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default MapComponent;
