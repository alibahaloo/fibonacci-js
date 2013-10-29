/**
 * @author Ali Bahaloo
 * Miscilinious functions
 */


function submit_contact_form(){
    var elem_form = document.getElementById("contact");
    elem_form.submit();
}

function reset_contact_form(){
    var elem_form = document.getElementById("contact");
    elem_form.reset();
}

function set_elem_status(elem_id, status) {
    var obj=document.getElementById(elem_id);
    
    if(status){
        //Enable button
        obj.className = "btn_modify";
        obj.removeAttribute("disabled");
    } else {
        //Disable button
        obj.className = "btn_disabled";
        var att=document.createAttribute("disabled");
        att.value="disabled";
        obj.setAttributeNode(att);
    }
}


//Converting Epoch Timestamp to Human Readable
function get_hr_timestap(timestamp){
    var hr_time = new Date(timestamp);
    return hr_time;
}


function handle_error(error){
      document.getElementById("status").style.background = "papayaWhip";        
      switch(error.code)
      {
      case 0:
        display_status("There was an error while retrieving your location. Additional details: " + error.message);
        break;
      case 1:
        display_status("The user opted not to share his or her location.");
        break;
      case 2:
        display_status("The browser was unable to determine your location. Additional details: " + error.message);
        break;
      case 3:
        display_status("The browser timed out before retrieving the location.");
        break;
      }
}

function display_status(message){
    document.getElementById("status").innerHTML = "<strong>Error</strong>: " + message;
}

function init_footer() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
    if(dd<10){dd='0'+dd} if(mm<10){mm='0'+mm} today = mm+'/'+dd+'/'+yyyy;
    document.getElementById("footer_date").innerHTML = today;
}

function get_random_color() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.round(Math.random() * 15)];
        }
        return color;
};