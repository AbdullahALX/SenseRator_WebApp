const features = [
  {
    title: 'Pedestrian Flow and Safety Score',
    content:
      'The Pedestrian Flow and Safety (PFS) Score is a rating method that measures the efficiency and safety of pedestrian navigation in urban spaces. It considers elements such as: sidewalks, crosswalks, trees, street lights, benches, and stop signs. Scoring begins by using our object detection and tracking algorithm to capture our desired features for scoring. The total objects found are then weighted, and compiled to create our scoring metric, which is then displayed on our application.',
    icon: 'hugeicons:summation-circle',
  },
  {
    title: 'Trees',
    content:
      'Trees are measured to account for environmental comfort, as they provide shade, improve air quality, and aesthetics of an area. Weight: 10%',
    icon: 'mingcute:tree-line',
  },
  {
    title: 'Crosswalks',
    content:
      'Crosswalks are included to evaluate safe street-crossing options, directly impacting pedestrian safety and transportation effectiveness. Weight: 20%',
    icon: 'mdi:ski-cross-country',
  },
  {
    title: 'Street Lights',
    content:
      'Street lights are assessed to determine nighttime visibility, impacting both pedestrian safety and overall accessibility. Weight: 20%',
    icon: 'mdi:post-light',
  },
  {
    title: 'Sidewalks',
    content:
      'Sidewalks are measured to assess the availability of safe, dedicated walking paths, impacting overall pedestrian accessibility. Weight: 25%',
    icon: 'material-symbols:road',
  },
  {
    title: 'Benches',
    content:
      'Benches are considered to evaluate resting opportunities, supporting accessibility and comfort for longer walks. Weight: 15%',
    icon: 'ph:chair-bold',
  },
  {
    title: 'Stop Signs',
    content:
      'Stop signs are included to gauge intersection safety, as they help manage vehicle flow and make pedestrian crossings safer. Weight: 10%',
    icon: 'emojione-monotone:stop-sign',
  },
];

export default features;
