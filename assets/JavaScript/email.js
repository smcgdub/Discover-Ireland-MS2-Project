// INITIALIZE SDK WITH USER ID
(function() {
      emailjs.init('user_Sxbabc5EJNTEdzpGRK5bs');
})();

// CONTACT US FORM JS CODE
window.onload = function() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
// generate a five digit number for the contact_number variable
// this.contact_number.value = Math.random() * 100000 | 0;
// these IDs from the previous steps
  emailjs.sendForm('contact_service', 'contact_form', this)
    .then(function() {
      alert('Your message has been sent successfully');
        document.getElementById('contact-form').reset();
    }, function(error) {
      alert('Message not sent, please try again', error);
    });
  });
};
