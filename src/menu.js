const menu = () => {
  const div = document.createElement('div');

  let html = '<h2>Menu list</h2><br>';
  html += '<h3>Item example 1</h3>';
  html += '<p>Item description...lorem ipsum?';
  html += '<h3>Item example 2</h3>';
  html += '<p>Item description...lorem ipsum?';
  html += '<h3>Item example 3</h3>';
  html += '<p>Item description...lorem ipsum?';

  div.innerHTML = html;
  div.classList.add('menu-tab');

  return div;
}

export default menu;