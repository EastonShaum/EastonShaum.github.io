import GoalGetterPic from './images/GoalPic1.png'
import JoinCoinPic from './images/bitcoin.svg'
import CookitPic from './images/cookit.png'


const projectInfo = () => {
    const projects = [
        {
            name: "Cookit",
            link: "https://cookit-book.herokuapp.com/",
            github: "https://github.com/jbped/cookit",
            picture: CookitPic,
            desc: "Recipe application for adding, viewing, and saving recipes to your \"Kit\"",
            tech: "Technolgies: React, MongoDB, GraphQL, JavaScript, Html, SCSS "
        },
        {
            name: "GoalGetter",
            link: "https://goal-getters-app.herokuapp.com/",
            github: "https://github.com/EastonShaum/Goal-Getter",
            picture: GoalGetterPic,
            desc: "Full stack motivational website for setting and accomplishing goals.",
            tech: "Technolgies: JavaScript, MySQL, Express"
        },
        {
            name: "JoinCoin",
            link: "https://eastonshaum.github.io/Join-Coin/",
            github: "https://github.com/EastonShaum/Join-Coin",
            picture: JoinCoinPic,
            desc: "Useful website for searching and seeing trending Cryptocurrencie",
            tech: "Technolgies: JavaScript, API, Html, CSS"
        }
    ]

    return projects
}

export default projectInfo()