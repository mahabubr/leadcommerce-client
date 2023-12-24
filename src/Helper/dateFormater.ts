export const dateFormater = (date: any) => {
  // const inputDateString = "2023-12-23T05:19:51.337Z";
  // console.log(inputDateString, 'inputDateString');
  //   console.log(date, "date");
  const inputDate = date && new Date(date);

  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    timeZone: "Asia/Dhaka",
  };
  const formattedDate = date && inputDate.toLocaleString("en-US", options);

  return formattedDate;
};
