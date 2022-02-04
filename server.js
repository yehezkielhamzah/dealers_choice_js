const express = require('express')
const app = express();

const bangerz = [
  {id: 1, artist: 'Ye', songTitle: 'Praise God' },
  {id: 2, artist: 'Drake', songTitle: 'God\'s Plan' },
  {id: 3, artist: '21 Savage', songTitle: 'monster' }
]

app.get('/:id', (req, res) => {
  const rap = x.find(x => x.id === req.params.id*1);
  const html = `<title>Rap Bangerz</title><div><a href='/'>${x.songTitle}</a></div>`
})

app.get('/', (req, res) => {
  const html = bangerz.map( x => {
    return `<title>Rap Bangerz</title><div><a href='${x.id}'>${x.songTitle} by ${x.artist}</a></div>`
  }).join('')
  res.send(html)
})

const port = process.env.port || 3000

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})

