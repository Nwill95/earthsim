function getType(i, j, h) {
  if (setSnow(i, j) == true) {
    return "snow";
  } else if (h < waterlevel) {
    return "water";
  } else if (h < waterlevel + 0.1) {
    return "beach";
  } else if (h >= 0.65 && h < 0.8) {
    return "rock";
  } else if (h >= 0.8 && temperature > 0.5) {
    return "peak bare";
  } else if (h >= 0.8 && temperature < 0.5) {
    return "snow";
  } else if ((waterlevel+0.1)*dryness < h && h < 0.65){
    return "grass";
  }else{
    return "rock";
  }
}

function setSnow(i, j) {
  let s = false;
  let a = constrain(icecaps, 0, 400);
  let pos = j * res;
  let fullIce = a - 2 * res;
  let halfIce = a - res;
  let minIce = a + 1;
  if (pos < fullIce || pos > 800 - fullIce) {
    s = true;
  } else if (pos < halfIce || pos > 800 - halfIce) {
    if (random(1) < 0.5) {
      s = true;
    } else if (pos <= minIce || pos >= 800 - minIce) {
      if (random(1) < 0.1) {
        s = true;
      }
    }
  }
  return s;
}
