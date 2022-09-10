function dayDateTimer(){
    let currdd = new Date();
    let hh = currdd.getHours();
    let mm = currdd.getMinutes();
    let ss = currdd.getSeconds();

    let day = currdd.getDate();
    let month = currdd.getMonth();
    let year = currdd.getFullYear();

    const date = currdd.getDate();

    // document.getElementById("date-time-clock").value = `${hh}:${mm}:${ss} \n\ ${day}-${month}-${year}`;
   
    // console.log(hh + ":" + mm +":" + ss +"<br>"+day+"-"+month+"-"+year);
    document.getElementById("date-time-clock").value = hh + ":" + mm +":"
             + ss +"\n"+day+"-"+(month+1)+"-"+year; 
}
setInterval(dayDateTimer, 1000);