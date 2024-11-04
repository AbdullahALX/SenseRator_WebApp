import React, { useState, useEffect } from 'react';
import { StlViewer } from "react-stl-viewer";

export default function HardwareModel({ url }) {
    const style = {
        width: "30vh",
        height: "30vh"
    };

    const [rotation, setRotation] = useState({ rotationZ: 0 });

    useEffect(() => {
        // Update rotation for continuous spin
        const interval = setInterval(() => {
            setRotation((prevRotation) => ({
                rotationZ: prevRotation.rotationZ + .04
            }));
        }, 50);

        return () => clearInterval(interval);
    }, []);

    return (
        <StlViewer
            style={style}
            url={url}
            orbitControls
            initialPosition={{ x:0, y: 8, z: 100}}
            modelProps={{
                rotationZ: rotation.rotationZ,
                scale: 1.75
            }}
        />
    );
}
