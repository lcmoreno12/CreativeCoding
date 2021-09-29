//Terminal para crear y abrir un nuevo archivo
//canvas-sketch sketch-02 --new --open

//Abrir archivo
//canvas-sketch sketch-02
//canvas-sketch sketch-01.js --output-output/01

const canvasSketch = require('canvas-sketch');
const math = require('canvas-sketch-util/math');
const random = require('canvas-sketch-util/random');

const settings = {
  dimensions: [ 1080, 1090 ]
};
//Creo funcion para que convierta de radians a degrees

const degToRad = (degrees) => {
  return degrees / 180 * Math.PI;
};

const randomRange = (min, max) => { 
    return Math.random() * (max - min) - min;
}


const sketch = () => {
  return ({ context, width, height }) => {
    
    context.fillStyle = '#8c8c8c';


    context.fillRect(0, 0, width, height);
    
    context.fillStyle = 'black';

    const cx = width * 0.5;
    const cy = height * 0.5;
    const w = width * 0.01;
    const h = height * 0.1;

    let x, y;

    const num = random.range(12,24);
    const radius = width * 0.3;

    for (let i = 0; i < num; i++) {
      const slice = math.degToRad(360 / num);
      //const slice = degToRad(360 / num);
      const angle = slice * i;

      x = radius * Math.sin(angle);
      y = radius * Math.cos(angle);



      context.save();
      context.translate(cx, cy);
      context.translate(x, y);
      context.rotate(-angle);
      context.scale(random.range(0.3,4),random.range(1.5,5));


      context.beginPath();
      context.rect(-w * 0.5, -h * 0.5, w, h);
      context.fill();
      context.restore();

      context.save();

      context.translate(cx, cy);
      context.rotate(-angle);

      context.lineWidth=random.range(2,30);

      context.beginPath();
      let r = Math.random()*256;
      let g = Math.random()*256;
      let b = Math.random()*256;
      context.strokeStyle = `rgb(${r},${g},${b})`

      context.strokeStyle = 'rgb(r,g,b)';
      context.arc(0, 0, radius * random.range(0.7, 1.3), slice * random.range(-0.4,0.4),slice * random.range(-0.4,0.4));
      context.stroke();
      
      context.restore();


    }
  };
};

canvasSketch(sketch, settings);
