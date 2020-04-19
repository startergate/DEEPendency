import axios from 'axios';
import * as cheerio from 'cheerio';

const getUrl = (userid: string, appid: number) =>
    `https://steamcommunity.com/id/${userid}/myworkshopfiles/?appid=${appid}&browsefilter=mysubscriptions`;
