// api/index.js
const path = require('path');
const fs = require('fs');

module.exports = (req, res) => {
  // Construct the full path to the db.json file
  // It goes up one level from 'api' to the project root.
  const dbPath = path.join(__dirname, '..', 'db.json');

  try {
    const data = fs.readFileSync(dbPath, 'utf8');
    const jsonData = JSON.parse(data);

    // Check which resource is being requested (e.g., /chapters)
    // req.url will be something like '/chapters' or '/proverbs'
    const resourceName = req.url.slice(1); // Remove the leading '/'

    if (jsonData[resourceName]) {
      // If the resource exists in our db.json, send it back
      res.status(200).json(jsonData[resourceName]);
    } else {
      // Otherwise, send a 404
      res.status(404).json({ error: `Resource '${resourceName}' not found.` });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to read or parse db.json' });
  }
};
