document.getElementById('trip-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const destination = document.getElementById('destination').value;
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;
    const preferences = document.getElementById('preferences').value;
    
    alert(`Trip planned to ${destination} from ${startDate} to ${endDate}.\nPreferences: ${preferences}`);
});
