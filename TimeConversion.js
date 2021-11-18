const getDayHour = (hour) =>{
    return hour >= 12 ? hour-12 : hour
}
const getNightHour = (hour) =>{
    return hour < 12 ? hour+12 : hour;
}

const getMilitaryTime = (times,format) => {
    let hour = parseInt(times[0]);
    format === "AM" ? hour = getDayHour(hour)
        : hour = getNightHour(hour);

    hour<10 ? hour = "0".concat(hour.toString()) : hour;
    times[0] = hour;
    times[2] = times[2].replace(format,"");
    return times.join(":");
}

function timeConversion(s) {
    // Write your code here
    const format = s.includes("AM") ? "AM" : "PM";
    const timesArray = s.split(":");
    return getMilitaryTime(timesArray, format);
}

console.log(timeConversion("07:05:45PM"));