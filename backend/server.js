const dotenv = require('dotenv');
const { default: mongoose } = require('mongoose');
const { prototype } = require('nodemailer/lib/xoauth2');

dotenv.config();

const app = require('./app');

const port = +process.env.PORT;

// app.get('/', function(req, res){
//   res.sendFile(__dirname+'/frontend/public/index.html'); // change the path to your index.html
// });

// (async () => {
//   await mongoose.connect(process.env.MONGO_URI);
//   console.log('mongodb connected.');
// })();


mongoose.connect('mongodb://machinya_machinya:Nika!805210@localhost:27017/machinya_db', {
  useNewUrlParser: true,
  authSource: 'admin'
  .then(()=> console.log('connected to mongodb'))
.catch((err)=> console.log('could not connect to mongodb'))
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
