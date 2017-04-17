import React from 'react'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

function PlacePicker({selectedPlace, placesList, onSelectedPlace, onButtonClick}) {
  const menuItems = placesList.map(p => (
    <MenuItem value={p.code} key={p.id} primaryText={p.name}/>
  ));
  return (
    <div className="level">
      <div className="level-item">
        <SelectField
          floatingLabelText="Select place"
          value={selectedPlace.code}
          onChange={onSelectedPlace}
        >
          {menuItems}
        </SelectField>
      </div>
      <div className="level-item">
        <button
          className="button is-primary"
          onClick={onButtonClick.bind(this, selectedPlace.code)}
        >
          Get Weather
        </button>
      </div>
    </div>
  )
}

export default PlacePicker;
