const epochToHuman = (epoch_date) => {
  let myDate = new Date(epoch_date * 1000);
  let myEpochDate = myDate.toGMTString() + myDate.toLocaleString();

  return myEpochDate;
};

export default epochToHuman;
