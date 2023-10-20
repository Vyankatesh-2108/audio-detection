import Hero from "../components/Hero";
import Navbar from "../components/Navbar"
import HomeImgage from "../assets/1.jpg"
import Details from "../components/Details";
import Footer from "../components/Footer"

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
        <Footer />
        </>
    )
}

export default Home;