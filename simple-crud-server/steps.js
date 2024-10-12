/**
 *MOngoDB connection
--------------------------
1.creat account
2. creat an user with password
3.witelist Ip Address
4.database> connect > driver > node > show all code > copy code
5.change the password in uri
-------------------------

server site ------
----------------
1. Creat Post
2. app.post('/users',async(req,res)=>{}
3.make the function async to use await inside it
4. make sure you use the express.json() middleware
5.access data from the body: const user= req.body
6.const result =  await userCollection.insertOne(user)
7.res.send(result)
-------------
Client site  ------
----------------
1.creat fetch
2.add second paremeter as an object
3.provide method : 'POST'
4.add headers : {'content-type': 'application/json'}
5 add body  : JSON.stringify(user)



-------------
REAd ////////////
-----------------
1. app.get('/users',async(req,res)=>{})
2.creat a cursor = userCollection.find()
3. const result = await cursor.toArray()


-------------
DElete
----------------
1. app.delete('/users/:id',async(req,res)=>{})
2. const id = req.params.id
3. const result = await userCollection.deleteOne({ _id: ObjectId(id) })
4. res.send(result)

frontend ======>
1.make a function
2. fetch with dynamic url with id
3.method :'DELETE'

 *
 */