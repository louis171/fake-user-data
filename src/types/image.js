const getImage = () => {
  const imageSmall = "https://loremflickr.com/150/150/people";
  const imageMed = "https://loremflickr.com/450/450/people";
  const imageLarge = "https://loremflickr.com/900/900/people";
  return {
    imageSmall: imageSmall,
    imageMed: imageMed,
    imageLarge: imageLarge,
  };
};

module.exports = getImage;
