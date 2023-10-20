import Hero from "../components/Hero";
import Navbar from "../components/Navbar"
import HomeImgage from "../assets/home.jpg"
import Details from "../components/Details";

function Home () {
    return(
        <>
        <Navbar/>
            <Hero 
                cName="hero"
                heroImg={HomeImgage}
                title="Your Journey Your Story"
                text="Choose Your Favorite Destination."
                buttonText="Travel Plan"
                url="/"
                btnClass="show"
            />
        <Details/>
        </>
    )
}

export default Home;