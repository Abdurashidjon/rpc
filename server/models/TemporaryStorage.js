constructor() {
    this.tempPath = path.join(path.dirname(require.main.filename), '..', 'temp');
  
    mkdirp(this.tempPath);
   }