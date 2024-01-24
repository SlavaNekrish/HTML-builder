const fs = require('fs');
const path = require('path');
const absolutePath = path.join(__dirname, 'files-copy');

fs.mkdir(absolutePath, () => {
  fs.readdir(path.join(__dirname, 'files-copy'), (error, files) => {
    if (error) throw error;
    files.forEach((element) => {
      fs.unlink(path.join(__dirname, 'files-copy', element), (error) => {
        if (error) throw error;
      });
    });
  });
  fs.readdir(path.join(__dirname, 'files'), (error, files) => {
    if (error) throw error;
    files.forEach((element) => {
      fs.copyFile(
        path.join(__dirname, 'files', element),
        path.join(__dirname, 'files-copy', element),
        () => {},
      );
    });
  });
});
