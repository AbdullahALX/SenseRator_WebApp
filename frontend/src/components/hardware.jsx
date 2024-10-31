import React from 'react';
import HardwareModel from './hardwareModels'

const hardware = () => {
  return (
    <div>
      <div className="p-4  overflow-auto ">
        <div className="mb-4 p-4 border border-foreground-300 rounded-lg bg-foreground-50 ">
          <h3 className="text-xl font-bold mb-2">Jetson Nano</h3>
          <p>
          The Jetson Nano is a compact yet powerful computing platform developed by NVIDIA, 
          tailored for Machine Learning applications and edge computing. Serving as the brain of SenseRator 2.0, 
          it allows our team to run our complex programs required for the real-time data analysis we need to accomplish. 
          It is equipped with a powerful CPU and GPU necessary to run advanced object detection and tracking algorithms efficiently on the move.
          <br/><br/>
          In the context of the SenseRator 2.0, the Jetson Nano processes live video feeds from the RunCam2, 
          identifying and quantifying key urban features: sidewalks, crosswalks, benches, street lights, stop signs, 
          and trees. Its ability to handle multiple neural networks in parallel ensures that our data is processed in real time which allows us to 
          calculate the PFS Score on the fly. The device’s energy efficiency and compact form make it ideal for mobile deployment, 
          allowing us to seamlessly integrate our bicycle-mounted setup without excessive weight or bulk.
          </p>
        </div>

        <div className="mb-4 p-4 border border-foreground-300 rounded-lg bg-foreground-50">
          <h3 className="text-xl font-bold mb-2">Runcam 2</h3>
          <p>
          The RunCam 2 is a high-definition, action camera renowned for it's lightweight, compact design, and great image quality. 
          It serves as the visual sensor for the SenseRator 2.0, capturing crisp and detailed footage of the urban environment as the system moves through the cityscape.
          With it's recording capabilities in 1080p at 60fps, the RunCam 2 provided us the necessary clarity and frame rate needed for accurate object detection and tracking.
          <br/><br/>
          The wide-angle lens captures a broad field of view, ensuring that all relevant features within the environment being analyzed are included in the video feed. 
          The camera’s compact size allows it to be integrated easily to our custom 3D-printed mount, designed to fit to the DJI OM5 gimbal, also keeping our detection 
          system minimal in size.
          </p>
        </div>

        <div className="mb-4 p-4 border border-foreground-300 rounded-lg bg-foreground-50">
          <h3 className="text-xl font-bold mb-2">Camera Stabilizer</h3>
          <p>
            The Camera Stabilizer is a critical component to our video collection, 
            allowing the RunCam 2 to capture smooth and steady video feed free from distortions caused by uneven and aggressive movements. 
            While testing initial versions of the SenseRator 2.0, 
            we encountered bumpy and rough terrains that greatly affected the object detection model to efficiently label objects. 
            The SenseRator 2.0’s mounting system combines a DJI OM5 gimbal for X/Y - axis stabilization with our custom-designed Z-axis spring gimbal to address 
            vertical movements when the bike encounters uneven terrain.
            <br/><br/>
            The DJI gimbal is a professional-grade stabilizer that keeps the camera steady against horizontal and rotational motions, 
            providing a stable platform to mount the lightweight RunCam 2. 
            To complement this, a custom Z-axis spring gimbal was designed using small joints and springs inside a 
            3D-printed model to absorb and counteract vertical jolts and vibrations that occur while cycling. 
            The multi-axis stabilization system is essential for maintaining high-quality video input, 
            directly impacting the effectiveness and accuracy of the detection algorithms running on the Jetson Nano.

            The camera-stabilization system is ultimately attached to the bicycle using a NOGA Israeli Arm. 
            The NOGA arm locks via pressurization in it's joints to securely support the weight and bulk of the system out in front of the bicycle and Jetson Nano.
          </p>
          <div className="flex justify-center">
            <HardwareModel url= "/models/om5.stl"/>
            <HardwareModel url= "/models/NikoGimbalV6A.stl"/>
            <HardwareModel url="/models/NikoGimbalV1.stl"/>
          </div>
        </div>
        <div className="mb-4 p-4 border border-foreground-300 rounded-lg bg-foreground-50">
          <h3 className="text-xl font-bold mb-2">Vehicle Mount</h3>
          <p>
            The Vehicle Mount is custom designed to securely attach all the components of the SenseRator 2.0 to a bicycle. 
            Crafted with 3D printing, the mount is tailored to fit the unique dimensions of the Jetson Nano and its 
            accompanying LCD 5” touch screen and to lock them to the handlebars of the bicycle.
            <br/><br/>
            Constructed from lightweight plastic and small hardware, the vehicle mount ensures that the equipment is safely secured to the bicycle and 
            does not impede on the ability of the cyclist to navigate through the environment. 
            The mount facilitates quick assembly and disassembly, allowing for efficient deployment and maintenance of the system.
            <br/><br/>
            Along with the touch screen monitor, this allows our team to view our work in real time and monitor feedback as well as interacting with our system. 
            Through this system, we can make on-the-fly adjustments to parameters in our code, processing, and model.
          </p>
        </div>
      </div>
    </div>
  );
};

export default hardware;