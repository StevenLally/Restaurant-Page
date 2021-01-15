const about = () => {
  const div = document.createElement('div');

  let html = '<h2>About Us</h2>';
  html += '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p><br>';
  html += '<h2>Hours</h2>';
  html += '<p>M-F: 7:30 AM - 8:00 PM</p>';
  html += '<p>Sat: 7:30 AM - 10:00 PM</p>';
  html += '<p>Sun: 9:00 AM - 5:00 PM</p><br>';
  html += '<h2>Location</h2>';
  html += '<p>123 Road St.</p>';
  html += '<p>City, ST 12345';
  html += '<p>(000) 000-0000</p>';

  div.innerHTML = html;
  div.classList.add('about-tab');

  return div;
}

export default about;