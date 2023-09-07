const bodyParser = require('body-parser');
const express = require('express');
const path = require("path");

// const userRoutes = require('./routes/user-routes');
const sequelize = require('./utils/database');
const routerproject = require('./routes/project-route');
const routerdonor = require('./routes/donor-route');
const routerservice = require('./routes/service-route');
const routerFreelancer = require('./routes/freelancer-route');
const routertemplate = require('./routes/template-route');
const routeruser = require('./routes/user-route');
const routerquestion = require('./routes/question-route');
const routernotification = require('./routes/notification-route');

const cors = require('cors');
const app = express();
const multer = require('multer');
app.use(cors({
    origin: 'http://localhost:3000', // مصدر المستخدم الذي يأتي منه الطلب
    credentials: true, // تمكين الاعتمادية
}))
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // specify upload directory
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); // use original file name
    }
});
const upload = multer({
    storage: storage,
    limits: { fileSize: 1024 * 1024 * 5 } // limit file size to 5 MB
});
app.post('/upload', upload.single('file'), (req, res) => {
    // req.file contains information about the uploaded file
    // perform any necessary processing here
    res.send('File uploaded successfully');
});
app.get('/uploads/:filename', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    const file = req.params.filename;
    const filePath = path.join(__dirname, `../server/uploads/${file}`);
    res.download(filePath);
    // res.download('./uploads/index.html')
})
app.use(express.json());
app.use(bodyParser.urlencoded());

// app.get('/', (req, res) => {
//     res.download('./test.txt')
// })
app.use("/api/project", routerproject);
app.use("/api/donor", routerdonor);
app.use("/api/service", routerservice);
app.use("/api/freelancer", routerFreelancer);
app.use("/api/template", routertemplate);
app.use("/api/user", routeruser);
app.use("/api/question", routerquestion);
app.use("/api/notification", routernotification);
sequelize
    .sync()
    .then(() => {
        console.log('connected &created table');
        app.listen(5000);
    })
    .catch((error) => {
        console.log('connection error ' + error);
    });