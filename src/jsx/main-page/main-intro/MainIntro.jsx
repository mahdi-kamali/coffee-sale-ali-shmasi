
const MainIntro = () => {
    return (
        <section className="main-intro">
            <div className="left">
                <div className="logo">
                    <img src={require("../../../images/main-intro/logo.png")} alt="" />
                </div>
                <div className="slogon">
                    Coffee Heads About The Rest
                </div>
                <div className="beans">
                    <img src={require("../../../images/main-intro/beans.png")} />
                    <h1>
                        Best Beans
                        <span>Best Coffee</span>
                    </h1>

                </div>
            </div>
            <div className="right">
                <h1>"Coffee Shop"</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, nulla fuga consequuntur optio sapiente quam velit reprehenderit obcaecati cumque consequatur repudiandae a maiores odio earum debitis hic quis voluptatem commodi?</p>
                <div className="open">
                    <span>opening 27 august</span>
                    <h2>9AM - 10PM</h2>
                </div>
                <div className="links">
                    <div className="web">www.website.com</div>
                    <ul>
                        <li><a href="#">wa</a></li>
                        <li><a href="#">wa</a></li>
                        <li><a href="#">wa</a></li>
                    </ul>
                </div>
            </div>
            <div className="coffee">
                <img src={require("../../../images/main-intro/4.png")} />
            </div>
        </section>
    )
}

export default MainIntro
