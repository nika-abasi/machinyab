const dotenv = require('dotenv');
const { default: mongoose } = require('mongoose');

dotenv.config();

const app = require('./app');

const port = +process.env.PORT;

// app.get('/', function(req, res){
//   res.sendFile(__dirname+'/frontend/public/index.html'); // change the path to your index.html
// });

(async () => {
  await mongoose.connect(process.env.MONGO_URI);
  console.log('mongodb connected.');
})();


mongoose.connect('mongodb://machinya_machinya:my@392023@machinyab.com:27017/machinya_db', {
  useNewUrlParser: true,
  authSource: 'admin'
});

app.listen(4000, () => {
  console.log(`server running on port ${port}`);
});
