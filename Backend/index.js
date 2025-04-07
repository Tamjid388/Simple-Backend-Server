
import express from "express"
import cors from 'cors';
import 'dotenv/config'
const app = express()
// Enable CORS for all routes
app.use(cors());
const port =process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
          id: 1,
          title: "Atom Joke",
          content: "Why don't scientists trust atoms? Because they make up everything!"
        },
        {
          id: 2,
          title: "Fake Spaghetti",
          content: "What do you call fake spaghetti? An impasta."
        },
        {
          id: 3,
          title: "Scarecrow Award",
          content: "Why did the scarecrow win an award? Because he was outstanding in his field!"
        },
        {
          id: 4,
          title: "Skeleton Fight",
          content: "Why don’t skeletons fight each other? They don’t have the guts."
        },
        {
          id: 5,
          title: "Construction Joke",
          content: "I would tell you a joke about construction, but I'm still working on it."
        }
      ];
      res.send(jokes)
})

app.listen(port, () => {
  console.log(`Tamjid Rajin's server is running on port ${port}`)
})