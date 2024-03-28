import React from 'react'

class Updatee extends React.Component{
    constructor(){
        super();
        console.log("hello constructor")
        this.state={
            count:0
        }
    }
    componentDidUpdate(preProps,preState,snapshot){
        console.log("hello componenetDidUpdate",snapshot)
        if(this.state.count<5){
            this.setState({count:this.state.count+1})
        }
    }
    render(){
        console.log("hello render")
        return(
            <>
            <h1>hello pri</h1>
            <button onClick={()=>{this.setState({count:1})}}>update name</button>
            </>
        )
    }
}

export default Updatee;