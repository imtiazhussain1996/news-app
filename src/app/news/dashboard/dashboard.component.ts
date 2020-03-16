import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  extension = ".png";
  newsData = [
    {
      source: {
        id: "cnn",
        name: "CNN"
      },
      author: "James Griffiths, CNN",
      title:
        "Markets tumble as novel coronavirus cases grow in the US and northern Italy goes into lockdown - CNN",
      description:
        "The number of cases of the novel coronavirus has risen to more than 108,000 globally, with more than 27,000 cases outside of China.",
      url:
        "https://www.cnn.com/2020/03/09/asia/novel-coronavirus-covid-19-update-intl-hnk/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/200309105423-coronavirus-0306-south-korea-super-tease.jpg",
      publishedAt: "2020-03-09T06:33:59Z",
      content:
        "Hong Kong (CNN)The number of cases of the novel coronavirus has risen to more than 108,000 globally, with at least 27,000 cases outside of China, as the economic trauma caused by the outbreak continues to impact global share markets. \r\nAt least 3,821 people h… [+6792 chars]"
    },
    {
      source: {
        id: "the-washington-post",
        name: "The Washington Post"
      },
      author: "Mary Beth Sheridan",
      title:
        "Mexicans join International Women's Day march, national femicide strike - The - The Washington Post",
      description:
        "International Women’s Day marches throughout the country launched a two-day uprising to include a national strike on Monday. The unrest follows a string of gruesome gender-based killings, a growing problem. An average of 10 women are killed per day in Mexico.",
      url:
        "https://www.washingtonpost.com/world/the_americas/mexico-international-womens-day-march-femicide-strike/2020/03/08/1ca6167c-6153-11ea-8a8e-5c5336b32760_story.html",
      urlToImage:
        "https://www.washingtonpost.com/resizer/zszt6-4KAfZJ_hqO7D39HKjntmU=/1440x0/smart/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/HJK7BNTBPMI6VLGKQDBCXPXJN4.jpg",
      publishedAt: "2020-03-09T06:09:40Z",
      content:
        "For Mexico, a day without women: national strike planned against gender-based violence\r\nThis is a cry of conscience for our society, said Itzel Zurita, 32, who sells homemade food in Mexico state. She and a friend, Reyna Ayala, 34, a Walmart worker, said they… [+4803 chars]"
    },
    {
      source: {
        id: null,
        name: "Nypost.com"
      },
      author: "Peter Botte",
      title:
        "Knicks coach Mike Miller weighs in on Nets' Kenny Atkinson firing - New York Post ",
      description:
        "Even Mike Miller, the interim coach of the Knicks, does not believe Kenny Atkinson will be out of work for long. Atkinson, the former Knicks assistant coach (under Mike D’Antoni) and Creative Artis…",
      url:
        "https://nypost.com/2020/03/09/knicks-coach-mike-miller-weighs-in-on-nets-kenny-atkinson-firing/",
      urlToImage:
        "https://thenypost.files.wordpress.com/2020/03/knicks-notes.jpg?quality=90&strip=all&w=1200",
      publishedAt: "2020-03-09T05:44:39Z",
      content:
        "Even Mike Miller, the interim coach of the Knicks, does not believe Kenny Atkinson will be out of work for long.\r\nAtkinson, the former Knicks assistant coach (under Mike DAntoni) and Creative Artists Agency client who was fired by the Nets on Saturday, figure… [+1569 chars]"
    },
    {
      source: {
        id: null,
        name: "Macrumors.com"
      },
      author: "MacRumors Staff",
      title:
        "ARM Processors with Mac Pro Level Performance Possible Today - MacRumors",
      description:
        "Former Apple executive and Be, Inc founder Jean-Louis Gassée explores the possibility of Apple's move to ARM-based Macs in the near future. \r \n\r...",
      url: "https://www.macrumors.com/2020/03/09/mac-pro-arm-performance/",
      urlToImage: "https://images.macrumors.com/article-new/2020/03/ampere.jpg",
      publishedAt: "2020-03-09T05:29:54Z",
      content:
        "Former Apple executive and Be, Inc founder Jean-Louis Gassée explores the possibility of Apple's move to ARM-based Macs in the near future. The speculation comes amidst of increasing rumors that Apple will be launching ARM-based Macs as early as 2021. \r\nGassé… [+1226 chars]"
    },
    {
      source: {
        id: "cnn",
        name: "CNN"
      },
      author: "Kaitlan Collins, CNN",
      title:
        "As Democratic establishment coalesces around Biden, Trump campaign argues he's just like Sanders - CNN",
      description:
        "President Donald Trump's campaign held a background call with reporters Sunday evening where officials laid out their view of the Democratic race and argued that former Vice President Joe Biden and Vermont Sen. Bernie Sanders are interchangeable.",
      url:
        "https://www.cnn.com/2020/03/08/politics/trump-biden-sanders-2020/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/200304001645-09-biden-sanders-split-super-tease.jpg",
      publishedAt: "2020-03-09T04:50:00Z",
      content:
        "Washington (CNN)President Donald Trump's campaign held a background call with reporters Sunday evening where officials laid out their view of the Democratic race and argued that former Vice President Joe Biden and Vermont Sen. Bernie Sanders are interchangeab… [+2973 chars]"
    },
    {
      source: {
        id: null,
        name: "Nypost.com"
      },
      author: "Kenneth Garger",
      title:
        "North Korea quarantines nearly 10,000 amid coronavirus fears - New York Post ",
      description:
        "North Korea has reportedly placed roughly 10,000 people under quarantine over coronavirus fears, but still has not confirmed a single case of the virus. About 40 percent of those under quarantine h…",
      url:
        "https://nypost.com/2020/03/09/north-korea-quarantines-nearly-10000-amid-coronavirus-fears/",
      urlToImage:
        "https://thenypost.files.wordpress.com/2020/03/north-koreacoronavirus.jpg?quality=90&strip=all&w=1200",
      publishedAt: "2020-03-09T04:47:48Z",
      content:
        "North Korea has reportedly placed roughly 10,000 people under quarantine over coronavirus fears, but still has not confirmed a single case of the virus.\r\nAbout 40 percent of those under quarantine have been released after showing no symptoms, according to The… [+477 chars]"
    },
    {
      source: {
        id: null,
        name: "Latimes.com"
      },
      author: "Sarah Ponczek",
      title:
        "Stock futures, Asia markets crash on oil war and coronavirus - Los Angeles Times",
      description:
        "U.S. stock futures tumbled, with losses triggering exchange rules that limit declines at 5%, as plummeting oil prices added to the backdrop of dread surrounding the coronavirus.",
      url:
        "https://www.latimes.com/business/story/2020-03-08/stock-futures-crash",
      urlToImage:
        "https://ca-times.brightspotcdn.com/dims4/default/bbda103/2147483647/strip/true/crop/4727x2482+0+247/resize/1200x630!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F4b%2Ff3%2F7fa912cf40a681a98861f7d9055c%2Fhttps-delivery.gettyimages.com%2Fdownloads%2F1205370269.jpg",
      publishedAt: "2020-03-09T04:35:00Z",
      content:
        "American stock futures tumbled, with losses triggering exchange rules that limit declines at 5%, as plummeting oil prices added to the backdrop of dread surrounding the novel coronavirus.\r\nJapanese stocks sank 6%. For the first time ever, the 10-year U.S. Tre… [+3424 chars]"
    },
    {
      source: {
        id: "usa-today",
        name: "USA Today"
      },
      author: "Jordan Culver",
      title:
        "State Department: US citizens 'should not travel by cruise ship' amid coronavirus outbreak - USA TODAY",
      description:
        "The U.S. Department of State recommends avoiding cruise ships and the CDC has issued new guidance for Americans traveling via cruise ship.",
      url:
        "https://www.usatoday.com/story/news/nation/2020/03/08/coronavirus-state-department-cruise-ship-travel/4998017002/",
      urlToImage:
        "https://www.gannett-cdn.com/presto/2020/03/07/USAT/f512b71f-dc86-4b9e-b90b-9e70df2b71e4-Coronavirus_Grand_Princess_11_.JPG?crop=2999,1687,x1,y213&width=1600&height=800&fit=bounds",
      publishedAt: "2020-03-09T04:32:50Z",
      content:
        "With help from the CDC, we answer some of Google's most searched questions about the coronavirus crisis.\r\nUSA TODAY\r\nThe U.S. Department of State on Sunday advised U.S. citizens against traveling by cruise ship as cases of the novel coronavirus continue to sp… [+2983 chars]"
    },
    {
      source: {
        id: "abc-news",
        name: "ABC News"
      },
      author: "Lauren Lantry",
      title:
        "Ted Cruz, Paul Gosar to self-quarantine due to possible coronavirus exposure - ABC News",
      description: "",
      url:
        "https://abcnews.go.com/Health/ted-cruz-paul-gosar-quarantine-due-coronavirus-exposure/story?id=69476552",
      urlToImage:
        "https://s.abcnews.com/images/Health/coronavirus-cruz_hpMain_20200308-233230_16x9_992.jpg",
      publishedAt: "2020-03-09T03:57:25Z",
      content:
        "Sen. Ted Cruz (R-Texas) is one of two members of Congress to announce Sunday night that he is placing himself into voluntary self-quarantine after he interacted briefly with a person who is infected by the novel coronavirus at the Conservative Political Actio… [+2894 chars]"
    },
    {
      source: {
        id: null,
        name: "Marketwatch.com"
      },
      author: "Associated Press",
      title:
        "Japan’s economy contracts 7% in December quarter, risking recession - MarketWatch",
      description:
        "Shrinkage was worse than expected, doesn’t even include coronavirus effects",
      url:
        "http://www.marketwatch.com/story/japans-economy-contracts-7-in-december-quarter-risking-recession-2020-03-08",
      urlToImage:
        "https://s.marketwatch.com/public/resources/images/MW-HV232_japane_ZG_20191113231330.jpg",
      publishedAt: "2020-03-09T03:45:54Z",
      content:
        "TOKYO Japans economy contracted at a dismal 7.1% annual rate during the October-December period, worse than the initial estimate, raising fears the worlds third largest economy could be headed to a recession. The contraction was the first for Japan in more th… [+1382 chars]"
    },
    {
      source: {
        id: null,
        name: "Popculture.com"
      },
      author: "Daniel S. Levine",
      title:
        "Stephen King's Tweet About the Coronavirus and 'The Stand' Draws Mixed Response From Social Media - PopCulture.com",
      description:
        "Author Stephen King took another swing at the coronavirus outbreak on Twitter in an attempt to assure everyone the virus will not lead to a post-apocalyptic world similar to his book The Stand. Response to the tweet was mixed, with some realizing he was only …",
      url:
        "https://popculture.com/celebrity/2020/03/09/stephen-king-tweet-coronavirus-the-stand-mixed-response/",
      urlToImage:
        "https://media.popculture.com/2020/03/stephen-king-getty-images-20082294-640x320.jpeg",
      publishedAt: "2020-03-09T03:25:00Z",
      content:
        "Author Stephen King took another swing at the coronavirus outbreak on Twitter in an attempt to assure everyone the virus will not lead to a post-apocalyptic world similar to his book The Stand. Response to the tweet was mixed, with some realizing he was only … [+2620 chars]"
    },
    {
      source: {
        id: null,
        name: "Foxbusiness.com"
      },
      author: "Ken Martin",
      title:
        "Dow futures drop over 1,000 pts as oil plunges 30% - Fox Business",
      description:
        "The virus has infected more than 100,000 people and killed more than 3,400 globally",
      url:
        "https://www.foxbusiness.com/markets/dow-futures-drop-1000-pts-as-oil-plunges-25",
      urlToImage:
        "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2020/03/0/0/SunVirus1.jpg?ve=1&tl=1",
      publishedAt: "2020-03-09T02:43:19Z",
      content:
        "Dow futures fell 1,200 points to start the week, oil plunged 30 percent as the coronavirus spreads and quarantine measures are taken.\r\nThe major futures indexes are indicating a drop of almost 5 percent when trading begins on Wall Street.\r\nAt one point, the s… [+2420 chars]"
    },
    {
      source: {
        id: null,
        name: "Nypost.com"
      },
      author: "Tamar Lapin",
      title:
        "About 4M coronavirus tests available by end of next week, White House expert says - New York Post ",
      description:
        "Around 4 million coronavirus tests will be available by the end of next week, a White House expert said on Sunday. White House coronavirus task force expert Dr. Anthony Fauci admitted on NBC’…",
      url:
        "https://nypost.com/2020/03/08/about-4m-coronavirus-tests-available-by-end-of-next-week-white-house-expert-says/",
      urlToImage:
        "https://thenypost.files.wordpress.com/2020/03/coronavirus-6.jpg?quality=90&strip=all&w=1200",
      publishedAt: "2020-03-09T02:20:00Z",
      content:
        "Around 4 million coronavirus tests will be available by the end of next week, a White House expert said on Sunday.\r\nWhite House coronavirus task force expert Dr. Anthony Fauci admitted on NBC’s “Meet the Press” that early attempts to send out tests were marre… [+1216 chars]"
    },
    {
      source: {
        id: null,
        name: "Yahoo.com"
      },
      author: "Lyndsey Parker",
      title:
        "Wheelchair user and standout singer Marna Michele: ‘It’s time for an American Idol that isn’t perfect’ - Yahoo Entertainment",
      description:
        "“Do I look like Kelly Clarkson… sitting down?” So joked Marna, as she rolled up like a boss in her wheelchair to her audition.",
      url:
        "https://www.yahoo.com/entertainment/wheelchair-user-and-standout-singer-marna-michele-its-time-for-an-american-idol-that-isnt-perfect-015206960.html",
      urlToImage:
        "https://s.yimg.com/uu/api/res/1.2/vmJO1NKdF0.Q8EgolNHt0Q--~B/aD02NzA7dz05Mjc7c209MTthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2020-03/23082400-6177-11ea-b4aa-3c2e629ec3b5",
      publishedAt: "2020-03-09T02:19:23Z",
      content:
        "Do I look like Kelly Clarkson sitting down? So joked Marna Michele, as she rolled up like a boss in her wheelchair to her American Idol audition on Sunday.\r\nBorn with arthrogryposis, a condition that causes extreme muscle weakness and joint stiffness and prev… [+11065 chars]"
    },
    {
      source: {
        id: "politico",
        name: "Politico"
      },
      author: null,
      title:
        "U.N. chief: Gender inequality biggest human rights challenge - POLITICO",
      description:
        "“Deep-rooted patriarchy and misogyny have created a yawning gender power gap,” he says.",
      url:
        "https://www.politico.com/news/2020/03/08/un-chief-gender-inequality-biggest-human-rights-challenge-123536",
      urlToImage:
        "https://static.politico.com/c8/3d/2a4ebefa4bbba5d723506bb53979/webp.net-resizeimage%20(25).jpg",
      publishedAt: "2020-03-09T02:15:16Z",
      content:
        "According to the index, about half the worlds men and women believe men make better political leaders and over 40% think men make better business executives and have greater rights to a job. Further, 28% feel it is justified for a husband to beat his wife.\r\nG… [+4111 chars]"
    },
    {
      source: {
        id: "the-washington-post",
        name: "The Washington Post"
      },
      author: "Cat Zakrzewski",
      title:
        "Twitter flags video retweeted by President Trump as ‘manipulated media’ - The Washington Post",
      description:
        "It’s the first time the social network has enforced a new policy to fight doctored videos and photos",
      url:
        "https://www.washingtonpost.com/technology/2020/03/08/twitter-flags-video-retweeted-by-president-trump-manipulated-media/",
      urlToImage:
        "https://www.washingtonpost.com/resizer/YXZGwR-6FkcPZhZ9PEzXPVEa29I=/1440x0/smart/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/J7Y4XPS6HII6VLCQDBYB4FHANU.jpg",
      publishedAt: "2020-03-09T01:10:00Z",
      content:
        "In this case, the altered video of Biden -- who has surged to the front of the Democratic race to oust Trump in November -- is based on a speech he gave in Kansas City, Mo., on Saturday. It was then shared on Twitter by Scavino, only edited to make it appear … [+2307 chars]"
    },
    {
      source: {
        id: null,
        name: "Bostonherald.com"
      },
      author: "Rick Sobey",
      title:
        "15 new coronavirus cases in Massachusetts, doubling overnight - Boston Herald",
      description:
        "The number of reported people infected with coronavirus in Massachusetts more than doubled overnight, the state Department of Public Health announced on Sunday.",
      url:
        "https://www.bostonherald.com/2020/03/08/15-new-coronavirus-cases-in-massachusetts-doubling-overnight/",
      urlToImage:
        "https://www.bostonherald.com/wp-content/uploads/2020/03/coronams01-2.jpg?w=1024&h=684",
      publishedAt: "2020-03-09T00:53:16Z",
      content:
        "The number of coronavirus infections in Massachusetts more than doubled overnight due to a Biogen conference, health authorities said — but top officials balked at canceling mass events.\r\nFifteen new presumptive positive cases of coronavirus were reported Sun… [+3635 chars]"
    },
    {
      source: {
        id: "cnbc",
        name: "CNBC"
      },
      author: "William Feuer",
      title:
        "US coronavirus cases top 500 as Oregon joins list of states declaring emergencies - CNBC",
      description:
        "Washington is one of the hardest-hit states in the U.S., with more than 100 confirmed cases and at least 16 deaths.",
      url:
        "https://www.cnbc.com/2020/03/08/coronavirus-live-updates-grand-princess-to-disembark-passengers.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/106431232-1583695472851gettyimages-1206099627.jpeg?v=1583695500",
      publishedAt: "2020-03-09T00:52:58Z",
      content:
        "Men wear face mask as they ride on the subway on March 8, 2020 in New York City.\r\nThe coverage on this live blog has ended but for up-to-the-minute coverage on the coronavirus, visit the live blog from CNBC's Asia-Pacific team.\r\nHere are today's key headlines… [+14522 chars]"
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal"
      },
      author: "Elizabeth Findell",
      title:
        "South by Southwest Hit Hard by Coronavirus Cancellation - The Wall Street Journal",
      description:
        "The Austin event’s insurance did not cover a disease-related cancellation, co-founder says",
      url:
        "https://www.wsj.com/articles/south-by-southwest-hit-hard-by-coronavirus-cancellation-11583711311",
      urlToImage: "https://images.wsj.net/im-162063/social",
      publishedAt: "2020-03-09T00:49:00Z",
      content:
        "AUSTIN, TexasThe chief executive of South by Southwest said organizers are unsure how they will keep the festival going after the city canceled it because of the novel coronavirus, which he said could cost them millions.\r\nAustin officials on Friday pulled the… [+274 chars]"
    },
    {
      source: {
        id: "google-news",
        name: "Google News"
      },
      author: null,
      title:
        "University of Puget Sound in Tacoma latest to turn to virtual classes because of coronavirus - Tacoma News Tribune",
      description: null,
      url:
        "https://news.google.com/__i/rss/rd/articles/CBMiP2h0dHBzOi8vd3d3LnRoZW5ld3N0cmlidW5lLmNvbS9uZXdzL2xvY2FsL2FydGljbGUyNDEwMTUxMjEuaHRtbNIBP2h0dHBzOi8vYW1wLnRoZW5ld3N0cmlidW5lLmNvbS9uZXdzL2xvY2FsL2FydGljbGUyNDEwMTUxMjEuaHRtbA?oc=5",
      urlToImage: null,
      publishedAt: "2020-03-09T00:46:00Z",
      content: null
    }
  ];

  constructor() {
    console.log("The data is : ");
  }

  ngOnInit() {}
}
