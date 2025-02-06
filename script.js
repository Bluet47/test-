function calculateCO2(distance) {
    const co2PerMile = 0.115;
    if (typeof distance !== "number" || distance <= 0 || isNaN(distance)) {
        throw new Error("Invalid distance. Please enter a positive number.");
    }
    return (distance * co2PerMile).toFixed(2);
}



// adding event liseners for the button to be interactive in the browser 
if (typeof document !== 'undefined') {
  document.getElementById('calculate-co2-btn').addEventListener('click', () => {
    try {
        const distance = parseFloat(document.getElementById('distance').value);
        
        const co2Value = calculateCO2(distance);  // Calculate CO2 emissions
        document.getElementById('co2-value').innerText = `${co2Value} kg`;
    } catch (error) {
        document.getElementById('co2-value').innerText = '';
        alert(error.message); // Show error message
    }
  });

  document.getElementById('reset-co2-btn').addEventListener('click', () => {
    document.getElementById('co2-form').reset(); // Reset form fields
    document.getElementById('co2-value').innerText = ''; // Reset the CO2 value
  });

module.exports = { calculateCO2 };
