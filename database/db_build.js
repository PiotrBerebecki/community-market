const fs = require('fs');
const path = require('path');

const build = fs.readFileSync(path.join(__dirname, 'db_build.sql'), 'utf8');
