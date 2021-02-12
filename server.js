//import modules
const express = require("express");
const next = require("next");
require("dotenv").config();
const bodyParser = require("body-parser");
const Schema = require('./models/cardSchema')

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

// MongoDB
const mongoose = require("mongoose");
const { default: axios } = require("axios");
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  // we're connected!
  console.log("Connected to MongoDB");
});

app.prepare().then(() => {
  const server = express();

  server.use(bodyParser.json());
  server.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );
  //GET
  server.get("/", (req, res) => {
    return app.render(req, res, "/", req.query);
  });

  server.get("/getRepoInfo/:username/:repo", async (req, res) => {
    const {username, repo} = req.params;
    
    axios
      .get(("https://api.github.com/repos/" + username + "/" + repo), {
          headers: {
            Authorization: "token " + process.env.TOKEN
          }
      }).then((response) => {
        res.status(200);
        const data = response.data;
        res.json({data})
      }).catch((err) => {
        console.log(err);
        res.status(404);
        res.json({undefined})
      })

  });

  server.get("/api/getCard/:id", async (req, res) => {
    try {
      // search MongoDB for id
      const card = await db
        .collection("githubcards")
        .find({ id: req.params.id })
        .toArray()

      var githubCard;

      // if does not exist
      if (card[0] == null) {
        console.log("card does not exist")
        res.status(404);
      } else {
        githubCard = await Schema.findById(card);
      }

      res.json({ githubCard })
      res.status(200);

    } catch(err) {
      console.log(err);
      res.status(500);
    }
  });

  server.get("*", (req, res) => {
    handle(req, res);
  });

  server.post('/createCard', (req, res) => {
    try {
      // get data from generator
      console.log(req.body)
      const {id, username, repo, color, icon} = req.body;

      // create new Schema
      var githubCard = new Schema({
        id: id,
        username: username,
        repo: repo,
        color: color,
        icon: icon
      });
      console.log("githubCard was created")

      // push to mongoDB
      githubCard.save(function (err, newCard) {
        if (err) {
          return console.error(err);
        }
        console.log(newCard);
        console.log("githubCard was saved to MongoDB.")
      })
      res.status(200);
    } catch(err) {
      console.log(err);
      res.status(500);
    }
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`Server listening on ${port}`);
  });
});
