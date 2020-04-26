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
    let assetList: string[] = [];
    const data = (await axios.get(url)).data;
    const $ = cheerio.load(data.data);

    return assetList;
};

const subscribe = async (userid: string, password: string, appid: number) => {
    let list = await getAssetList(userid, appid);
};

export default subscribe;