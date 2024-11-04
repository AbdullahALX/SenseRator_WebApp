import React from 'react';
import PSFICalculation from './psfi-calculation';
import DataCollection from './dataCollection';
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from "@nextui-org/table";
import { Icon } from '@iconify/react';

const PSFI = () => {
  const rows = [
    {
      key: "1",
      icon: "mingcute:tree-line",
      feature: "Trees",
      weight: 10,
    },
    {
      key: "2",
      icon: "mdi:ski-cross-country",
      feature: "Crosswalks",
      weight: 20,
    },
    {
      key: "3",
      icon: "mdi:post-light",
      feature: "Street Lights",
      weight: 20,
    },
    {
      key: "4",
      icon: "material-symbols:road",
      feature: "Sidewalks",
      weight: 25,
    },
    {
      key: "5",
      icon: "ph:chair-bold",
      feature: "Benches",
      weight: 10,
    },
    {
      key: "6",
      icon: "emojione-monotone:stop-sign",
      feature: "Stop Signs",
      weight: 15,
    },
  ];

  const columns = [
    {
      key: "feature",
      label: "Features",
    },
    {
      key: "weight",
      label: "Weight",
    },
  ];

  return (
    <div className="p-4 overflow-scroll">
      <div className="mb-4 p-4 border border-foreground-300 rounded-lg bg-foreground-50">
        <h3 className="text-xl font-bold mb-2">What is it</h3>
        <p>
          The Pedestrian Flow and Safety (PFS) Score is a rating method that measures the efficiency and safety of pedestrian navigation in urban spaces. 
          It considers elements such as: sidewalks, crosswalks, trees, street lights, benches, and stop signs. Scoring begins by 
          using our object detection and tracking algorithm to capture our desired features for scoring. 
          The total objects found are then weighted, and compiled to create our scoring metric, which is then displayed on our application.
        </p>
      </div>
      <div className="mb-4 p-4 border border-foreground-300 rounded-lg bg-foreground-50">
        <h3 className="text-xl font-bold mb-2">Features</h3>
        <p>
          <h4 className="text-md font-bold">Sidewalks: </h4> Sidewalks are measured to assess the availability of safe, dedicated walking paths, impacting overall pedestrian accessibility. 
          <br/><br/>
          <h4 className="text-md font-bold">Crosswalks: </h4> Crosswalks are included to evaluate safe street-crossing options, directly impacting pedestrian safety and transportation effectiveness.
          <br/><br/>
          <h4 className="text-md font-bold">Trees: </h4> Trees are measured to account for environmental comfort, as they provide shade, improve air quality, and aesthetics of an area.
          <br/><br/>
          <h4 className="text-md font-bold">Street Lights: </h4> Street lights are assessed to determine nighttime visibility, impacting both pedestrian safety and overall accessibility.
          <br/><br/>
          <h4 className="text-md font-bold">Benches: </h4> Benches are considered to evaluate resting opportunities, supporting accessibility and comfort for longer walks.
          <br/><br/>
          <h4 className="text-md font-bold">Stop Signs: </h4> Stop signs are included to gauge intersection safety, as they help manage vehicle flow and make pedestrian crossings safer.
        </p>
      </div>

      <div className="mb-4 p-4 border border-foreground-300 rounded-lg bg-foreground-50">
        <h3 className="text-xl font-bold mb-2">Calculations</h3>
        <Table>
          <TableHeader columns={columns}>
            {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
          </TableHeader>
          <TableBody items={rows}>
            {(item) => (
              <TableRow key={item.key}>
                <TableCell>
                  <div className="flex items-center">
                    <Icon icon={item.icon} width={30} className="mr-2 text-default-600" />
                    {item.feature}
                  </div>
                </TableCell>
                <TableCell>{item.weight}</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default PSFI;