# IMAGE-BOT

## Team Members
SSW 345 - Team 2
- Serena Lee - [serenadia](https://github.com/serenadia)
- Mya Phu - [mxfu](https://github.com/mxfu)
- Tyler Seliber - [Tyler-Seliber](https://github.com/Tyler-Seliber)
- Mehrab Syed - [msyed5](https://github.com/msyed5)

## Design Milestone
See [DESIGN.md](DESIGN.md)

## Development Instructions
### Getting set up
1. Clone the repository
2. Create a new file called  `config.json` and enter the following:
    ```json
    {
        "clientId": "put-your-app-ID-here",
        "guildId": "put-your-server-ID-here",
        "token": "put-your-bot-token-here"
    }
    ```
3. If it is not already there, create a new file called `.gitignore` and include:
      ```
      config.json
      node_modules/**
      ```
4. Run `npm install`

### Adding/Editing Commands
Commands can be created and edited in the `commands` folder using the appropriate command file. See [ping.js](commands/ping.js) as an example.

Any time new commands are created, they need to be registered. To do so, run `npm run commands`

### Starting the bot
To run the bot, run the command `npm start`. To stop the bot, press `CTRL-C`

