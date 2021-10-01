


// part 1
function computeForce() {
    let mass = parseFloat(document.getElementById("mass").value);
    console.log("mass = " + mass);
    let accel = parseFloat(document.getElementById("accel").value);
    console.log("accel = " + accel);
    let force = mass * accel;
    document.getElementById("force").innerHTML = "Force = " + force.toFixed(2);
    console.log("force = " + force.toFixed(2));
}


// part 2
function computeDisplacement() {
    let initVel = parseFloat(document.getElementById("initVel").value);
    console.log("initVel = " + initVel);
    let accel = parseFloat(document.getElementById("accel2").value);
    console.log("accel2 = " + accel);
    let time = parseFloat(document.getElementById("time").value);
    console.log("time = " + time);
    let displacement = initVel * time + ((1/2) * accel * (time * time));
    console.log("Displacement = " + displacement);
    document.getElementById("displacement").innerHTML = "D = " + displacement.toFixed(2);
}


// part 3
function computeQuadraticSolutions() {
    let a = parseFloat(document.getElementById("a").value);
    console.log("a = " + a);
    let b = parseFloat(document.getElementById("b").value);
    console.log("b = " + b);
    let c = parseFloat(document.getElementById("c").value);
    console.log("c = " + c);
    let isReal = (b * b - 4 * a * c) >= 0 ? "" : "i";
    let ans1 = ( -b + Math.sqrt(Math.abs(b * b - 4 * a * c)))/2*a;
    console.log("ans1 = " + ans1 + isReal);
    let ans2 = ( -b + (-1)*Math.sqrt(Math.abs(b * b - 4 * a * c)))/2*a;
    console.log("ans2 = " + ans2 + isReal);
    document.getElementById("quadSolu").innerHTML = "Answer 1 = " + ans1.toFixed(2) +isReal + "     Answer 2 = " + ans2.toFixed(2) + isReal;
}


function computePresentValue() {
    let pmt = parseFloat(document.getElementById("pmt").value);
    console.log("PMT = " + pmt);
    let rate = parseFloat(document.getElementById("rate").value);
    console.log("Interest Rate = " + rate);
    let n = parseFloat(document.getElementById("n").value);
    console.log("num years = " + n);
    let p = pmt * ( 1 - ( 1 / Math.pow((1 + rate),n) ) )/rate
    console.log("present value = " + p);
    document.getElementById("finance").innerHTML = "Present Value of Annuity Stream = " + p.toFixed(2);
    
}
