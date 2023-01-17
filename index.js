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