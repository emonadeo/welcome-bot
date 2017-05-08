const fs = require('fs');
const dir = 'servers.json';

function write(content) {
	fs.writeFile(dir, content, function(err) {
		if (err) throw err;
	});
}

function read() {
	return fs.readFileSync(dir, 'utf-8');
}

function getArrayFromJSON(file) {
	if(file != '') {
		return JSON.parse(file);
	} else {
		return [];
	}
}

function getRecord(id) {
	var file = read();
	var servers = getArrayFromJSON(file);
	return servers.find(function(element) {
		return element.id == id;
	});
}

function hasRecord(id) {
	return getRecord(id) != undefined;
}

function setRecord(id, msg, role, channel) {
	//Create File if it doesn't exist
	fs.open(dir, 'w', function(err, data) {
		if (err) throw err;
	});
	//Modify
	var file = read();
	var servers = getArrayFromJSON(file);
	//Add guild to JSON
	if(hasRecord(id)) {
		for(i = 0; i < servers.length; i++) {
			if(servers[i].id == id) {
				servers[i] = {
					id: id,
					msg: msg,
					role: role,
					channel: channel
				};
				break;
			}
		}
	} else {
		servers.push({
			id: id,
			msg: msg,
			role: role,
			channel: channel
		});
	}
	//Save JSON to file
	write(JSON.stringify(servers));
}

function delRecord(id) {
	var file = read();
	var servers = getArrayFromJSON(file);
	for(i = 0; i < servers.length; i++) {
		if(servers[i].id == id) {
			servers.splice(i, 1);
		}
	}
	write(JSON.stringify(servers));
}

//MODULE
module.exports.add = function(id) {
	setRecord(id, 'Welcome {user}', undefined, 'general');
};

module.exports.remove = function(id) {
	delRecord(id);
}

module.exports.get = function(id) {
	return getRecord(id);
}

module.exports.has = function(id) {
	return hasRecord(id);
}
