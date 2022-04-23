# Image Search Bot for Discord

<div align="center">
    <a href="https://discord.com/api/oauth2/authorize?client_id=950561099453968394&permissions=0&scope=bot%20applications.commands">
        <img src="https://docs.google.com/drawings/d/e/2PACX-1vT8NvgkGLPm2xX0W5kTat9bEcm_m57PQrYqdG4c0J__qLye9fRU-EH4ixTwe3xnHSa6eFYT5YgWVup8/pub?w=356&h=75" alt="Invite Image Bot to your server!"/>
    </a>
</div>

## Team Members
SSW 345 - Team 2
- Serena Lee - [serenadia](https://github.com/serenadia)
- Mya Phu - [mxfu](https://github.com/mxfu)
- Tyler Seliber - [Tyler-Seliber](https://github.com/Tyler-Seliber)
- Mehrab Syed - [msyed5](https://github.com/msyed5)

## Design Milestone
See [DESIGN.md](DESIGN.md)

## Development Instructions
It is strongly recommended you make two applications/bots. One will be the actual bot used in production environments, while the other will be for development purposes. This allows you to safely develop and test your bot without impacting the bot that will be active in multiple other servers. In this case, please perform steps 1-4 below twice - once for the production bot and another for the development bot. 

If you only plan on hosting a development bot and don't intend on distributing it globally, you can only create one bot/application by following the steps below, and following the rest of the instructions for using the `dev` environment.
### Making a Discord Bot and Getting Credentials
1. Create a Dicord application and bot by following the official [Discord.js documentation](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot). Be sure to make a note of the bot's **`TOKEN`**.
2. Open the `OAuth2` tab and, under SCOPES, enable `bot` and `application.commands`.
3. Invite the bot to your server by following the official [documentation](https://discordjs.guide/preparations/adding-your-bot-to-servers.html). Use the same scopes selected in the previous step.
4. On the [Discord Developer Portal](https://discord.com/developers/), navigate to your application and from the "General Information" tab, copy your `APPLICATION ID`. This will be the `clientId` later.
5. Enable Developer Mode on Discord by:
    1. Open up the Discord app
    2. Click on the settings cog in the bottom left corner
    3. Go to Advanced
    4. Enable `Developer Mode`
    5. Exit settings
6. Right-click on your server from the left and click "Copy ID." This will be the `guildId` later.

### Getting set up
1. Clone the repository
2. Create a new file called  `.env` in the root of the repository and enter the following from the Discord Developer Portal:
    ```
    CLIENT_ID=<clientId>
    GUILD_ID=<guildId>
    TOkEN=<token>
    ```
    _Note: these keys should be from your development bot/application and server. Your production keys should be added as repository secrets by following the steps in [**Deploying your Commands**](#deploying-your-commands) below._
3. If it is not already there, create a new file called `.gitignore` and include:
      ```
      node_modules/**
      .env
      ```
4. Run `npm install`

### Adding/Editing Commands
Commands can be created and edited in the `commands` folder using the appropriate command file. See [ping.js](commands-dev/ping.js) as an example.

The `commands` folder is meant to include only commands meant for production. To test and develop new commands, create them in the `commands-dev` folder instead. Once they are ready to be pushed to production, they should be moved to the `commands` folder. Any command files that remain in `commands-dev` will not be pushed to production.

Any time new commands are created, they need to be registered. To do so, run `npm run commands`. This will deploy the commands to your development server only. See [**Deploying your Commands**](#deploying-your-commands) below for more information.

### Starting the bot
To run the bot, run the command `npm start`. This will run the bot in a production state, meaning it will not deploy your commands for you. To deploy your global commands for production, see [**Deploying your Commands**](#deploying-your-commands) below for more information.

To start the development bot, use `npm run dev`. This will start the bot locally on your machine and also automatically deploy the commands to your development server.

To stop the bot, press `CTRL-C`

### Deploying your Commands
When you modify the name or description of your commands, or add/remove commands, the changes may not be reflected immediately after starting the bot. To get around this, you can use a GitHub Action to automatically deploy your commands when merging to `main`, or manually running a script to deploy the commands.

#### Automatically Deploy Commands with GitHub Actions
The [deploy-commands.yml](.github/workflows/deploy-commands.yml) file contains the code necessary for automatically deploying your bot's commands everytime a commit is pushed to `main` or a PR is merged. To configure this, you will need to set up [Repository Secrets](https://github.com/Azure/actions-workflow-samples/blob/master/assets/create-secrets-for-GitHub-workflows.md). To do so, navigate to your repository's Settings and go to Secrets > Actions. Click "New Repository Secret" to create a new secret. You will need to create the same secrets that you entered in your `.env` file: `CLIENT_ID`, `GUILD_ID`, and `TOKEN`. _Make sure that you are using the keys for your production bot/application._

To disable this functionality, you can delete the [deploy-commands.yml](.github/workflows/deploy-commands.yml) file and commit the change to `main`. Otherwise, this can remain and you can still deploy commands manually (see below) without causing any conflicts.

#### Manually Deploy Commands
If you are developing locally and would like to test commands without committing them, you can do so by running `npm run commands` command from the root of your directory. A confirmation message will appear in the console. If you use `npm run dev` the development commands are automatically deployed and you do not need to run this command.

If you choose to not deploy your production commands automatically, you can manually do so by running `node deploy-commands.js prod`. This will globally deploy your bots production commands from the `commands` folder across Discord. It may take up to an hour for the updates to be reflected due to [Discord caching global commands](https://canary.discord.com/developers/docs/interactions/application-commands#making-a-global-command).
