// Format number with Indian-style commas
function formatIndianNumber(num) {
  const numStr = num.toString();
  const lastThree = numStr.slice(-3);
  const rest = numStr.slice(0, -3);

  if (!rest) return lastThree;

  return rest.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + "," + lastThree;
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
