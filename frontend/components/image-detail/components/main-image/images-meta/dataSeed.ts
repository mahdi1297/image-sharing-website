export const tagsSeed = [
  { id: 1, title: "design" },
  { id: 2, title: "drawing" },
  { id: 3, title: "laptop" },
  { id: 4, title: "designer" },
  { id: 5, title: "ui/ux" },
];

export const processMetaData = ({ title, location, creationDate }: any) => {
  let date = new Date(creationDate);
  return [
    {
      id: 1,
      title: title,
      icon: "camera-fill",
      iconSize: 18,
      iconColor: "#767676",
    },
    {
      id: 2,
      title: `${location.city}, ${location.country}`,
      icon: "location-fill",
      iconSize: 18,
      iconColor: "#767676",
    },
    {
      id: 3,
      title: `Published At ${
        creationDate &&
        `${date.getFullYear()}/${date.getMonth()}/${date.getDay()}`
      }`,
      icon: "date-fill",
      iconSize: 18,
      iconColor: "#767676",
    },
  ];
};
