import React from 'react';
import Helmet from 'react-helmet';
import {connect} from 'react-redux';
import {initialCapsString} from '~/util';

class SpellPageHelmet extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <Helmet
        titleTemplate = 'Spell List - %s'
        defaultTitle = 'Spell List'
        title = {initialCapsString(this.props.username)}
      />
    );
  }
}

function mapStateToProps(state, ownProps){
	return {
    username: state.user.username
	}
}

export default connect(mapStateToProps)(SpellPageHelmet);
