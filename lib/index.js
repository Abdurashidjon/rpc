const extractBuild = () => {
    const extractPath = path.resolve(this.cwd, opts.extract);
    mkdirp.sync(extractPath);
    const locales = confman.load(localesPath);
    utils.each(locales, (name, locale) => {
     locale.__name__ = name;
     const localeFile = path.normalize(`${extractPath}/${name}.js`);
     const localeCode = `window['${opts.key}']=${JSON.stringify(locale)};`;
     fs.writeFileSync(localeFile, localeCode);
    });
    return { _t: Date.now() };
   }