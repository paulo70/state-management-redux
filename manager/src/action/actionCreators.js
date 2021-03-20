import { ADDNAME, CHANGE_NAME, ERROR } from './actionTypes'

export function addname(){
  return {
    type: ADDNAME
  }
}

export function changeName(name){
  return{
    type: CHANGE_NAME,
    name: name
  }
}

export function error(msg){
  return {
    type: ERROR,
    error: msg
  }
} 