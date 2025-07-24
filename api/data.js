// api/data.js
import path from 'path';
import fs from 'fs';

export default function handler(request, response) {
  // Find the absolute path to the db.json file
  const filePath = path.resolve('./db.json');
  
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const jsonData = JSON.parse(fileContents);
    
    // Send the entire JSON object back to the user
    response.status(200).json(jsonData);
  } catch (error) {
    response.status(500).json({ error: "Failed to read or parse db.json" });
  }
}
