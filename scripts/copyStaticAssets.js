const shell = require('shelljs');

shell.mkdir('-p', 'dist/public');

shell.cp('-R', 'src/public/js', 'dist/public/js');
shell.cp('-R', 'src/public/images', 'dist/public/images');
shell.cp('-R', 'src/public/fonts', 'dist/public/fonts');
