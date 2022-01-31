
//declarative
// ReactDOM.render(<h1 className="header">This is JSX</h1>, document.getElementById("root"))

// const navbar = (
//     <nav>
//         <h1>Menú</h1>
//         <ul>
//             <li>Primer</li>
//             <li>Segon</li>
//             <li>Postre</li>
//         </ul>
//     </nav>
// )

// ReactDOM.render(navbar, document.getElementById("root"))

// const page = (
//        <div>
//            <img src="./reactlogo.png" width="60px"/>
//             <h1>My web in React</h1>
//             <h3>Reasons I love React</h3>
//             <ol>
//                 <li>It's composable</li>
//                 <li>It's declarative</li>
//                 <li>Realased in 2013</li>
//             </ol>
//     </div> 
// )

// Import Js
//import Header from "./Header"

function Header() {
    return (
        <div>
        <header>
            <nav className="nav">
            <img src="./reactlogo.png" className="nav-logo"/>
            <ul className="nav-items">
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            </nav>
        </header>
        </div>
    )
}


function Footer() {
    return(
        <div>
            <footer>© 2022 Josep AnSab</footer>
        </div>
    )
}
 function FunctName() {
     return (
        
        <div>
        <Header />
         <h1>My web in React</h1>
         <h3>Reasons I love React</h3>
         <ol>
             <li>It's composable</li>
             <li>It's declarative</li>
             <li>Realased in 2013</li>
         </ol>
         <Footer />
        </div> 
     ) 
 }

ReactDOM.render(<FunctName />, document.getElementById("root"))