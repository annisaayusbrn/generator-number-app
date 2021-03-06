const initialState = {number:0}

const generatorReducer = (state=initialState, action)=>{
  const {type, payload}=action
  switch(type){
    case "GENERATE_NUMBER" :
      return {
        ...state,
        number: payload.data
      }
    default: return state
  }
}
export default generatorReducer