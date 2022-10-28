import { PackageURL } from 'packageurl-js';


const pkg1 = new PackageURL(
  'npm',
  '@babel/runtime-corejs3',
  'babel',
  '7.12.1',
  undefined,
  undefined
);
//npm		@typescript-eslint/type-utils
const pkg2 = new PackageURL(
  'go',
  'github.com/d2g',
  'dhcp4client',
  '2.5.5',
  undefined,
  undefined
);

console.log(`This should have @ instead of %40 \n${pkg1.toString()}\n`);
console.log(`This should have golang instead of go \n${pkg2.toString()}\n`);


