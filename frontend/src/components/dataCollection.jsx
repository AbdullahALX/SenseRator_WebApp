import React from "react";
import { Image } from "@nextui-org/react"

const DataCollection = () => {
    return (
        <div>
            <div className="mb-4 p-4 border border-foreground-300 rounded-lg bg-foreground-50">
                <h3 className="text-xl font-bold mb-2"> Data Collection </h3>

                <p>
                    Data is collected in real-time, using a Jetson Nano Computer attached to a camera, which is mounted onto a bicycle. All
                    computer parts are frmo Jetson Nano, while the mount was 3d-printed by the team.
                    The collector can proceed to ride their bicycle over a pre-planned area, where video is recorded.<br />
                </p>
                <h2 className='text-l font-bold my-2'>Jetson Nano Components</h2>
                <p>
                    &ensp; Jetson Nano<br />
                    &ensp; 5 Inch Monitor<br />
                    &ensp; Sandisk SD Card<br />
                    &ensp; CanaKit Power Supply <br />
                    &ensp; Raspberry Pi CSI Camera<br />
                </p>
                <div className='px-60 self-center justify-items-center'>
                    <div className='grid grid-cols-2 gap-2 justify-items-center flex-between'>
                        <div className='col-span-1'>
                            <Image
                                isZoomed
                                alt="Various pieces of a Jetson Nano computer for SenseRator 2.0 are arranged on a table"
                                src="https://i.ibb.co/FJKxFcy/nano-Arranged.png"
                            />
                        </div>
                        <div className='col-span-1'>
                            <Image
                                isZoomed
                                alt="The bikemount created for SenseRator 2.0's Jetson Nano Computer and Camera"
                                src="https://i.ibb.co/1ZJW6rV/bike-Mount.png"
                            />
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default DataCollection;