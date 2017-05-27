import fs from 'fs';
var sys = require('sys')
var exec = require('child_process').exec;

function puts(error, stdout, stderr) { sys.puts(stdout) }

export function getApplications () {
	return new Promise ((res, rej) => {
		fs.readdir('/Applications', (err, data) => {

			if(err) {
				rej(err)
			}

			let Applications = data.filter(app => app.indexOf('.app') > -1 ? true : false);

			res(Applications)
		})
	})
}

export function openApp (application) {

	exec(`open /Applications/${application}` , puts);

}