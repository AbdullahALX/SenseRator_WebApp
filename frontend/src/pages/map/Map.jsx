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
import ReactPlayer from 'react-player';

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
  const [regionData, setRegionData] = useState({}); // Consolidated state for region data
  const [isVideoOpen, setIsVideoOpen] = useState(false); // New state for video modal

  const mapRef = useRef();
  const darkMode = useDarkMode();
  const [viewState, setViewState] = useState({
    longitude: -81.200619,
    latitude: 28.602336,
    zoom: 15,
    minZoom: 15,
  });

  const handleMapClick = (e) => {
    if (!mapRef.current) return; // Ensure mapRef is available

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

      // Map layer to region name
      const regionMapping = {
        firstHalfLayer: 'Memory Mall',
        secondHalfLayer: 'HEC',
        thirdHalfLayer: 'Health Center',
        fourthHalfLayer: 'Library',
        fifthHalfLayer: 'Lake Claire',
      };

      const regionName = regionMapping[layerId];
      const region = regionData[regionName] || {};

      setModalData({
        ...region,
        videoUrl: videoUrls[regionName.replace(/\s/g, '')],
      });

      setIsOpen(true); // Open the modal
    }
  };

  const handleMapLoad = () => {
    if (!mapRef.current) return;

    const layerNames = [
      'firstHalfLayer',
      'secondHalfLayer',
      'thirdHalfLayer',
      'fourthHalfLayer',
      'fifthHalfLayer',
    ];

    // Change cursor to pointer when hovering over layers
    layerNames.forEach((layerName) => {
      mapRef.current.on('mouseenter', layerName, () => {
        mapRef.current.getCanvas().style.cursor = 'pointer';
      });
      mapRef.current.on('mouseleave', layerName, () => {
        mapRef.current.getCanvas().style.cursor = '';
      });
    });

    // Bind the click event
    mapRef.current.on('click', handleMapClick);
  };

  // Video URLs for each region
  const videoUrls = {
    MemoryMall:
      'https://firebasestorage.googleapis.com/v0/b/senserator.appspot.com/o/region_videos%2FMemory%20Mall.MP4?alt=media&token=21291795-6fbb-496a-a501-6384ef755b49',
    HEC: 'https://firebasestorage.googleapis.com/v0/b/senserator.appspot.com/o/region_videos%2FHEC.MP4?alt=media&token=19b464d2-fac7-4522-a470-a181c813ee60',
    HealthCenter:
      'https://firebasestorage.googleapis.com/v0/b/senserator.appspot.com/o/region_videos%2FHealth%20Center.MP4?alt=media&token=e3c90dc9-6288-4661-9491-1b564d75df3c',
    Library:
      'https://firebasestorage.googleapis.com/v0/b/senserator.appspot.com/o/region_videos%2FLibrary.MP4?alt=media&token=8222bf59-9ab2-4e68-b3a2-81da31d43825',
    LakeClaire:
      'https://firebasestorage.googleapis.com/v0/b/senserator.appspot.com/o/region_videos%2FLake%20Claire.MP4?alt=media&token=76151796-bad8-43e5-8327-0f6c10bc9a9a',
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://senstest.onrender.com/api');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();

        const newRegionData = { ...regionData }; // Clone existing regionData

        Object.keys(result).forEach((regionId) => {
          const regionDataFromAPI = result[regionId];

          const regionName = regionDataFromAPI.region_name;

          // Update the region data if pedestrian_flow_and_safety_index is higher
          if (
            !newRegionData[regionName] ||
            regionDataFromAPI.pedestrian_flow_and_safety_index >
              newRegionData[regionName].pedestrian_flow_and_safety_index
          ) {
            newRegionData[regionName] = regionDataFromAPI;
          }
        });

        setRegionData(newRegionData); // Update state with new region data
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []); // No need to include mapRef, as fetchData doesn't depend on it

  const test = () => {
    console.log('Region data:', regionData);
  };

  return (
    <div className="justify-center items-center flex h-full w-full relative mx-auto overflow-hidden">
      <Map
        {...viewState}
        onMove={(evt) => setViewState(evt.viewState)}
        style={{ width: '100%', height: '100%' }}
        mapStyle={
          darkMode.value
            ? 'mapbox://styles/mapbox/navigation-night-v1'
            : 'mapbox://styles/mapbox/navigation-day-v1'
        }
        mapboxAccessToken={WEB_MAP_API}
        ref={mapRef}
        onLoad={handleMapLoad}
      >
        <NavigationControl />
        <FullscreenControl style={{ right: 10, top: 10 }} />
        <ScaleControl />
        <GeolocateControl />

        <Source id="firstHalf" type="geojson" data={geojsonFirstHalf}>
          <Layer
            id="firstHalfLayer"
            type="fill"
            paint={{
              'fill-color': '#FF0000', // Red color for the first half
              'fill-opacity': 0.2,
            }}
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
              'fill-color': '#00FF73',
              'fill-opacity': 0.2,
            }}
          />
        </Source>

        <Source id="fourthHalf" type="geojson" data={geojsonFourthHalf}>
          <Layer
            id="fourthHalfLayer"
            type="fill"
            paint={{
              'fill-color': '#ffd000',

              'fill-opacity': 0.2,
            }}
          />
        </Source>

        <Source id="fifthHalf" type="geojson" data={geojsonFifthHalf}>
          <Layer
            id="fifthHalfLayer"
            type="fill"
            paint={{
              'fill-color': '#009ffa', // Pink color for the fifth half
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
                    {/* change traffic to benches */}
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
                      Traffic lights manage traffic flow and enhance safety for
                      both vehicles and pedestrians at intersections.
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
                      safety and clear right-of-way for drivers and pedestrians
                    </AccordionItem>
                  </Accordion>
                </ModalBody>
                <ModalFooter>
                  <Button
                    color="danger"
                    variant="light"
                    onPress={() => setIsOpen(false)}
                  >
                    Close
                  </Button>
                  <Button
                    color="secondary"
                    onPress={() => setIsVideoOpen(true)} // Opens the video modal
                  >
                    View footage
                  </Button>
                </ModalFooter>
              </>

              {/* Video Modal */}
              {isVideoOpen && (
                <Modal
                  size="4xl"
                  isOpen={isVideoOpen}
                  onOpenChange={setIsVideoOpen}
                  isDismissable={true}
                  className={`${
                    darkMode.value ? 'dark' : 'border-none '
                  } text-foreground bg-background border-none`}
                >
                  <ModalContent className="text-foreground ">
                    <ModalHeader className="flex font-light  flex-row gap-2 justify-between mx-5 ">
                      Footage for {modalData?.region_name}
                    </ModalHeader>
                    <ModalBody>
                      <ReactPlayer
                        url={modalData?.videoUrl} // Use the video URL from modalData
                        playing
                        controls
                        width="100%"
                        loop
                        muted
                      />
                    </ModalBody>
                    <ModalFooter>
                      <Button
                        color="danger"
                        variant="light"
                        onPress={() => setIsVideoOpen(false)}
                      >
                        Close
                      </Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              )}
            </ModalContent>
          </Modal>
        )}
      </Map>
    </div>
  );
};

export default Test;
