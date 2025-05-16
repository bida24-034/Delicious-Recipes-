// Booking form submission
document.querySelector('.booking-form')?.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent actual submission
  alert('Thank you! Your lesson booking has been received.');
  this.reset(); // Clear the form
});

// Feedback form submission
document.querySelector('.feedback-form')?.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent actual submission
  alert('Thank you for your feedback! We appreciate your time.');
  this.reset(); // Clear the form
});


