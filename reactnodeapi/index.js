const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');
const app = express();

const movies = [];
const newmovies = [];
const toprated = [];
const mostViewed = [];
const animasyon = [];
const dram = [];
const macera = [];
app.use(cors({
    origin: '*'
}));

app.get('/', (req, res) =>
    res.json(movies)
);

app.get('/newmovies', (req, res) =>
    res.json(newmovies)
);
app.get('/toprated', (req, res) =>
    res.json(toprated)
);
app.get('/mostviewed', (req, res) =>
    res.json(mostViewed)
);
app.get('/animasyon', (req, res) =>
    res.json(animasyon)
);
app.get('/dram', (req, res) =>
    res.json(dram)
);
app.get('/macera', (req, res) =>
    res.json(macera)
);

app.listen(5000, () => console.log('Example app listening on port 5000!'));

axios.all([
    axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=bf3e79db'),
    axios.get('http://www.omdbapi.com/?i=tt1285016&apikey=bf3e79db'),
    axios.get('http://www.omdbapi.com/?i=tt0848228&apikey=bf3e79db'),
    axios.get('http://www.omdbapi.com/?i=tt0325980&apikey=bf3e79db'),
    axios.get('http://www.omdbapi.com/?i=tt1201607&apikey=bf3e79db'),
    axios.get('http://www.omdbapi.com/?i=tt0167260&apikey=bf3e79db'),
    axios.get('http://www.omdbapi.com/?i=tt0113497&apikey=bf3e79db'),
    axios.get('http://www.omdbapi.com/?i=tt2911666&apikey=bf3e79db'),
    axios.get('http://www.omdbapi.com/?i=tt6697582&apikey=bf3e79db')
]).then(axios.spread((response1, response2, response3, response4, response5, response6, response7, response8, response9, ) => {
    response1.data["Fragman"] = "https://www.youtube.com/watch?v=Vkx3fEep8vo";
    response2.data["Fragman"] = "https://www.youtube.com/watch?v=lB95KLmpLR4";
    response3.data["Fragman"] = "https://www.youtube.com/watch?v=1hPpG4s3-O4";
    response4.data["Fragman"] = "https://www.youtube.com/watch?v=naQr0uTrH_s";
    response5.data["Fragman"] = "https://www.youtube.com/watch?v=monOjieIgA4";
    response6.data["Fragman"] = "https://www.youtube.com/watch?v=y2rYRu8UW8M";
    response7.data["Fragman"] = "https://www.youtube.com/watch?v=DvQ-PGUr6SM";
    response8.data["Fragman"] = "https://www.youtube.com/watch?v=2AUmvWm5ZDQ";
    response9.data["Fragman"] = "https://www.youtube.com/watch?v=FcT6Y3vlP4I";
    movies.push(response1.data, response2.data, response3.data, response4.data, response5.data, response6.data, response7.data, response8.data, response9.data);
})).catch(error => {
    console.log(error);
});

axios.all([
    axios.get('http://www.omdbapi.com/?i=tt1397280&apikey=bf3e79db'),
    axios.get('http://www.omdbapi.com/?i=tt1596343&apikey=bf3e79db'),
    axios.get('http://www.omdbapi.com/?i=tt0398286&apikey=bf3e79db'),
    axios.get('http://www.omdbapi.com/?i=tt0268380&apikey=bf3e79db'),
    axios.get('http://www.omdbapi.com/?i=tt0499549&apikey=bf3e79db'),
    axios.get('http://www.omdbapi.com/?i=tt0816692&apikey=bf3e79db')
]).then(axios.spread((response1,response2,response3,response4,response5,response6) => {
    toprated.push(response1.data,response2.data,response3.data,response4.data,response5.data,response6.data);
    response1.data["Fragman"] = "https://www.youtube.com/watch?v=dAB9Lrtqfk8";
    response2.data["Fragman"] = "https://www.youtube.com/watch?v=mw2AqdB5EVA";
    response3.data["Fragman"] = "https://www.youtube.com/watch?v=r6Zf9jDlOBo";
    response4.data["Fragman"] = "https://www.youtube.com/watch?v=eJY8P3NdOa0";
    response5.data["Fragman"] = "https://www.youtube.com/watch?v=5PSNL1qE6VY";
    response6.data["Fragman"] = "https://www.youtube.com/watch?v=Lm8p5rlrSkY";
    
})).catch(error => {
    console.log(error);
});

