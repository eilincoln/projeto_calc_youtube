var outputscreen = document.getElementById('outputvalue');

function display(numbers) {
  outputscreen.value += numbers;
}

function allclear() {
  outputscreen.value = '';
}

function del() {
  outputscreen.value = outputscreen.value.slice(0, -1);
}

function calculate() {
  outputscreen.value = eval(outputscreen.value);
}
