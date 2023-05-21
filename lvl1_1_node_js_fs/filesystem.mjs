import { writeFile } from 'node:fs/promises';
import { stat } from 'node:fs';
import { mkdir } from 'node:fs/promises';
import { access } from 'node:fs';

try {
    const data = "Hello World!"
    const promise = writeFile('blog1.txt', data)

    await promise
}
catch (err) {
    console.error(err)
}
try {
    const data = "Hey"
    const promise = writeFile('blog2.txt', data)

    await promise
}
catch (err) {
    console.error(err)
}

// stat('./assets', (err, stats) => {
//     if (err) {
//         if (err.code === 'ENOENT') {
//             console.log('Der Ordner existiert nicht.');
//         } else {
//             console.error(err);
//         }
//     } else {
//         if (stats.isDirectory()) {
//             console.log('Der Ordner existiert.');
//         } else {
//             console.log('Ein Ordner mit diesem Namen existiert, aber es ist kein Verzeichnis.');
//         }
//     }
// });

const pathsToCheck = ['./assets'];

for (let i = 0; i < pathsToCheck.length; i++) {
    stat(pathsToCheck[i], (err, stats) => {
        if (err) {
            console.log("Not found");
        } else if (!stats.isDirectory()) {
            console.log("Found file");
        } else {
            console.log("Found directory");
        }
    });
}


try {
    const projectFolder = new URL('./assets/', import.meta.url);
    const createDir = await mkdir(projectFolder, { recursive: true });

    console.log(`created ${createDir}`);
} catch (err) {
    console.error(err.message);
}

access('delete.txt', fs.constants.F_OK, (err) => {
    if (err) {
        console.error('Die Datei existiert nicht');
        return;
    }
    console.log('Die Datei existiert');
});