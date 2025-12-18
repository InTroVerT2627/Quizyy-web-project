// ================= QUESTION BANK =================
const data = {
  physics: [
    {q:"Unit of force?", o:["Newton","Joule","Watt","Pascal"], a:0, d:"easy"},
    {q:"Speed unit?", o:["m/s","kg","N","J"], a:0, d:"easy"},
    {q:"Gravity value?", o:["9.8","10","6.7","8"], a:0, d:"easy"},
    {q:"Work formula?", o:["F×d","m×a","v×t","p×v"], a:0, d:"medium"},
    {q:"Momentum?", o:["m×v","m×a","v/t","F×t"], a:0, d:"medium"},
    {q:"Power unit?", o:["Watt","Joule","Newton","Ampere"], a:0, d:"medium"},
    {q:"Force dimension?", o:["MLT⁻²","ML²T⁻²","MT⁻²","LT⁻¹"], a:0, d:"hard"},
    {q:"Escape velocity depends on?", o:["Mass & radius","Time","Speed","Area"], a:0, d:"hard"},
    {q:"Magnetic flux unit?", o:["Weber","Tesla","Volt","Henry"], a:0, d:"hard"},
    {q:"SI unit of energy?", o:["Joule","Watt","Newton","Amp"], a:0, d:"easy"},
    {q:"Acceleration unit?", o:["m/s²","m/s","kg","N"], a:0, d:"easy"},
    {q:"Work SI unit?", o:["Joule","Watt","Newton","Pascal"], a:0, d:"easy"},
    {q:"Impulse formula?", o:["F×t","m×v","a×t","v×t"], a:0, d:"medium"},
    {q:"Kinetic energy?", o:["½mv²","mv","mgh","Fd"], a:0, d:"medium"},
    {q:"Electric current unit?", o:["Ampere","Volt","Ohm","Watt"], a:0, d:"easy"}
  ],

  maths: [
    {q:"2 + 3 × 4?", o:["14","20","24","10"], a:0, d:"easy"},
    {q:"√49?", o:["7","6","8","9"], a:0, d:"easy"},
    {q:"Square of 6?", o:["36","12","18","30"], a:0, d:"easy"},
    {q:"Derivative of x²?", o:["2x","x","x²","1"], a:0, d:"medium"},
    {q:"LCM of 4 & 6?", o:["12","6","24","8"], a:0, d:"medium"},
    {q:"Value of π?", o:["3.14","2.71","1.61","4"], a:0, d:"medium"},
    {q:"Integral of 1/x?", o:["ln|x|","x","1/x²","eˣ"], a:0, d:"hard"},
    {q:"sin²θ+cos²θ=?", o:["1","0","2","θ"], a:0, d:"hard"},
    {q:"Determinant formula?", o:["ad−bc","ab+cd","a+b","None"], a:0, d:"hard"},
    {q:"Cube of 3?", o:["27","9","18","81"], a:0, d:"easy"},
    {q:"10²?", o:["100","20","10","200"], a:0, d:"easy"},
    {q:"Mean of 2 & 4?", o:["3","4","2","6"], a:0, d:"easy"},
    {q:"Derivative of sinx?", o:["cosx","sinx","−sinx","tanx"], a:0, d:"medium"},
    {q:"Area of circle?", o:["πr²","2πr","r²","πd"], a:0, d:"medium"},
    {q:"log₁₀10?", o:["1","0","10","∞"], a:0, d:"easy"}
  ],

  coding: [
    {q:"HTML is?", o:["Markup","Language","DB","OS"], a:0, d:"easy"},
    {q:"CSS is for?", o:["Design","Logic","DB","Server"], a:0, d:"easy"},
    {q:"JS used for?", o:["Logic","Styling","DB","Hosting"], a:0, d:"easy"},
    {q:"push() does?", o:["Add end","Remove end","Add start","Remove start"], a:0, d:"medium"},
    {q:"OOP means?", o:["Object Oriented Programming","Open Online Program","Only One Process","None"], a:0, d:"medium"},
    {q:"Loop keyword?", o:["for","if","break","switch"], a:0, d:"medium"},
    {q:"Binary search complexity?", o:["O(log n)","O(n)","O(n²)","O(1)"], a:0, d:"hard"},
    {q:"Stack follows?", o:["LIFO","FIFO","Tree","Graph"], a:0, d:"hard"},
    {q:"SQL is for?", o:["Database","Styling","Logic","Hosting"], a:0, d:"hard"},
    {q:"Array index starts at?", o:["0","1","-1","Depends"], a:0, d:"easy"},
    {q:"JS variable keyword?", o:["let","int","define","varies"], a:0, d:"easy"},
    {q:"Which is function?", o:["function","loop","if","switch"], a:0, d:"easy"},
    {q:"REST is?", o:["Architecture","Language","DB","Compiler"], a:0, d:"medium"},
    {q:"Git is?", o:["Version control","IDE","OS","DB"], a:0, d:"medium"},
    {q:"Queue follows?", o:["FIFO","LIFO","Tree","Graph"], a:0, d:"easy"}
  ]
};

// ================= STATE =================
let pool = [];
let idx = 0;
let score = 0;
let correct = 0;

// ================= LOGIC =================
function startQuiz() {
  let sub = document.getElementById("subject").value;
  if (!sub) { alert("Select subject"); return; }

  // shuffle once
  pool = shuffle([...data[sub]]).slice(0, 15);

  document.getElementById("start").classList.add("hide");
  document.getElementById("quiz").classList.remove("hide");

  showQ();
}

function showQ() {
  if (idx >= pool.length) return finish();

  let q = pool[idx];
  document.getElementById("info").innerText =
    `Question ${idx + 1}/15 | Difficulty: ${q.d}`;

  document.getElementById("qText").innerText = q.q;

  let opts = document.getElementsByClassName("opt");
  for (let i = 0; i < 4; i++) opts[i].innerText = q.o[i];
}

function answer(i) {
  if (i === pool[idx].a) {
    score++;
    correct++;
  }
  idx++;
  showQ();
}

function finish() {
  document.getElementById("quiz").classList.add("hide");
  document.getElementById("end").classList.remove("hide");

  document.getElementById("scoreTxt").innerText = score + "/15";
  document.getElementById("lvlTxt").innerText =
    correct >= 12 ? "Advanced" :
    correct >= 8 ? "Intermediate" :
    "Beginner";
}

// shuffle utility
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
