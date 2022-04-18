require('dotenv').config();

const getConfig = () => {
    const env_client_id = process.env.CLIENT_ID;
    const env_guild_id = process.env.GUILD_ID;
    const env_token = process.env.TOKEN;

    const configJson = JSON.parse('{"clientId": "' + env_client_id + '", "guildId": "' + env_guild_id + '", "token": "' + env_token + '"}');
    return configJson;
}

exports.getConfig = getConfig;