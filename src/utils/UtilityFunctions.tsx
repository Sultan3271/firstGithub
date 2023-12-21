/**
 * 
 * @file UtitlityFunctions.tsx time 
 * @owner Muhammad Sultan
 * @purpose our all utility functions will be here so we can use it anywhere
 */



export const extractTime = (time: string) => {
    const timestamp = new Date(time);
    const hours = timestamp.getHours();
    const minutes = timestamp.getMinutes();
    let dayOrNight = "PM";

    if (hours < 12) {
        dayOrNight = "AM"
    } 

     
    return (hours + ":" + minutes + " " + dayOrNight);
}


