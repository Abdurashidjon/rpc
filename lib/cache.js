constructor({log = new Log(), cacheDir = path.join(os.tmpdir(), '.cache')} = {}) {
    // Get the nodecache opts
    super();
    // Set some things
    this.log = log;
    this.cacheDir = cacheDir;
    // Ensure the cache dir exists
    mkdirp.sync(this.cacheDir);
   }