const request = require('request');

const imageSearch = () => {
    const options = {
        method: 'GET',
        url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI',
        qs: { q: 'taylor swift', pageNumber: '1', pageSize: '10', autoCorrect: 'true' },
        headers: {
            'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com',
            'X-RapidAPI-Key': '83e2d864fbmsh5b34d92512a303ap1d37b4jsn673104334f8c',
            useQueryString: true
        }
    };
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        const data = JSON.parse(body);
        console.log('url: ' + data.value[0].url);
        return data.value[0].url.toString();
    });
}

exports.imageSearch = imageSearch;