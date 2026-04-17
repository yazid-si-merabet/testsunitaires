function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const test1 = getRandomInt(-42, 42); 
    if (test1 < 43) {
        console.log("test réussi");
    } 
    else {
        console.error("test échoué");
    }

const test2 = getRandomInt(42, 42);
  if (test2 === 42) {
    console.log("test réussi")
  }
  else {
    console.error("test échoué")
  }

  
  function rectIntersect(x1, y1, w1, h1, x2, y2, w2, h2) {
    if (x2 > w1 + x1 || x1 > w2 + x2 || y2 > h1 + y1 || y1 > h2 + y2){
        return false;
    }
    return true;
}

const test3 = rectIntersect(1,1,2,1,4,1,1,2);
  if (test3 === false) {
    console.log("test réussi");
  }
  else {
    console.error("test échoué");
    process.exit(1);
  }


 const test4 = rectIntersect(1,1,5,2,4,1,1,2); 
    if (test4 === true) {
      console.log("test réussi: collision");
    }
    console.error("test échoué");
    process.exit(1);


    function circleIntersect(x1, y1, r1, x2, y2, r2) {
    let squareDistance = (x1-x2) * (x1-x2) + (y1-y2) * (y1-y2);
    return squareDistance <= ((r1 + r2) * (r1 + r2))
}


const test5 = circleIntersect(3,2,1,6,1,1.5);
let squareDistance1 = (3-6) * (3-6) + (2-1) * (2-1);
return squareDistance <= ((1 + 1.5) * (1 + 1.5))


const test6 = circleIntersect(1,1,5,2,4,1,1,2);
let squareDistance2 = (1-2) * (1-2) + (1-1) * (1-1);
return squareDistance <= ((5 + 2) * (5 + 2))


const test7 = getRandomInt(50, 50)
if (test7 === 50) {
  console.log("test réussi");
}
console.error("test échoué");
process.exit(1);


const test8 = rectIntersect(1,1,1,1,2,2,2,2);
if (test8 === true) {
  console.log("test réussi: collision");
}
else {
  console.error("test échoué");
  process.exit(1);
}

const test9 = rectIntersect(2,2,2,2,1,1,1,1);
if (test9 === true) {
  console.log("test réussi: collision");
}
else {
  console.error("test échoué");
  process.exit(1);
}

function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);

    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);

    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);

    let diffInMs = (diffInSec - ss) * 100;
    let ms = Math.floor(diffInMs);

    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    let formattedMS = ms.toString().padStart(2, "0");

    return `${formattedMM}:${formattedSS}:${formattedMS}`;
}

const test10 = timeToString(123456789);
if (test10 === "17:36:78") {
  console.log("test réussi");
} else {
  console.error("test échoué");
  process.exit(1)
}

const test11 = timeToString("toto");
if (test11 === "NaN:NaN:NaN") {
  console.log("test réussi");
}
else {
  console.error("test échoué");
}