import { AfterContentInit, Component, ViewChild, OnInit } from "@angular/core";
import { MatGridList } from "@angular/material";

import { MediaChange, MediaObserver } from "@angular/flex-layout";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { FilterPipePipe } from "src/app/filter-pipe.pipe";

@Component({
  selector: "app-sources",
  templateUrl: "./sources.component.html",
  styleUrls: ["./sources.component.css"]
})
export class SourcesComponent implements OnInit {
  @ViewChild("grid", { static: false }) grid: MatGridList;
  SearchBar: string;
  extension = ".png";

  sources = [
    {
      id: "abc-news",
      name: "ABC News",
      description:
        "Your trusted source for breaking news, analysis, exclusive interviews, headlines, and videos at ABCNews.com.",
      url: "https://abcnews.go.com",
      category: "general",
      language: "en",
      country: "us"
    },
    {
      id: "aftenposten",
      name: "Aftenposten",
      description:
        "Norges ledende nettavis med alltid oppdaterte nyheter innenfor innenriks, utenriks, sport og kultur.",
      url: "https://www.aftenposten.no",
      category: "general",
      language: "no",
      country: "no"
    },
    {
      id: "al-jazeera-english",
      name: "Al Jazeera English",
      description:
        "News, analysis from the Middle East and worldwide, multimedia and interactives, opinions, documentaries, podcasts, long reads and broadcast schedule.",
      url: "http://www.aljazeera.com",
      category: "general",
      language: "en",
      country: "us"
    },
    {
      id: "ansa",
      name: "ANSA.it",
      description:
        "Agenzia ANSA: ultime notizie, foto, video e approfondimenti su: cronaca, politica, economia, regioni, mondo, sport, calcio, cultura e tecnologia.",
      url: "http://www.ansa.it",
      category: "general",
      language: "it",
      country: "it"
    },
    {
      id: "argaam",
      name: "Argaam",
      description:
        "ارقام موقع متخصص في متابعة سوق الأسهم السعودي تداول - تاسي - مع تغطيه معمقة لشركات واسعار ومنتجات البتروكيماويات , تقارير مالية الاكتتابات الجديده ",
      url: "http://www.argaam.com",
      category: "business",
      language: "ar",
      country: "sa"
    },
    {
      id: "ars-technica",
      name: "Ars Technica",
      description:
        "The PC enthusiast's resource. Power users and the tools they love, without computing religion.",
      url: "http://arstechnica.com",
      category: "technology",
      language: "en",
      country: "us"
    },
    {
      id: "ary-news",
      name: "Ary News",
      description:
        "ARY News is a Pakistani news channel committed to bring you up-to-the minute Pakistan news and featured stories from around Pakistan and all over the world.",
      url: "https://arynews.tv/ud/",
      category: "general",
      language: "ud",
      country: "pk"
    },
    {
      id: "associated-press",
      name: "Associated Press",
      description:
        "The AP delivers in-depth coverage on the international, politics, lifestyle, business, and entertainment news.",
      url: "https://apnews.com/",
      category: "general",
      language: "en",
      country: "us"
    },
    {
      id: "axios",
      name: "Axios",
      description:
        "Axios are a new media company delivering vital, trustworthy news and analysis in the most efficient, illuminating and shareable ways possible.",
      url: "https://www.axios.com",
      category: "general",
      language: "en",
      country: "us"
    },
    {
      id: "bbc-news",
      name: "BBC News",
      description:
        "Use BBC News for up-to-the-minute news, breaking news, video, audio and feature stories. BBC News provides trusted World and UK news as well as local and regional perspectives. Also entertainment, business, science, technology and health news.",
      url: "http://www.bbc.co.uk/news",
      category: "general",
      language: "en",
      country: "gb"
    },
    {
      id: "bild",
      name: "Bild",
      description:
        "Die Seite 1 für aktuelle Nachrichten und Themen, Bilder und Videos aus den Bereichen News, Wirtschaft, Politik, Show, Sport, und Promis.",
      url: "http://www.bild.de",
      category: "general",
      language: "de",
      country: "de"
    },
    {
      id: "blasting-news-br",
      name: "Blasting News (BR)",
      description:
        "Descubra a seção brasileira da Blasting News, a primeira revista feita pelo  público, com notícias globais e vídeos independentes. Junte-se a nós e torne- se um repórter.",
      url: "https://br.blastingnews.com",
      category: "general",
      language: "pt",
      country: "br"
    },
    {
      id: "breitbart-news",
      name: "Breitbart News",
      description:
        "Syndicated news and opinion website providing continuously updated headlines to top news and analysis sources.",
      url: "http://www.breitbart.com",
      category: "general",
      language: "en",
      country: "us"
    },
    {
      id: "business-insider",
      name: "Business Insider",
      description:
        "Business Insider is a fast-growing business site with deep financial, media, tech, and other industry verticals. Launched in 2007, the site is now the largest business news site on the web.",
      url: "http://www.businessinsider.com",
      category: "business",
      language: "en",
      country: "us"
    },
    {
      id: "buzzfeed",
      name: "Buzzfeed",
      description:
        "BuzzFeed is a cross-platform, global network for news and entertainment that generates seven billion views each month.",
      url: "https://www.buzzfeed.com",
      category: "entertainment",
      language: "en",
      country: "us"
    },
    {
      id: "cbc-news",
      name: "CBC News",
      description:
        "CBC News is the division of the Canadian Broadcasting Corporation responsible for the news gathering and production of news programs on the corporation's English-language operations, namely CBC Television, CBC Radio, CBC News Network, and CBC.ca.",
      url: "http://www.cbc.ca/news",
      category: "general",
      language: "en",
      country: "ca"
    },
    {
      id: "cbs-news",
      name: "CBS News",
      description:
        "CBS News: dedicated to providing the best in journalism under standards it pioneered at the dawn of radio and television and continue in the digital age.",
      url: "http://www.cbsnews.com",
      category: "general",
      language: "en",
      country: "us"
    },
    {
      id: "cnbc",
      name: "CNBC",
      description:
        "Get latest business news on stock markets, financial & earnings on CNBC. View world markets streaming charts & video; check stock tickers and quotes.",
      url: "http://www.cnbc.com",
      category: "business",
      language: "en",
      country: "us"
    },
    {
      id: "cnn",
      name: "CNN",
      description:
        "View the latest news and breaking news today for U.S., world, weather, entertainment, politics and health at CNN",
      url: "http://us.cnn.com",
      category: "general",
      language: "en",
      country: "us"
    },
    {
      id: "engadget",
      name: "Engadget",
      description:
        "Engadget is a web magazine with obsessive daily coverage of everything new in gadgets and consumer electronics.",
      url: "https://www.engadget.com",
      category: "technology",
      language: "en",
      country: "us"
    },
    {
      id: "entertainment-weekly",
      name: "Entertainment Weekly",
      description:
        "Online version of the print magazine includes entertainment news, interviews, reviews of music, film, TV and books, and a special area for magazine subscribers.",
      url: "http://www.ew.com",
      category: "entertainment",
      language: "en",
      country: "us"
    },
    {
      id: "espn",
      name: "ESPN",
      description:
        "ESPN has up-to-the-minute sports news coverage, scores, highlights and commentary for NFL, MLB, NBA, College Football, NCAA Basketball and more.",
      url: "http://espn.go.com",
      category: "sports",
      language: "en",
      country: "us"
    },
    {
      id: "financial-post",
      name: "Financial Post",
      description:
        "Find the latest happenings in the Canadian Financial Sector and stay up to date with changing trends in Business Markets. Read trading and investing advice from professionals.",
      url: "http://business.financialpost.com",
      category: "business",
      language: "en",
      country: "ca"
    },
    {
      id: "focus",
      name: "Focus",
      description:
        "Minutenaktuelle Nachrichten und Service-Informationen von Deutschlands modernem Nachrichtenmagazin.",
      url: "http://www.focus.de",
      category: "general",
      language: "de",
      country: "de"
    },
    {
      id: "fox-news",
      name: "Fox News",
      description:
        "Breaking News, Latest News and Current News from FOXNews.com. Breaking news and video. Latest Current News: U.S., World, Entertainment, Health, Business, Technology, Politics, Sports.",
      url: "http://www.foxnews.com",
      category: "general",
      language: "en",
      country: "us"
    },
    {
      id: "google-news",
      name: "Google News",
      description:
        "Comprehensive, up-to-date news coverage, aggregated from sources all over the world by Google News.",
      url: "https://news.google.com",
      category: "general",
      language: "en",
      country: "us"
    },
    {
      id: "hacker-news",
      name: "Hacker News",
      description:
        "Hacker News is a social news website focusing on computer science and entrepreneurship. It is run by Paul Graham's investment fund and startup incubator, Y Combinator. In general, content that can be submitted is defined as \"anything that gratifies one's intellectual curiosity\".",
      url: "https://news.ycombinator.com",
      category: "technology",
      language: "en",
      country: "us"
    },
    {
      id: "ign",
      name: "IGN",
      description:
        "IGN is your site for Xbox One, PS4, PC, Wii-U, Xbox 360, PS3, Wii, 3DS, PS Vita and iPhone games with expert reviews, news, previews, trailers, cheat codes, wiki guides and walkthroughs.",
      url: "http://www.ign.com",
      category: "entertainment",
      language: "en",
      country: "us"
    },
    {
      id: "independent",
      name: "Independent",
      description:
        "National morning quality (tabloid) includes free online access to news and supplements. Insight by Robert Fisk and various other columnists.",
      url: "http://www.independent.co.uk",
      category: "general",
      language: "en",
      country: "gb"
    },
    {
      id: "infobae",
      name: "Infobae",
      description:
        "Noticias de Argentina y del mundo en tiempo real. Información, videos y fotos sobre los hechos más relevantes y sus protagonistas. Léelo antes en infobae.",
      url: "http://www.infobae.com/?noredirect",
      category: "general",
      language: "es",
      country: "ar"
    },
    {
      id: "info-money",
      name: "InfoMoney",
      description:
        "No InfoMoney você encontra tudo o que precisa sobre dinheiro. Ações, investimentos, bolsas de valores e muito mais. Aqui você encontra informação que vale dinheiro!",
      url: "https://www.infomoney.com.br",
      category: "business",
      language: "pt",
      country: "br"
    },
    {
      id: "mashable",
      name: "Mashable",
      description:
        "Mashable is a global, multi-platform media and entertainment company.",
      url: "https://mashable.com",
      category: "entertainment",
      language: "en",
      country: "us"
    },
    {
      id: "medical-news-today",
      name: "Medical News Today",
      description:
        "Medical news and health news headlines posted throughout the day, every day.",
      url: "http://www.medicalnewstoday.com",
      category: "health",
      language: "en",
      country: "us"
    },
    {
      id: "msnbc",
      name: "MSNBC",
      description:
        "Breaking news and in-depth analysis of the headlines, as well as commentary and informed perspectives from The Rachel Maddow Show, Morning Joe & more.",
      url: "http://www.msnbc.com",
      category: "general",
      language: "en",
      country: "us"
    },
    {
      id: "mtv-news",
      name: "MTV News",
      description:
        "The ultimate news source for music, celebrity, entertainment, movies, and current events on the web. It's pop culture on steroids.",
      url: "http://www.mtv.com/news",
      category: "entertainment",
      language: "en",
      country: "us"
    },
    {
      id: "national-geographic",
      name: "National Geographic",
      description:
        "Reporting our world daily: original nature and science news from National Geographic.",
      url: "http://news.nationalgeographic.com",
      category: "science",
      language: "en",
      country: "us"
    },
    {
      id: "national-review",
      name: "National Review",
      description:
        "National Review: Conservative News, Opinion, Politics, Policy, & Current Events.",
      url: "https://www.nationalreview.com/",
      category: "general",
      language: "en",
      country: "us"
    },
    {
      id: "nbc-news",
      name: "NBC News",
      description:
        "Breaking news, videos, and the latest top stories in world news, business, politics, health and pop culture.",
      url: "http://www.nbcnews.com",
      category: "general",
      language: "en",
      country: "us"
    },
    {
      id: "news24",
      name: "News24",
      description:
        "South Africa's premier news source, provides breaking news on national, world, Africa, sport, entertainment, technology and more.",
      url: "http://www.news24.com",
      category: "general",
      language: "en",
      country: "za"
    },
    {
      id: "new-scientist",
      name: "New Scientist",
      description:
        "Breaking science and technology news from around the world. Exclusive stories and expert analysis on space, technology, health, physics, life and Earth.",
      url: "https://www.newscientist.com/section/news",
      category: "science",
      language: "en",
      country: "us"
    },
    {
      id: "newsweek",
      name: "Newsweek",
      description:
        "Newsweek provides in-depth analysis, news and opinion about international issues, technology, business, culture and politics.",
      url: "https://www.newsweek.com",
      category: "general",
      language: "en",
      country: "us"
    },
    {
      id: "next-big-future",
      name: "Next Big Future",
      description:
        "Coverage of science and technology that have the potential for disruption, and analysis of plans, policies, and technology that enable radical improvement.",
      url: "https://www.nextbigfuture.com",
      category: "science",
      language: "en",
      country: "us"
    },
    {
      id: "nfl-news",
      name: "NFL News",
      description:
        "The official source for NFL news, schedules, stats, scores and more.",
      url: "http://www.nfl.com/news",
      category: "sports",
      language: "en",
      country: "us"
    },
    {
      id: "nhl-news",
      name: "NHL News",
      description:
        "The most up-to-date breaking hockey news from the official source including interviews, rumors, statistics and schedules.",
      url: "https://www.nhl.com/news",
      category: "sports",
      language: "en",
      country: "us"
    },
    {
      id: "polygon",
      name: "Polygon",
      description:
        "Polygon is a gaming website in partnership with Vox Media. Our culture focused site covers games, their creators, the fans, trending stories and entertainment news.",
      url: "http://www.polygon.com",
      category: "entertainment",
      language: "en",
      country: "us"
    },
    {
      id: "reuters",
      name: "Reuters",
      description:
        "Reuters.com brings you the latest news from around the world, covering breaking news in business, politics, entertainment, technology, video and pictures.",
      url: "http://www.reuters.com",
      category: "general",
      language: "en",
      country: "us"
    },
    {
      id: "rte",
      name: "RTE",
      description:
        "Get all of the latest breaking local and international news stories as they happen, with up to the minute updates and analysis, from Ireland's National Broadcaster.",
      url: "https://www.rte.ie/news",
      category: "general",
      language: "en",
      country: "ie"
    },
    {
      id: "techradar",
      name: "TechRadar",
      description:
        "The latest technology news and reviews, covering computing, home entertainment systems, gadgets and more.",
      url: "http://www.techradar.com",
      category: "technology",
      language: "en",
      country: "us"
    },
    {
      id: "the-globe-and-mail",
      name: "The Globe And Mail",
      description:
        "The Globe and Mail offers the most authoritative news in Canada, featuring national and international news.",
      url: "https://www.theglobeandmail.com",
      category: "general",
      language: "en",
      country: "ca"
    },
    {
      id: "the-hindu",
      name: "The Hindu",
      description:
        "The Hindu. latest news, analysis, comment, in-depth coverage of politics, business, sport, environment, cinema and arts from India's national newspaper.",
      url: "http://www.thehindu.com",
      category: "general",
      language: "en",
      country: "in"
    },
    {
      id: "the-huffington-post",
      name: "The Huffington Post",
      description:
        "The Huffington Post is a politically liberal American online news aggregator and blog that has both localized and international editions founded by Arianna Huffington, Kenneth Lerer, Andrew Breitbart, and Jonah Peretti, featuring columnists.",
      url: "http://www.huffingtonpost.com",
      category: "general",
      language: "en",
      country: "us"
    },
    {
      id: "the-irish-times",
      name: "The Irish Times",
      description:
        "The Irish Times online. Latest news including sport, analysis, business, weather and more from the definitive brand of quality news in Ireland.",
      url: "https://www.irishtimes.com",
      category: "general",
      language: "en",
      country: "ie"
    },
    {
      id: "the-lad-bible",
      name: "The Lad Bible",
      description:
        "The LAD Bible is one of the largest community for guys aged 16-30 in the world. Send us your funniest pictures and videos!",
      url: "https://www.theladbible.com",
      category: "entertainment",
      language: "en",
      country: "gb"
    },
    {
      id: "the-sport-bible",
      name: "The Sport Bible",
      description:
        "TheSPORTbible is one of the largest communities for sports fans across the world. Send us your sporting pictures and videos!",
      url: "https://www.thesportbible.com",
      category: "sports",
      language: "en",
      country: "gb"
    },
    {
      id: "the-times-of-india",
      name: "The Times of India",
      description:
        "Times of India brings the Latest News and Top Breaking headlines on Politics and Current Affairs in India and around the World, Sports, Business, Bollywood News and Entertainment, Science, Technology, Health and Fitness news, Cricket and opinions from leading columnists.",
      url: "http://timesofindia.indiatimes.com",
      category: "general",
      language: "en",
      country: "in"
    },
    {
      id: "the-verge",
      name: "The Verge",
      description:
        "The Verge covers the intersection of technology, science, art, and culture.",
      url: "http://www.theverge.com",
      category: "technology",
      language: "en",
      country: "us"
    },
    {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
      description:
        "WSJ online coverage of breaking news and current headlines from the US and around the world. Top stories, photos, videos, detailed analysis and in-depth reporting.",
      url: "http://www.wsj.com",
      category: "business",
      language: "en",
      country: "us"
    },
    {
      id: "the-washington-post",
      name: "The Washington Post",
      description:
        "Breaking news and analysis on politics, business, world national news, entertainment more. In-depth DC, Virginia, Maryland news coverage including traffic, weather, crime, education, restaurant reviews and more.",
      url: "https://www.washingtonpost.com",
      category: "general",
      language: "en",
      country: "us"
    },
    {
      id: "the-washington-times",
      name: "The Washington Times",
      description:
        "The Washington Times delivers breaking news and commentary on the issues that affect the future of our nation.",
      url: "https://www.washingtontimes.com/",
      category: "general",
      language: "en",
      country: "us"
    },
    {
      id: "time",
      name: "Time",
      description:
        "Breaking news and analysis from TIME.com. Politics, world news, photos, video, tech reviews, health, science and entertainment news.",
      url: "http://time.com",
      category: "general",
      language: "en",
      country: "us"
    },
    {
      id: "usa-today",
      name: "USA Today",
      description:
        "Get the latest national, international, and political news at USATODAY.com.",
      url: "http://www.usatoday.com/news",
      category: "general",
      language: "en",
      country: "us"
    },
    {
      id: "vice-news",
      name: "Vice News",
      description:
        'Vice News is Vice Media, Inc.\'s current affairs channel, producing daily documentary essays and video through its website and YouTube channel. It promotes itself on its coverage of "under - reported stories".',
      url: "https://news.vice.com",
      category: "general",
      language: "en",
      country: "us"
    }
  ];

  constructor(private filter: FilterPipePipe) {}

  ngAfterContentInit() {}

  ngOnInit() {}
}
