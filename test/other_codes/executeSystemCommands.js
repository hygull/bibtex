const execFile = require("child_process").execFile;

// command: string, params: array, (error, stdout, stderr) => {}: function
const child = execFile('node', ['--version'], function(error, stdout, stderr){
	if(error){
		console.log('Error: ' + error);
	} else {
		// Standard output
		if(stdout)
			console.log("Statndard output: ", stdout);
		
		console.log(stderr === null); // false
		console.log(stderr === undefined); // false 
		console.log(stderr === ""); // true

		// Standard error
		if(stderr)
			console.log("Standard error: ", stderr);
	};
});