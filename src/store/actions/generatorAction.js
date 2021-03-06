export const generateNumber = (min, max)=>(dispacth)=>{
    const num = Math.floor(Math.random() * (max - min))+min
    dispacth({type: "GENERATE_NUMBER", payload: {data:num}})
  }