// If the proxy is on lets immediately dump the default certs and all of that
app.events.on('pre-init', () => {
    lando.log.verbose('proxy is ON.');
    lando.log.verbose('Setting the default proxy certificate %s', lando.config.proxyDefaultCert);
    // Create needed directories
    mkdirp.sync(lando.config.proxyConfigDir);
    const files = [{
     path: path.join(lando.config.proxyConfigDir, 'default-certs.yaml'),
     data: {tls: {stores: {default: {defaultCertificate: {
      certFile: lando.config.proxyDefaultCert,
      keyFile: lando.config.proxyDefaultKey,
     }}}}},
    }];
 
    // Finally add in custom config if we have it
    if (!_.isEmpty(lando.config.proxyCustom)) {
     lando.log.verbose('adding custom proxy config');
     lando.log.debug('custom proxy config', lando.config.proxyCustom);
     files.push({
      path: path.join(lando.config.proxyConfigDir, 'user-custom.yaml'),
      data: lando.config.proxyCustom,
     });
    }
 
    // Remove and redump all the files
    _.forEach(files, file => lando.yaml.dump(file.path, file.data));
   });