// takes in a string formatted like YYYY-MM-DD, converts it to 'Month YYYY' or an
// empty string if the date string is invalid.
// The second parammeter, longOrShort, determines if the month is abreviated or not.
export const formatDateFromString = (date, longOrShort) => {
  const dateObj = new Date(date);
  const dateStr = dateObj instanceof Date ?
    dateObj.toLocaleString('en-CA', {
      month: longOrShort,
      year: 'numeric'
    }) : '';

  return dateStr;
};