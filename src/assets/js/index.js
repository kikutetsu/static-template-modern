import '../style/style.scss';

window.onload = function() {
  const body = document.querySelector('body');
  body.innerHTML += 'Hello World!';
  test();
};

const test = () => {
  let hello = 'Hello babel!!!!!';
  console.log(hello);
};
