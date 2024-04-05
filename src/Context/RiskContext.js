import axios from "axios";
import { createContext, useEffect, useReducer } from "react";
import { useContext } from "react";
import reducer from "../Reducer/RiskReducer.js";

const API = "https://retoolapi.dev/UW0v8J/scenarioss";
const AppContext = createContext();
const initialState = {
  isLoading: false,
  isError: false,
  scenarios: [],
  isSingleLoading: false,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getScenarios = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const scenarios = await res.data;
      console.log(scenarios);
      dispatch({ type: "SET_API_DATA", payload: scenarios });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };
  const addScenarios = (formData) => {
    console.log(formData);
    const {
      riskScenario,
      riskDescription,
      riskField1,
      riskField2,
      key,
      value,
      stat,
    } = formData;
    dispatch({
      type: "ADD_TO_SCENES",
      payload: {
        riskScenario,
        riskDescription,
        riskField1,
        riskField2,
        key,
        value,
        stat,
      },
    });
  };

  const getSingleScenario = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(url);
      const singleScenario = await res.data;
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleScenario });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };
  useEffect(() => {
    getScenarios(API);
  }, []);
  return (
    <AppContext.Provider value={{ ...state, getSingleScenario, addScenarios }}>
      {children}
    </AppContext.Provider>
  );
};

const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
