import Hero from "../components/Hero";
import Navbar from "../components/Navbar"
import AboutImg from "../assets/contact.jpg"


function Contact () {
    return(
        <>
        <Navbar/>
        <Hero 
                cName="hero-mid"
                heroImg={AboutImg}
                title="Contact"
               
                btnClass="hide"
            />
        </>
    )
}

export default Contact;