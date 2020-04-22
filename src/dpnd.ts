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

const getAssetList = async (userid: string, appid: number) => {
    const url = getUrl(userid, appid);
    let assetList = [];
    const assetListHtml = await axios.get(url);

    console.log(cheerio.parseHTML(assetListHtml.data))
};

const subscribe = (userid: string, password: string, appid: number) => {
    getAssetList(userid, appid);
};

export default subscribe;