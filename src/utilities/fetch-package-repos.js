async function main() {
    mkdirp.sync(path.resolve(__dirname, '../../repositories/'));
   
    for (const [type, collection] of Object.entries(fetch)) {
     const result = await Promise.all(collection.map(async (item) => {
      if (typeof item === 'string') {
       return item;
      }
   
      const { organization, suffixes, hides } = item;
   
      const repos = await paginate(organization);
   
      return repos
       .map(repo => repo.full_name)
       .filter(name => suffixes.some(suffix => name.endsWith(suffix)))
       .filter(name => !hides.includes(name));
     }));
   
     const json = JSON.stringify(_.flatten(result), undefined, 2);
     const jsonPath = path.resolve(__dirname, `../../repositories/${type}.json`);
   
     fs.writeFile(jsonPath, json, (err) => {
      if (err) {
       throw err;
      }
     });
    }
   }