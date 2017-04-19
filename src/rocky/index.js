var rocky = require('rocky');



rocky.on('draw',function(event){
  
  // get the 2d object
  
  var ctx = event.context;
  
  //clear screen
  
  ctx.clearRect(0,0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);
  
  // determine w and h
  
  var w = ctx.canvas.unobstructedWidth;
  var h = ctx.canvas.unobstructedHeight;
  
  // current date/time
  
  var d = new Date();
  
  // set color and align text
  ctx.fillStyle = 'white';
  ctx.textAlign = 'center';
  
  ctx.fillText(d.toLocaleTimeString(), w/2, h/2, w);
   
});

rocky.on('minutechange', function(event){
  //console.log('+1');
  
  rocky.requestDraw();
  
  
});

rocky.on('secondchange', function(event){
  //console.log('+1');
  
  rocky.requestDraw();
  
  
});
