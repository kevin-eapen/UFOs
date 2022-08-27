
// Import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Create function to build the table
function buildTable(data) {
    // Clear any existing data
    tbody.html(""); 

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
}
// Create function to filter table by user input date
function handleClick() {
    // Use d3 lib to find html datetime tag and get date value from filter
    let date = d3.select("#datetime").property("value");
    // Set default filter (original table data)
    let filteredData = tableData;

    // Check to see if a date was entered and filter the data using 
    // that date
    if (date) {
        // Apply 'filter' to the table data to only keep the rows where 
        // the 'datetime' value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will just be
    // the original tableData
    buildTable(filteredData);
};

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);

