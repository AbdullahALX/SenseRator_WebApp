import { Button, Input } from '@nextui-org/react';
import { Link, Outlet } from 'react-router-dom';
import React from 'react';
import TableWrapper from './tableWrapper';

const Team2 = () => {
  return ( 
    <div className="my-10 px-4 lg:px-6 max-w-[95rem] mx-auto w-full flex flex-col gap-4 overflow-auto">

      <div className="p-4">
          <h3 className="text-xl font-bold mb-2">SenseRator 2.0 Team</h3>
          <p>
            The SenseRator 2.0 project was developed by a team of seven undergraduate students during Spring 2024 - Fall 2024.
            SenseRator 2.0 was sponsored and developed in collaboration with the URBANity Lab at the University of Central Florida (UCF).
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold">All Team Members</h3>
      <div className="flex justify-between flex-wrap gap-4 items-center">
        <div className="flex items-center gap-3 flex-wrap md:flex-nowrap">
        </div>
        <div className="flex flex-row gap-3.5 flex-wrap">
        </div>
      </div>
      <div className="max-w-[95rem] mx-auto w-full">
        <TableWrapper />
      </div>
    </div>
  );
};

export default Team2;
