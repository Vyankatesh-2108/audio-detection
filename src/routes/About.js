import Hero from "../components/Hero";
import Navbar from "../components/Navbar"
import AboutImg from "../assets/night.jpg"

function About () {
    return(
        <>
        <Navbar/>
            <Hero 
                cName="hero"
                heroImg={AboutImg}
                title="Your Journey Your Story"
                text="Choose Your Favorite Destination."
                buttonText="Travel Plan"
                url="/"
                btnClass="show"
            />
        </>
    )
}

export default About;