const writeFile = (writePath, content, cb) => {
    mkdir(getDirName(writePath), err => {
     if (err) {
      return cb(err);
     }
     fs.writeFile(writePath, content, 'utf8', cb);
     return 0;
    });
   }