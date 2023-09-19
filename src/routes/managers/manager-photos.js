const express = require('express');
const path = require('path');
const app = express();

// Define a route for manager photos
app.get('static/managers', (req, res) => {
  const managerName = req.params.managerName;
  const photoPath = path.join(__dirname, 'static/managers', `${managerName}.png`);

  // Check if the photo file exists
  // If it exists, send the photo as a response
  // If it doesn't exist, you can send a default image or an error message
  res.sendFile(photoPath, (err) => {
    if (err) {
      res.status(404).send('Photo not found');
    }
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
