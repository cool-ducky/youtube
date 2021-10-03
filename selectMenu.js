const yt = require('youtube-search-without-api-key');
module.exports = async(interaction, res) => {
  const {custom_id, values} = interaction.data
  const results = await yt.search(custom_id)
  const index = +values[0]
  res.send({
    type: 7,
    data: {
      content: results[index].url
    }
  })
}