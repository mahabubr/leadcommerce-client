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

export const dateFormaterForWeeklyChart = (weekLabel: any) => {
  const formattedDates =
    weekLabel &&
    weekLabel?.map((dateString: any) => {
      // Convert the string to a Date object
      const dateObj = new Date(dateString);

      // Format the date as 'Mon Dec 18'
      const formattedDate = dateObj.toLocaleString("en-us", {
        month: "short",
        day: "numeric",
      });

      return formattedDate;
    });
  return formattedDates;
};
