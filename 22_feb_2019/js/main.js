window.onload = () => {
  const element = document.getElementById(window.location.href.split('#')[1]);
  let opacity = window.getComputedStyle(element);
  opacity = opacity.getPropertyValue('display');
  if (opacity === 'none') {
    showTools();
    element.scrollIntoView();
  }
};

const about = document.getElementsByClassName('about');
const tools = document.getElementsByClassName('tools');

function showAbout() { // eslint-disable-line
  for (let i = 0; i < tools.length; i++) {
    tools[i].style.display = 'none';
  }
  for (let i = 0; i < about.length; i++) {
    about[i].style.display = 'block';
  }
}

function showTools() {
  for (let i = 0; i < about.length; i++) {
    about[i].style.display = 'none';
  }
  for (let i = 0; i < tools.length; i++) {
    tools[i].style.display = 'block';
  }
}

/*
 * About
 */


/*
 * Tools
 */

/* Page two */
const numberNames = ['zero', 'one', 'two', 'three', 'four', 'five', 'six',
  'seven', 'eight', 'nine'];

function getBigCharOf(letter) {
  /* Special symbols */
  if (letter == '\n') {
    return '\n';
  } else if (letter == ' ') {
    return letter;
  } else if (letter == '!') {
    return ':exclamation:';
  } else if (letter == '?') {
    return ':question:';
  } /* Maths symbols (excluding x and /) */
  if (letter == '+') {
    return ':heavy_plus_sign:';
  } else if (letter == '-') {
    return ':heavy_minus_sign:';
  } /* Currency */
  if (letter == '$') {
    return ':heavy_dollar_sign:';
  } else if (letter == '£') {
    return ':pound:';
  } else if (letter == '¥') {
    return ':yen:';
  } else if (letter == '€') {
    return ':euro:';
  } /* Letters or numbers */
  if (letter.match(/[a-z]/i)) {
    /* Javascript doesn't currently implement any form of string formatting */
    return ':regional_indicator_' + letter.toLowerCase() + ':';
  } else if (letter.match(/[0-9]/i)) {
    return ':' + numberNames[parseInt(letter)] + ':';
  } /* Otherwise, we don't know. */
  return letter;
}
function textToRegionalIndicators() {  // eslint-disable-line
  const input = document.getElementsByClassName('input')[0];
  const output = document.getElementsByClassName('output')[0];
  output.value = '';
  for (const letter of input.value) {
    output.value += getBigCharOf(letter) + ' ';
  }
}


/* Page three */
function generateURL() {
  let id = '';
  const letterOptions = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (let i = 0; i < 5; i++) {
    id += letterOptions.charAt(Math.floor(
        Math.random() * letterOptions.length));
  }
  return 'http://i.imgur.com/' + id + '.png';
}

let previousImage;

function openPreviousImage() {  // eslint-disable-line
  console.log(previousImage);
  if (previousImage == undefined || previousImage == '') {
    return;
  }
  window.open(previousImage, '_blank');
}

function openImage() {  // eslint-disable-line
  const src = document.getElementsByClassName('image')[0].src;
  console.log(src);
  if (src == undefined || src == '') {
    return;
  }
  window.open(src, '_blank');
}

function newImage() {  // eslint-disable-line
  previousImage = document.getElementsByClassName('image')[0].src;
  const img = new Image();
  img.src = generateURL();
  img.onload = () => {
    if ((img.width == 198 && img.height == 160) ||
       (img.width == 161 && img.height == 81)) {
      /* ^ The dimentions of the "this image has been removed" image. */
      newImage();
    } else {
      document.getElementsByClassName('image')[0].src = img.src;
    }
  };
}
