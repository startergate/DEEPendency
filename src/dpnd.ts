import axios from 'axios';
import * as cheerio from 'cheerio';

const getUrl = (userid: string, appid: number) =>
    `https://steamcommunity.com/id/${userid}/myworkshopfiles/?appid=${appid}&browsefilter=mysubscriptions`;

const subscriber = async (appid: number, assetid: number, session: string) => {
    await axios.post('https://steamcommunity.com/sharedfiles/subscribe', {
        id: assetid,
        appid: appid,
        sessionid: session
    }, {
        headers: {}
    });
};
