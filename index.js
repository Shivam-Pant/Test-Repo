import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import MainContent from "./MainContent"
function MainContent() {
    return( <h1>This Is My Work</h1>

    )
}
ReactDOM.render(<h1>I Have Done It</h1>, document.getElementById("Block"))
ReactDOM.render(<p>Hi I'm Learning New Things</p>, document.querySelector("#Call"))
ReactDOM.render(
                <ul><li>Work Done</li><li>Work Not Done</li></ul>,
                document.getElementById("List")
                )
ReactDOM.render(
               <div> <MainContent /></div>,
               document.getElementById("Work")
)
const h1 = document.createElement("h1")
h1.textContent = "Do Your Work Easily And Fast"
h1.className = "header"
document.getElementById("Block").append(h1)
const h2 = document.createElement("h2")
h2.textcontent = "Do Your Work Or Get Out"
h2.className = "lower"
console.log(h2)
const element = <h2 className="lower">This Is Not Good</h2>
console.log(element)
ReactDOM.render(element, document.getElementById("Rock"))
const tier = (
           <div>
            <h1>Working</h1>
            <p>This Is Done By Myself</p>
           </div>

)
ReactDOM.render(tier, document.querySelector("#Work"))
const navbar = (
    <nav>
        <h1> StarLucks </h1>
        <ul>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

ReactDOM.render(navbar, document.getElementById("Root"))

const page = (
    <div>
        <h1>My awesome website in React</h1>
        <h3>Reasons I love React</h3>
        <ol>
            <li>It's composable</li>
            <li>It's declarative</li>
            <li>It's a hireable skill</li>
            <li>It's actively maintained by skilled people</li>
        </ol>
    </div>
)

ReactDOM.render(page, document.querySelector("#Boot"))

const give = (
    <div>
        <img src="./reactjs-ar21.png" width="40px" />
        <h1>Fun facts about React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>
)

ReactDOM.render(give, document.getElementById("Box"))

function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("Next"))
