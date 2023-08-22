// // variables for dynamic date 
// const endDate = 'August 30 2023 12:00 PM';
// document.getElementById('end-date').innerText = endDate;

// const inputsData = document.querySelectorAll('input');

// // function for dynamic countdown

// const countDownClock = () =>{
//     let endingDate = new Date (endDate);
//     let currentDate = new Date ();
//     let dateDifference =(endingDate - currentDate)/1000 ;
    
//     if(dateDifference<0){
//         return
// };
//     inputsData[0].value = (Math.floor(dateDifference/3600/24));
//     inputsData[1].value =(Math.floor(dateDifference/3600)%24);
//     inputsData[2].value =(Math.floor(dateDifference/60)%60);
//     inputsData[3].value =(Math.floor(dateDifference)%60);    
// }

// countDownClock()

// setInterval(
//    ()=>{
//     countDownClock()
//    } ,
//     1000
// )