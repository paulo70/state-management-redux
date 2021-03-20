import React from 'react'
import { connect } from 'react-redux'
import { changeName, addname, error } from './action/actionCreators'
import './App.css';

const App = (props) => {

  const handleNameChange = (e) => {
    props.onChangeName(e.target.value)
  }

  const handleClick = () => {
    if(props.name){
      props.onAddName()
    } else{
      props.onError('Name field cannot be empty')
    }
  }


  return(
    <div className="App">
      <>
        <input type = 'text'
          placeholder='Name'
          value = {props.name}
          onChange = {handleNameChange} 
          />

        <button onClick={handleClick}>Add name</button>

        <p className={ props.error ? 'error active': 'error' }>
          { props.error }
        </p>

        <ul>
          { props.allNames && props.allNames.map(name => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    name: state.name,
    allNames: state.allNames,
    error: state.error
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {
    onChangeName: (name) => dispatch(changeName(name)),
    onAddName: () => dispatch(addname()),
    onError: (err) => dispatch(error(err))
  }
}

export default connect(mapStateToProps, mapDispatchtoProps)(App);
