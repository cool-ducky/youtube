const express = require('express')
const { verifyKeyMiddleware } = require('discord-interactions')
const app = express()

app.post('/ping', verifyKeyMiddleware(process.env.public_key), (req, res) => {
  const interaction = req.body
  if (interaction.type == 4) {
    const youtubeAC = require('./youtubeAC')
    youtubeAC(interaction, res)
  }
  if(interaction.type == 2) {
    const sendResults = require('./sendResults')
    sendResults(interaction, res)
  }
  if(interaction.type == 3) {
    const selectMenu = require('./selectMenu')
    selectMenu(interaction, res)
  }
})

app.listen()