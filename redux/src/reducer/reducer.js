const initialState = { name: 'reactgo', allNames: [] }

const reducer = (state = initialState, action) => {

  if(action.type === 'ADDNAME') {
    return {
      allNames: state.allNames.concat(state.name),
      name: ''
    }
  }

  if(action.type === 'CHANGE_NAME'){
    return {
      ...state,
      name: action.name
    }
  }

  reducer state
}

export default reducer