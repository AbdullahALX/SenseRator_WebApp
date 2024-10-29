import React from 'react';
import { Image } from '@nextui-org/react'

const PSFICalculation = () => {
    return (
        <div>
            <div className="mb-4 p-4 border border-foreground-300 rounded-lg bg-foreground-50">
                <h3 className="text-xl font-bold mb-2">Analysis and Calculation</h3>
                <p>
                    After data is collected using SenseRator's Jetson Nano, it's time to run the footage through our AI algorithm.
                    All objects of interest are detected by our AI algorithm, and are also tracked to prevent diplicate counting. All items are
                    counted seperately, and assigned their own IDs, so that at the end, we have an accurate count of structures that were detected in the video
                    taken by SenseRator. <br />
                    At the end, all counts are compiled and weighted together by our scoring algorithm. This score is our Pedestrian Flow & Safety score, which is
                    then uploaded to our web application to be displayed for public use. This is to pursue our goal of walkability awareness and our
                    scores to the general public without any restrictions or limitations.
                </p>

                <div className="w-full justify-items-center grid grid-cols-1 my-5">
                    <div className="col-span-1">
                        <Image
                            src="https://i.ibb.co/DwbPwZS/compressed-Sample.gif"
                        ></Image>
                    </div>
                </div>
            </div>

        </div>
    );
};


export default PSFICalculation;
