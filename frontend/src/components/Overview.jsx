import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from '@nextui-org/react';
import { Icon } from '@iconify/react';

import finalDoc from '../assets/l10_Final_Design Document.pdf';
const Overview = () => {
  return (
    <div className="p-4 flex flex-col gap-7">
      <Card className="max-w-full">
        <CardHeader className="flex gap-3">
          <Icon
            className="text-default-600"
            icon="material-symbols:overview-key-rounded"
            width={40}
          />

          <div className="flex flex-col">
            <p className="text-md">Overview</p>
            <p className="text-small text-default-500">SenseRator 2.0 </p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p className="leading-8 text-medium font-light">
            SenseRator 2.0 is a project based on computer vision and civil
            engineering, aimed at improving pedestrian safety in urban
            environments. Leveraging smart city concepts, the SenseRator team
            developed an AI algorithm using Jetson Nano components. The system
            allows users to record video while riding a vehicle (e.g., bicycle)
            through an area. The algorithm then analyzes the video, generating a
            rating based on the observed architecture. This rating is available
            for viewing on a React web application. The goal of SenseRator 2.0
            is to raise awareness of pedestrian safety and advocate for walkable
            urban planning.
          </p>
        </CardBody>
        <Divider />
        <CardFooter>
          <Link isExternal showAnchorIcon href={finalDoc}>
            Learn more about it.
          </Link>
        </CardFooter>
      </Card>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* Project Overview Card */}
        <Card className="max-w-full">
          <CardHeader className="flex gap-3">
            <Icon
              className="text-default-600"
              icon="material-symbols:flag-circle-rounded"
              width={30}
            />
            <div className="flex flex-col">
              <p className="text-md">Safety Concerns in Florida</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p className="leading-8 text-medium font-light">
              Florida ranked 4th in pedestrian fatality rates in 2022, with 773
              deaths, and Orlando was among the top 20 deadliest cities for
              pedestrians in 2024. A lack of walkable infrastructure is a
              significant factor contributing to these rates.
            </p>
          </CardBody>
        </Card>

        {/* Goals and Objectives Card */}
        <Card className="max-w-full">
          <CardHeader className="flex gap-3">
            <Icon
              className="text-default-600"
              icon="mage:goals-fill"
              width={30}
            />
            <div className="flex flex-col">
              <p className="text-md">Project Goals</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p className="leading-8 text-medium font-light">
              SenseRator 2.0 aims to advocate for safer, walkable urban
              structures, including sidewalks, crosswalks, lower speed limits,
              and appropriate signage. These improvements promote safer
              communities and enhance quality of life.
            </p>
          </CardBody>
        </Card>

        {/* Technology and Impact Card */}
        <Card className="max-w-full">
          <CardHeader className="flex gap-3">
            <Icon
              className="text-default-600"
              icon="ri:color-filter-ai-fill"
              width={30}
            />
            <div className="flex flex-col">
              <p className="text-md">Technology and Impact</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p className="leading-8 text-medium font-light">
              Leveraging smart city and AI-driven technology, SenseRator 2.0
              highlights the importance of pedestrian safety in Central Florida,
              aiming to create a more walkable and connected urban landscape.
            </p>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Overview;
