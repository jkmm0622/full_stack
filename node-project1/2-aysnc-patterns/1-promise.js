const { readFile } = require('fs');

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }

        });
    });
}

getText('./content/subfolder/first.txt')
.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});
