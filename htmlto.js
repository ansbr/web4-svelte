import fs from 'fs'
let file = fs.readFileSync('./dist/index.html', {encoding:'utf8', flag:'r'})
file = file.replaceAll('`', '\\`')
fs.writeFileSync('./dist/index.ts', `export const html = \`${file}\``);
