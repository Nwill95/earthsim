function showText(){
  push();
  translate(10, 820);
  fill(0);
  text(
    "Pressure: " +
      round(pressure, 2) +
      " H2O: " +
      round(atmosphericH2O, 2) +
      " N2: " +
      round(atmosphericN2, 2) +
      " O2: " +
      round(atmosphericO2, 2) +
      " CO2: " +
      round(atmosphericCO2, 5),
    0,
    0
  );
  text("Temperature: " + round(temperature, 2) + " Dryness: " + round(dryness,2), 0, 15);
  text(
    "Watercount: " + watercount + " Waterlevel: " + round(waterlevel, 2),
    0,
    30
  );
  text(
    "Grasscount: " + grasscount,
    0,
    45
  );
  text("Rockcount: " + rockcount, 0, 60);
  text("Peakcount: " + peakcount, 0, 75);
  text("Icecount: " + icecount, 0, 90);
  text("Deaths: " + deaths, 0, 105);


  pop();
}