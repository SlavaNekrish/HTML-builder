const path = require('path');
const fs = require('fs');
const absolutePath = path.join(__dirname, 'secret-folder');

fs.readdir(absolutePath, { withFileTypes: true }, (error, files) => {
  if (error) throw error;
  files.forEach((element) => {
    if (element.isFile()) {
      fs.stat(
        path.join(__dirname, 'secret-folder', element.name),
        (error, stats) => {
          console.log(
            path.basename(element.name, path.extname(element.name)) +
              ' - ' +
              path.extname(element.name).substring(1) +
              ' - ' +
              (stats.size / 1024).toFixed(2) +
              'kB',
          );
        },
      );
    }
  });
});
