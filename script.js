// practice of countdown clock

// date variable
const upComingDate = "August 30 2023 12:00 PM";
document.getElementById('end-date').innerText = upComingDate;

// input variable data
const inputsDateData = document.querySelectorAll("input");

// function for countdown data

const countDownClockData = () =>{
    let lastDate = new Date(upComingDate);
    let newDate = new Date();
    let diffOfDate = (lastDate-newDate)/1000; 

    // for value become zero 0
    if(diffOfDate<0){
        return
    };

    // calculating for days hours minutes seconds

    inputsDateData[0].value = (Math.floor(diffOfDate/3600/24)); 
    inputsDateData[1].value = (Math.floor(diffOfDate/3600)%24); 
    inputsDateData[2].value = (Math.floor(diffOfDate/60)%60); 
    inputsDateData[3].value = (Math.floor(diffOfDate)%60); 

}

// initial call
countDownClockData();

setInterval(
    countDownClockData,1000
)