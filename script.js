// let date=new Date
// console.log(date);


let clock = () => {
    setTimeout(()=>{
        clock()
    },1000)
    let date = new Date()
    let month = date.getMonth()
    let day = date.getDate()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    if (hours<9)hours = "0"+ hours
    if (minutes<10)minutes= "0"+ minutes
    if (seconds<10)seconds = "0"+ seconds
    
    // let month_nun =["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"]


    let date_time =  hours +":"+ minutes +":" +seconds 
   
    console.log(date_time)
    let element = document.getElementById('time').innerHTML= date_time
   
}
clock()

let clocks = () => {
    // setTimeout(()=>{
    //     clocks()
    // },1000)
    let date = new Date()
    let month = date.getMonth()
    let day = date.getDate()
   
    
    
    let month_nun =["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"]


    let times = day +"-" + month_nun[month]
   
    console.log(times)
    let elements = document.getElementById('relax').innerHTML= times
   
}
clocks()






// window.onload =()=>{
//     window.setInterval(function(){
//         let date = new Date()
//         let month_n = date.getMonth()
//     let day = date.getDate()
//     let year = date.getFullYear()
   
//     let rel=  day + year
//         let month =["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"]
// console.log(rel);

//         document.getElementById('relax').innerHTML = rel;
//     },1000)
// }
// onload()