fibonacci-js
============

A JavaScript implementation of the Fibonacci sequence and it's illustraion.

A small JavaScript library written in Object Oriented. 
The class takes the following parameters as constructor arguments:
- canvas_id: The ID of the canvas in your HTML. string
- seq_no: Number of fibonacci sequences you wish to display. integer

Example Implementation:
In your external .js file:

var fibonnaci;
fibonnaci = new Fibonnaci("canvas_fibo",10);
fibonnaci.init();