////////////////////////////////////////////////////// JQUERY ///////////////////////////////////////////

/* $(document).ready(function () {

  /////////// Font Size /////////////

  $('#increase').click(function () {

      // One Font Size
      //$('body').css({ "font-size": "200%" }); 

      // Custom Font Size
      var fontSize = parseInt($("body").css("font-size"));

      if (fontSize >= "25") {
          alert('Font has reached maximun size!')
      } else {
          fontSize += 3;
          $("body").css({ 'font-size': fontSize });
      }

  });

  $('#decrease').click(function () {

      // One Font Size
      //$('body').css({ "font-size": "50%" }); 

      // Custom Font Size
      var fontSize = parseInt($("body").css("font-size"));

      if (fontSize <= "8") {
          alert('Font has reached maximun size!')
      } else {
          fontSize -= 2;
          $("body").css({ 'font-size': fontSize });
      }

  });

  $('#reset').click(function () {
      $('body').css({ "font-size": "1em" })
  });

  /////////// Color Themes /////////////

  let sections = $('#grid header, #grid .left-col, #grid .central-col, #grid .right-col, #grid footer');

  $('#light').click(function () {
      $(sections).addClass('light');
      $('button').addClass('btn-light');

      $(sections).removeClass('contrast default');
      $('button').removeClass('btn-contrast btn-default');

  });
  $('#contrast').click(function () {
      $(sections).addClass('contrast');
      $('button').addClass('btn-contrast');

      $(sections).removeClass('light default');
      $('button').removeClass('btn-light btn-default');

  });
  $('#default').click(function () {
      $(sections).addClass('default');
      $('button').addClass('button');

      $(sections).removeClass('contrast light');
      $('button').removeClass('btn-light btn-contrast');

  });

}); */

/////////////////////////////////////////////////// JAVASCRIPT ///////////////////////////////////////////


/////////////////////////////////////////////////// PUZZLE ///////////////////////////////////////////

var Easy = '306500090200400851100780060009368500628000349005924100040097002863001005070003408';
var Easy_Answer = "386512794297436851154789263419368527628175349735924186541897632863241975972653418";

var Normal = '800000310000517000090000250700308001400000006300201005073000040000896000018000002';
var Normal_Answer = "865429317234517689197683254759368421421975836386241795673152948542896173918734562";

var Hard = '080000001900276000050000029009800200001409800006005300730000060000938002200000040';
var Hard_Answer = "682594731913276485457381629549863217371429856826715394735142968164938572298657143";

//Define global variable to hold the loaded puzzle and start it as zero
var current_puzzle = 0;

//Load puzzle
function LoadPuzzle(level) {
  if (level == 1) {
    current_puzzle = Easy;
  }
  if (level == 2) {
    current_puzzle = Normal;
  }
  if (level == 3) {
    current_puzzle = Hard;
  }
    temp = current_puzzle.split("");
  for (var i=0; i < 81; i++) {
    //do not display the zeros
    if(temp[i]=='0') {
      document.getElementById(i+1).value='';
      document.getElementById(i+1).style.color="#000000";
    }
    else {
      document.getElementById(i+1).value=temp[i];
      document.getElementById(i+1).style.color="#A0A0A0";
    }
  }
}

//Reload curent puzzle
function Reload() {
  if (current_puzzle===0) {
    alert('Select a puzzle to start');
  }
  else {
    var temp=confirm("Restart the Current Game");
    if (temp===true) {
      LoadPuzzle(current_puzzle);
    }
  }
}

//Clear cell if 0 and check if the entered value is a number between 1-9
function CheckValue(obj) {
  if (obj.value==='0') {
    obj.value='';
  }
  if (isNaN(obj.value)===true || obj.value<0 || obj.value>9) {
    alert('Invalid input \nPlease choose a number between 1-9');
    obj.value='';
  }
}

//Define global variable to hold the id of the last onfocus text field
current_id = 0;

//Get the id of the current text field onfocus
function getID(id) {
  current_id=id;
}

//Check id the entered value match to the correct answer
function CheckCell() {
  if (current_puzzle===0) {
	alert('Select a puzzle to start');
	obj.value='';
  }
  if (current_puzzle==Easy) {
    answer=Easy_Answer;
  }
  if (current_puzzle==Normal) {
    answer=Normal_Answer;
  }
  if (current_puzzle==Hard) {
    answer=Hard_Answer;
  }
  correct = answer.split("");
  temp = document.getElementById(current_id).value;
  if (temp==='') {
    alert('Selected cell is empty');
  }
  else {
    if (correct[current_id-1] == temp) {
      alert('Well Done! ' + temp + ' is the corect answer');
      document.getElementById(current_id).style.color="#339933";
	}
    else {
      alert('Try Again! ' + temp + ' is a wrong answer');
	  document.getElementById(current_id).style.color="#FF0000";
	}
  }
}


////////////////////////////////////// CHANGE FONT SIZE ////////////////////////////////////////////


function increaseFont() {
  if (document.body.style.fontSize === "") {
    document.body.style.fontSize = "1.0em";
  }
  
  let temp = document.body.style.fontSize;  
  if (temp < "2") {                                
    document.body.style.fontSize = parseFloat(document.body.style.fontSize) + (0.1) + "em";
  } else {
    alert("Font has reached maximun size");
  }
}


