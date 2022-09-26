const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://fullstack:${password}@cluster0.s4ehzoa.mongodb.net/noteApp?retryWrites=true&w=majority`

// schema defines a structure
const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
})

// model Note created based on the schema of noteSchema
const Note = mongoose.model('Note', noteSchema)

mongoose
  .connect(url)
  .then((result) => {
    Note.find({})
    .then(result => {
        result.forEach(note => {
            console.log(note)
        })
        console.log('note found!')
        return mongoose.connection.close()
    })
  })
  .catch((err) => console.log(err))