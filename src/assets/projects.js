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
//   link     - the live site, or null when there isn't one
//   github   - the public repo, or null
//   tag      - the code-style label shown above the title: [element, attribute, value]
//   featured - recent work, shown large on the home page and at the top of /projects
//   picture  - image shown on the card; alt describes it for screen readers
const projects = [
    {
        name: "Pokéleap",
        featured: true,
        link: "https://pokeleap.com/",
        github: null,
        tag: ["game", "live", "pokeleap.com"],
        picture: PokeleapPic,
        alt: "Pokéleap title card with pixel-art Pokémon running across a grass platform",
        desc: "A live browser platformer with a new level every day, a daily leaderboard, Discord sign-in with cloud saves, and analytics endpoints I wrote to track session length and level clears.",
        tech: ["Phaser", "JavaScript", "Vite", "Cloudflare Workers", "D1"]
    },
    {
        name: "LISAP",
        featured: true,
        link: null,
        github: "https://github.com/EastonShaum/LISAP",
        tag: ["service", "pipeline", "gmail → pub/sub → push"],
        picture: LisapPic,
        alt: "Diagram of a Gmail inbox sending a verification code to a phone notification",
        desc: "Real-time verification-code delivery. It watches a Gmail inbox through Google Cloud Pub/Sub and pushes streaming-account sign-in codes to phones with Firebase Cloud Messaging. I tried Gmail polling and Twilio SMS first, and picked Pub/Sub and push for lower latency and cost.",
        tech: ["Node.js", "Express", "React", "Gmail API", "Pub/Sub", "Firebase"]
    },
    {
        name: "ClipForge",
        featured: true,
        link: null,
        github: "https://github.com/EastonShaum/ClipForge",
        tag: ["pipeline", "runs-on", "raspberry-pi-5"],
        picture: ClipForgePic,
        alt: "Diagram of long-form video on a timeline turned into a vertical captioned clip",
        desc: "A self-hosted pipeline for paid clipping campaigns. It records or downloads footage, transcribes it with Whisper, has Claude pick the moments worth clipping, and renders 9:16 videos with FFmpeg. A Pi runs the brain, a laptop does the heavy rendering over Tailscale, and every clip waits for my approval on my phone.",
        tech: ["Python", "FastAPI", "Whisper", "Claude API", "FFmpeg", "SQLite", "Tailscale"]
    },
    {
        name: "Kronos Trader",
        featured: true,
        link: null,
        github: "https://github.com/EastonShaum/kronos-trader",
        tag: ["experiment", "status", "retired"],
        picture: KronosPic,
        alt: "Candlestick price chart with a forecast cone extending past the current time",
        desc: "Ran the Kronos forecasting model on a Raspberry Pi 5 for six months, paper trading crypto and stocks on its predictions. Over 22,000 scored forecasts, benchmarks and bootstrap tests showed no real edge (51% accuracy), so I wrote up the results and shut it down.",
        tech: ["Python", "FastAPI", "PyTorch", "SQLAlchemy", "APScheduler", "React"]
    },
    {
        name: "CooKit",
        link: null,
        github: "https://github.com/jbped/cookit",
        picture: CookitPic,
        alt: "CooKit recipe app logo",
        desc: "Full-stack recipe app for adding, viewing and saving recipes to your \"Kit\". Built with a team.",
        tech: ["React", "MongoDB", "GraphQL", "SCSS"]
    },
    {
        name: "GoalGetter",
        link: null,
        github: "https://github.com/EastonShaum/Goal-Getter",
        picture: GoalGetterPic,
        alt: "GoalGetter medal logo",
        desc: "Full-stack site for setting goals and tracking progress on them.",
        tech: ["JavaScript", "MySQL", "Express"]
    },
    {
        name: "Readme Generator",
        link: null,
        github: "https://github.com/EastonShaum/Professional-ReadMe-Generator",
        picture: ReadmePic,
        alt: "Screenshot of a generated README file",
        desc: "Command-line tool that writes a README.md for a GitHub repo from a few questions.",
        tech: ["Node.js", "Inquirer"]
    },
    {
        name: "JoinCoin",
        link: "https://eastonshaum.github.io/Join-Coin/",
        github: "https://github.com/EastonShaum/Join-Coin",
        picture: JoinCoinPic,
        contain: true,
        alt: "Bitcoin logo",
        desc: "Search and browse trending cryptocurrencies.",
        tech: ["JavaScript", "REST APIs", "HTML", "CSS"]
    },
    {
        name: "TechBlog",
        link: null,
        github: "https://github.com/EastonShaum/Tech-Blog-Model-View-Controller",
        picture: TechBlogPic,
        alt: "TechBlog home page",
        desc: "A small MVC blog for posting about tech.",
        tech: ["Handlebars", "Express", "MySQL"]
    },
    {
        name: "Budget Tracker PWA",
        link: null,
        github: "https://github.com/EastonShaum/Budget-Tracker-PWA",
        picture: BudgetPic,
        alt: "Budget tracker chart",
        desc: "Expense tracker that keeps working offline.",
        tech: ["IndexedDB", "Service Workers", "MongoDB"]
    }
]

export default projects
