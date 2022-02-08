import react from "react"
import { ReactDOM } from "react"
import Navbar from "./Navbar"


function Footer() {
    return(
        <div className="footer-position">
            <footer className="my-footer">
                <div className="footer-elements">
                © 2022 Josep AnSab
                </div>                   
            </footer>
        </div>
    )
}

function MainComponents() {
    return(
        <div className="row main-comp">
            <div className="col-sm-4"></div>
            <div className="col-sm-6">
                <h1>My web in React</h1>
                <h3>Reasons I love React?</h3>
                <ul className="main-items">
                    <li>It's composable</li>
                    <li>It's declarative</li>
                    <li>Realased in 2013</li>
                </ul>
            </div>
            <div class="col-sm-2"></div>
         </div>
    )
}
 function AllComponents() {
     return (
        
        <div className="main-div">
        <Navbar />
        <MainComponents />
        <Footer />
        </div> 
     ) 
 }

ReactDOM.render(<AllComponents />, document.getElementById("root"))