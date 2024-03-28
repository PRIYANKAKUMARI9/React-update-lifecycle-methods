import React from 'react'

class ShouldUpdate extends React.Component{
    constructor(){
        super();
        this.state={
            count:0
        }
    }
    shouldComponentUpdate(){
       console.log("shouldComponentUpdate here",this.state.count);
       if(this.state.count<5 && this.state.count<10){
        return true;
       }
       return true;
    }
    render(){
        return(
            <div>count here  {this.state.count}
            <br/>
            <button onClick={()=>{this.setState({count:this.state.count+1})}}>update should count</button>
            </div>
        )
    }
}

export default ShouldUpdate;