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

function Rage() {
    return (
       <div>
        <header>
            <nav>
                <ul>
                    <li>Price</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>

        <h1>Reasons I'm excited to learn React</h1>
        <ol>
            <li>It's a popular library, so I'll be 
            able to fit in with the cool kids!</li>
            <li>I'm more likely to get a job as a developer
            if I know React</li>
        </ol>
        </div>
    )
}
ReactDOM.render(<Rage />, document.getElementById("Rex"))
function Footer() {
    return (
        <footer>
            <capital>© 2021 Ziroll development. All rights reserved.</capital>
        </footer>
    )
}

ReactDOM.render(<Footer/>, document.getElementById("Next"))
function Main() {
    return<h1>Main component</h1>
}
ReactDOM.render(<Main />, document.getElementById("Bob"))
function Red(){
    return<nav>
            <img src="../images/react-icon-small.png" className="nav--icon" />
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">React Course - Project 1</h4>
        </nav>
    
}
ReactDOM.render(<Red />, document.getElementById("Net"))

function Main2() {
    return <main>
            <h1 className="main--title">Fun facts about React</h1>
            <ol className="main--facts">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ol>
      </main>
    
}
ReactDOM.render(<Main2 />, document.getElementById("Bet"))
function Main3() {
    return<main>
            <h1 className="main--title">Fun facts about React</h1>
            <ul className="main--facts">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>

}
ReactDOM.render(<Main3 />, document.getElementById("Set"))
