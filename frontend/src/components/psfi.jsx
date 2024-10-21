import React from 'react';
import PSFICalculation from './psfi-calculation';
import DataCollection from './dataCollection';

const PSFI = () => {
    return (
        <div className="p-4 overflow-scroll">
            <div className="mb-4 p-4 border border-foreground-300 rounded-lg bg-foreground-50">
                <h3 className="text-xl font-bold mb-2">The Pedestrian Safety Flow Score</h3>
                <p>
                The Pedestrian Safety Flow (PSF) Score is a rating method that measures the efficiency and safety of pedestrian navigation in urban spaces. 
                It considers elements such as: sidewalks, crosswalks, trees, traffic lights, benches, and stop signs. However, it should be noted that
                safe pedestrian structures are not limited to the chosen architecture this project utilizes. 
                <br/>
                Scoring begins by using our object detection and tracking algorithm to capture our desired
                structures for scoring. The total objects found are then weighted, and compiled to create our scoring, which is then displayed on our
                application
                </p> 
                

            </div>
            <DataCollection/>

            <PSFICalculation/>
        </div>
    );
};

export default PSFI;
