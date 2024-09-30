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
  Divider,
  Chip,
} from '@nextui-org/react';

import green from '../../assets/green.jpg';
import cross from '../../assets/gray.avif';
import light from '../../assets/red.avif';
import bench from '../../assets/blue.avif';
import useDarkMode from 'use-dark-mode'; // Assuming you're using a dark mode hook library

const Test = () => {
  const WEB_MAP_API = import.meta.env.VITE_WEB_GEO_API_KEY;

  const [isOpen, setIsOpen] = useState(false); // Modal visibility state
  const [modalData, setModalData] = useState(null); // Data to show in modal

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

  const defaultContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

  // Function to handle click on the map
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

      if (layerId === 'firstHalfLayer') {
        setModalData({ title: 'Memory Mall', score: 8.5 });
      } else if (layerId === 'secondHalfLayer') {
        setModalData({ title: 'HEC', score: 7.2 });
      } else if (layerId === 'thirdHalfLayer') {
        setModalData({ title: 'Health Center', score: 7.2 });
      } else if (layerId === 'fourthHalfLayer') {
        setModalData({ title: 'Library', score: 7.2 });
      } else if (layerId === 'fifthHalfLayer') {
        setModalData({ title: 'Lake Claire', score: 7.2 });
      }

      setIsOpen(true); // Open the modal
    }
  };

  const handleMapLoad = () => {
    if (mapRef.current) {
      mapRef.current.on('click', handleMapClick);
    }
  };

  // Close modal function
  const onClose = () => {
    setIsOpen(false);
  };

  // GeoJSON data for different layers
  const geojsonFirstHalf = {
    type: 'Feature',
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [-81.20182, 28.60561],
          [-81.20181, 28.60532],
          [-81.20195, 28.60526],
          [-81.20189, 28.60506],
          [-81.20184, 28.60495],
          [-81.20181, 28.60491],
          [-81.20179, 28.60487],
          [-81.20179, 28.60483],
          [-81.2018, 28.60476],
          [-81.20181, 28.6047],
          [-81.2018, 28.60466],
          [-81.2018, 28.60464],
          [-81.20172, 28.6045],
          [-81.20164, 28.60442],
          [-81.20157, 28.60428],
          [-81.20155, 28.60424],
          [-81.20159, 28.60422],
          [-81.20141, 28.60395],
          [-81.20129, 28.60384],
          [-81.20111, 28.60353],
          [-81.20102, 28.60337],
          [-81.20097, 28.60328],
          [-81.20094, 28.60325],
          [-81.20095, 28.60319],
          [-81.20089, 28.6032],
          [-81.20071, 28.60327],
          [-81.20053, 28.60334],
          [-81.20032, 28.60338],
          [-81.20012, 28.60339],
          [-81.19985, 28.60335],
          [-81.19965, 28.60328],
          [-81.19946, 28.60318],
          [-81.1993, 28.60306],
          [-81.19921, 28.60295],
          [-81.19913, 28.60283],
          [-81.19905, 28.60267],
          [-81.19893, 28.60225],
          [-81.19888, 28.60229],
          [-81.19878, 28.6023],
          [-81.1982, 28.60231],
          [-81.19763, 28.60231],
          [-81.19765, 28.60174],
          [-81.19759, 28.60171],
          [-81.19698, 28.60167],
          [-81.19659, 28.60168],
          [-81.19649, 28.60164],
          [-81.19637, 28.60156],
          [-81.19589, 28.60155],
          [-81.19564, 28.60157],
          [-81.19528, 28.60155],
          [-81.19515, 28.60156],
          [-81.19457, 28.60182],
          [-81.19436, 28.60186],
          [-81.1944, 28.60203],
          [-81.19452, 28.60239],
          [-81.19471, 28.60275],
          [-81.19486, 28.60298],
          [-81.19509, 28.60324],
          [-81.19526, 28.60341],
          [-81.19536, 28.60351],
          [-81.19547, 28.60357],
          [-81.19558, 28.60371],
          [-81.19571, 28.60395],
          [-81.19592, 28.60445],
          [-81.19603, 28.60474],
          [-81.19612, 28.60502],
          [-81.19642, 28.60555],
          [-81.19684, 28.60599],
          [-81.19705, 28.60611],
          [-81.19725, 28.60622],
          [-81.19758, 28.60636],
          [-81.19794, 28.60645],
          [-81.19843, 28.6065],
          [-81.19894, 28.60646],
          [-81.19931, 28.60638],
          [-81.19957, 28.60627],
          [-81.2001, 28.6061],
          [-81.20067, 28.60593],
        ],
      ],
    },
  };

  const geojsonSecondHalf = {
    type: 'Feature',
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [-81.19437, 28.60193],
          [-81.19459, 28.60191],
          [-81.19471, 28.60186],
          [-81.19482, 28.6018],
          [-81.195, 28.60173],
          [-81.19526, 28.60163],
          [-81.19564, 28.60163],
          [-81.19601, 28.60164],
          [-81.19637, 28.60166],
          [-81.19656, 28.60175],
          [-81.19696, 28.60176],
          [-81.1974, 28.60174],
          [-81.19758, 28.60177],
          [-81.19756, 28.60238],
          [-81.19896, 28.60235],
          [-81.19911, 28.60185],
          [-81.19941, 28.60151],
          [-81.19959, 28.6014],
          [-81.19981, 28.60131],
          [-81.1998, 28.60105],
          [-81.1998, 28.60079],
          [-81.19952, 28.60079],
          [-81.19943, 28.60077],
          [-81.1994, 28.60073],
          [-81.19938, 28.60068],
          [-81.19936, 28.6006],
          [-81.19939, 28.60055],
          [-81.19943, 28.6005],
          [-81.19944, 28.60046],
          [-81.19942, 28.60038],
          [-81.19932, 28.60013],
          [-81.19918, 28.59971],
          [-81.1988, 28.59965],
          [-81.19861, 28.59977],
          [-81.19858, 28.59966],
          [-81.19793, 28.59883],
          [-81.19717, 28.59794],
          [-81.19578, 28.59882],
          [-81.19503, 28.59929],
          [-81.19454, 28.59978],
          [-81.19436, 28.60016],
          [-81.19431, 28.60107],
          [-81.19434, 28.60165],
          [-81.19437, 28.60193],
        ],
      ],
    },
  };

  const geojsonThirdHalf = {
    type: 'Feature',
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [-81.19802, 28.59906],
          [-81.19817, 28.59926],
          [-81.1983, 28.59943],
          [-81.19842, 28.59955],
          [-81.19853, 28.59969],
          [-81.1986, 28.5998],
          [-81.19886, 28.59967],
          [-81.199, 28.5997],
          [-81.19917, 28.59974],
          [-81.19923, 28.5999],
          [-81.19929, 28.60007],
          [-81.19935, 28.60023],
          [-81.19943, 28.60043],
          [-81.19943, 28.60045],
          [-81.19943, 28.60047],
          [-81.19942, 28.60049],
          [-81.19936, 28.60057],
          [-81.19936, 28.60064],
          [-81.19939, 28.60073],
          [-81.19943, 28.60081],
          [-81.1995, 28.60084],
          [-81.19973, 28.60084],
          [-81.19974, 28.60104],
          [-81.19976, 28.60132],
          [-81.19986, 28.60129],
          [-81.19987, 28.60129],
          [-81.19988, 28.60129],
          [-81.19989, 28.60129],
          [-81.19991, 28.60128],
          [-81.19992, 28.60128],
          [-81.19996, 28.60128],
          [-81.20007, 28.60128],
          [-81.2002, 28.60128],
          [-81.20034, 28.60129],
          [-81.20049, 28.6013],
          [-81.20055, 28.60126],
          [-81.20077, 28.60064],
          [-81.20083, 28.60061],
          [-81.20078, 28.60035],
          [-81.20083, 28.60025],
          [-81.20093, 28.60018],
          [-81.20112, 28.59999],
          [-81.20158, 28.59922],
          [-81.20169, 28.59915],
          [-81.2019, 28.59888],
          [-81.20222, 28.59838],
          [-81.20223, 28.59826],
          [-81.202, 28.59805],
          [-81.20192, 28.59795],
          [-81.20184, 28.59775],
          [-81.20175, 28.59716],
          [-81.20201, 28.59709],
          [-81.20211, 28.59703],
          [-81.2022, 28.59693],
          [-81.20237, 28.59675],
          [-81.20183, 28.59657],
          [-81.20169, 28.5965],
          [-81.20157, 28.59641],
          [-81.20134, 28.59624],
          [-81.201, 28.59613],
          [-81.20057, 28.59613],
          [-81.20004, 28.59623],
          [-81.19982, 28.59627],
          [-81.19959, 28.59629],
          [-81.19932, 28.59631],
          [-81.19905, 28.59627],
          [-81.19878, 28.59629],
          [-81.19857, 28.59634],
          [-81.1983, 28.59649],
          [-81.19814, 28.59661],
          [-81.19801, 28.59679],
          [-81.19792, 28.59701],
          [-81.19788, 28.59729],
          [-81.19786, 28.59744],
          [-81.1978, 28.59755],
          [-81.19771, 28.59764],
          [-81.19758, 28.59774],
          [-81.19744, 28.59782],
          [-81.19729, 28.59789],
          [-81.19715, 28.59798],
          [-81.19722, 28.5981],
          [-81.19735, 28.59826],
          [-81.19767, 28.59865],
          [-81.19784, 28.59885],
        ],
      ],
    },
  };

  const geojsonFourthHalf = {
    type: 'Feature',
    properties: {
      pedestrian_flow_and_safety_index: 8.2, // Add the PFS Score here
    },
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [-81.20133, 28.60193],
          [-81.20146, 28.60205],
          [-81.20161, 28.60203],
          [-81.20187, 28.60192],
          [-81.20206, 28.60175],
          [-81.2025, 28.60157],
          [-81.20253, 28.60164],
          [-81.20278, 28.60155],
          [-81.20314, 28.60148],
          [-81.20331, 28.60148],
          [-81.20359, 28.60126],
          [-81.20366, 28.60107],
          [-81.20364, 28.60096],
          [-81.20375, 28.60097],
          [-81.20385, 28.60091],
          [-81.20392, 28.60074],
          [-81.20423, 28.60056],
          [-81.2045, 28.60057],
          [-81.20455, 28.60066],
          [-81.20475, 28.6007],
          [-81.20516, 28.60077],
          [-81.20565, 28.60084],
          [-81.20579, 28.60083],
          [-81.2063, 28.60057],
          [-81.20656, 28.60043],
          [-81.20682, 28.60032],
          [-81.20682, 28.60008],
          [-81.20669, 28.59971],
          [-81.20631, 28.59912],
          [-81.206, 28.59876],
          [-81.20576, 28.59856],
          [-81.20543, 28.5983],
          [-81.20491, 28.59801],
          [-81.20365, 28.59738],
          [-81.20229, 28.59671],
          [-81.20215, 28.59691],
          [-81.20198, 28.59704],
          [-81.20168, 28.59713],
          [-81.20173, 28.59751],
          [-81.20184, 28.59798],
          [-81.20207, 28.5982],
          [-81.20213, 28.59825],
          [-81.20216, 28.59832],
          [-81.20181, 28.59881],
          [-81.20143, 28.59946],
          [-81.20116, 28.59988],
          [-81.20102, 28.60006],
          [-81.20088, 28.6002],
          [-81.20079, 28.60027],
          [-81.20075, 28.60039],
          [-81.20079, 28.60055],
          [-81.20073, 28.60061],
          [-81.20062, 28.60092],
          [-81.20051, 28.60125],
          [-81.20063, 28.60129],
          [-81.20079, 28.6014],
          [-81.20099, 28.60153],
          [-81.20108, 28.60163],
          [-81.20117, 28.60172],
          [-81.20133, 28.60193], // Closing the polygon
        ],
      ],
    },
  };

  const geojsonFifthHalf = {
    type: 'Feature',
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [-81.20089, 28.60324],
          [-81.20105, 28.60353],
          [-81.20123, 28.60385],
          [-81.20129, 28.60385],
          [-81.20141, 28.60396],
          [-81.20148, 28.60408],
          [-81.20157, 28.60421],
          [-81.20154, 28.60423],
          [-81.20158, 28.60433],
          [-81.20165, 28.60444],
          [-81.20176, 28.60458],
          [-81.2018, 28.60469],
          [-81.20178, 28.6048],
          [-81.20179, 28.60489],
          [-81.20188, 28.60506],
          [-81.20194, 28.60526],
          [-81.20196, 28.6054],
          [-81.20195, 28.60561],
          [-81.20209, 28.60562],
          [-81.20224, 28.60563],
          [-81.2024, 28.60564],
          [-81.20251, 28.60566],
          [-81.20262, 28.60568],
          [-81.20273, 28.60572],
          [-81.20298, 28.60584],
          [-81.20311, 28.60596],
          [-81.20328, 28.60616],
          [-81.2036, 28.6066],
          [-81.20425, 28.6062],
          [-81.20457, 28.606],
          [-81.2049, 28.6058],
          [-81.20521, 28.60557],
          [-81.20547, 28.60539],
          [-81.20599, 28.60491],
          [-81.20608, 28.60482],
          [-81.20616, 28.60474],
          [-81.20631, 28.60455],
          [-81.20641, 28.60434],
          [-81.20647, 28.60418],
          [-81.2065, 28.60399],
          [-81.20649, 28.60377],
          [-81.20643, 28.60355],
          [-81.20634, 28.60338],
          [-81.20617, 28.60319],
          [-81.20604, 28.60305],
          [-81.20595, 28.6029],
          [-81.20584, 28.60267],
          [-81.20581, 28.60251],
          [-81.20579, 28.60234],
          [-81.2058, 28.60218],
          [-81.20584, 28.60203],
          [-81.20589, 28.60187],
          [-81.20601, 28.60166],
          [-81.20607, 28.60158],
          [-81.2062, 28.60145],
          [-81.20639, 28.60124],
          [-81.20659, 28.60095],
          [-81.20674, 28.60064],
          [-81.20681, 28.60025],
          [-81.20633, 28.60052],
          [-81.2058, 28.60082],
          [-81.20567, 28.60083],
          [-81.20555, 28.60082],
          [-81.20536, 28.60079],
          [-81.20512, 28.60076],
          [-81.20476, 28.6007],
          [-81.20462, 28.60067],
          [-81.20456, 28.60065],
          [-81.20452, 28.6006],
          [-81.20451, 28.60055],
          [-81.20424, 28.60055],
          [-81.20393, 28.60074],
          [-81.20388, 28.60083],
          [-81.20386, 28.60091],
          [-81.20381, 28.60091],
          [-81.20378, 28.60092],
          [-81.20375, 28.60096],
          [-81.20361, 28.60095],
          [-81.20364, 28.60103],
          [-81.20364, 28.60109],
          [-81.20363, 28.60114],
          [-81.20361, 28.60119],
          [-81.20358, 28.60124],
          [-81.20351, 28.6013],
          [-81.20344, 28.60136],
          [-81.2033, 28.60147],
          [-81.20307, 28.60148],
          [-81.20285, 28.60151],
          [-81.2026, 28.60159],
          [-81.20253, 28.60162],
          [-81.2025, 28.60155],
          [-81.2022, 28.60167],
          [-81.20207, 28.60172],
          [-81.20198, 28.6018],
          [-81.20185, 28.6019],
          [-81.20176, 28.60195],
          [-81.20161, 28.60202],
          [-81.20154, 28.60204],
          [-81.20146, 28.60202],
          [-81.2014, 28.60196],
          [-81.20136, 28.6019],
          [-81.20135, 28.60188],
          [-81.20133, 28.60187],
          [-81.20131, 28.60188],
          [-81.2013, 28.60189],
          [-81.2013, 28.60196],
          [-81.20132, 28.60204],
          [-81.20134, 28.60214],
          [-81.20136, 28.60229],
          [-81.20135, 28.60245],
          [-81.20129, 28.60268],
          [-81.20123, 28.60281],
          [-81.20113, 28.60286],
          [-81.2011, 28.60293],
          [-81.20113, 28.60303],
          [-81.201, 28.60309],
          [-81.2009, 28.60316],
          [-81.20089, 28.60324], // Closing the polygon
        ],
      ],
    },
  };

  return (
    <div className="justify-center items-center flex h-screen w-screen relative mx-auto overflow-hidden">
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
              'fill-color': '#4C00FF', // Purple color for the fourth half
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
              'fill-color': '#FF0080', // Pink color for the fifth half
              'fill-opacity': 0.2,
            }}
          />
        </Source>

        {/* Optionally add outlines for all halves */}
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

        {/* Modal */}
        <Modal
          isOpen={isOpen}
          onOpenChange={setIsOpen}
          isDismissable={false}
          isKeyboardDismissDisabled={true}
          className={`${
            darkMode.value ? 'dark' : 'border-none '
          } text-foreground bg-background border-none`}
        >
          <ModalContent className="text-foreground ">
            <>
              <ModalHeader className="flex font-light  flex-row gap-2 ">
                {modalData?.title}
                <Chip variant="faded" color="success">
                  Pedestrian Flow and Safety Index is 8
                </Chip>
              </ModalHeader>
              {/* <Divider className="my-4" />
              <ModalHeader className="flex font-light  flex-row gap-5  "></ModalHeader> */}
              <ModalBody>
                <Accordion selectionMode="multiple  ">
                  <AccordionItem
                    className=" font-light "
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
                    Trees provide shade and improve air quality, contributing to
                    the pedestrian experience
                  </AccordionItem>
                  <AccordionItem
                    className=" font-light "
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
                    Benches offer resting spots for pedestrians and enhance the
                    comfort of public spaces.
                  </AccordionItem>
                  <AccordionItem
                    className=" font-light "
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
                    Street lights enhance nighttime visibility, improving safety
                    for pedestrians
                  </AccordionItem>
                  <AccordionItem
                    className=" font-light "
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
                    Properly marked crosswalks increase pedestrian safety when
                    crossing roads
                  </AccordionItem>
                </Accordion>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  View footage
                </Button>
              </ModalFooter>
            </>
          </ModalContent>
        </Modal>
      </Map>
    </div>
  );
};

export default Test;
