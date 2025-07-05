// Indian-style comma formatting
function formatIndianNumber(x) {
  x = x.toString();
  let lastThree = x.substring(x.length - 3);
  let otherNumbers = x.substring(0, x.length - 3);
  if (otherNumbers !== '') {
    lastThree = ',' + lastThree;
  }
  return otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
}

// Fetch visitor count from PHP file
fetch("counter.php")
  .then(response => response.text())
  .then(count => {
    document.getElementById("visitorCount").textContent = formatIndianNumber(count);
  })
  .catch(() => {
    document.getElementById("visitorCount").textContent = "Unavailable";
  });

// Display today's date as site last updated
const today = new Date();
document.getElementById('lastUpdatedDate').textContent = today.toLocaleDateString('en-GB');
