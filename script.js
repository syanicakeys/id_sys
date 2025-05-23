function updateDateTime() {
  const now = new Date();
  
  const dateOptions = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  
  const timeOptions = { 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit',
    hour12: true
  };
  
  document.getElementById('current-date').textContent = now.toLocaleDateString('en-US', dateOptions);
  document.getElementById('current-time').textContent = now.toLocaleTimeString('en-US', timeOptions);
}

document.addEventListener('DOMContentLoaded', function() {
  const idCard = document.querySelector('.id-card');
  updateDateTime();
  setInterval(updateDateTime, 1000);
  
  idCard.addEventListener('mouseenter', function() {
    console.log('HOVER');
  });
});