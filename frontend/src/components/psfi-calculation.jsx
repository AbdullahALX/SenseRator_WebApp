import React from 'react';

const PSFICalculation = () => {
    return (
        <div className="p-4">
            <div className="mb-4 p-4 border border-foreground-300 rounded-lg bg-foreground-50">
                <h3 className="text-xl font-bold mb-2">Calculating Pedestrian Safety Flow</h3>
                <p>
                The PSFI is computed based on the presence of various safety and accessibility features within urban environments, 
                including sidewalks, crosswalks, street signs, etc. Once detected, these factors contribute to the overall rating, 
                which can then be accessed publicly.
                </p> 
            </div>

            <div className="mb-4 p-4 border border-foreground-300 rounded-lg bg-foreground-50">
                <h3 className="text-xl font-bold mb-2">Algorithm</h3>
                <p>
                    Something goes here....
                </p> 
            </div>
        </div>
    );
};

export default PSFICalculation;
