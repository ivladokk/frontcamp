import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Article } from './models';
import { Injectable } from '@angular/core';

let articles = [
    
]


@Injectable({
    providedIn: 'root',
  })
  export class InMemoryDataService implements InMemoryDbService {
    createDb() {
      const articles = [
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Romain Dillet",
            "title": "Coinbase users can now withdraw Bitcoin SV following BCH fork",
            "description": "If you’re a Coinbase user, you may have seen some new tokens on your account. The Bitcoin Cash chain split into two different chains back in November. It means that if you held Bitcoin Cash on November 15, you became the lucky owner of Bitcoin SV and Bitcoin …",
            "url": "http://techcrunch.com/2019/02/15/coinbase-users-can-now-withdraw-bitcoin-sv-following-bch-fork/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2017/08/bitcoin-split-2017a.jpg?w=711",
            "publishedAt": "2019-02-15T14:53:40Z",
            "content": "If youre a Coinbase user, you may have seen some new tokens on your account. The Bitcoin Cash chain split into two different chains back in November. It means that if you held Bitcoin Cash on November 15, you became the lucky owner of Bitcoin SV and Bitcoin A… [+1514 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Shannon Liao",
            "title": "The Samsung Galaxy S10 has a cryptocurrency wallet built in",
            "description": "Samsung is the first major smartphone maker to include a cryptocurrency wallet in its latest flagship Galaxy S10 phones. The wallet lets users store bitcoin, Ethereum, and a beauty-related cryptocurrency called Cosmo Coin. It’s a cold storage wallet, meaning …",
            "url": "https://www.theverge.com/2019/2/25/18233131/samsung-galaxy-s10-bitcoin-cryptocurrency-wallet-features",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/NzYiWCMtVw_7prDgx1MmCiAxXbM=/0x25:1440x779/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/14062077/Screen_Shot_2019_02_20_at_5.28.31_PM.png",
            "publishedAt": "2019-02-25T19:54:16Z",
            "content": "Samsung is one of the first major smartphone makers to include a cryptocurrency wallet in its latest flagship Galaxy S10 phones. The wallet lets users store bitcoin, Ethereum, and a beauty-related cryptocurrency called Cosmo Coin. It's a cold storage wallet, … [+2108 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Taylor Hatmaker",
            "title": "Coinbase Pro is about to let you trade XRP",
            "description": "On Tuesday, Coinbase announced that XRP will be the latest cryptocurrency to hit its pro-level trading platform. Coinbase Pro will allow users to transfer XRP to the platform right away (“After 10am on February 25”) but there will be at least a 12 hour delay …",
            "url": "http://techcrunch.com/2019/02/25/coinbase-xrp-ripple/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2018/09/disruptsf18_brad_garlinghouse_arrington-0404.jpg?w=600",
            "publishedAt": "2019-02-25T18:55:07Z",
            "content": "On Tuesday, Coinbase announced that XRP will be the latest cryptocurrency to hit its pro-level trading platform. Coinbase Pro will allow users to transfer XRP to the platform right away (“After 10am on February 25”) but there will be at least a 12 hour delay … [+1418 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Trista Kelley",
            "title": "Jack Dorsey is tweeting about his love of bitcoin: 'Bitcoin is resilient. Bitcoin is principled. Bitcoin is native to internet ideals.' (BTC)",
            "description": "Jack Dorsey has tweet stormed about his love of bitcoin. \"I don’t see it as an investment,\" he wrote. It's a \"currency.\" It's a strong endorsement for the cryptocurrency that's had a rough 12 months. He added: Bitcoin will \"probably be the native currency.\" T…",
            "url": "https://www.businessinsider.com/twitter-ceo-jack-dorsey-tweets-about-love-of-bitcoin-2019-2",
            "urlToImage": "https://amp.businessinsider.com/images/5c5aa30cd7ab6773a00d2b33-2732-1366.jpg",
            "publishedAt": "2019-02-06T11:45:43Z",
            "content": "Twitter CEO Jack Dorsey has restated his love of bitcoin. \r\n In a strong endorsement of a cryptocurrency that's had a rough 12 months, Dorsey said he holds bitcoin and he thinks it's the future of money. \r\n \"I don't see it as an investment,\" he wrote in a flu… [+902 chars]"
        }
      ];
      
      return {articles};
    }
  
    genId(articles: Article[]): number {
      return articles.length > 0 ? Math.max(...articles.map(article => article.id)) + 1 : 11;
    }
  }
  