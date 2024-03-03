function currentTime() {
    const monthNames = ["Jan", "Feb", "Mar", "Apr",
                        "May", "Jun", "Jul", "Aug",
                        "Sep", "Oct", "Nov", "Dec"]

    let date = new Date();
    let mo = monthNames[date.getMonth()];
    let dd = date.getDate();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    let time = dd + " " + mo + " " + hh + ":" + mm + ":" + ss + " ";
  
    document.getElementById("nav-time").innerText = time;
  
}

currentTime();
setInterval(currentTime, 250);