const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

app.use(cors());
app.use(express.json());

const uri = "mongodb://localhost:27017/";

// const uri = "mongodb+srv://abdurrazzak118348:3nm4JsXzqHos8ihy@cluster0.kqp32.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    // Connect to the "insertDB" database and access its "haiku" collection
    const database = client.db("usersDB");
    const usersCollection = database.collection("users");

    //read=get data feom database
    app.get("/users", async (req, res) => {
      const cursor = usersCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    //creat=post data in  database
    app.post("/users", async (req, res) => {
      const user = req.body;
      console.log("new user ", user);
      const result = await usersCollection.insertOne(user);
      res.send(result);
    });

    //Delete data from database
    app.delete("/users/:id", async (req, res) => {
      const id = req.params.id;
      console.log("id is", id);
      const query = { _id: new ObjectId(id) };
      const result = await usersCollection.deleteOne(query);
      res.send(result);
    });

    //Update  data from database
    app.get("/users/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const user = await usersCollection.findOne(query);
      res.send(user);
    });

    //update data  in database

    app.put("/users/:id", async (req, res) => {
      const id = req.params.id;
      const User = req.body;
      console.log(id, User);
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updateUser = {
        $set: {
          name: User.name,
          email: User.email,
        },
      };

      const result = await usersCollection.updateOne(
        filter,
        updateUser,
        options
      );
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Simple crud is running");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
