import React from "react";

class TextToImage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        img: '',
        value:"",
        item :[]
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange =(event) =>{
        this.setState({
            value:event.target.value
        })
    }

    handleSubmit = (event ) =>{
       event.preventDefault();
       this.setState({
        item:this.state.value
       })
       
       let canvasTxt = document.getElementById("canvasComponent").getContext("2d");
       canvasTxt.canvas.width = canvasTxt.measureText(this.state.value).width;
       canvasTxt.fillText(...this.state.value, this.props.x, this.props.y);
       this.setState({
         img: canvasTxt.canvas.toDataURL()
       });
       console.log(this.state.item)
       console.log(this.state.img)
    }
  
    componentDidMount() {
    
    }
  
    render() {
      return (
        <div>
        
          <canvas id="canvasComponent" style={{ display: "none" }} />
          {this.state.img.length > 0 ?
              <img id="imageComponent" src={this.state.img} />
          : null}

            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="enter the text here" name="item" value={this.state.value} onChange={this.handleChange} ></input>
                <button type="submit" value = "submit">Generate Bill</button>
            </form>

        </div>
      );
    }
  }
  
export default TextToImage