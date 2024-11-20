import React, { useState, useEffect, useRef, useMemo } from 'react';
import Map, {
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
  Source,
  Layer,
} from 'react-map-gl';
import { ref, get, child } from 'firebase/database';
import { db } from '../../config/firebaseConfig';

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Accordion,
  AccordionItem,
  Progress,
  ButtonGroup,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from '@nextui-org/react';
import { ChevronDownIcon } from './ChevronDownIcon';

import ReactPlayer from 'react-player';
import { Icon } from '@iconify/react';
import axios from 'axios';

import useDarkMode from 'use-dark-mode';
import {
  geojsonFirstHalf,
  geojsonSecondHalf,
  geojsonThirdHalf,
  geojsonFourthHalf,
  geojsonFifthHalf,
} from './geojsonData';

import getRatingDescription from './ratingDescriptions';
const Test = () => {
  const WEB_MAP_API = import.meta.env.VITE_WEB_GEO_API_KEY;
  const [isOpen, setIsOpen] = useState(false);
  const modalData = useRef(null);
  const [regionData, setRegionData] = useState({});
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(new Set(['footage']));
  const [triggerRender, setTriggerRender] = useState(false); // State to trigger re-render

  const descriptionsMap = {
    footage: 'Watch region footage',
    camera: 'view data analysis',
  };

  const labelsMap = {
    footage: 'View Footage',
    camera: 'Object Detection',
  };

  const mapRef = useRef();
  const darkMode = useDarkMode();
  const [viewState, setViewState] = useState({
    longitude: -81.200619,
    latitude: 28.602336,
    zoom: 15,
    minZoom: 15,
  });

  // Video URLs for each region
  const videoUrls = useMemo(
    () => ({
      MemoryMall:
        'https://firebasestorage.googleapis.com/v0/b/senserator.appspot.com/o/region_videos%2FMemory%20Mall%20%5BCOMPRESSED%5D.mp4?alt=media&token=bab5ae04-c580-4c78-bb06-600b8a3f26d6',
      HEC: 'https://firebasestorage.googleapis.com/v0/b/senserator.appspot.com/o/region_videos%2FHEC%20%5BCOMPRESSED%5D.mp4?alt=media&token=10217fbd-d74a-49e7-9ca7-11e4708c6e6e',
      HealthCenter:
        'https://firebasestorage.googleapis.com/v0/b/senserator.appspot.com/o/region_videos%2FHealth%20Center%20%5BCOMPRESSED%5D.mp4?alt=media&token=24ce83e5-7dc8-41d7-97ff-9dfa4ddc2930',
      Library:
        'https://firebasestorage.googleapis.com/v0/b/senserator.appspot.com/o/region_videos%2FLibrary%20%5BCOMPRESSED%5D.mp4?alt=media&token=5a3745b6-9ff7-44c2-a07a-1eb58c2bd20d',
      LakeClaire:
        'https://firebasestorage.googleapis.com/v0/b/senserator.appspot.com/o/region_videos%2FLake%20Claire%20%5BCOMPRESSED%5D.mp4?alt=media&token=6c592cc5-2ced-48a3-ba91-bd5756825779',
    }),
    []
  );

  const cameraUrls = useMemo(
    () => ({
      MemoryMall:
        'https://firebasestorage.googleapis.com/v0/b/senserator.appspot.com/o/object_detection%2FMemory%20Mall%20%5BFIXED%5D.mp4?alt=media&token=6c73d19c-fb1c-4020-b3fe-16ee267a708e',
      HEC: 'https://firebasestorage.googleapis.com/v0/b/senserator.appspot.com/o/object_detection%2FHEC%20%5BFIXED%5D.mp4?alt=media&token=237e49b5-748b-4225-ba04-77b769e70354',
      HealthCenter:
        'https://firebasestorage.googleapis.com/v0/b/senserator.appspot.com/o/object_detection%2FHealth%20Center%20%5BFIXED%5D.mp4?alt=media&token=b4f86d55-f050-448f-9184-1d3eeceadbe6',
      Library:
        'https://firebasestorage.googleapis.com/v0/b/senserator.appspot.com/o/object_detection%2FLibrary%20%5BFIXED%5D.mp4?alt=media&token=5ca954e0-e33c-47cf-b849-65408dcdf2fa',
      LakeClaire:
        'https://firebasestorage.googleapis.com/v0/b/senserator.appspot.com/o/object_detection%2FLake%20Claire%20%5BFIXED%5D.mp4?alt=media&token=c7956cb2-d1ee-4c9b-a56b-b6495564ffcb',
    }),
    []
  );
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(1);
        // Fetch data from Firebase
        const dbRef = ref(db);
        const snapshot = await get(child(dbRef, 'regions'));

        if (snapshot.exists()) {
          const result = snapshot.val();

          console.log(result);

          if (!result || typeof result !== 'object') {
            throw new Error('Invalid data format');
          }

          // Process the data as you did previously
          const updatedRegionData = Object.keys(result).reduce(
            (acc, regionId) => {
              const regionInfo = result[regionId];
              if (regionInfo?.region_name) {
                const existing = acc[regionInfo.region_name] || {};
                acc[regionInfo.region_name] =
                  regionInfo.pedestrian_flow_and_safety_index >
                  (existing.pedestrian_flow_and_safety_index || 0)
                    ? regionInfo
                    : existing;
              }
              return acc;
            },
            {}
          );

          setRegionData(updatedRegionData);
        } else {
          throw new Error('No data available');
        }
      } catch (error) {
        console.error('Error:', error.message);
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       console.log(1);
  //       const { data: result } = await axios.get(
  //         'https://senstest.onrender.com/api'
  //       );

  //       console.log(result);
  //       if (!result || typeof result !== 'object')
  //         throw new Error('Invalid data format');

  //       const updatedRegionData = Object.keys(result).reduce(
  //         (acc, regionId) => {
  //           const regionInfo = result[regionId];
  //           if (regionInfo?.region_name) {
  //             const existing = acc[regionInfo.region_name] || {};
  //             acc[regionInfo.region_name] =
  //               regionInfo.pedestrian_flow_and_safety_index >
  //               (existing.pedestrian_flow_and_safety_index || 0)
  //                 ? regionInfo
  //                 : existing;
  //           }
  //           return acc;
  //         },
  //         {}
  //       );

  //       setRegionData(updatedRegionData);
  //     } catch (error) {
  //       console.error('Error:', error.message);
  //     }
  //   };

  //   fetchData();
  // }, []);

  useEffect(() => {}, []);

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

  const selectedOptionValue = Array.from(selectedOption)[0];

  // const handleMapClick = (e) => {
  //   if (!mapRef.current) return;

  //   const features = mapRef.current.queryRenderedFeatures(e.point, {
  //     layers: [
  //       'firstHalfLayer',
  //       'secondHalfLayer',
  //       'thirdHalfLayer',
  //       'fourthHalfLayer',
  //       'fifthHalfLayer',
  //     ],
  //   });

  //   if (features.length) {
  //     const layerId = features[0].layer.id;
  //     const regionMapping = {
  //       firstHalfLayer: 'Memory Mall',
  //       secondHalfLayer: 'HEC',
  //       thirdHalfLayer: 'Health Center',
  //       fourthHalfLayer: 'Library',
  //       fifthHalfLayer: 'Lake Claire',
  //     };

  //     const regionName = regionMapping[layerId];
  //     const region = regionData[regionName] || {};
  //     console.log('regionData:', regionData);

  //     setModalData((prevModalData) => ({
  //       ...prevModalData,
  //       ...region,
  //       videoUrl: videoUrls[regionName.replace(/\s/g, '')],
  //       cameraUrl: cameraUrls[regionName.replace(/\s/g, '')],
  //     }));
  //     console.log('regionData After:', regionData);
  //     console.log('modalData After:', modalData);

  //     setIsOpen(true);
  //   }
  // };

  const handleMapClick = (e) => {
    if (!mapRef.current || Object.keys(regionData).length === 0) return;

    console.log('test', regionData);
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
      const layerId = features[0].layer.id;
      const regionMapping = {
        firstHalfLayer: 'Memory Mall',
        secondHalfLayer: 'HEC',
        thirdHalfLayer: 'Health Center',
        fourthHalfLayer: 'Library',
        fifthHalfLayer: 'Lake Claire',
      };

      const regionName = regionMapping[layerId];
      const region = regionData[regionName] || {};

      // Update modalDataRef immediately
      modalData.current = {
        ...region,
        videoUrl: videoUrls[regionName.replace(/\s/g, '')],
        cameraUrl: cameraUrls[regionName.replace(/\s/g, '')],
      };

      console.log('New modalData:', modalData); // Log immediately

      setIsOpen(true); // Show modal
      setTriggerRender((prev) => !prev); // Trigger re-render to display the modal
    }
  };

  // const test = () => {
  //   console.log(modalData);
  // };

  const handleSelectionChange = (key) => {
    setSelectedOption(new Set([key]));
    if (key === 'footage') setIsVideoOpen(true);
    else if (key === 'camera') setIsCameraOpen(true);
  };

  return (
    <div className="justify-center items-center flex h-full w-full relative mx-auto overflow-hidden rounded-md">
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

        {modalData.current && (
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
                <ModalHeader className="flex  tracking-wider font-medium text-default-600  flex-row gap-2 justify-between mx-5 ">
                  {modalData.current.region_name}
                </ModalHeader>
                <ModalBody>
                  <Accordion selectionMode="multiple">
                    <AccordionItem
                      className=" font-light "
                      key="1"
                      aria-label="Trees"
                      startContent={
                        <Icon
                          className="text-default-600"
                          icon="mingcute:tree-line"
                          width={40}
                        />
                      }
                      subtitle={`Rating: ${
                        getRatingDescription(
                          modalData.current.tree_index,
                          'tree_index'
                        ).rating
                      } `}
                      title="Trees "
                    >
                      {` ${
                        getRatingDescription(
                          modalData.current.tree_index,
                          'tree_index'
                        ).description
                      } `}
                    </AccordionItem>
                    <AccordionItem
                      className=" font-light "
                      key="2"
                      aria-label="Crosswalks"
                      startContent={
                        <Icon
                          className="text-default-600"
                          icon="mdi:ski-cross-country"
                          width={40}
                        />
                      }
                      subtitle={`Rating: ${
                        getRatingDescription(
                          modalData.current.crosswalk_index,
                          'crosswalk_index'
                        ).rating
                      } `}
                      title="Crosswalks "
                    >
                      {` ${
                        getRatingDescription(
                          modalData.current.crosswalk_index,
                          'crosswalk_index'
                        ).description
                      } `}
                    </AccordionItem>
                    <AccordionItem
                      className=" font-light "
                      key="3"
                      aria-label="Street Lights"
                      startContent={
                        <Icon
                          className="text-default-600"
                          icon="mdi:post-light"
                          width={40}
                        />
                      }
                      subtitle={`Rating: ${
                        getRatingDescription(
                          modalData.current.street_light_index,
                          'street_light_index'
                        ).rating
                      } `}
                      title="Street Lights "
                    >
                      {` ${
                        getRatingDescription(
                          modalData.current.street_light_index,
                          'street_light_index'
                        ).description
                      } `}
                    </AccordionItem>
                    <AccordionItem
                      className=" font-light "
                      key="4"
                      aria-label="Crosswalks"
                      startContent={
                        <Icon
                          className="text-default-600"
                          icon="material-symbols:road"
                          width={40}
                        />
                      }
                      subtitle={`Rating: ${
                        getRatingDescription(
                          modalData.current.sidewalk_index,
                          'sidewalk_index'
                        ).rating
                      } `}
                      title="Sidewalks"
                    >
                      {` ${
                        getRatingDescription(
                          modalData.current.sidewalk_index,
                          'sidewalk_index'
                        ).description
                      } `}
                    </AccordionItem>

                    <AccordionItem
                      className="font-light "
                      key="5"
                      aria-label="Benches"
                      startContent={
                        <Icon
                          className="text-default-600"
                          icon="ph:chair-bold"
                          width={40}
                        />
                      }
                      subtitle={`Rating: ${
                        getRatingDescription(
                          modalData.current.bench_index,
                          'bench_index'
                        ).rating
                      } `}
                      title="Benches"
                    >
                      {` ${
                        getRatingDescription(
                          modalData.current.bench_index,
                          'bench_index'
                        ).description
                      } `}
                    </AccordionItem>
                    <AccordionItem
                      className="font-light"
                      key="6"
                      aria-label="stop signs"
                      startContent={
                        <Icon
                          className="text-default-600"
                          icon="emojione-monotone:stop-sign"
                          width={40}
                        />
                      }
                      subtitle={`Rating: ${
                        getRatingDescription(
                          modalData.current.stop_sign_index,
                          'stop_sign_index'
                        ).rating
                      } `}
                      title="Stop Signs"
                    >
                      {` ${
                        getRatingDescription(
                          modalData.current.stop_sign_index,
                          'stop_sign_index'
                        ).description
                      } `}
                    </AccordionItem>
                  </Accordion>
                  <Progress
                    label="Pedestrian Flow and Safety Score"
                    size="md"
                    value={modalData.current.pedestrian_flow_and_safety_index}
                    maxValue={100}
                    color="warning"
                    showValueLabel={true}
                    classNames={{
                      base: 'max-w-md mx-5',
                      track: 'drop-shadow-md border border-default',
                      indicator: 'bg-gradient-to-r from-blue-500 to-green-500',
                      label: 'tracking-wider font-sm text-default-600',
                      value: 'text-foreground/60',
                    }}
                  />
                </ModalBody>
                <ModalFooter>
                  <Button
                    color="danger"
                    variant="light"
                    onPress={() => setIsOpen(false)}
                  >
                    Close
                  </Button>
                  <ButtonGroup variant="flat" color="primary">
                    <Button
                      onPress={() => handleSelectionChange(selectedOptionValue)}
                    >
                      {labelsMap[selectedOptionValue]}
                    </Button>
                    <Dropdown placement="bottom-end">
                      <DropdownTrigger>
                        <Button isIconOnly>
                          <ChevronDownIcon />
                        </Button>
                      </DropdownTrigger>
                      <DropdownMenu
                        disallowEmptySelection
                        aria-label="View Options"
                        selectedKeys={selectedOption}
                        selectionMode="single"
                        onSelectionChange={setSelectedOption}
                        className="max-w-[300px]"
                      >
                        <DropdownItem
                          key="footage"
                          description={descriptionsMap['footage']}
                        >
                          {labelsMap['footage']}
                        </DropdownItem>
                        <DropdownItem
                          key="camera"
                          description={descriptionsMap['camera']}
                        >
                          {labelsMap['camera']}
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </ButtonGroup>
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
                    darkMode.value ? 'dark' : 'border-none'
                  } text-foreground bg-background border-none`}
                >
                  <ModalContent className="text-foreground">
                    <ModalHeader className="flex font-light flex-row gap-2 justify-between mx-5">
                      Footage for {modalData.current?.region_name}
                    </ModalHeader>
                    <ModalBody>
                      <ReactPlayer
                        url={modalData.current?.videoUrl}
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

              {/* Camera Point View Modal */}
              {isCameraOpen && (
                <Modal
                  size="4xl"
                  isOpen={isCameraOpen}
                  onOpenChange={setIsCameraOpen}
                  isDismissable={true}
                  className={`${
                    darkMode.value ? 'dark' : 'border-none'
                  } text-foreground bg-background border-none`}
                >
                  <ModalContent className="text-foreground">
                    <ModalHeader className="flex font-light flex-row gap-2 justify-between mx-5">
                      Object Detection View for {modalData.current?.region_name}
                    </ModalHeader>
                    <ModalBody>
                      <ReactPlayer
                        url={modalData.current?.cameraUrl}
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
                        onPress={() => setIsCameraOpen(false)}
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
