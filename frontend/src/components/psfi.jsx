import React from 'react';

const PSFI = () => {
    return (
        <div className="p-4">
            <div className="mb-4 p-4 border border-foreground-300 rounded-lg bg-foreground-50">
                <h3 className="text-xl font-bold mb-2">The Pedestrian Safety Flow Index</h3>
                <p>
                The PSFI is a rating index that measures the efficiency and safety of pedestrian navigation in urban spaces. 
                It considers elements such as sidewalks, crosswalks, tree shade, traffic lights, benches, and street signs. 
                The index is calculated mathematically after the algorithm detects and counts these factors, providing a publicly 
                viewable safety rating.
                </p>
                <hr className='my-2' />
                <h2 className="text-l font-bold my-2">
                    Founder and Director
                </h2>
                <p>
                    Dr. Shaurya Agarwal
                </p>
                <h2 className="text-l font-bold my-2">
                    Members
                </h2>
                <p>
                    Muhammad Shahbaz <br/>
                    Jiheng Huang <br/>
                    Shakib Mastavee<br/>
                    Xinyi<br/>
                </p>
            </div>
        </div>
    );
};

export default PSFI;