function decreaseFont() {
  if (document.body.style.fontSize === "") {
    document.body.style.fontSize = "1.0em";
  }
  var temp = document.body.style.fontSize ;   
  if (temp < "0.7") {
    alert("Font has reached minimun size");
  }
  else {
    document.body.style.fontSize = parseFloat(document.body.style.fontSize) + (-0.1) + "em";
  }

}

function resetFont() {
  document.body.style.fontSize = "1.0em";
}


///////////////////////////////////////// CHANGE COLOR THEMES ///////////////////////////////////////

//Black & White Theme
function light() {

  // MAIN SECTION BG COLOR
  var mainSections = document.querySelectorAll("#grid header, #grid .left-col, #grid .central-col, #grid .right-col, #grid footer");
  for (var i = 0; i < mainSections.length; i++) {

    // ADD INLINE CSS
    /* mainSections[i].style.backgroundColor = "#ffffff";
    mainSections[i].style.color = "#000000";
    mainSections[i].style.border = "1px solid #000000"; */

    // ADD A CLASS WHEN CLICKED, REMOVE OTHER CLASSES
    mainSections[i].classList.add('light');
    mainSections[i].classList.remove('contrast', 'default');
  }

  // CELLS
  var cell = document.querySelectorAll(".puzzle > .cell");
  for (var i = 0; i < cell.length; i++) {
    cell[i].style.border = "1px solid #000000";
  }



  // BUTTONS
  var button = document.querySelectorAll("button");
  for (var i = 0; i < button.length; i++) {
    /* button[i].style.color = "#000000";
    button[i].style.backgroundColor = "#b3b1b1";
    button[i].style.border = "none"; */

    button[i].classList.add('btn-light');
    button[i].classList.remove('btn-contrast', 'btn-default');

  }
  

}


// Yellow & Black Theme
function highContrast() {

  // MAIN SECTIONS
  var mainSections = document.querySelectorAll("#grid header, #grid .left-col, #grid .central-col, #grid .right-col, #grid footer");
  for (var i = 0; i < mainSections.length; i++) {

    // ADD INLINE CSS
    /* mainSections[i].style.backgroundColor = "#ffeb3b";
    mainSections[i].style.color = "#000000";
    mainSections[i].style.border = "1px solid #000000"; */

    // ADD A CLASS WHEN CLICKED, REMOVE OTHER CLASSES
    mainSections[i].classList.add('contrast');
    mainSections[i].classList.remove('light', 'default');
  }

  // CELLS
  var cell = document.querySelectorAll(".puzzle > .cell");
  for (var i = 0; i < cell.length; i++) {
    cell[i].style.border = "1px solid #000000";
  }

  // BUTTONS
  var button = document.querySelectorAll("button");
  for (var i = 0; i < button.length; i++) {
    //INLINE CSS
    /* button[i].style.color = "#ffeb3b";
    button[i].style.backgroundColor = "#000000";
    button[i].style.border = "none"; */

    //ATTACH A CLASS WHEN CLICKED
    button[i].classList.add('btn-contrast');
    button[i].classList.remove('btn-light', 'btn-default');

  }
}

// Blue & White Theme
function defaultTheme() {
  // MAIN SECTIONS
  var mainSections = document.querySelectorAll("#grid > header, #grid > .left-col, #grid > .central-col, #grid > .right-col, #grid > footer");
  for (var i = 0; i < mainSections.length; i++) {

    // ADD INLINE CSS
    /* mainSections[i].style.backgroundColor = "#4a90e2";
    mainSections[i].style.color = "#ffffff";
    mainSections[i].style.border = "1px solid #1b5dab"; */

    // ADD A CLASS WHEN CLICKED, REMOVE OTHER CLASSES, because of Specificity
    mainSections[i].classList.add('default');
    mainSections[i].classList.remove('light', 'contrast');
  }

  // CELLS
  var cell = document.querySelectorAll(".puzzle > .cell");
  for (var i = 0; i < cell.length; i++) {
    cell[i].style.border = "1px solid #a2c6f0";
  }

  // BUTTONS
  var button = document.querySelectorAll("button");
  for (var i = 0; i < button.length; i++) {

    //INLINE CSS
    /* button[i].style.color = "#4a90e2";
    button[i].style.backgroundColor = "#ffffff";
    button[i].style.border = "none"; */

    //ADD A CLASS
    button[i].classList.add('btn-default');
    button[i].classList.remove('btn-light', 'btn-contrast');
  }
}


////////////////////////////////////// DATE, TIME & LAST MODIFIED /////////////////////////////////////////////

// Date 
let date = new Date();
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
document.getElementById("date").innerHTML = date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear();

// Time
function clock() {
  let fullDate = new Date();

  function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  let hours = addZero(fullDate.getHours());
  let mins = addZero(fullDate.getMinutes());
  let secs = addZero(fullDate.getSeconds());

  document.getElementById('time').innerHTML = hours + ":" + mins + ":" + secs;

}

setInterval(clock, 500);

// Last Modified Time
let lastUpdate = document.lastModified;
document.getElementById('last-update').innerHTML = lastUpdate;