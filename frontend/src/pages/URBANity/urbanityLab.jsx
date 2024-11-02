import {
  Button,
  Link,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
} from '@nextui-org/react';
import { motion } from 'framer-motion';
import React from 'react';
import URBANityTable from './table/urbanityTable';
import { Icon } from '@iconify/react';

const URBANityLab = () => {
  return (
    <div className="p-4 overflow-hidden">
      <Card className="max-w-full">
        <CardHeader className="flex gap-3">
          <Icon
            className="text-default-600"
            icon="devicon-plain:googlecolab"
            width={40}
          />

          <div className="flex flex-col">
            <p className="text-md">URBANity Lab</p>
            <p className="text-small text-default-500">SenseRator 2.0 </p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p className="leading-8 text-medium font-light m-2">
            The URBANity (URBAN Intelligence & smarT citY) Laboratory is a
            research team led by Dr. Shaurya Agarwal at the University of
            Central Florida (UCF). The lab focuses on investigating the future
            of smart cities and transportation systems. Past research topics
            cover areas such as LiDAR perception for autonomous mobility,
            applications of the Koopman operator in intelligent transport
            systems, and physics-informed deep learning.
          </p>
          <URBANityTable />
        </CardBody>
        <Divider />
        <CardFooter>
          <Link
            isExternal
            showAnchorIcon
            href="https://www.cecs.ucf.edu/sagarwal/"
          >
            Learn more about URBANity here!
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default URBANityLab;
