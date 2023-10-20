import Hero from "../components/Hero";
import Navbar from "../components/Navbar"
function Home () {
    return(
        <>
        <Navbar/>
            <Hero 
                cName="hero"
                heroImg="https://images.unsplash.com/photo-1453974336165-b5c58464f1ed?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmxpbmR8ZW58MHx8MHx8fDA%3D"
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