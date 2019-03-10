//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible
var churchillSpeech = {
      'author': 'Churchill',
      'year': 1940,
      'yearIsBCE': false,
      'authorAge': '66'
    },
    ghandiSpeech = {
      'author': 'Ghandi',
      'year': 1942,
      'yearIsBCE': false,
      'authorAge': '73'
    },
    demosthenesSpeech = {
      'author': 'Demosthenes',
      'year': 342,
      'yearIsBCE': true,
      'authorAge': '42'
    },
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech],
    donatePrompt;

var consoleDisplay = document.getElementById('ConsoleDisplay');
var addBreak = document.createElement('br');
var sideNav = document.getElementById('SideNav');
var addHeadline = document.createElement('h3');
var executeHeadline = sideNav.appendChild(addHeadline);
var willYouDonate = "";

document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
  willYouDonate = window.prompt('How much would you like to donate?');

  if(willYouDonate<100){
    addHeadline.innerHTML = "Thank you for your donation of $" + willYouDonate;
  }else if(willYouDonate>=100){
    addHeadline.setAttribute("style", "color:red");
    addHeadline.innerHTML = "Thank you for your generous donation!";
  }else{
    addHeadline.innerHTML = "Type a number!";
  }
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
  consoleDisplay.innerHTML = 'This speech was written by ' + speechesArray[0].author + ' in ' + speechesArray[0].year + '.';

  if(speechesArray[0].yearIsBCE === true){
    consoleDisplay.appendChild(addBreak);
    consoleDisplay.innerHTML += 'This speech took place before the common era.';
  }else{
    consoleDisplay.appendChild(addBreak);
    consoleDisplay.innerHTML += 'This speech took place during the common era.';
  }

  var oldest = speechesArray[0].year,
      newest = speechesArray[0].year;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  }

  if(speechesArray[0].year === oldest){
    consoleDisplay.appendChild(addBreak);
    consoleDisplay.innerHTML += 'This is the oldest speech on the page.';
  }
  if(speechesArray[0].year === newest){
    consoleDisplay.appendChild(addBreak);
    consoleDisplay.innerHTML += 'This is the most recent speech on the page.';
  }
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
  consoleDisplay.appendChild(addBreak);
  consoleDisplay.innerHTML = 'This speech was written by ' + speechesArray[1].author + ' in ' + speechesArray[1].year;

  if(speechesArray[1].yearIsBCE === true){
    consoleDisplay.appendChild(addBreak);
    consoleDisplay.innerHTML += 'This speech took place before the common era.';
  }else{
    consoleDisplay.appendChild(addBreak);
    consoleDisplay.innerHTML += 'This speech took place during the common era.';
  }

  var oldest = speechesArray[0].year,
      newest = speechesArray[0].year;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  }

  if(speechesArray[1].year === oldest){
    consoleDisplay.appendChild(addBreak);
    consoleDisplay.innerHTML += 'This is the oldest speech on the page.';
  }
  if(speechesArray[1].year === newest){
    consoleDisplay.appendChild(addBreak);
    consoleDisplay.innerHTML += 'This is the most recent speech on the page.';
  }
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
  consoleDisplay.innerHTML = 'This speech was written by ' + speechesArray[2].author + ' in ' + speechesArray[2].year;

  if(speechesArray[2].yearIsBCE === true){
    consoleDisplay.appendChild(addBreak);
    consoleDisplay.innerHTML += 'This speech took place before the common era.';
  }else{
    consoleDisplay.appendChild(addBreak);
    consoleDisplay.innerHTML += 'This speech took place during the common era.';
  }

  var oldest = speechesArray[0].year,
      newest = speechesArray[0].year;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  }

  if(speechesArray[2].year === oldest){
    consoleDisplay.appendChild(addBreak);
    consoleDisplay.innerHTML += 'This is the oldest speech on the page.';
  }
  if(speechesArray[2].year === newest){
    consoleDisplay.appendChild(addBreak);
    consoleDisplay.innerHTML += 'This is the most recent speech on the page.';
  }
});

