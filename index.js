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