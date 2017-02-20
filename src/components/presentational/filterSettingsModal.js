import React from 'react';
import FilterToggleItem from "./filterToggleItem";
import {Modal} from 'react-bootstrap';
import ImageButton from './imageButton';

let FilterSettingsModal = (props) => {
  return (
    <Modal>
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Filter Settings</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FilterToggleItem isChecked = {props.filterState["desc"]} toggleFilter = {props.toggleFilter} value = "desc" name = "Description"/>
          <FilterToggleItem isChecked = {props.filterState["level"]} toggleFilter = {props.toggleFilter} value = "level" name = "Level"/>
          <FilterToggleItem isChecked = {props.filterState["class"]} toggleFilter = {props.toggleFilter} value = "class" name = "Class"/>
          <FilterToggleItem isChecked = {props.filterState["range"]} toggleFilter = {props.toggleFilter} value = "range" name = "Range"/>
          <FilterToggleItem isChecked = {props.filterState["casting_time"]} toggleFilter = {props.toggleFilter} value = "casting_time" name = "Casting Time"/>
          <FilterToggleItem isChecked = {props.filterState["duration"]} toggleFilter = {props.toggleFilter} value = "duration" name = "Duration"/>
          <FilterToggleItem isChecked = {props.filterState["concentration"]} toggleFilter = {props.toggleFilter} value = "concentration" name = "Concentration"/>
          <FilterToggleItem isChecked = {props.filterState["school"]} toggleFilter = {props.toggleFilter} value = "school" name = "School"/>
          <FilterToggleItem isChecked = {props.filterState["components"]} toggleFilter = {props.toggleFilter} value = "components" name = "Components"/>
          <FilterToggleItem isChecked = {props.filterState["ritual"]} toggleFilter = {props.toggleFilter} value = "ritual" name = "Ritual"/>
        </Modal.Body>
        <Modal.Footer>
          <ImageButton imageSrc = {"images/cross.svg"}/>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
}

export default FilterSettingsModal;
