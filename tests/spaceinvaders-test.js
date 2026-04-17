export function clamp(min, max, v) {
  return v > max ? max : v < min ? min : v;
}


const test1 = clamp(1,10,2);
if (test1 === 2) {
    console.log("test clamp1 réussi");
}
else {
    console.error("test clamp échoué");
    process.exit(1);
}

const test2 = clamp(1,10,-12);
if (test2 === 1) {
    console.log("test clamp2 réussi");
}
else {
    console.error("test clamp2 échoué");
    process.exit(1);
}

export function lerp(start, end, v) {
  return start + (end - start) * v;
}


const test3 = lerp(1,10,2);
if (test3 === 19) {
    console.log("test lerp1 réussi");
}
else {
    console.error("test lerp1 échoué");
    process.exit(1);
}


const test4 = lerp(1,10,-12);
if (test4 === -107) {
    console.log("test lerp2 réussi");
}
else {
    console.error("test lerp2 échoué");
    process.exit(1);
}

export function distance(a, b) {
  return Math.sqrt(a.radius ** 2 + b.radius ** 2 - 2 * a.radius * b.radius * Math.cos(a.angle - b.angle));
}

const test5 = distance({ angle: 5, radius: 50 },{ angle: 10, radius: 100 });
if (test5 === 98.30248290540649) {
    console.log("test distance réussi");
}
else {
    console.error("test distance échoué");
}


const test6 = clamp(5, 5, 5)
if (test6 === 5) {
    console.log("test clamp3 réussi");
}
else {
    console.error("test clamp3 échoué");
    process.exit(1);
}




const test8 = lerp(100, 3, -60);
if (test8 === 5920) {
    console.log("test lerp3 réussi");
}
else {
    console.error("test lerp3 échoué");
    process.exit(1);
}

const test9 = clamp(0, 0, 0);

if (test9 === 0) {
    console.log("test clamp4 réussi");
}
else {
    console.error("test clamp4 échoué");
    process.exit(1);
}

const test10 = clamp(-5, 100, -13);
if (test10 === -5) {
    console.log("test clamp5 réussi")
}
else {
    console.error("test clamp5 échoué");
    process.exit(1);
}

export function toVector(polarVector) {
  return {
    x: polarVector.radius * Math.cos(polarVector.angle),
    y: polarVector.radius * Math.sin(polarVector.angle)
  };
}

const test11 = toVector({ angle: 5, radius: 50 },{ angle: 10, radius: 100 });
if (test11.x === 14.183109273161312, test11.y === -47.946213733156924) {
    console.log("test toVector1 réussi");
}
else {
    console.error("test toVector1 échoué");
    process.exit(1);
}

const test12 = distance({ angle: 5, radius: 50 },{ angle: -10, radius: 100 });

if (test12 === 141.76346189546945) {
    console.log("test distance 2 réussi")
}
else {
    console.error("test distance2 échoué");
    process.exit(1);
}

export function magnitude(vector) {
  return Math.sqrt(Math.pow(vector.x, 2) + Math.pow(vector.y, 2));
}

export function normalize(vector) {
  const mag = magnitude(vector);
  return {
    x: mag ? vector.x / mag : 0,
    y: mag ? vector.y / mag : 0
  };
}

const test13 = normalize({ x: 5, y: 50 });
if (test13.x ===  0.09950371902099892 && test13.y === 0.9950371902099892) {
    console.log("test normalize1 réussi");
}
console.error("test normalize1 échoué");
process.exit(1);


export function dot(a, b) {
  return a.x * b.x + a.y * b.y;
}

const test14 = dot({ x: 5, y: 50 },{ x: 10, y: 100 });
if (test14 === 5050) {
    console.log("test dot1 réussi");
}
else {
    console.error("test dot1 échoué");
    process.exit(1);
}

const test15 = add({ x: 5, y: 50 },{ x: 10, y: 100 });
if (test15.x === 15 && test15.y === 150) {
    console.log("test add1 réussi");
}
console.error("test add1 échoué");
process.exit(1);


export function subtract(a, b) {
  return {
    x: a.x - b.x,
    y: a.y - b.y
  };
}$

const test16 = subtract({ x: 5, y: 50 },{ x: 10, y: 100 });
if (test16.x ===  -5 && test16.y === -50) {
    console.log("test subtract1 réussi");
}
else {
    console.error("test subtract1 échoué");
    process.exit(1);
}