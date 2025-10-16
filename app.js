import express from 'express'

const app = express()

const port = "3500"

app.get("/", (req, res) => {
  res.send('This is a test app for render')
})

app.listen(port, () => console.log(`App listening on ${port}`))



