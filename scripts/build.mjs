import {cp,mkdir,rm,writeFile} from 'node:fs/promises';
await rm('dist',{recursive:true,force:true});
await mkdir('dist/src',{recursive:true});
await Promise.all([cp('index.html','dist/index.html'),cp('src/main.js','dist/src/main.js'),cp('src/styles.css','dist/src/styles.css')]);
await writeFile('dist/.nojekyll', '');
console.log('Static build created in dist/');
