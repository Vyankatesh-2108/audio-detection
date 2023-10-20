import "./DetailsStyles.css"
import { Component } from "react" 

class DetailsData extends Component{
    render(){
        return(
            <div className={this.props.className}>
                <div className="des-text">
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.text}</p>
                </div>
                <div className="image">
                    <img alt="img" src={this.props.image1}/>
                    <img alt="img" src={this.props.image2}/>
                </div>
            </div>
        )
    }
}

export default DetailsData