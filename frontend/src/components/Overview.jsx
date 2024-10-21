import React from 'react';

const Overview = () => {
  return (
    <div className="p-4">
      {/* Overview Section */}
      <div className="mb-4 p-4 border border-foreground-300 rounded-lg bg-foreground-50">
        <h3 className="text-xl font-bold mb-2">SenseRator 2.0 Overview</h3>
        <p>
          SenseRator 2.0 is a project based on computer vision and civil
          engineering, aimed at improving pedestrian safety in urban
          environments. Leveraging smart city concepts, the SenseRator team
          developed an AI algorithm using Jetson Nano components. The system
          allows users to record video while riding a vehicle (e.g., bicycle)
          through an area. The algorithm then analyzes the video, generating a
          rating based on the observed architecture. This rating is available
          for viewing on a React web application. The goal of SenseRator 2.0 is
          to raise awareness of pedestrian safety and advocate for walkable
          urban planning.
        </p>
      </div>

      {/* Project Goal Section */}
      <div className="mb-4 p-4 border border-foreground-300 rounded-lg bg-foreground-50">
        <h3 className="text-xl font-bold mb-2">
          Project Goals
        </h3>
        <p>
          In 2022, The state of Florida ranked 4 in State Pedestrian Fatality Rates, with 773 deaths. 
          According to the National Highway Traffic Safety Administration (NHTSA),
          Florida has a Pedestrian Fatality rate of 3.47  per 100,000 population. In an article published
           by Central Florida Public Media, Joe Mario Pedersen states that 
          Orlando was among the top 20 deadliest cities for pedestrians in the country, ranked at number 18 in 2024. 
          A factor to these high rates can be contributed to the lack of walkable structures 
          in large metropolitan areas like Orlando. The goal of SenseRator 2.0 is to bring attention to the need for 
          walkable, and safe pedestrian urban structures. These structues include, but are
           not limited to, sidewalks, crosswalks, lower speed limits, and appropriate signage and lights. 
          Other walkable structures such as trees and benches provide other positive impacts, 
          such as a community and increased health of residents. SenseRator 2.0 aims to 
          bring awareness to pedestrian safety in Central Florida, using smart city and AI-driven technology
        </p>
      </div>
    </div>
  );
};

export default Overview;
