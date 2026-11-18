import PokeleapPic from './images/pokeleap.png'
import LisapPic from './images/lisap.svg'
import ClipForgePic from './images/clipforge.svg'
import KronosPic from './images/kronos.svg'
import GoalGetterPic from './images/GoalPic1.png'
import JoinCoinPic from './images/bitcoin.svg'
import CookitPic from './images/cookit.png'
import ReadmePic from './images/readme.jpg'
import TechBlogPic from './images/techBlog.jpg'
import BudgetPic from './images/budget.jpg'

// Each project:
//   link    - the live site, or null when there isn't one (the title then links to github)
//   github  - the public repo, or null when the code is private
//   picture - image shown on the card; alt describes it for screen readers
const projects = [
    {
        name: "Pokéleap",
        link: "https://pokeleap.com/",
        github: null,
        picture: PokeleapPic,
        alt: "Pokéleap title card with pixel-art Pokémon running across a grass platform",
        desc: "A live browser platformer with a new daily level, a daily leaderboard, Discord sign-in with cloud saves, and custom analytics that track sessions, level clears and session length.",
        tech: "Phaser, JavaScript, Vite, Cloudflare Workers, D1 (SQLite), Cloudflare Pages"
    },
    {
        name: "LISAP",
        link: null,
        github: "https://github.com/EastonShaum/LISAP",
        picture: LisapPic,
        alt: "Diagram of a Gmail inbox sending a verification code to a phone notification",
        desc: "Real-time verification-code delivery: watches a Gmail inbox through Google Cloud Pub/Sub and pushes streaming-account sign-in codes to phones with Firebase Cloud Messaging.",
        tech: "Node.js, Express, React, Gmail API, Google Cloud Pub/Sub, Firebase (Firestore, Cloud Messaging)"
    },
    {
        name: "ClipForge",
        link: null,
        github: null,
        picture: ClipForgePic,
        alt: "Diagram of long-form video on a timeline turned into a vertical captioned clip",
        desc: "Turns long-form podcasts, interviews and streams into vertical clips: transcribes with Whisper, has Claude pick the best moments, renders 9:16 video with word-by-word captions, and sends each clip to a phone for human review.",
        tech: "Python, Whisper, Claude API, FFmpeg, SQLite, Raspberry Pi 5, Tailscale"
    },
    {
        name: "Kronos Trader",
        link: null,
        github: "https://github.com/EastonShaum/kronos-trader",
        picture: KronosPic,
        alt: "Candlestick price chart with a forecast cone extending past the current time",
        desc: "Runs the Kronos time-series foundation model on a Raspberry Pi 5 to forecast the next 24 hours of crypto, stock and forex prices, then paper trades on confident predictions, with backtesting, a cost model and a live dashboard.",
        tech: "Python, FastAPI, PyTorch, SQLAlchemy, APScheduler, React, Raspberry Pi 5"
    },
    {
        name: "CooKit",
        link: null,
        github: "https://github.com/jbped/cookit",
        picture: CookitPic,
        alt: "CooKit recipe app logo",
        desc: "Full stack recipe application for adding, viewing, and saving recipes to your \"Kit\".",
        tech: "React, MongoDB, GraphQL, JavaScript, HTML, SCSS"
    },
    {
        name: "GoalGetter",
        link: null,
        github: "https://github.com/EastonShaum/Goal-Getter",
        picture: GoalGetterPic,
        alt: "GoalGetter medal logo",
        desc: "Full stack life improvement website for setting and accomplishing goals.",
        tech: "JavaScript, MySQL, Express"
    },
    {
        name: "Readme Generator",
        link: null,
        github: "https://github.com/EastonShaum/Professional-ReadMe-Generator",
        picture: ReadmePic,
        alt: "Screenshot of a generated README file",
        desc: "Command-line program for quickly creating a README.md for GitHub repos.",
        tech: "JavaScript, Node.js, Inquirer"
    },
    {
        name: "JoinCoin",
        link: "https://eastonshaum.github.io/Join-Coin/",
        github: "https://github.com/EastonShaum/Join-Coin",
        picture: JoinCoinPic,
        alt: "Bitcoin logo",
        desc: "Website for searching and seeing trending cryptocurrencies.",
        tech: "JavaScript, REST APIs, HTML, CSS"
    },
    {
        name: "TechBlog",
        link: null,
        github: "https://github.com/EastonShaum/Tech-Blog-Model-View-Controller",
        picture: TechBlogPic,
        alt: "TechBlog home page",
        desc: "Simple blog site for people to post about techy things.",
        tech: "JavaScript, Handlebars, Express, MySQL"
    },
    {
        name: "Budget Tracker PWA",
        link: null,
        github: "https://github.com/EastonShaum/Budget-Tracker-PWA",
        picture: BudgetPic,
        alt: "Budget tracker chart",
        desc: "Website for keeping track of expenses, including while offline.",
        tech: "JavaScript, IndexedDB, Service Workers, MongoDB"
    }
]

export default projects
