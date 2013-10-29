/**
 * @author Ali Bahaloo
 * Library: Fibonnaci
 */

var Fibonnaci = function(canvas_id,seq_no) {
    //Initializing variables
    var cur_direction = "up";
    var fib = [];
    var cur_x, cur_y;
    
    //Initializing Fibs
    fib[0] = 0;
    fib[1] = 1;
    for ( i = 2; i <= seq_no; i++) {
        fib[i] = fib[i - 2] + fib[i - 1];
    }
    
    //Init canvas
    var canvas = document.getElementById(canvas_id);
    var ctx = canvas.getContext("2d");    
    
    
    
    Fibonnaci.prototype.init = function() {
        //1->
        ctx.translate(300, 400);
        this.draw_rect(ctx, 1);
        //1->
        ctx.translate(10, 0);
        this.draw_rect(ctx, 1);
        //2->
        for ( j = 3; j <= fib.length - 1; j++) {
            document.getElementById("fib_seq").innerHTML += fib[j] + "-";
            cur_x = this.get_x(cur_direction) * 10;
            cur_y = this.get_y(cur_direction) * 10;
    
            this.fibo(ctx,fib[j], cur_x, cur_y);
            this.change_direction(cur_direction);
        } 
    };
    
    
    Fibonnaci.prototype.draw_rect = function(context, size) {
        var ran_color = get_random_color();
        context.beginPath();
        context.strokeStyle = ran_color;
        context.fillStyle = ran_color;
        var hw = size * 10;
        //context.rect(0, 0, hw, hw);
        context.fillRect(0, 0, hw, hw);
        context.stroke();
        context.closePath();        
    };
    
    Fibonnaci.prototype.fibo = function(context, fibn, x, y) {
        context.translate(x, y);
        this.draw_rect(context, fibn);
    };
    
    Fibonnaci.prototype.change_direction = function(direction) {
        switch(direction) {
            case "up":
                cur_direction = "left";
                break;
            case "left":
                cur_direction = "down";
                break;
            case "down":
                cur_direction = "right";
                break;
            case "right":
                cur_direction = "up";
                break;
            default:
                alert("Invalid Direction!");
        }
    };

    Fibonnaci.prototype.get_x = function(direction) {
        switch(direction) {
            case "up":
                return -(fib[j] - fib[j - 1]);
                break;
            case "left":
                return -fib[j];
                break;
            case "down":
                return 0;
                break;
            case "right":
                return fib[j - 1];
                break;
            default:
                alert("Invalid Direction!");
        }

    };

    Fibonnaci.prototype.get_y = function(direction) {
        switch(direction) {
            case "up":
                return -fib[j];
                break;
            case "left":
                return 0;
                break;
            case "down":
                return fib[j - 1];
                break;
            case "right":
                //return fib[j] - fib[j-1];
                return -(fib[j] - fib[j - 1]);
                break;
            default:
                alert("Invalid Direction!");
        }

    };

}; 