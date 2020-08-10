// Could be prettier.
let write_out_delay = 50;

function mod_delay() {
  return ~~(Math.random() * ((write_out_delay * 2) - write_out_delay + 1) + write_out_delay);
}

window.onload = () => {
  let index = 0;

  let prompt = document.getElementsByClassName('write-out')[0];
  let prompt_write = prompt.textContent;
  prompt.textContent = '';

  let prompt_output = document.getElementsByClassName('ls-output')[0];
  let prompt_output_write = prompt_output.innerHTML;
  prompt_output.innerHTML = '';

  let prompt_end = document.getElementsByClassName('end')[0];
  let prompt_end_write = prompt_end.innerHTML;
  prompt_end.innerHTML = '';

  (function write_prompt() {
    if (index < prompt_write.length) {
      prompt.textContent += prompt_write[index];
      index++;
      setTimeout(write_prompt, mod_delay());
    } else {
      setTimeout(() => {
        prompt_output.innerHTML = prompt_output_write;
      }, 150);
      setTimeout(() => {
        prompt_end.innerHTML = prompt_end_write;
      }, 215);
      index = 0;
    }
  })();

  document.getElementsByClassName('hey')[0].textContent = hey_write[~~(Math.random()*hey_write.length)];
};

/* Very quirky, I know. */
const hey_write = [
  'Hej',
  'Hei',
  'Hi',
  'Nazdar',
  'Zdravo',
  'Hei',
  'Hallo',
  'שָׁלוֹם',
  'नमस्ते',
  'مرحبا',
  'سلام',
  'Chào',
  '你好',
  'Привет',
]