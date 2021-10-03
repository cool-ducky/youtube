const yt = require('youtube-search-without-api-key');
module.exports = async (interaction, res) => {
  const query = interaction.data.options[0].value
  const data = await yt.search(query)
  let choices = []
  for(const result of data) {
    if(choices.length == 5) break;
    let choice = {
      name: result.title,
      value: result.title
    }
    choices.push(choice)
  }
  res.send({
    type: 8,
    data: {
      choices
    }
  })
}
