// Safe Indian number formatting

  fetch('counter.php')
    .then(response => response.text())
    .then(count => {
      document.getElementById('visitorCount').textContent = formatIndianNumber(count);
    });

  function formatIndianNumber(x) {
    x = x.toString();
    let lastThree = x.substring(x.length - 3);
    let otherNumbers = x.substring(0, x.length - 3);
    if (otherNumbers !== '') {
      lastThree = ',' + lastThree;
    }
    return otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
  }


// Local visitor count (for demo)
let count = localStorage.getItem('visitCount');
if (!count) {
  count = 1;
} else {
  count = parseInt(count) + 1;
}
localStorage.setItem('visitCount', count);

// Display count
const countEl = document.getElementById('visitorCount');
if (countEl) {
  countEl.textContent = formatIndianNumber(count);
}

// Set today's date
const today = new Date();
const dateEl = document.getElementById('lastUpdatedDate');
if (dateEl) {
  dateEl.textContent = today.toLocaleDateString('en-GB');
}

