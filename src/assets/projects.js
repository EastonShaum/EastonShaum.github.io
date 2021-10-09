import GoalGetterPic from './images/GoalPic1.png'
import JoinCoinPic from './images/bitcoin.svg'
import CookitPic from './images/cookit.png'
import ReadmePic from './images/readme.jpg'
import TechBlogPic from './images/techBlog.jpg'
import BudgetPic from './images/budget.jpg'



const projectInfo = () => {
    const projects = [
        {
            name: "CooKit",
            link: "https://cookit-book.herokuapp.com/",
            github: "https://github.com/jbped/cookit",
            picture: CookitPic,
            desc: "Full stack recipe application for adding, viewing, and saving recipes to your \"Kit\"",
            tech: "Technolgies: React, MongoDB, GraphQL, JavaScript, Html, SCSS "
        },
        {
            name: "GoalGetter",
            link: "https://goal-getters-app.herokuapp.com/",
            github: "https://github.com/EastonShaum/Goal-Getter",
            picture: GoalGetterPic,
            desc: "Full stack life improvement website for setting and accomplishing goals.",
            tech: "Technolgies: JavaScript, MySQL, Express"
        },
        {
            name: "Readme Generator",
            link: "https://github.com/EastonShaum/Professional-ReadMe-Generator",
            github: "https://github.com/EastonShaum/Professional-ReadMe-Generator",
            picture: ReadmePic,
            desc: "Program made for easily creating a README.md for github repos.",
            tech: "Technolgies: JavaScript, Inquirer npm package"
        },
        {
            name: "JoinCoin",
            link: "https://eastonshaum.github.io/Join-Coin/",
            github: "https://github.com/EastonShaum/Join-Coin",
            picture: JoinCoinPic,
            desc: "Useful website for searching and seeing trending Cryptocurrencies",
            tech: "Technolgies: JavaScript, API, Html, CSS"
        },
        
        {
            name: "TechBlog",
            link: "https://damp-brushlands-19007.herokuapp.com/",
            github: "https://github.com/EastonShaum/Tech-Blog-Model-View-Controller",
            picture: TechBlogPic,
            desc: "Simple blog site for people to post about techy things!",
            tech: "Technolgies: JavaScript, Handlebars, Html, CSS"
        },
        {
            name: "Budget Tracker PWA",
            link: "https://dry-coast-15665.herokuapp.com/",
            github: "https://github.com/EastonShaum/Budget-Tracker-PWA",
            picture: BudgetPic,
            desc: "Simple webite for keeping track of expenses and updating them even while offline!",
            tech: "Technolgies: JavaScript, Html, CSS"
        }
    ]

    return projects
}

export default projectInfo()