const express = require('express');
const bodyParser = require('body-parser');
const {Sequelize, DataTypes} = require('sequelize')

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const sequelize = new Sequelize('server', 'root', 'root',{
    host:'localhost',
    dialect:'mysql'
});

//define a model for user table
const User = sequelize.define('User',{
    name: DataTypes.STRING,
    email:DataTypes.STRING,
    contact:DataTypes.STRING,
});

sequelize.sync();

app.set('view engine', 'ejs');
app.set('views', __dirname+'/views');


app.get('/',(req,res)=>{
    res.render('form')
})

app.post('/submit', async (req, res) => {
    const { name, email, contact } = req.body;
  
    try {
      const newUser = await User.create({ name, email, contact });
  
      res.send('Form submitted successfully!');
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

  app.get('/users', async (req,res)=>{
    try{
        const allUsers = await User.findAll();
        res.json(allUsers);

    }catch(error){
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
  })



const port = 3000;
app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
});
