import { SlashCommandBuilder } from '@discordjs/builders';

import { SlashCommandData } from '../../types/data';

const command: SlashCommandData = {
    builder: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Get the latency of the bot."),
    
    execute: async helper => {
        await helper.respond("Hello, world!");
    }
};

module.exports = command;