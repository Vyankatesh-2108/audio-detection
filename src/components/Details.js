import img1 from "../assets/img1.jpg"
import img2 from "../assets/img4.jpg"
import img3 from "../assets/img3.jpg"
import img4 from "../assets/img2.jpg"
import DetailsData from "./DetailsData"
import "./DetailsStyles.css"

const Details = () =>{
    return (
        <div className="details">
            <h1>Transforming Education</h1>
            <p></p>

            <DetailsData 
                className="first-des"
                heading="Every child can learn, and learning is for life."
                text="sentiment sound is an online platform built specifically for blind and visually impaired students. The platform is fully self-voicing and highly visual right in the browser on any device, from school or home.Sentiment Sound remote access is a game changer for blind and visually impaired students. Whether you have 1 student or 100, it only takes a few minutes to get up and running with sentiment sound. You can check out a free trial on our website and find out just how speech emotion is detected through the voice."
                image1={img1}
                image2={img2}
            />

            <DetailsData 
                className="first-des-reverse"
                heading="We start where children are."
                text="Children with multiple disabilities have the right to learn and thrive, yet they are often invisible and excluded from school and community life. Some are isolated, never able to realise their full potential. Sentiment Sound works with schools to make sure every child is included."
                image1={img3}
                image2={img4}
            />
        </div>
    );
}

export default Details;