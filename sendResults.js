const yt = require('youtube-search-without-api-key');
module.exports = async (interaction, res) => {
  const vid = interaction.data.options[0].value
  const results = await yt.search(vid)
  let options = []
  results.forEach((result, index) => {
    if (options.length != 25) {
      let option = {
        label: result.title,
        value: index.toString()
      }
      options.push(option)
    }
  })
  res.send({
    type: 4,
    data: {
      content: results[0].url,
      components: [
        {
          type: 1,
          components: [
            {
              type: 3,
              custom_id: vid,
              options
            }
          ]
        }
      ]
    }
  })
}