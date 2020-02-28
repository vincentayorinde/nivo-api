const request = require('request');
const cheerio = require('cheerio');

request('https://www.tmz.com/', (err, res, html) => {
    if (!err && res.statusCode == 200) {
        const $ = cheerio.load(html);
        const postHeading = $('.blogroll');
        const head = postHeading.find('.article__header-title').text();
        const body = postHeading.find('.article__blocks').text();
        console.log(head);
        console.log(body);
    }
});
