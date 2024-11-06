import React, { useState, useEffect } from 'react';
import { StlViewer } from 'react-stl-viewer';

export default function HardwareModel({ url }) {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0f7fa3', // Light blue background color
    borderRadius: '8px',
    margin: '20px',
    width: '400px',
    height: '400px',
  };

  const viewerStyle = {
    width: '100%',
    height: '100%',
  };

  const [rotation, setRotation] = useState({ rotationZ: 0 });

  useEffect(() => {
    // Update rotation for continuous spin
    const interval = setInterval(() => {
      setRotation((prevRotation) => ({
        rotationZ: prevRotation.rotationZ + 0.03,
      }));
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={containerStyle}>
      <StlViewer
        style={viewerStyle}
        url={url}
        orbitControls
        initialPosition={{ x: 180, y: 8 }}
        modelProps={{
          rotationZ: rotation.rotationZ,
          scale: 1.75,
        }}
      />
    </div>
  );
}
