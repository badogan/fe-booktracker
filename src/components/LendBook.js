import React from "react";
import API from '../APIsHelpers/API'

export default class LendBook extends React.Component {
  state = {
    initiateLendingProcess: false,
    lentTo: null
  };

  handlePotentialLentTo = e => this.setState({ lentTo: e.target.value });

  handleLentTo = () => {
      API.patchBook(this.props.user._id,this.props.book._id,{lentTo:this.state.lentTo}).then(data=>console.log('after patch: ',data))
  }

  render() {
    return (
      <React.Fragment>
        {!this.state.initiateLendingProcess && <button onClick={()=>this.setState({initiateLendingProcess:true})}>I want to lend this book</button>}

        {this.state.initiateLendingProcess && <input onChange={this.handlePotentialLentTo} placeholder='who borrowed?'></input>
        }

        {this.state.initiateLendingProcess && <button onClick={()=>this.handleLentTo()}>Lend!</button>}
      </React.Fragment>
    );
  }
}
