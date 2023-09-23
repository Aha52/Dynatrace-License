function calculateUsageFromSelector(selectorText) {
    // Split the string by '\'
    const [consumed, total] = selectorText.split('\\');
  
    // Remove the last character (assuming it's a unit)
    const consumedValue = parseFloat(consumed.slice(0, -1));
    const totalValue = parseFloat(total.slice(0, -1));
  
    // Check if the conversion to floats was successful
    if (isNaN(consumedValue) || isNaN(totalValue)) {
      return "Invalid input. Please provide valid numeric values with units.";
    }
  
    // Calculate the percentage usage
    const percentage = (consumedValue / totalValue) * 100;
  
    return percentage.toFixed(2) + "%";
  }
  
  // Example usage:
  const selectorText = "3M\\10M";
  const usagePercentage = calculateUsageFromSelector(selectorText);
  console.log("Usage Percentage:", usagePercentage);
  