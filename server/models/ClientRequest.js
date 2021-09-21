// TODO: Move this to util, doesn't belong here
createDirectory(options) {
    if (options.path) {
     mkdirp(options.path, error => {
      if (error) {
       console.trace('Error creating directory.', error);
      }
     });
    }
   }