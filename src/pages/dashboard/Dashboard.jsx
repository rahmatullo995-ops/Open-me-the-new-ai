import "./Dashboard.css"
import Dollarimg from "../../assets/Dollar.png"
import BasketImg from "../../assets/Basket.png"
import HumanImg from "../../assets/Human.png"
import PeopleImg from "../../assets/People.png"
const Dashboard = () => {
    return(
        <div className="Header-stared">
            <h3>Dashboard</h3>

            <div className="Total-Revenue">
                <a>$10.540</a>
                <p>Total Revenue</p>
                <h2>22.45%👇🏻</h2>
                <img src={Dollarimg} alt="Dollar-image" />
            </div>
            <div className="Orders">
                <a>1,056</a>
                <p>Orders</p>
                <h2>15.34%👆🏻</h2>
                <img src={BasketImg} alt="Basket-image" />
            </div>
            <div className="Active-Sessions">
                <a>48</a>
                <p>Active Sessions</p>
                <h2>18.25%👇🏻</h2>
                <img src={HumanImg} alt="Human-image" />
            </div>
            <div>
                <a>5.420</a>
                <p>Total Sessions</p>
                <h2>10.24%👆🏻</h2>
                <img src={PeopleImg} alt="People-image" />
            </div>
        </div>
    )
}

export default Dashboard;