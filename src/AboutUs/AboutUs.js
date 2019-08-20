import React,{Component} from 'react'

class AboutUs extends Component{
    state = {
        isClicked: true
    }

    onClickHandler = () => {
        this.setState({
            isClicked: !this.state.isClicked
        })
    }

    render()
    {
        return(
            <div>
                {this.state.isClicked === true
                    ? <h1>About Us</h1> : null}
                <button onClick={this.onClickHandler}>Change text</button>
            </div>
        )
    }
}

export default AboutUs