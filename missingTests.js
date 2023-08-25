import fs from 'fs';
import path from 'path';

const componentDir = 'src';
const testDir = '__tests__';

const excludeDirs = ['mocks', 'enums', 'assets', 'icons'];

const components = [];
const tests = [];

function readDir(directoryPath, array) {
  for (const file of fs.readdirSync(directoryPath, { withFileTypes: true })) {
    const filePath = path.join(directoryPath, file.name);

    if (file.isFile()) {
      if (file.name.endsWith('.tsx')) {
        array.push(file.name.substring(0, file.name.indexOf('.')));
      }
    } else if (file.isDirectory() && !excludeDirs.includes(file.name)) {
      readDir(filePath, array);
    }
  }
}

readDir(componentDir, components);
readDir(testDir, tests);

console.log(components.filter((x) => !tests.includes(x)).length); //511
console.log(components.filter((x) => !tests.includes(x)));
