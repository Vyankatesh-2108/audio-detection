import Hero from "../components/Hero";
import Navbar from "../components/Navbar"
import HomeImgage from "../assets/bg.jpg"
import Details from "../components/Details";
import Footer from "../components/Footer"

function Home () {
    return(
        <>
        <Navbar/>
            <Hero 
                cName="hero"
                heroImg={HomeImgage}
                title="Unlocking opportunity. Igniting change."
                text="Every child can learn everywhere."
                buttonText="Let's Start"
                url="/"
                btnClass="show"
            />
        <Details/>
        <Footer />
        </>
    )
}

export default Home;