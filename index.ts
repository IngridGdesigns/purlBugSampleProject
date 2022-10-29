import { PackageURL } from 'packageurl-js';

const pkg1 = new PackageURL(
  'npm',
  '@babel/runtime-corejs3',
  'babel',
  '7.12.1',
  undefined,
  undefined
);

const pkg2 = new PackageURL(
  'pypi',
  'PyMySQL',
  'pymysql',
  '0.9.1',
  undefined,
  undefined
);

const pkg3 = new PackageURL(
  'go',
  'github.com',
  'hashicorp/go-getter',
  '2.0.2',
  undefined,
  undefined
);

const pkg4 = new PackageURL(
  'pypi',
  'Appium-Python-Client',
  ' ',
  '2.2.0',
  undefined,
  undefined
);

console.log(`This should have @ instead of %40 \n${pkg1.toString()}\n`);
console.log(`checking if name was forced to lowercase \n${pkg2.toString()}\n`);
console.log(`This should have '/' instead of %2F\n${pkg3.toString()}\n`);

const observation =
  'This errors if I leave an empty string, had to add whitespace to get %20\n';
console.log(`${observation}${pkg4.toString()}\n`); // more of an observation
