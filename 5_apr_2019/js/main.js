
/* Page two */
var numberNames = ['zero', 'one', 'two', 'three', 'four', 'five', 'six',
                   'seven', 'eight', 'nine']

function GetBigCharOf(letter) {
  /* Is this dirty? Probably. */

  /* Special symbols */
  if (letter == '\n') {
    return '\n'
  } else if (letter == ' ') {
    return letter
  } else if (letter == '!') {
    return ':exclamation:'
  } else if (letter == '?') {
    return ':question:'
  } /* Maths symbols (excluding x and /) */
  if (letter == '+') {
    return ':heavy_plus_sign:'
  } else if (letter == '-') {
    return ':heavy_minus_sign:'
  } /* Currency */
  if (letter == '$') {
    return ':heavy_dollar_sign:'
  } else if (letter == '£') {
    return ':pound:'
  } else if (letter == '¥') {
    return ':yen:'
  } else if (letter == '€') {
    return ':euro:'
  } /* Letters or numbers */
  if (letter.match(/[a-z]/i)) {
    /* Javascript doesn't currently implement any form of string formatting */
    return ':regional_indicator_' + letter.toLowerCase() + ':'
  } else if (letter.match(/[0-9]/i)) {
    return ':' + numberNames[parseInt(letter)] + ':'
  } /* Otherwise, we don't know. */
  return letter
}
function TextToRegionalIndicators() {
  var input = document.getElementsByClassName('input')[0]
  var output = document.getElementsByClassName('output')[0]
  output.value = ''
  for (let letter of input.value) {
    output.value += GetBigCharOf(letter) + ' '
  }
}


/* Page three */
function GenerateURL() {
    var id = ''
    var letterOptions = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for (var i = 0; i < 5; i++) {
        id += letterOptions.charAt(Math.floor(
                                    Math.random() * letterOptions.length))
    }
    return 'https://i.imgur.com/' + id + '.png'
}

var previousImages = document.getElementsByClassName('previousImages')[0]

function NewImage() {
    var img = new Image()
    img.src = GenerateURL()
    img.onload = function() {
        if ((img.width == 198 && img.height == 160)
             || (img.width == 161 && img.height == 81)) {
            /* ^ The dimentions of the "this image has been removed" image. */
            NewImage()
        } else {
            document.getElementsByClassName('image')[0].src = img.src
            previousImages.value += img.src + ' '
        }
    }
}
