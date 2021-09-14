import me from "../assets/me.jpeg";
import family from "../assets/wife_kids.JPG";
function Home () {
       return(
        <div className="container">
            <div className="row">
                <div className="text-center">
                    <h1> Hi! My name is Craig A Stueber</h1>
                    <h3>Let me tell you a little bit about myself.</h3>
                </div>
                <div className="col-md-6">
                    <img className="imgMe" src={me} alt="A Middle Aged Man smiling with the James River behind him." />
                    
                </div>
                <div className="col-md-6 mt-4 p-4">
                    <p>
                        I am a family man, with 2 teenage kids and a wonderful wife. I decided to go back to school in my 30's to not only to bring more joy to our lives, but 
                        to lead by example. Showing my kids that it does not matter where you are, if you work hard you can make something of yourself. When I was in school working 2 
                        jobs and taking classes full time, RTS Labs was the development company I dreamt about. 
                    </p>
                    <p>
                        From contract work to a great little start up at Talos IoT, I have learned a lot about Front-End development, working with teams of different sizes and managing my time. 
                        My work in React has prepared me to be a productive member of the team at my <strong>DREAM JOB</strong> at RTS Labs.
                    </p>
                    <p>
                        I love the five constants that RTS Labs have set to never change. CTL+BE is such a great fundation to build a culture upon. As a person who never stops learning
                        myself, I love the idea of being surrounded by like minded professionals that are always learning and helping those around them become the best developer and person they can be.

                    </p>
                   
                </div>
                <div className="QuoteDiv">
                   <h2> 
                        I hope you find my exercise to your liking. Because I would love to join a development team based around a hard-working but casual workplace with no crap, 
                        few meetings, and a get-it-done philosophy.
                   </h2>
                   
                </div>
                <img className="ImgFamily" src={family} alt="The Prettiest lady in the world, and two smiling kids that are still young and cute." />
            </div>
        </div>
    )
}

export default Home;