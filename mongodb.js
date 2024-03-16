const mongoose = require ("mongoose");
let compass_url ='mongodb://localhost:27017/samplestudent';
let mongodb_url ='mongodb+srv://abhirami:abhirami@cluster0.kfzrqo8.mongodb.net/data?retryWrites=true&w=majority&appName=Cluster0'

mongoose.connect(mongodb_url).then(()=>{
    console.log("db connected");

})
.catch((err) => {
    console.log(err);
});