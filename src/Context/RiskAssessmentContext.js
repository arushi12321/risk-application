import React, { createContext, useContext, useReducer } from "react";
import reducers from "../Reducer/RiskAssessmentReducer";
import axios from "axios";
import { useEffect } from "react";
// Define an initial state
const initialState = {
  likelihoodScore: {},
  businessImpactScore: {},
  assessedScenes: [],
  isLoading: false,
  isError: false,
  likelihoodSelected: "false",
  businessselected: "false",
  Summary1: [],
  Summary2: [],
  Summary3: [],
};
const RISKAPI = "https://retoolapi.dev/gGauTL/assessments";
const AssessmentContext = createContext();

const RiskAssessmentProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducers, initialState);

  const updateLikelihoodScore = (selrisk, likevalue) => {
    // console.log(selrisk,likevalue);
    dispatch({ type: "SET_LIKELIHOOD_SCORE", payload: { selrisk, likevalue } });
  };

  const updateSummaries = (input1, input2, input3) => {
    // console.log(selrisk,likevalue);
    dispatch({ type: "SET_SUMMARY", payload: { input1, input2, input3 } });
  };

  const updateBusinessimpactScore = (selerisk, businessvalue) => {
    dispatch({
      type: "SET_BUSINESS_IMPACT_SCORE",
      payload: { selerisk, businessvalue },
    });
  };
  const updateScore = (seleerisk) => {
    console.log(seleerisk);
    dispatch({
      type: "SET_SCORE",
      payload: { seleerisk },
    });
    console.log(state.assessedScenes);
  };

  const getassessedScenes = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const Scenes = await res.data;
      console.log(Scenes);
      dispatch({ type: "SET_API_DATAS", payload: Scenes });
      // console.log(initialState);
    } catch (error) {
      dispatch({ type: "API_ERRORS" });
    }
  };
  useEffect(() => {
    console.log(state.assessedScenes);
  }, [state.assessedScenes]);
  useEffect(() => {
    console.log(state.Summary1);
  }, [state.Summary1]);

  useEffect(() => {
    getassessedScenes(RISKAPI);
  }, []);
  return (
    <AssessmentContext.Provider
      value={{
        ...state,
        updateBusinessimpactScore,
        updateLikelihoodScore,
        updateScore,
        updateSummaries,
      }}
    >
      {children}
    </AssessmentContext.Provider>
  );
};
const useRiskAssessmentContext = () => {
  return useContext(AssessmentContext);
};
export { RiskAssessmentProvider, useRiskAssessmentContext, AssessmentContext };
