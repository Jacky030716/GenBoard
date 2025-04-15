// This is to convert the summary data to a format that can be used by the chart.js library
const formatOnboardingData = (data) => {
  const statusColors = {
    Pass: "#5BF16F",
    Fail: "#FF5B5B",
    "In progress": "#FFC107",
  };

  // Count occurrences of each status
  const statusCounts = data.reduce((acc, item) => {
    acc[item.status] = (acc[item.status] || 0) + 1;
    return acc;
  }, {});

  // Map to the desired format
  return Object.entries(statusCounts).map(([status, count]) => ({
    name: status,
    value: count,
    color: statusColors[status] || "#000000", // Default color if status is not in the map
  }));
};

module.exports = {
  formatOnboardingData,
};
