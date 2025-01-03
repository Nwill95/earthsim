let square;
let squares = [];
let res = 5;
let xoffset = 0.1;
let yoffset = 0.1;
let totalcount;
let grassland;
let deaths = 0;

let waterlevel = 0.3;
let watercount = 0;
let beachlevel = 0.4;
let beachcount = 0;
let grasslevel = 0.6;
let grasscount = 0;
let rocklevel = 0.7;
let rockcount = 0;
let peaklevel = 1;
let peakcount = 0;
let icelevel = 0;
let icecount = 0;

let temperature = 1;
let irradiation = 50;
let atmosphericH2O = 0.5;
let atmosphericN2 = 0.8;
let atmosphericO2 = 0.2;
let atmosphericCO2 = 0.01;
let pressure = atmosphericH2O + atmosphericN2 + atmosphericO2;
let icecaps = 100;
let dryness = 1 - atmosphericH2O;

function preload() {
  font = loadFont("assets/font.ttf");
}

function setup() {
  frameRate(5);
  createCanvas(800, 1200);
  textFont(font);
  colorMode(HSB);
  noiseSeed(220);
  totalcount = (width * height) / (res * res);
  generateSquares();
}

function draw() {
  background(0, 0, 65);
  resetCount();
  initialize();
  generateSquares();
  for (let instance of squares) {
    instance.show();
  }
  simulate();
  showText();
}

function rain() {
  let change = 0;
  if (atmosphericH2O > 0) {
    change = (1 / temperature) * atmosphericH2O * 0.1;
    waterlevel += change;
    atmosphericH2O -= change;
  }
}

function evaporate() {
  let change = 0;
  if (waterlevel > 0 && pressure < 2) {
    change =
      temperature * (1 / atmosphericH2O) * waterlevel * (1 / pressure) * 0.1;
    atmosphericH2O += change;
    waterlevel -= change;
  }
}

function photosynthesis() {
  let change = 0;
  change = grasscount * (1 / dryness) * 0.0000001;
  if (grasscount > 0) {
    atmosphericO2 += change;
    if (atmosphericCO2 > 0) {
      atmosphericCO2 -= change;
    }
    waterlevel -= change * 0.00001;
  }
}

function death() {
  for (let j = 0; j < 500; j++) {
    for (let i = squares.length - 1; i >= 0; i--) {
      if (squares[i].type == "grass") {
        squares.splice(Math.floor(i));
        deaths++;
      }
    }
  }
}

function heat() {
  let change = 0;
  change =
    irradiation * (1 / waterlevel) * atmosphericCO2 * atmosphericH2O * 0.05;
  temperature += change;
}

function cool() {
  let change = 0;
  change = icecaps * waterlevel * atmosphericCO2 * 0.01;
  icecaps += change;
  waterlevel -= change;
  temperature -= change;
}

function melt() {
  let change = 0;
  if (temperature > 1 && icecount > 0) {
    change = temperature * 0.0001;
    icecaps -= change * 0.8;
    waterlevel += change * 0.2;
  }
}

function freeze() {
  let change = 0;
  if (temperature < 1 && waterlevel > 0) {
    change = (1 / temperature) * 0.0001;
    icecaps += change * 0.8;
    waterlevel -= change * 5;
  }
}

function simulate() {
  // heat();
  // cool();
  // melt();
  // freeze();
  // rain();
  // evaporate();
  // photosynthesis();
  death();
}

function resetCount() {
  squares = [];
  watercount = 0;
  beachcount = 0;
  grasscount = 0;
  rockcount = 0;
  peakcount = 0;
  icecount = 0;
  deaths = 0;
}

function initialize() {
  pressure = atmosphericN2 + atmosphericO2 + atmosphericH2O;
  beachlevel = waterlevel + 0.1;
  icecaps = 100 * (1 / temperature);
  if (waterlevel < 1) {
    dryness = 1 - atmosphericH2O;
  } else {
    dryness = 0;
  }
}
