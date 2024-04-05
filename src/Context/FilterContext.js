import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./RiskContext";
import reducers from "../Reducer/FilterReducer";
const Filtercontext = createContext();

const intialState = {
  filter_scenes: [],
  filter_assessment_scenes: [],
  all_scenes: [],
  sorting_value: "ID_Ascending",
  filters: {
    text: "",
    Tag_Key: "ALL",
    assessment_text: "",
  },
};
export const FilterContextProvider = ({ children }) => {
  const { scenarios } = useProductContext();
  const [state, dispatch] = useReducer(reducers, intialState);

  const sorting = (event) => {
    let userValue = event.target.value;
    dispatch({ type: "GET_SORT_VALUE", payload: userValue });
  };

  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;
   
    return dispatch({ type: "UPDATE_FILTER_VALUE", payload: { name, value } });
  };
  const updateFilterValueSearch = (event) => {
    let nameS = event.target.name;
    let valueS = event.target.value;

    return dispatch({
      type: "UPDATE_FILTER_SEARCH_VALUE",
      payload: { nameS, valueS },
    });
  };

  const clearFilters = () => {
    dispatch({ type: "CLEAR_FILTERS" });
  };

  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
    dispatch({ type: "SORTING_PRODUCTS" });
  }, [scenarios, state.sorting_value, state.filters]);
  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: scenarios });
  }, [scenarios]);
  return (
    <Filtercontext.Provider
      value={{
        ...state,
        sorting,
        updateFilterValue,
        updateFilterValueSearch,
        clearFilters,
      }}
    >
      {children}
    </Filtercontext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(Filtercontext);
};
