import {cp,mkdir,rm,writeFile} from 'node:fs/promises';
await rm('dist',{recursive:true,force:true});
await mkdir('dist',{recursive:true});
await Promise.all([
  cp('index.html','dist/index.html'),
  cp('privacidade.html','dist/privacidade.html'),
  cp('assets','dist/assets',{recursive:true}),
]);
await writeFile('dist/.nojekyll', '');
console.log('Static build created in dist/');
