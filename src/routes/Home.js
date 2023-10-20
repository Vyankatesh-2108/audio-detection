import Hero from "../components/Hero";
import Navbar from "../components/Navbar"
import HomeImgage from "../assets/home.jpg"

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
        </>
    )
}

export default Home;