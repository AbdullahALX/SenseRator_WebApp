import React from "react";

import TableWrapper from './tableWrapper.jsx';

const URBANityTable = () => {
    return(
        <div className="my-10 px-4 lg:px-6 max-w-[95rem] mx-auto w-full flex flex-col gap-4">
        <h3 className="text-xl font-semibold">URBANity at UCF</h3>
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
}

export default URBANityTable;