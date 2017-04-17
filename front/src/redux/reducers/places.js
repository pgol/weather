import actions from '../actions';

const defaultState = {
  placesList: [
    {
      id: 1,
      name: 'New York',
      code: '10001'
    },
    {
      id: 2,
      name: 'Los Angeles',
      code: '90001'
    },
    {
      id: 3,
      name: 'San Francisco',
      code: '94114'
    }
  ],
  selectedPlace: {
    id: 3,
    name: 'San Francisco',
    code: '94016'
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
