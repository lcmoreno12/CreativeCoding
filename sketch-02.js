//Terminal para crear y abrir un nuevo archivo
//canvas-sketch sketch-02 --new --open
const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ]
};
//Creo funcion para que convierta de radians a degrees

const degToRad = (degrees) => {
  return degrees / 180 * Math.PI;
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    
    context.fillStyle = 'black';

    const x = width * 0.5;
    const y = height * 0.5;
    const w = width * 0.01;
    const h = height * 0.1;
    
    const num = 12;

    for (let i = 0; i < num; i++) {
    const slices = degToRad(360/num);
    const angle = slices * i;

    context.save();
    context.translate(x, y);
    //Usando funcion to convert radians to degrees
  
    context.rotate(angle);


    context.beginPath();
    context.rect(-w * 0.5, -h * 0.5, w, h);
    context.fill();
    context.restore();
    }
    
    //Trabajando con RADIANS
    //context.rotate(0.3);

    //Convirtiendo a DEGREES
    //context.rotate(45/100 * Math.PI);
    //context.save();
    //context.translate(x, y);
    //Usando funcion to convert radians to degrees
  
   // context.rotate(degToRad(45));


    //context.beginPath();
    //context.rect(-w * 0.5, -h * 0.5, w, h);
    //context.fill();
    //context.restore();
    
    // Usamos el save y restore para guardar el context
    //Entonces si queremos agregar una nueva forma y ubicarla
    // en x 100 e y 400 podremos. Sino tomara nuestro context anterior
    // y el posicionamiento seria diferente ya que tiene como
    //referencia el context anterior y no el original.
    /*
    context.translate(100, 400);
    context.beginPath();
    context.arc(0, 0, 50, 0, Math.PI * 2);
    context.fill();
    */ 

  };
};

canvasSketch(sketch, settings);
