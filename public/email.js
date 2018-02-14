window.addEventListener(
  'DOMContentLoaded',
  function() {
    var email_address = 'c2VyZ2lvQG1vdXJhLmNh';

    var parentElement = document.getElementById('email-container');
    var linkElement = document.createElement('a');
    linkElement.innerHTML = atob(email_address);
    linkElement.setAttribute('href', 'mailto:' + atob(email_address));
    parentElement.appendChild(linkElement);
  },
  false
);
