import React from "react";
import "./ViewStack.css";

class ViewStack extends React.Component{
    constructor(){
        super();
        this.state = {
            currentIndex : 0
        }
    }

    check_item_index(index){
        return index === this.state.currentIndex ? "view_show" : "view_hide";
    }

    set_current_index(index){
        this.setState({currentIndex:index});
    }

    render(){
        return(
            <div>
                {
                    React.Children.map(this.props.children,( element,index )=>{
                        return(
                            <div className={ this.check_item_index( index ) }>{ element }</div>
                        )
                    })
                }
            </div>
        )
    }
}

export default ViewStack;