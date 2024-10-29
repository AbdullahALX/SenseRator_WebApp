import React from 'react';

const Team = () => {
    return (
        <div className="p-4">
            <div className="mb-4 p-4 border border-foreground-300 rounded-lg bg-foreground-50">
                <h3 className="text-xl font-bold mb-2">SenseRator 2.0 Team</h3>
                <p>
                    The SenseRator 2.0 project was developed by a team of seven undergraduate students during Spring 2024 - Fall 2024.
                    SenseRator 2.0 was developed in collaboration with the URBANity Lab at the University of Central Florida (UCF).
                </p>
                <hr className='my-2' />
                <h2 className="text-l font-bold my-2">
                    Undergradate Students
                </h2>
                <p>
                    <b>Alexandra Ramlogan</b> - Project Manager, Web App Frontend Development <br />
                    <b>Abdullah A. Hinaey </b>- Full Stack Web Development  <br />
                    <b> Kristian Michel </b>– Pedestrian Flow & Safety (PFS) Score <br />
                    <b>Allen Lin </b> - Object Detection & Machine Learning <br />
                    <b>Nicholas Karamitos </b> – Hardware Development <br />
                    <b> Ayman Arif </b> - Video Compression <br />
                </p>
                <h2 className="text-l font-bold my-2">
                    Project Sponsor
                </h2>
                <p>
                    Dr. Shaurya Agarwal - Founder of the URBANity Lab at UCF
                </p>
            </div>
        </div>
    );
};

export default Team;
