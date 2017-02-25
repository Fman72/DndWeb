import React from 'react';
import StartPage from '../presentational/startPage.js';
import {connect} from 'react-redux';
import {setUser} from '../../actions/userActions.js';

class StartPageContainer extends React.Component{
  constructor(props){
    super(props);
    this.scrollUp = this.scrollUp.bind(this);
    this.getRef = this.getRef.bind(this);
    this.state = {};
  }

  scrollUp(event){
    let keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode === 13 && event.target.value != ""){
      this.setState({scrollHeight: -(this.domNode.clientHeight)});
      this.props.dispatch(setUser(event.target.value));
    }
  }

  getRef(domNode){
    this.domNode = domNode;
  }

  render(){
    return (
        <StartPage scrollHeight = {this.state.scrollHeight} getRef = {this.getRef} handleKeyDown = {this.scrollUp}/>
    );
  }
}

export default connect(null)(StartPageContainer);
