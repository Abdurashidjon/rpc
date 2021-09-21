mkdirp.sync(process.env.BUILDPATH);
   mkdirp.sync(path.join(process.env.BUILDPATH, "zero-builds"));
   fs.writeFileSync(
    path.join(process.env.BUILDPATH, "zero-builds", "build-info.json"),
   mkdirp.sync(path.join(process.env.BUILDPATH, "zero-builds", "_config"));

   