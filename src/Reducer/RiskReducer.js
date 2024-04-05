
const ProductReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_SCENES" :
        let { riskScenario,riskDescription,key,value,stat } = action.payload; 
        const length=state.scenarios.length;
          let newScene = {
            "id":length+1,
            "Risk ID":`RS-${8306432+length}`,
            "col1": stat,
            "Tag Key":key,
            "Tag Value":value,
            "Risk Scenario":riskScenario,
            "Risk Description":riskDescription
          };
          
          return {
            ...state,
            scenarios: [...state.scenarios, newScene],
          };
      case "SET_LOADING":
        return {
          ...state,
          isLoading: true,              
        };
      case "API_ERROR":
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
  
      case "SET_API_DATA":
          return{
              ...state,
              isLoading:false,
              scenarios: action.payload,
  
          }
      default:
        return state;
    }
    
  };
  
  export default ProductReducer;
  