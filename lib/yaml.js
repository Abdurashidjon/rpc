dump(file, data = {}) {
    // Make sure we have a place to store these files
    mkdirp.sync(path.dirname(file));
    // Remove any properties that might be bad and dump
    data = JSON.parse(JSON.stringify(data));
    // And dump
    fs.writeFileSync(file, yaml.safeDump(data));
    // Log and return filename
    return file;
   }