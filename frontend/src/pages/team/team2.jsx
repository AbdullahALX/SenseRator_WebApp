import { Button, Input } from '@nextui-org/react';
import { Link, Outlet } from 'react-router-dom';
import React from 'react';
// import { DotsIcon } from '@/components/icons/accounts/dots-icon';
// import { ExportIcon } from '@/components/icons/accounts/export-icon';
// import { InfoIcon } from '@/components/icons/accounts/info-icon';
// import { TrashIcon } from '@/components/icons/accounts/trash-icon';
// import { HouseIcon } from '@/components/icons/breadcrumb/house-icon';
// import { UsersIcon } from '@/components/icons/breadcrumb/users-icon';
// import { SettingsIcon } from '@/components/icons/sidebar/settings-icon';
import TableWrapper from './tableWrapper';
// import { AddUser } from './add-user';

const Team2 = () => {
  return (
    <div className="my-10 px-4 lg:px-6 max-w-[95rem] mx-auto w-full flex flex-col gap-4">
      <h3 className="text-xl font-semibold">All Team Members</h3>
      <div className="flex justify-between flex-wrap gap-4 items-center">
        <div className="flex items-center gap-3 flex-wrap md:flex-nowrap">
          {/* <SettingsIcon />
          <TrashIcon />
          <InfoIcon />
          <DotsIcon /> */}
        </div>
        <div className="flex flex-row gap-3.5 flex-wrap">
          {/* <AddUser /> */}
          {/* <Button color="primary" startContent={<ExportIcon />}>
            Export to CSV
          </Button> */}
        </div>
      </div>
      <div className="max-w-[95rem] mx-auto w-full">
        <TableWrapper />
      </div>
    </div>
  );
};

export default Team2;
