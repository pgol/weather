import actions from '../actions';

const defaultState = {
  placesList: [
    {
      id: 1,
      name: 'SF',
      code: '10001'
    },
    {
      id: 2,
      name: 'LA',
      code: '10001'
    }
  ],
  selectedPlace: {
    id: 1,
    name: 'SF',
    code: '10001'
  }
};

function places(state = defaultState, action) {
  switch (action.type) {
    case actions.SELECT_PLACE: {
      return {
        ...state,
        selectedPlace: state.placesList.find(p => p.code === action.data.postalCode)
      }
    }
    default: {
      return state;
    }
  }
}

export default places;
