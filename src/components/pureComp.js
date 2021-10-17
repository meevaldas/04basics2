import React,{ Component } from 'react';

class PureComp extends Component{
    state={
        name:'Jordan'
    }

/*shouldComponentUpdate(nextProps, nextState) {
        if(nextState.name === this.state.name){
            return false;
        }
        return true;
}*/

    render() {
        console.log('render');

        return (
            <>
                <h3>Hi, I am a pure component.</h3>
                <h2>{this.state.name}</h2>
                <button onClick={() => {
                    this.setState({name: 'Jordan'})
                }}>Click to Change
                </button>
            </>
        );
    }

}

export default PureComp;