const glob = require('glob');
 
glob('*.js', (err, files) => {
    if (err) {
        console.log(err);
    } else {
        // a list of paths to javaScript files in the current working directory
        console.log(files);
    }
});