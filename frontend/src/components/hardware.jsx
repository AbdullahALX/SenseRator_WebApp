import { Tabs, Tab, CardHeader } from '@nextui-org/react';
import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from '@nextui-org/react';
import { Icon } from '@iconify/react';
import HardwareModel from './hardwareModels';

export default function Hardware() {
  return (
    <div className="flex flex-col w-full h-full items-center ">
      <Tabs
        aria-label="Dynamic tabs"
        className="my-2"
        color="primary"
        placement="start"
      >
        <Tab title="Jetson Nano">
          <Card className="w-full h-full">
            <CardHeader className="flex gap-3">
              <Icon icon="ion:hardware-chip" width={40} />
              <div className="flex flex-col">
                <p className="text-md">Jetson Nano</p>
                <p className="text-small text-default-500">Hardware</p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <p className=" leading-7 font-light p-2">
                The Jetson Nano is a compact yet powerful computing platform
                developed by NVIDIA, tailored for Machine Learning applications
                and edge computing. Serving as the brain of SenseRator 2.0, it
                allows our team to run our complex programs required for the
                real-time data analysis we need to accomplish. It is equipped
                with a powerful CPU and GPU necessary to run advanced object
                detection and tracking algorithms efficiently on the move.
                <br />
                In the context of the SenseRator 2.0, the Jetson Nano processes
                live video feeds from the RunCam2, identifying and quantifying
                key urban features: sidewalks, crosswalks, benches, street
                lights, stop signs, and trees. Its ability to handle multiple
                neural networks in parallel ensures that our data is processed
                in real-time which allows us to calculate the PFS Score on the
                fly. The device’s energy efficiency and compact form make it
                ideal for mobile deployment, allowing us to seamlessly integrate
                our bicycle-mounted setup without excessive weight or bulk.
              </p>
              <div className="flex flex-row w-full justify-between">
                <Image
                  alt="Jetson Nano"
                  className="object-fill rounded-xl w-full h-full"
                  src="https://i.ibb.co/5MB39b5/jetson-nano-1.png"
                  width={600}
                />
                <Image
                  alt="Jetson Nano"
                  className="object-fill rounded-xl w-full h-full"
                  src="https://i.ibb.co/V9YvT3Q/re-Computer-Jetson-10-1-A0-with-Jetson-Nano-module-Aluminium-case-pre-installed-Jet-Pack-System-1.png"
                  width={600}
                />
              </div>
            </CardBody>
          </Card>
        </Tab>

        <Tab title="RunCam 2">
          <Card className="w-full h-full">
            <CardHeader className="flex gap-3">
              <Icon icon="ion:hardware-chip" width={40} />
              <div className="flex flex-col">
                <p className="text-md">RunCam 2</p>
                <p className="text-small text-default-500">Hardware</p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <p className=" leading-7 font-light p-2">
                The RunCam 2 is a high-definition, action camera renowned for
                its lightweight, compact design, and great image quality. It
                serves as the visual sensor for the SenseRator 2.0, capturing
                crisp and detailed footage of the urban environment as the
                system moves through the cityscape. With its recording
                capabilities in 1080p at 60fps, the RunCam 2 provided us the
                necessary clarity and frame rate needed for accurate object
                detection and tracking.
                <br />
                The wide-angle lens captures a broad field of view, ensuring
                that all relevant features within the environment being analyzed
                are included in the video feed. The camera’s compact size allows
                it to be integrated easily to our custom 3D-printed mount,
                designed to fit to the DJI OM5 gimbal, also keeping our
                detection system minimal in size.
              </p>
              <div className="flex flex-row w-full justify-center">
                <Image
                  alt="Jetson Nano"
                  className="object-fill rounded-xl w-full h-full"
                  src="https://i.ibb.co/dcXvCvc/813-std-1512961417-Photoroom.png"
                  width={400}
                />
              </div>
            </CardBody>
          </Card>
        </Tab>

        <Tab title="Camera Stabilizer">
          <Card className="w-full h-full">
            <CardHeader className="flex gap-3">
              <Icon icon="ion:hardware-chip" width={40} />
              <div className="flex flex-col">
                <p className="text-md">Camera Stabilizer</p>
                <p className="text-small text-default-500">Hardware</p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <p className=" leading-7 font-light p-2">
                The Camera Stabilizer is a critical component to our video
                collection, allowing the RunCam 2 to capture smooth and steady
                video feed free from distortions caused by uneven and aggressive
                movements. While testing initial versions of the SenseRator 2.0,
                we encountered bumpy and rough terrains that greatly affected
                the object detection model to efficiently label objects.
                <br />
                The SenseRator 2.0’s mounting system combines a DJI OM5 gimbal
                for X/Y-axis stabilization with our custom-designed Z-axis
                spring gimbal to address vertical movements when the bike
                encounters uneven terrain. The DJI gimbal is a
                professional-grade stabilizer that keeps the camera steady
                against horizontal and rotational motions, providing a stable
                platform to mount the lightweight RunCam 2. To complement this,
                a custom Z-axis spring gimbal was designed using small joints
                and springs inside a 3D-printed model to absorb and counteract
                vertical jolts and vibrations that occur while cycling.
              </p>
              <div className="flex flex-row justify-center items-center">
                <HardwareModel url="/models/om5.stl" />
                <HardwareModel url="/models/NikoGimbalV6A.stl" />
              </div>
            </CardBody>
          </Card>
        </Tab>

        <Tab title="Vehicle Mount">
          <Card className="w-full h-full">
            <CardHeader className="flex gap-3">
              <Icon icon="ion:hardware-chip" width={40} />
              <div className="flex flex-col">
                <p className="text-md">Vehicle Mount</p>
                <p className="text-small text-default-500">Hardware</p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <p>
                The Vehicle Mount is custom-designed to securely attach all the
                components of the SenseRator 2.0 to a bicycle. Crafted with 3D
                printing, the mount is tailored to fit the unique dimensions of
                the Jetson Nano and its accompanying LCD 5” touch screen and to
                lock them to the handlebars of the bicycle.
                <br />
                Constructed from lightweight plastic and small hardware, the
                vehicle mount ensures that the equipment is safely secured to
                the bicycle and does not impede the ability of the cyclist to
                navigate through the environment. The mount facilitates quick
                assembly and disassembly, allowing for efficient deployment and
                maintenance of the system.
              </p>
              <div className="flex flex-row justify-center items-center">
                <HardwareModel url="/models/Jetson-001.stl" />
              </div>
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}
