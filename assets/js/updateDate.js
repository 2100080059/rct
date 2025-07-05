function formatIndianNumber(num) {
  return num.toString()
    .replace(/\B(?=(\d{2})+(?!\d{3}))/g, )
    .replace(/(\d+)(?=(\d{3})+(?!\d))/g, );
}

// Demo counter using localStorage
let count = localStorage.getItem('visitCount');
if (!count) {
  count = 1;
} else {
  count = parseInt(count) + 1;
}
localStorage.setItem('visitCount', count);

// Display formatted visitor count
const countElement = document.getElementById('visitorCount');
if (countElement) {
  countElement.textContent = formatIndianNumber(count);
}

// Set today's date as last updated
const today = new Date();
const dateElement = document.getElementById('lastUpdatedDate');
if (dateElement) {
  dateElement.textContent = today.toLocaleDateString('en-GB');
}
