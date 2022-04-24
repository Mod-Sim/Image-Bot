require('dotenv').config();
const args = process.argv.slice(2);
const queryArg = args[0];

// Following code adapted from https://github.com/googleapis/google-api-nodejs-client/blob/main/samples/customsearch/customsearch.js

// Copyright 2012 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

const { google } = require('googleapis');
const customsearch = google.customsearch('v1');

async function search(query) {
    const res = await customsearch.cse.list({
        cx: process.env.GG_CX,
        q: query,
        auth: process.env.GG_API_KEY,
        searchType: 'image',
    });
    return res.data.items[0].link;
}

if (module === require.main) {
    // console.log(queryArg);
    search(queryArg).catch(console.error);
}

module.exports = {
    search,
};
