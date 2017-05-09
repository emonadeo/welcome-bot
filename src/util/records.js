const fs = require('fs');
const dir = 'servers.json';

function write(content) {
	fs.writeFileSync(dir, content);
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
	for(i = 0; i < servers.length; i++) {
		if(servers[i].id == id) {
			return servers[i];
		}
	}
	return undefined;
}

function hasRecord(id) {
	return getRecord(id) != undefined;
}

function setRecord(id, property, value) {
	//Modify
	var file = read();
	var servers = getArrayFromJSON(file);
	//Add guild to JSON
	if(hasRecord(id)) {
		for(i = 0; i < servers.length; i++) {
			if(servers[i].id == id) {
				var s = servers[i];
				s[property] = value;
				servers[i] = s;
				break;
			}
		}
	} else {
		servers.push({
			id: id
		});
		servers[servers.length - 1][property] = value;
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

//Initialize
fs.openSync(dir, 'a');

//MODULE
module.exports.add = function(id) {
	setRecord(id, 'join', 'Welcome {user}');
	setRecord(id, 'channel', 'general');
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

module.exports.put = function(id, property, value) {
	setRecord(id, property, value);
}
