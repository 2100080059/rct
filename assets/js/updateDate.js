// Format number like 2,96,77,976
function formatIndianNumber(num) {
  return num.toString()
    .replace(/\B(?=(\d{2})+(?!\d{3}))/g, ",")
    .replace(/(\d+)(?=(\d{3})+(?!\d))/g, "$$1,");
}

// Visitor count using localStorage
let count = localStorage.getItem('visitCount');
if (!count) {
  count = 1;
} else {
  count = parseInt(count) + 1;
}
localStorage.setItem('visitCount', count);

// Set counter
const countEl = document.getElementById('visitorCount');
if (countEl) {
  countEl.textContent = formatIndianNumber(count);
}

// Set last updated date
const today = new Date();
const dateEl = document.getElementById('lastUpdatedDate');
if (dateEl) {
  dateEl.textContent = today.toLocaleDateString('en-GB');
}
