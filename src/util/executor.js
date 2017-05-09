const records = require('./records');

module.exports.on = function(msg) {
	var content = msg.content.toLowerCase();
	if(content.startsWith('!')) {
		var args = content.split(' ');
		var cmd = content.substr(1, args[0].length - 1);
		if(cmd == 'wbot') {
			if(msg.member.hasPermission('MANAGE_GUILD')) {
				//Commands from here
				if(args[1] == 'join') {
					var str_join = '';
					for (i = 2; i < args.length; i++) {
						str_join += args[i];
						if(i < args.length - 1) {
							str_join += ' ';
						}
					}
					records.put(msg.member.guild.id, 'join', str_join);
					return;
				}
				if(args[1] == 'role') {
					records.put(msg.member.guild.id, 'role', args[2]);
					return;
				}
				if(args[1] == 'channel') {
					records.put(msg.member.guild.id, 'channel', args[2]);
					return;
				}
				msg.reply('No such command');
				return;
			}
			msg.reply('No permission');
			return;
		}
	}
}
