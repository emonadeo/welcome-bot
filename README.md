> This Project is discontinued. Little did I know when I created that bot and it means I did a few crucial mistakes. While the bot itself works completely fine, it's easily hackable and thus not recommended to install on a server. Discord also now has an official feature to greet new members, so half of the function of this bot got outdated.

## About
**Welcome Bot** is aimed at encouraging people to get to know each other better and more quickly but also serves as some form of Butler and lets certain tasks be delegatable.
### So, what gives?
The first impression is always the most important one. Nobody likes to join a Discord Server and gets ignored right away, which is where **Welcome Bot** comes in handy. It automatically greets the new Discord member with a configurable message. Not only is this a friendly gesture but also informs everyone of the new member so they don't miss out on him.
### But wait - there is more!
One thing some people miss is the ability to edit the `@everyone` group. **Welcome Bot** works around that problem by automatically assigning a Role of your choice when a User joins the party.

## Getting Started
Setting it up is simple and straight forward. Just click the very obvious button.
### Make it more personal
As of right now the Configuration works via Commands in Discord. However we are planning to shift that to a more simple Web-Interface.
You can change the Join-Message whenever you like.
Type the command `!wbot join 'Your message'` in any text-channel to change it. To address the user just type `{user}` anywhere in your message. It automatically replaces it in practice. Keep in mind, you either have to have the `Manage Server` permission or be the owner of the Discord server.
Same goes for Auto-Role. By default no Auto-Role is assigned.
Change it with `!wbot role 'Role'`

## Configure
Here is a better overview of currently all available commands. The usage is `!wbot 'command'`

Command | Description | Variables
------- | ----------- | ---------
`join 'text'` |	Modify the Join-Message for new members	| {user}: Used to mention the new User
`role ['role']` |	Change the Auto-Role, new members immediatly receive on joining. If no role is defined, Auto-Role will be disabled |
