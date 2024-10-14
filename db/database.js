const mysql = require('mysql2');
require('dotenv').config(); // Load environment variables

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

// Function to create the patient table
function createPatientTable() {
    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS patient (
            id INT AUTO_INCREMENT PRIMARY KEY,
            first_name VARCHAR(50),
            last_name VARCHAR(50),
            dob DATE,
            address TEXT,
            phone_number VARCHAR(15),
            email VARCHAR(100),
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ) ENGINE=InnoDB;
    `;
    
    connection.query(createTableQuery, (err, results) => {
        if (err) {
            console.error('Error creating table: ', err);
            return;
        }
        console.log('Patient table created or already exists');
    });
}

// Call the function to create the table
createPatientTable();

// Export the connection if needed in other files
module.exports = connection;
