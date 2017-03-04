import React from "react";
import {connect} from 'react-redux';
import ControlledToggleItem from '../presentational/controlledToggleItem';
import {toggleSetting} from '~/actions/settingActions';

class GeneralSettingsModalContentContainer extends React.Component{

    constructor(props){
      super(props);
      this.toggleSetting = this.toggleSetting.bind(this);
    }



    toggleSetting(event){
      this.props.dispatch(toggleSetting(event.target.value, event.target.checked));
    }

    render(){
      return <div>
              <h5>General Settings</h5>
              <ControlledToggleItem name = "Order Spells By Level" value = "orderSpellsByLevel" isChecked = {this.props.settings.orderSpellsByLevel} handleChange = {this.toggleSetting}/>
             </div>
    }

}

function mapStateToProps(state, ownProps){
	return {
    settings: state.settings
	};
}

export default connect(mapStateToProps)(GeneralSettingsModalContentContainer);
