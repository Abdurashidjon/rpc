// Ensure some dirs exist before we start
_.forEach([caDir, sshDir], dir => mkdirp.sync(dir));