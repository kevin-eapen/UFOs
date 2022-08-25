
// Import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Create function to build the table
function buildTable(data) {
    // Clear any existing data
    tbody.html(""); 
}

// Loop through each object in the data
// and append a row and cells for each value in the row
// Add forEach function
data.forEach((dataRow) => {
    // Add rows
    let row = tbody.append("tr");
    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    // Create function to add data
    Object.values(dataRow).forEach((val) => {
    // Set up cells to add data to
    let cell = row.append("td");
    // Add data to cells
    cell.text(val);
    });
});