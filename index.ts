import { PackageURL } from 'packageurl-js';

const pkg = new PackageURL(
  'maven',
  'org.springframework.integration',
  'spring-integration-jms',
  '5.5.5',
  undefined,
  undefined
);

console.log(pkg.toString());