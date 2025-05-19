import express from 'express';
import {startups} from './data/data.js';

const PORT = 3300;

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api', (req, res) => {
    let filteredData = startups;
    const {industry, country, continent, is_seeking_funding, has_mvp} = req.query;
    console.log(req.query);
    console.log(industry, country, continent, is_seeking_funding, has_mvp);   
    
    // vai surely a faltu thing ever! so many types checking

    if (industry !== undefined) {
        filteredData = filteredData.filter((startup) => startup.industry.toLocaleLowerCase() === industry.toLocaleLowerCase());
        console.log (filteredData);
    }
    if (country !== undefined) {
        filteredData = filteredData.filter((startup) => startup.country === country);
        console.log(filteredData);
    }
    if (continent !== undefined) {
        filteredData = filteredData.filter((startup) => startup.continent === continent);
        console.log(filteredData);
    }
    if (is_seeking_funding !== undefined) {
        filteredData = filteredData.filter((startup) => startup.is_seeking_funding === (is_seeking_funding === 'true'));
        console.log(filteredData);
    }
    if (has_mvp !== undefined) {
        filteredData = filteredData.filter((startup) => startup.has_mvp === (has_mvp === 'true'));
        console.log(filteredData);
    }

    res.json(filteredData);
});

app.listen(PORT, () => {
    console.log(`server connected to port ${PORT}`);
});



