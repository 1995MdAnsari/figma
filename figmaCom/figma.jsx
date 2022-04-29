import React,{Component} from "react";
import "./figma.css"
// import imgs from "./bgImg.jpg"
import weather from "./weather.gif"
class Figma extends Component{
    render() {
        return(

            <React.Fragment>
                <header>
                    <h2 className="head_title">amazing mountain</h2>
                    
                    <nav className="navs">
                        <ul className="nav_list">
                            <li className="nav_list-item">
                                <a href="" className="nav_link">SKI</a>
                            </li>
                            <li className="nav_list-item">
                                <a href="" className="nav_link">GOLF</a>
                            </li>
                            <li className="nav_list-item">
                                <a href="" className="nav_link">HIKING</a>
                            </li>
                            <li className="nav_list-item">
                                <a href="" className="nav_link">CONTACT</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="weather">
                        <div className="weather_icon">
                            <img src={weather}  alt="logo2" />
                            
                        </div>
                        <p className="weather_info">
                            Current weather <span>-6℃</span>
                        </p>
                        <p className="weather_info">
                            recent snowfall <span>35cm</span>
                        </p>
                    </div>
                </header>
                <main className="main main_ski">
                    <h1 className="main_title">Get next years pass now to save</h1>
                    <p className="main_intro">If it's too steep, 
                    you're too old. Straight shot shane mcconkey 
                    ookout pass snowmass bode miller freestyle tree
                     well durango corn snow bromley mountain. 
                     Stockli st moritz sundown ripping the bumps 
                     swix chowder boreal suzy chaffee bumps hospital 
                     air kastle.</p>
                    <a className="btn btn_primary" href="">get a season pass</a>
                    <a className="btn btn_outline" href="">get tickets</a>
                </main>
            </React.Fragment>   
        )
    }
}

export default Figma