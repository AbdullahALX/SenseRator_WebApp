import React from 'react';

const Overview = () => {
  return (
    <div className="p-4">
      {/* Overview Section */}
      <div className="mb-4 p-4 border border-gray-300 rounded-lg bg-gray-50">
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

      {/* PSFI Section */}
      <div className="mb-4 p-4 border border-gray-300 rounded-lg bg-gray-50">
        <h3 className="text-xl font-bold mb-2">
          Pedestrian Safety Flow Index (PSFI)
        </h3>
        <p>
          The PSFI is a rating index that measures the efficiency and safety of
          pedestrian navigation in urban spaces. It considers elements such as
          sidewalks, crosswalks, tree shade, traffic lights, benches, and street
          signs. The index is calculated mathematically after the algorithm
          detects and counts these factors, providing a publicly viewable safety
          rating.
        </p>
      </div>

      {/* Project Goal Section */}
      <div className="mb-4 p-4 border border-gray-300 rounded-lg bg-gray-50">
        <h3 className="text-xl font-bold mb-2">Project Goal</h3>
        <p>
          The goal of SenseRator 2.0 is to raise awareness about pedestrian
          safety and promote safer, walkable urban environments through smart
          city technologies and AI-driven analysis.
        </p>
      </div>
    </div>
  );
};

export default Overview;
