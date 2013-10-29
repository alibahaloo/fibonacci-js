/**
 * @author Ali Bahaloo
 */
var fibonnaci;

window.onload = function() {
    //Zooming out a bit to have a better view
    document.body.style.zoom=0.75;this.blur();
    
    var fibo_no = 5;
    
    var choice = prompt("Enter the number of sequence: ","10");
    if (choice != null) {
        fibo_no = parseInt(choice);
        fibonnaci = new Fibonnaci("canvas_fibo",fibo_no);
        fibonnaci.init();
    } else {
        alert("Cancelled");
    }
    
    
    
}; 