// JavaScript to set today's date in DD/MM/YYYY format
const lastUpdated = new Date();
const formattedDate = lastUpdated.toLocaleDateString('en-GB'); // e.g., "05/07/2025"
document.getElementById('lastUpdatedDate').textContent = formattedDate;
