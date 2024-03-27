const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { create } = require('ipc');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(express.static('static'));

app.post('/convert', upload.single('file'), (req, res) => {
  const filePath = req.file.path;
  const zipPath = filePath.replace('.json', '.zip');

  const input = fs.createReadStream(filePath);
  const output = fs.createWriteStream(zipPath);

  constarchive.pipe(output, (err) => {
    if (err) {
      console.error('Error piping archive:', err);
      return;
    }
    output.close();
    console.log('Zip created:', zipPath);
    res.json({ success: true, message: 'Zip created successfully' });
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
