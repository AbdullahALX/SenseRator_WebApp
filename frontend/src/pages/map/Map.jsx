import React, { useState, useEffect, useRef } from 'react';
import Map, {
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
  Source,
  Layer,
} from 'react-map-gl';

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Accordion,
  AccordionItem,
  Avatar,
  Chip,
} from '@nextui-org/react';

import green from '../../assets/trees.webp';
import cross from '../../assets/cross.jpeg';
import light from '../../assets/lights.jpg';
import bench from '../../assets/side.png';
import traffic from '../../assets/scale.webp';
import stop from '../../assets/stopSign-Photoroom.png';

import useDarkMode from 'use-dark-mode';
import {
  geojsonFirstHalf,
  geojsonSecondHalf,
  geojsonThirdHalf,
  geojsonFourthHalf,
  geojsonFifthHalf,
} from './geojsonData';

const Test = () => {
  const WEB_MAP_API = import.meta.env.VITE_WEB_GEO_API_KEY;

  const [isOpen, setIsOpen] = useState(false); // Modal visibility state
  const [modalData, setModalData] = useState(null); // Data to show in modal
  const [data, setData] = useState(null);
  const [region1Data, setRegion1Data] = useState(null);
  const [region2Data, setRegion2Data] = useState(null);
  const [region3Data, setRegion3Data] = useState(null);
  const [region4Data, setRegion4Data] = useState(null);
  const [region5Data, setRegion5Data] = useState(null);

  const mapRef = useRef();
  const darkMode = useDarkMode();

  const [viewState, setViewState] = useState({
    longitude: -81.200619,
    latitude: 28.602174,
    zoom: 15,
  });

  const handleLayerClick = (layerData) => {
    setModalData(layerData); // Set the data related to the clicked layer
    setIsOpen(true); // Open the modal
  };

  const handleMapClick = (e) => {
    const features = mapRef.current.queryRenderedFeatures(e.point, {
      layers: [
        'firstHalfLayer',
        'secondHalfLayer',
        'thirdHalfLayer',
        'fourthHalfLayer',
        'fifthHalfLayer',
      ],
    });

    if (features.length) {
      const feature = features[0];
      const layerId = feature.layer.id;

      // Match the clicked layer with the correct region data
      if (layerId === 'firstHalfLayer') {
        setModalData(region1Data);
      } else if (layerId === 'secondHalfLayer') {
        setModalData(region2Data);
      } else if (layerId === 'thirdHalfLayer') {
        console.log(region3Data);
        setModalData(region3Data);
      } else if (layerId === 'fourthHalfLayer') {
        setModalData(region4Data);
      } else if (layerId === 'fifthHalfLayer') {
        setModalData(region5Data);
      }

      setIsOpen(true); // Open the modal
    }
  };

  const handleMapLoad = () => {
    if (mapRef.current) {
      mapRef.current.on('click', handleMapClick);
    }
  };

  // // Close modal function
  // const onClose = () => {
  //   window.open(
  //     'https://drive.google.com/file/d/1exJk3-455S9UZcbJ121qnglaEe3mRAao/view',
  //     '_blank'
  //   );
  //   setIsOpen(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://senstest.onrender.com/api');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();

        Object.keys(result).forEach((regionId) => {
          const regionData = result[regionId];

          // Helper function to compare indices and update state
          const updateRegionDataIfLarger = (currentData, newData, setData) => {
            if (!currentData) {
              // If no existing data, set the new data
              setData(newData);
            } else {
              // Compare each index, and only update if the new data has larger index values
              const updatedData = { ...currentData };
              Object.keys(newData).forEach((key) => {
                if (key.endsWith('_index')) {
                  if (newData[key] > currentData[key]) {
                    updatedData[key] = newData[key];
                  }
                }
              });
              setData(updatedData); // Update the state with the new data
            }
          };

          switch (regionData.region_name) {
            case 'Memory Mall':
              updateRegionDataIfLarger(region1Data, regionData, setRegion1Data);
              break;
            case 'HEC':
              updateRegionDataIfLarger(region2Data, regionData, setRegion2Data);
              break;
            case 'Health Center':
              updateRegionDataIfLarger(region3Data, regionData, setRegion3Data);
              break;
            case 'Library':
              updateRegionDataIfLarger(region4Data, regionData, setRegion4Data);
              break;
            case 'Lake Claire':
              updateRegionDataIfLarger(region5Data, regionData, setRegion5Data);
              break;
            default:
              break;
          }
        });
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  const test = () => {
    console.log('region1', region1Data);
    console.log('region2', region2Data);
    console.log('region3', region3Data);
    console.log('region4', region4Data);
    console.log('region5', region5Data);
  };

  return (
    <div className="justify-center items-center flex h-full w-full relative mx-auto overflow-hidden">
      {/* <Button onPress={test}>test</Button> */}
      <Map
        {...viewState}
        onMove={(evt) => setViewState(evt.viewState)}
        style={{ width: '100%', height: '100%' }}
        mapStyle={
          darkMode.value
            ? 'mapbox://styles/mapbox/navigation-night-v1'
            : 'mapbox://styles/mapbox/navigation-day-v1'
        } // Toggle based on dark mode
        mapboxAccessToken={WEB_MAP_API}
        ref={mapRef}
        onLoad={handleMapLoad}
      >
        <NavigationControl />
        <FullscreenControl />
        <ScaleControl />
        <GeolocateControl />

        {/* First half of the polygon */}
        <Source id="firstHalf" type="geojson" data={geojsonFirstHalf}>
          <Layer
            id="firstHalfLayer"
            type="fill"
            paint={{
              'fill-color': '#FF0000', // Red color for the first half
              'fill-opacity': 0.2,
            }}
            onClick={() =>
              handleLayerClick({ title: 'First Layer', score: 8.5 })
            } // Handle click event
          />
        </Source>

        {/* Second half of the polygon */}
        <Source id="secondHalf" type="geojson" data={geojsonSecondHalf}>
          <Layer
            id="secondHalfLayer"
            type="fill"
            paint={{
              'fill-color': '#0000FF', // Blue color for the second half
              'fill-opacity': 0.2,
            }}
          />
        </Source>

        {/* Third half of the polygon */}
        <Source id="thirdHalf" type="geojson" data={geojsonThirdHalf}>
          <Layer
            id="thirdHalfLayer"
            type="fill"
            paint={{
              'fill-color': '#00FF73', // Green color for the third half
              'fill-opacity': 0.2,
            }}
          />
        </Source>

        {/* Fourth half of the polygon */}
        <Source id="fourthHalf" type="geojson" data={geojsonFourthHalf}>
          <Layer
            id="fourthHalfLayer"
            type="fill"
            paint={{
              'fill-color': '#6f37f3', // Purple color for the fourth half
              'fill-opacity': 0.2,
            }}
          />
        </Source>

        {/* Fifth half of the polygon */}
        <Source id="fifthHalf" type="geojson" data={geojsonFifthHalf}>
          <Layer
            id="fifthHalfLayer"
            type="fill"
            paint={{
              'fill-color': '#ffd000', // Pink color for the fifth half
              'fill-opacity': 0.2,
            }}
          />
        </Source>

        <Layer
          id="outlineFirstHalf"
          type="line"
          source="firstHalf"
          paint={{
            'line-color': '#000',
            'line-width': 1,
          }}
        />
        <Layer
          id="outlineSecondHalf"
          type="line"
          source="secondHalf"
          paint={{
            'line-color': '#000',
            'line-width': 1,
          }}
        />
        <Layer
          id="outlineThirdHalf"
          type="line"
          source="thirdHalf"
          paint={{
            'line-color': '#000',
            'line-width': 1,
          }}
        />

        <Layer
          id="outlineFourthHalf"
          type="line"
          source="fourthHalf"
          paint={{
            'line-color': '#000',
            'line-width': 1,
          }}
        />

        <Layer
          id="outlineFifthHalf"
          type="line"
          source="fifthHalf"
          paint={{
            'line-color': '#000',
            'line-width': 1,
          }}
        />

        {modalData && (
          <Modal
            size="4xl"
            isOpen={isOpen}
            onOpenChange={setIsOpen}
            isDismissable={true}
            isKeyboardDismissDisabled={true}
            className={`${
              darkMode.value ? 'dark' : 'border-none '
            } text-foreground bg-background border-none`}
          >
            <ModalContent className="text-foreground ">
              {(onClose) => (
                <>
                  <ModalHeader className="flex font-light  flex-row gap-2 justify-between mx-5 ">
                    {modalData.region_name}
                    <Chip variant="solid" color="secondary">
                      Pedestrian Flow and Safety Index:{' '}
                      {modalData.pedestrian_flow_and_safety_index}
                    </Chip>
                  </ModalHeader>
                  <ModalBody>
                    <Accordion selectionMode="multiple">
                      <AccordionItem
                        className=" font-light "
                        key="1"
                        aria-label="Trees"
                        startContent={
                          <Avatar
                            className="bg-white"
                            color="green"
                            radius="lg"
                            src={green}
                          />
                        }
                        subtitle={`Score: ${modalData.tree_index} `}
                        title="Trees "
                      >
                        Trees provide shade and improve air quality.
                      </AccordionItem>
                      <AccordionItem
                        className=" font-light "
                        key="2"
                        aria-label="Crosswalks"
                        startContent={
                          <Avatar
                            className="bg-white"
                            color="white"
                            radius="lg"
                            src={cross}
                          />
                        }
                        subtitle={`Score: ${modalData.crosswalk_index}`}
                        title="Crosswalks"
                      >
                        Crosswalks increase pedestrian safety.
                      </AccordionItem>
                      <AccordionItem
                        className=" font-light "
                        key="3"
                        aria-label="Street Lights"
                        startContent={
                          <Avatar
                            className="bg-white"
                            color="green"
                            radius="lg"
                            src={light}
                          />
                        }
                        subtitle={`Score: ${modalData.street_light_index}`}
                        title="Street Lights"
                      >
                        Street lights enhance nighttime visibility, improving
                        safety for pedestrians
                      </AccordionItem>
                      <AccordionItem
                        className=" font-light "
                        key="4"
                        aria-label="Crosswalks"
                        startContent={
                          <Avatar
                            className="bg-white"
                            color="green"
                            radius="lg"
                            src={bench}
                          />
                        }
                        subtitle={`Score: ${modalData.sidewalk_index}`}
                        title="Sidewalks"
                      >
                        Sidewalks provide safe pathways for pedestrians and
                        improve accessibility, contributing to the overall
                        functionality and comfort of public spaces.
                      </AccordionItem>
                      <AccordionItem
                        className="font-light "
                        key="5"
                        aria-label="Traffic Lights"
                        startContent={
                          <Avatar
                            className="bg-white"
                            color="green"
                            radius="lg"
                            src={traffic}
                          />
                        }
                        subtitle={`Score: ${modalData.traffic_light_index}`}
                        title=" Traffic Lights"
                      >
                        Traffic lights manage traffic flow and enhance safety
                        for both vehicles and pedestrians at intersections.
                      </AccordionItem>
                      <AccordionItem
                        className=" font-light "
                        key="6"
                        aria-label="stop signs"
                        startContent={
                          <Avatar
                            className="bg-white"
                            color="green"
                            radius="lg"
                            src={stop}
                          />
                        }
                        subtitle={`Score: ${modalData.stop_sign_index}`}
                        title="Stop Signs"
                      >
                        Stop signs control traffic at intersections, promoting
                        safety and clear right-of-way for drivers and
                        pedestrians
                      </AccordionItem>
                    </Accordion>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Close
                    </Button>
                    <Button color="secondary">View footage</Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        )}
      </Map>
    </div>
  );
};

export default Test;
