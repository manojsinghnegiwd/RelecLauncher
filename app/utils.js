const fs = require('fs');
const sys = require('sys')
const exec = require('child_process').exec;
const iconutil = require('iconutil');

function puts(error, stdout, stderr) { sys.puts(stdout) }

export function getApplications () {
	return new Promise ((res, rej) => {
		fs.readdir('/Applications', (err, data) => {

			if(err) {
				rej(err)
			}

			let Applications = data.filter(app => app.indexOf('.app') > -1 ? true : false).map(app => {
				return {
					name: app
				}
			});

			iconutil.toIconset(`/Applications/Calculator.app/Contents/Resources/AppIcon.icns`, function(err, icons) {
			   var base64data = new Buffer(icons['icon_32x32.png']).toString('base64');
			   console.log(base64data)
			});

			res(Applications)
		})
	})
}

export function openApp (application) {

	exec(`open /Applications/${application.name}` , puts);

}