axios.all([
    axios.get('http://www.omdbapi.com/?i=tt3053228&apikey=bf3e79db'),
    axios.get('http://www.omdbapi.com/?i=tt6652708&apikey=bf3e79db'),
    axios.get('http://www.omdbapi.com/?i=tt2226440&apikey=bf3e79db'),
    axios.get('http://www.omdbapi.com/?i=tt3722052&apikey=bf3e79db'),
    axios.get('http://www.omdbapi.com/?i=tt7108976&apikey=bf3e79db'),
    axios.get('http://www.omdbapi.com/?i=tt5338744&apikey=bf3e79db')

]).then(axios.spread((response1,response2,response3,response4,response5,response6) => {
     newmovies.push(response1.data,response2.data,response3.data,response4.data,response5.data,response6.data);
     response1.data["Fragman"] = "https://www.youtube.com/watch?v=3hhFT3vCeko";
    response2.data["Fragman"] = "https://www.youtube.com/watch?v=Jl0Duw2B8zk";
    response3.data["Fragman"] = "https://www.youtube.com/watch?v=u_hkGeVCMII";
    response4.data["Fragman"] = "https://www.youtube.com/watch?v=aw_KfEbi7Kc";
    response5.data["Fragman"] = "https://www.youtube.com/watch?v=6N7trw1_ZWs";
    response6.data["Fragman"] = "https://www.youtube.com/watch?v=2mtl4nm6ZJs";
})).catch(error => {
    console.log(error);
});

axios.all([
    axios.get('http://www.omdbapi.com/?i=tt0268380&apikey=bf3e79db'),
    axios.get('http://www.omdbapi.com/?i=tt0458339&apikey=bf3e79db'),
    axios.get('http://www.omdbapi.com/?i=tt1092011&apikey=bf3e79db'),
    axios.get('http://www.omdbapi.com/?i=tt0418279&apikey=bf3e79db'),
    axios.get('http://www.omdbapi.com/?i=tt0800369&apikey=bf3e79db'),
    axios.get('http://www.omdbapi.com/?i=tt1187043&apikey=bf3e79db')
]).then(axios.spread((response1,response2,response3,response4,response5,response6) => {
    mostViewed.push(response1.data,response2.data,response3.data,response4.data,response5.data,response6.data);
    response1.data["Fragman"] = "https://www.youtube.com/watch?v=eJY8P3NdOa0";
    response2.data["Fragman"] = "https://www.youtube.com/watch?v=7zaV-oxhRvM";
    response3.data["Fragman"] = "https://www.youtube.com/watch?v=a8D6mKvq6w8";
    response4.data["Fragman"] = "https://www.youtube.com/watch?v=dxQxgAfNzyE";
    response5.data["Fragman"] = "https://www.youtube.com/watch?v=7nlkwPLj4S4";
    response6.data["Fragman"] = "https://www.youtube.com/watch?v=K0eDlFX9GMc";
    
})).catch(error => {
    console.log(error);
});

