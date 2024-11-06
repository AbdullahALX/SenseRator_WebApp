const getRatingDescription = (value, indexName) => {
  const ratingDescriptions = {
    tree_index: [
      {
        range: [8, 10],
        rating: 'Good',
        description:
          'A high amount of trees offers pedestrians shade and cleaner air.',
      },
      {
        range: [4, 7],
        rating: 'Average',
        description:
          'An average amount of trees offers some shade, although not enough to keep pedestrians out of the sun.',
      },
      {
        range: [0, 3],
        rating: 'Bad',
        description:
          'A low amount of trees offers little protection from the sun and makes the area less pedestrian-friendly.',
      },
    ],
    crosswalk_index: [
      {
        range: [16, 20],
        rating: 'Good',
        description:
          'A high amount of crosswalks allows pedestrians to cross streets safely at frequent intervals, reducing wait times and enhancing overall accessibility.',
      },
      {
        range: [8, 12],
        rating: 'Average',
        description:
          'An average amount of crosswalks provides basic crossing options, but some areas may require longer walks to find a safe crossing, leading to potential safety risks.',
      },
      {
        range: [0, 4],
        rating: 'Bad',
        description:
          'A low amount of crosswalks forces pedestrians to cross streets unsafely or travel long distances to find a crossing, significantly increasing safety hazards.',
      },
    ],
    street_light_index: [
      {
        range: [16, 20],
        rating: 'Good',
        description:
          'A high amount of street lights ensures well-lit pathways, boosting visibility and pedestrian safety, especially at night.',
      },
      {
        range: [8, 14],
        rating: 'Average',
        description:
          'An average amount of street lights provides some visibility, but there may be dim or dark spots, making navigation less secure during nighttime hours.',
      },
      {
        range: [0, 6],
        rating: 'Bad',
        description:
          'A low amount of street lights creates poorly lit areas, increasing the risk of accidents, crime, and pedestrian discomfort at night.',
      },
    ],
    sidewalk_index: [
      {
        range: [20, 25],
        rating: 'Good',
        description:
          'A high amount of sidewalks ensures safe and accessible pathways for pedestrians, facilitating smooth navigation and accommodating heavy foot traffic.',
      },
      {
        range: [10, 15],
        rating: 'Average',
        description:
          'An average amount of sidewalks provides basic pedestrian access, but some areas might lack sufficient width or connectivity, limiting overall ease of movement.',
      },
      {
        range: [0, 5],
        rating: 'Bad',
        description:
          'A low amount of sidewalks restricts pedestrian access, forcing people to walk on streets or other unsafe surfaces, significantly reducing safety and convenience.',
      },
    ],
    bench_index: [
      {
        range: [10.5, 15],
        rating: 'Good',
        description:
          'A high amount of benches offers pedestrians accessibility and a resting area.',
      },
      {
        range: [6, 9],
        rating: 'Average',
        description:
          'An average amount of benches offers pedestrians some accessibility but still limits overall comfort, making frequent rest breaks less feasible.',
      },
      {
        range: [0, 4.5],
        rating: 'Bad',
        description:
          'A low amount of benches restricts pedestrian accessibility and rest opportunities, making it difficult for people to take breaks, especially for those who may need them frequently or for extended periods.',
      },
    ],
    stop_sign_index: [
      {
        range: [10, 10],
        rating: 'Good',
        description:
          'A high amount of stop signs prevents cars from speeding and potentially hurting pedestrians.',
      },
      {
        range: [5, 5],
        rating: 'Average',
        description:
          'An average amount of stop signs could stop cars in key areas, but still allows cars to speed which increases risk for pedestrians.',
      },
      {
        range: [0, 0],
        rating: 'Bad',
        description:
          'A low amount of stop signs means cars in this area can easily speed up and risk pedestrian safety.',
      },
    ],
  };

  const rating = ratingDescriptions[indexName].find(
    ({ range }) => value >= range[0] && value <= range[1]
  );
  return {
    rating: rating ? rating.rating : 'Unknown',
    description: rating ? rating.description : 'No description available.',
  };
};

export default getRatingDescription;
