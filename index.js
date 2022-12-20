// auto update time------

setInterval(getTimeChange, 1000)

// display time on screen -----

function getTimeChange() {
    const displayTime = document.querySelector("#timer");

    // date object------
    const identifierDate = new Date();
    // my time------
    const getHours = identifierDate.getHours();
    const getMinutes = identifierDate.getMinutes();
    const getSeconds = identifierDate.getSeconds();
    
    // change AM || PM ------
    var changeAmPm = "";
    if (getHours < 12) {
      changeAmPm = "AM";
    } else {
      changeAmPm = "PM";
    }
    
    // change seconds two digits-----
    var secondTwoDigits = "";
    if (getSeconds < 10){
        secondTwoDigits = `0${getSeconds}`
    } else{
        secondTwoDigits = `${getSeconds}`;
    }
    
    
    // change minuts two digits---
    var minutsTwoDigits = "";
    if (getMinutes < 10){
        minutsTwoDigits = `0${getMinutes}`
    } else {
        minutsTwoDigits = `${getMinutes}`
    }

  const getTime = `${getHours}:${minutsTwoDigits}:${secondTwoDigits} ${changeAmPm}`;
  displayTime.innerHTML = getTime;
//   console.log(getTime);
}
