import React from 'react';

const PSFI = () => {
    return (
        <div className="p-4">
            <div className="mb-4 p-4 border border-foreground-300 rounded-lg bg-foreground-50">
                <h3 className="text-xl font-bold mb-2">The Pedestrian Safety Flow Score</h3>
                <p>
                The Pedestrian Safety Flow (PSF) Score is a rating method that measures the efficiency and safety of pedestrian navigation in urban spaces. 
                It considers elements such as: sidewalks, crosswalks, trees, traffic lights, benches, and stop signs. 
                The index is calculated mathematically after the algorithm detects and counts these factors, providing a publicly 
                viewable safety rating. 
                </p> 
            </div>
        </div>
    );
};

export default PSFI;
