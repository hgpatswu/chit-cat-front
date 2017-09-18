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
        return index === this.state.currentIndex ? "view_item view_show" : "view_item";
    }

    set_current_index(index){
        this.setState({currentIndex:index});
    }

    render(){
        return(
            <div>
                <div className="view_item_wrap">
                    {
                        React.Children.map(this.props.children,( element,index )=>{
                            return(
                                <div className={ this.check_item_index( index ) }>{ element }</div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default ViewStack;