axios.all([
    axios.get('http://www.omdbapi.com/?i=tt4468740&apikey=bf3e79db'),
    axios.get('http://www.omdbapi.com/?i=tt0837562&apikey=bf3e79db'),
    axios.get('http://www.omdbapi.com/?i=tt5117670&apikey=bf3e79db'),
    axios.get('http://www.omdbapi.com/?i=tt4701724&apikey=bf3e79db'),
    axios.get('http://www.omdbapi.com/?i=tt5851786&apikey=bf3e79db'),
    axios.get('http://www.omdbapi.com/?i=tt3606752&apikey=bf3e79db')
]).then(axios.spread((response1,response2,response3,response4,response5,response6) => {
    animasyon.push(response1.data,response2.data,response3.data,response4.data,response5.data,response6.data);
    response1.data["Fragman"] = "https://www.youtube.com/watch?v=2AlPjEjy3E8";
    response2.data["Fragman"] = "https://www.youtube.com/watch?v=gpkncObsNqY";
    response3.data["Fragman"] = "https://www.youtube.com/watch?v=c3ZlyIh9QZw";
    response4.data["Fragman"] = "https://www.youtube.com/watch?v=ZRiPQ8YNrVs";
    response5.data["Fragman"] = "https://www.youtube.com/watch?v=p3BELH52IBI";
    response6.data["Fragman"] = "https://www.youtube.com/watch?v=DFF8tpCNeIs";
    
})).catch(error => {
    console.log(error);
});

axios.all([
    axios.get('http://www.omdbapi.com/?i=tt2226519&apikey=bf3e79db'),
    axios.get('http://www.omdbapi.com/?i=tt6194530&apikey=bf3e79db'),
    axios.get('http://www.omdbapi.com/?i=tt0111767&apikey=bf3e79db'),
    axios.get('http://www.omdbapi.com/?i=tt4995790&apikey=bf3e79db'),
    axios.get('http://www.omdbapi.com/?i=tt3881784&apikey=bf3e79db'),
    axios.get('http://www.omdbapi.com/?i=tt6294822&apikey=bf3e79db')
]).then(axios.spread((response1,response2,response3,response4,response5,response6) => {
    dram.push(response1.data,response2.data,response3.data,response4.data,response5.data,response6.data);
    response1.data["Fragman"] = "https://www.youtube.com/watch?v=2CDXE5AtWqY";
    response2.data["Fragman"] = "https://www.youtube.com/watch?v=lpxlr8dTYrQ";
    response3.data["Fragman"] = "https://www.youtube.com/watch?v=ihUxtnLI4QMv";
    response4.data["Fragman"] = "https://www.youtube.com/watch?v=IcmMYzyVt5Y";
    response5.data["Fragman"] = "https://www.youtube.com/watch?v=I6MN0QfQx7I";
    response6.data["Fragman"] = "https://www.youtube.com/watch?v=AvvLNv_iAww";
    
})).catch(error => {
    console.log(error);
});

axios.all([
    axios.get('http://www.omdbapi.com/?i=tt4382824&apikey=bf3e79db'),
    axios.get('http://www.omdbapi.com/?i=tt1365519&apikey=bf3e79db'),
    axios.get('http://www.omdbapi.com/?i=tt0023238&apikey=bf3e79db'),
    axios.get('http://www.omdbapi.com/?i=tt4135326&apikey=bf3e79db'),
    axios.get('http://www.omdbapi.com/?i=tt6271528&apikey=bf3e79db'),
    axios.get('http://www.omdbapi.com/?i=tt2283362&apikey=bf3e79db')
]).then(axios.spread((response1,response2,response3,response4,response5,response6) => {
    macera.push(response1.data,response2.data,response3.data,response4.data,response5.data,response6.data);
    response1.data["Fragman"] = "https://www.youtube.com/watch?v=2CDXE5AtWqY";
    response2.data["Fragman"] = "https://www.youtube.com/watch?v=lpxlr8dTYrQ";
    response3.data["Fragman"] = "https://www.youtube.com/watch?v=ihUxtnLI4QMv";
    response4.data["Fragman"] = "https://www.youtube.com/watch?v=IcmMYzyVt5Y";
    response5.data["Fragman"] = "https://www.youtube.com/watch?v=I6MN0QfQx7I";
    response6.data["Fragman"] = "https://www.youtube.com/watch?v=AvvLNv_iAww";
    
})).catch(error => {
    console.log(error);
});





