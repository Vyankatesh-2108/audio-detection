import img1 from "../assets/1.jpg"
import img2 from "../assets/3.jpg"
import img3 from "../assets/4.jpg"
import img4 from "../assets/5.jpg"
import DetailsData from "./DetailsData"
import "./DetailsStyles.css"

const Details = () =>{
    return (
        <div className="details">
            <h1>Popular Destinations</h1>
            <p>Toursgive you the oppertunity to see a lot, within a time frame </p>

            <DetailsData 
                className="first-des"
                heading="Taal Volcano, Batangas"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eveniet magnam facere delectus cum tenetur rerum recusandae modi harum, dicta ea consequuntur consequatur nisi quis mollitia accusamus impedit nihil ipsum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eveniet magnam facere delectus cum tenetur rerum recusandae modi harum, dicta ea consequuntur consequatur nisi quis mollitia accusamus impedit nihil ipsum."
                image1={img1}
                image2={img2}
            />

            <DetailsData 
                className="first-des-reverse"
                heading="Mt. Daguldul, Batangas"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eveniet magnam facere delectus cum tenetur rerum recusandae modi harum, dicta ea consequuntur consequatur nisi quis mollitia accusamus impedit nihil ipsum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eveniet magnam facere delectus cum tenetur rerum recusandae modi harum, dicta ea consequuntur consequatur nisi quis mollitia accusamus impedit nihil ipsum."
                image1={img3}
                image2={img4}
            />
        </div>
    );
}

export default Details;