function updateDateTime() {
    var now = new Date();
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var day = days[now.getDay()];
    var date = now.getDate();
    var month = months[now.getMonth()];
    var hours = now.getHours();
    var minutes = now.getMinutes();
    // Add leading zeros if needed
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    // Display formatted date and time
    var dateTimeString = hours + ":" + minutes + " • " + day + ", " + date + " " + month;
    document.getElementById("dateTime").innerHTML = dateTimeString;
  }
  
  // Update date and time every second
  setInterval(updateDateTime, 1000);
  
  // Update date and time immediately
  updateDateTime();

