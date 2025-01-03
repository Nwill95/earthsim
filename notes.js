// function setColor(h) {
//   let c;
//   switch (true) {
//     case h <= waterlevel:
//       c = color(0, 0, 255, h);
//       watercount++;
//       break;
//     case h <= beachlevel:
//       c = color(255, 234, 128);
//       break;
//     case h <= grasslevel:
//       c = color(0, 255, 0, h);
//       break;
//     case h <= rocklevel:
//       c = color(0, 0, 0, 100);
//       break;
//     case h <= snowlevel:
//       c = color(255, 255, 255);
//       break;
//     default:
//       console.log("Switch statement error");
//   }
//   return c;
// }

// function setColor1(h) {
//   let c;
//   switch (true) {
//     case h <= waterlevel:
//       c = color(240, 100, 100);
//       watercount++;
//       break;
//     case h <= beachlevel:
//       c = color(50, 60, 100);
//       beachcount++;
//       break;
//     case h <= grasslevel:
//       c = color(120, 60, h * 100);
//       grasscount++;
//       break;
//     case h <= rocklevel:
//       c = color(0, 10, 50);
//       rockcount++;
//       break;
//     case h <= peaklevel:
//       if (temperature < 0.8) {
//         c = color(0, 0, 100);
//         icecount++;
//       } else {
//         c = color(0, 0, 25);
//         peakcount++;
//       }
//       break;
//     default:
//       console.log("Switch statement error");
//   }
//   return c;
// }