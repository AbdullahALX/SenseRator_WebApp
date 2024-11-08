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
                model. We have done this by gathering 6 datasets, each with a
                unique label, and combining them into one large dataset to train
                a model on. This can be done either by finding good datasets
                online or by manually collecting and labeling the data for use.
                <br />
                <br />
                The features that we need datasets for are sidewalks,
                crosswalks, trees, street lights, benches, and stop signs. For
                our model, we found good datasets online via Roboflow for the
                sidewalks, trees, and stop sign labels. There were not any good
                datasets for the other features so we ended up manually
                collecting and labeling the data for crosswalks, street lights,
                and benches.
                <br />
                <br />
                After this, augmentation contributes a large part in increasing
                sample size as well as the accuracy of an object detection
                algorithm. Augmentation provides many available changes to an
                image such as rotation, brightness, and quality. We use this to
                double our dataset size as well as provide unique images which
                will help the model raise its accuracy and help reduce the
                chance of overfitting.
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
                After gathering all of the necessary datasets, they must be
                combined so it can be used to train an object detection model
                on. To combine datasets, we first create a mapping for the
                original labels and use that to remap the labels to combine all
                of the images and labels in each dataset. We then split up the
                images into a 80% train and 20% validation set. We then move all
                of the images and labels within their respective set into the
                newly created combined dataset. Then in order to use this
                combined dataset for training, we must create a data.yaml file
                that instructs the training function on the labels and paths in
                our dataset. When the data.yaml file is created, this dataset
                can now be used to train an object detection model.
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
                To train a dataset, there are 2 options. Either by training a
                model from scratch or by using a pretrained model. Retraining a
                pretrained model is the popular option as it has a baseline and
                it is easy to do. We retrained our model using a popular YOLO
                model that is pretrained on the COCO dataset which has various
                different sizes such as nano, small, medium, and large. The
                larger the model, the more accurate it gets, but it is slower
                and requires more processing power than the smaller models. For
                our purposes in real time object detection, we are using the
                YOLOv8n, which is the nano model which is very fast in running
                inference and does not require much processing power.
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
                For our object detection algorithm, we chose YOLO because it is
                a popular algorithm that is known for its accuracy and speed. It
                is also easy to work with which helps us train our model much
                quicker. With our trained model, we run inference on frames that
                are captured from our Runcam 2 which detects and displays
                objects on our monitor. Because we are doing real time object
                detection, we have focused a lot on optimizing inference speed
                and have gotten it down to 500 ms. As soon as our program ends,
                the objects counted and displayed at the end as well as our
                calculated PFS score for the run.
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
                Object tracking is a necessity to make sure our model is not
                overcounting objects to create inaccurate data. We have
                implemented object tracking through the use of a tracker called
                bytetrack. Bytetrack is included within the Ultralytics library
                specifically for use on an object detection algorithm. The
                tracker compares detected objects to previously detected objects
                to determine whether it is the same object or not. Implementing
                object tracking has removed the majority of overcounting and has
                been a great asset in gathering accurate results.
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
                Most cameras come with a lens that contributes to some sort of
                distortion within an image. The Runcam 2 we are using has a
                curved lens that slightly bends objects in the video feed that
                it captures. This causes the object detection algorithm to
                either miss the object entirely, or lower the accuracy
                confidence of each object. To offset this distortion, we must
                calibrate our camera and remove the distortion within the frame
                before inference is run on it. This can be done with a
                checkerboard pattern on a flat surface and a simple algorithm
                online. Around 10 to 20 images from different angles of the
                checkerboard should be captured and input into the algorithm.
                The algorithm then outputs the values needed to undistort an
                image and we use this to undistort each image that is sent for
                inference ensuring an accurate detection.
              </p>
            </CardBody>
          </Card>
        </Tab>

        <Tab title="Video Compression">
          <Card className="w-full h-full">
            <CardHeader className="flex gap-3">
              <Icon icon="eos-icons:ai" width={40} />
              <div className="flex flex-col">
                <p className="text-md">Video Compression</p>
                <p className="text-small text-default-500">Software</p>
              </div>
            </CardHeader>

            <Divider />
            <CardBody>
              <p className="leading-7 font-light p-2">
                We used Google Colab to host the video compression code as well
                as to handle the pip install commands for the necessary
                installation of library dependencies (i.e. moviepy and
                ffmpeg-python). Then we hosted the large video files by mounting
                the Google Drive storage onto Google Colab.
                <br />
                <br />
                The video compression code uses MoviePy to correct the bit rate
                of the video as well as to remove background noise from the
                video and produces a smaller and still smooth video. The further
                use of MoviePy was allocated to perform the conversion to
                libx264 codec which helps allow the necessary compression to
                take place so little storage is needed to be hosted on our
                Firebase Database. Compression of the video is necessary so when
                users view the video on our web app it does not require as many
                processing resources to load it up.
                <br />
                <br />
                Furthermore, ffmpeg-python was used to perform a rigorous
                validity check to ensure the bit rate would align to the new bit
                rate of the video as well as its frame rate, and from there it
                would correct the resolution of the video with limited loss to
                the quality of the video.
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
                To transfer the data gathered from the jetson nano into our
                database, we store our scores and the video name into a json
                file that can be uploaded into our database through a simple
                python script. We check and verify that the json file is correct
                and get ready to process it through the script. As soon as we
                finish running the script, the json file is transferred to the
                database and is ready to be displayed on our webapp instantly.
              </p>
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}
