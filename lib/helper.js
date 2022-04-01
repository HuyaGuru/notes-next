export const getTime = (timeString) => {
  let itemTime = new Date(parseInt(timeString));
  let currentTime = new Date();
  let itemYear = itemTime.getFullYear();
  let currentYear = currentTime.getFullYear();
  let itemMonth = itemTime.getMonth();
  let currentMonth = currentTime.getMonth();
  let itemDate = itemTime.getDate();
  let currentDate = currentTime.getDate();
  let itemHours = itemTime.getHours();
  let currentHours = currentTime.getHours();
  let itemMinutes = itemTime.getMinutes();
  let currentMinutes = currentTime.getMinutes();
  let itemSeconds = itemTime.getSeconds();
  let currentSeconds = currentTime.getSeconds();
  let timeStamp;
  if (itemYear === currentYear) {
    if (itemMonth === currentMonth) {
      if (itemDate === currentDate) {
        if (itemHours === currentHours) {
          if (itemMinutes === currentMinutes) {
            timeStamp = `${currentSeconds - itemSeconds}s ago`;
          } else {
            timeStamp = `${currentMinutes - itemMinutes}m ago`;
          }
        } else {
          timeStamp = `${currentHours - itemHours}hr ago`;
        }
      } else {
        timeStamp = `${itemTime.toDateString().split(" ")[1]} ${itemDate}`;
      }
    } else {
      timeStamp = `${itemTime.toDateString().split(" ")[1]} ${itemDate}`;
    }
  } else {
    timeStamp = `${
      itemTime.toDateString().split(" ")[1]
    } ${itemDate} · ${itemYear}`;
  }
  return timeStamp;
};
