const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 700, 700 ]
};

const randomColor = (min, max) => {
  return Math.random() * (max - min) - min;

}
const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    let w = width*0.10;
    let h = height*0.10;
    const gap = width * 0.05;


    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
      x = 100 + (w + gap) * i;
      y = 100 + (w + gap) * j;

      context.beginPath();
      //let r = Math.random()*200;
      //let g = Math.random()*50;
      //let b = Math.random()*160;
      context.strokeStyle = `rgb(204, 114, 135)`;
      context.lineWidth = 5;
      context.rect(x, y, w, h);
      context.stroke();

      context.beginPath();
   
      //context.strokeStyle = `rgb(${randomColor(10,265)},${randomColor(63,160)},${randomColor(30,213)})`
      context.strokeStyle = `rgb(157, 207, 212)`;

      context.lineWidth = Math.random()*5;
      context.rect(x+18, y+18, w/2, h/2);
      context.stroke();

      context.beginPath();

      context.strokeStyle = `rgb(157, 207, 212)`;
      
      if (Math.random() > 0.3) {
        context.lineWidth = 2;
        context.rect(x+32, y+32, w/2, h/2);
        context.stroke();
       
      }

      
      }
     
    }
    
  };
};



canvasSketch(sketch, settings);
