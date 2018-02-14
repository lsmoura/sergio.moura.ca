window.addEventListener(
  'DOMContentLoaded',
  function() {
    var parentElement = document.getElementById('email-container');
    var email_address = parentElement.getAttribute('data-address');
    var linkElement = document.createElement('a');
    linkElement.innerHTML = atob(email_address);
    linkElement.setAttribute('href', 'mailto:' + atob(email_address));
    parentElement.appendChild(linkElement);
  },
  false
);
