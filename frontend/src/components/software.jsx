import { Tabs, Tab, CardHeader } from '@nextui-org/react';
import { Card, CardBody, Divider } from '@nextui-org/react';
import { Icon } from '@iconify/react';

export default function software() {
  return (
    <div className="flex flex-col w-full h-full items-center ">
      <Tabs
        aria-label="Dynamic tabs"
        className="my-2"
        placement="start"
        color="primary"
      >
        <Tab title="Dataset Collection">
          <Card className="w-full h-full">
            <CardHeader className="flex gap-3">
              <Icon icon="eos-icons:ai" width={40} />
              <div className="flex flex-col">
                <p className="text-md">Dataset Collection</p>
                <p className="text-small text-default-500">Software</p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <p className="leading-7 font-light p-2">
                For our object detection algorithm to have accurate results, an
                accurate dataset of the area is required to use for training the
                model. We have done this by gathering six datasets, each with a
                unique label, and combining them into one large dataset to train
                a model on. This can be done either by finding good datasets
                online or by manually collecting and labeling the data for use.
                <br />
                <br />
                The features that we need datasets for are sidewalks,
                crosswalks, trees, street lights, benches, and stop signs. For
                our model, we found good datasets online via Roboflow for the
                sidewalks, trees, and stop sign labels. There were not any good
                datasets for the other features, so we ended up manually
                collecting and labeling the data for crosswalks, street lights,
                and benches.
                <br />
                <br />
                Augmentation contributes significantly to increasing sample size
                and accuracy. We use it to double our dataset size and provide
                unique images, helping the model improve accuracy and reduce
                overfitting.
              </p>
            </CardBody>
          </Card>
        </Tab>

        <Tab title="Dataset Combination">
          <Card className="w-full h-full">
            <CardHeader className="flex gap-3">
              <Icon icon="eos-icons:ai" width={40} />
              <div className="flex flex-col">
                <p className="text-md">Dataset Combination</p>
                <p className="text-small text-default-500">Software</p>
              </div>
            </CardHeader>

            <Divider />
            <CardBody>
              <p className="leading-7 font-light p-2">
                After gathering all necessary datasets, they must be combined to
                train an object detection model. We first map the original
                labels, remap the labels, and split the images into an 80% train
                and 20% validation set. Then, we create a data.yaml file to use
                this dataset for training.
              </p>
            </CardBody>
          </Card>
        </Tab>

        <Tab title="Dataset Training">
          <Card className="w-full h-full">
            <CardHeader className="flex gap-3">
              <Icon icon="eos-icons:ai" width={40} />
              <div className="flex flex-col">
                <p className="text-md">Dataset Training</p>
                <p className="text-small text-default-500">Software</p>
              </div>
            </CardHeader>

            <Divider />
            <CardBody>
              <p className="leading-7 font-light p-2">
                We retrained our model using a popular YOLO model that is
                pretrained on the COCO dataset. For real-time object detection,
                we used YOLOv8n (the nano model), which is fast and requires
                minimal processing power.
              </p>
            </CardBody>
          </Card>
        </Tab>

        <Tab title="Real Time Object Detection">
          <Card className="w-full h-full">
            <CardHeader className="flex gap-3">
              <Icon icon="eos-icons:ai" width={40} />
              <div className="flex flex-col">
                <p className="text-md"> Real Time Object Detection (YOLO)</p>
                <p className="text-small text-default-500">Software</p>
              </div>
            </CardHeader>

            <Divider />
            <CardBody>
              <p className="leading-7 font-light p-2">
                We chose YOLO for its accuracy and speed. Our trained model runs
                inference on frames from the Runcam 2, detecting objects in real
                time with a focus on optimizing inference speed down to 500 ms.
              </p>
            </CardBody>
          </Card>
        </Tab>

        <Tab title="Object Tracking ">
          <Card className="w-full h-full">
            <CardHeader className="flex gap-3">
              <Icon icon="eos-icons:ai" width={40} />
              <div className="flex flex-col">
                <p className="text-md"> Object Tracking (ByteTrack)</p>
                <p className="text-small text-default-500">Software</p>
              </div>
            </CardHeader>

            <Divider />
            <CardBody>
              <p className="leading-7 font-light p-2">
                Object tracking prevents overcounting, ensuring accuracy. We
                used ByteTrack from the Ultralytics library, which compares
                detected objects to previous detections to determine if they are
                the same object.
              </p>
            </CardBody>
          </Card>
        </Tab>

        <Tab title="Camera Calibration">
          <Card className="w-full h-full">
            <CardHeader className="flex gap-3">
              <Icon icon="eos-icons:ai" width={40} />
              <div className="flex flex-col">
                <p className="text-md"> Camera Calibration</p>
                <p className="text-small text-default-500">Software</p>
              </div>
            </CardHeader>

            <Divider />
            <CardBody>
              <p className="leading-7 font-light p-2">
                To correct lens distortion from the Runcam 2, we use a
                checkerboard calibration technique to undistort frames before
                inference, enhancing detection accuracy.
              </p>
            </CardBody>
          </Card>
        </Tab>

        <Tab title="Video Recording">
          <Card className="w-full h-full">
            <CardHeader className="flex gap-3">
              <Icon icon="eos-icons:ai" width={40} />
              <div className="flex flex-col">
                <p className="text-md">Video Recording</p>
                <p className="text-small text-default-500">Software</p>
              </div>
            </CardHeader>

            <Divider />
            <CardBody>
              <p className="leading-7 font-light p-2">
                Data is transferred from the Jetson Nano to our database through
                JSON files, which are uploaded via a Python script, enabling
                instant display on our web app.
              </p>
            </CardBody>
          </Card>
        </Tab>

        <Tab title="Data Transferring">
          <Card className="w-full h-full">
            <CardHeader className="flex gap-3">
              <Icon icon="eos-icons:ai" width={40} />
              <div className="flex flex-col">
                <p className="text-md">Transferring Data to Firebase</p>
                <p className="text-small text-default-500">Software</p>
              </div>
            </CardHeader>

            <Divider />
            <CardBody>
              <p className="leading-7 font-light p-2">
                We use Google Colab for video compression and validation,
                ensuring efficient storage on Firebase and smooth playback on
                our web app.
              </p>
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}
