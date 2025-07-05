// Format number with Indian-style commas
function formatIndianNumber(num) {
  return num.toString().replace(/\B(?=(\d{2})+(?!\d{3}))/, ",").replace(/(\d+)(?=(\d{3})+(?!\d))/g, "$1,");
}

// Demo counter using localStorage
let count = localStorage.getItem('visitCount');
if (!count) {
  count = 1;
} else {
  count = parseInt(count) + 1;
}
localStorage.setItem('visitCount', count);

// Display counter
document.getElementById('visitorCount').textContent = formatIndianNumber(count);

// Set today's date as last updated
const today = new Date();
document.getElementById('lastUpdatedDate').textContent = today.toLocaleDateString('en-GB');
