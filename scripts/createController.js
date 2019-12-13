const fs = require('fs');
const shelljs = require('shelljs');
const chalk = require('chalk');
const args = require('minimist')(process.argv.slice(2));
const alias = require('./lib/ArgAlias');

const GLOBAL_ROUTER = `${__dirname}/../src/routes.ts`;
const CONTROLLER_FOLDER = `${__dirname}/../src/controllers`;
const ENCODING = 'utf8';

let dryRun = false;

alias(args, 'n', 'name');
alias(args, 'r', 'route');

if (args.name === undefined || args.route === undefined) {
    console.error(chalk.red(`${chalk.yellow('[USAGE]')} yarn tex:controller -name controllerName -route "/controller" [--dry]`));
    process.exit(1);
}

if (args.dry !== undefined) {
    dryRun = true
    console.log(chalk.yellow(`Running dry`));
}

const name = args.name;
const route = args.route;

if (!dryRun)
    shelljs.cp(`${__dirname}/resources/blankcontroller.ts`, `${CONTROLLER_FOLDER}/${name}.ts`);

fs.readFile(GLOBAL_ROUTER, ENCODING, (err, data) => {
    if (err) throw err;
    const hasCarriageReturns = data.search(/\r/) > 0;
    data = data.replace(/\r/gm, '');
    const lines = data.split('\n');
    let newLines = [];
    let lastLine = null;

    lines.forEach(line => {
        if (line === '' && lastLine !== '}') {
            newLines.push(`import ${name}Controller from './controllers/${name}';`);
        } else if (line === '}') {
            newLines.push(`    app.use('${route}', ${name}Controller);`);
        }
        newLines.push(line);
        lastLine = line;
    });
    
    const finalLines = newLines.join(hasCarriageReturns ? '\r\n' : '\n');
    
    if (!dryRun)
        fs.writeFileSync(GLOBAL_ROUTER, finalLines);
    else 
        console.log(finalLines);
    console.log(chalk.green(`Controller '${name}' created !`));
})
