// import { type } from "@testing-library/user-event/dist/type";

const riskAssessmentReducer = (state, action) => {
  switch (action.type) {
    case "SET_LIKELIHOOD_SCORE":
      const { selrisk, likevalue } = action.payload;
      const newScore={...state.likelihoodScore};
      if(selrisk['Risk ID'] in newScore){
        newScore[selrisk['Risk ID']].push(likevalue);
      }
      else{
        newScore[selrisk['Risk ID']]=[likevalue];
      }
      return { ...state,
      likelihoodScore:newScore,
      likelihoodSelected:"true"
     };

    case "SET_BUSINESS_IMPACT_SCORE":
      const { selerisk, businessvalue } = action.payload;
      const newSscore={...state.businessImpactScore};
      if(selerisk['Risk ID'] in newSscore){
        newSscore[selerisk['Risk ID']].push(businessvalue);
      }
      else{
        newSscore[selerisk['Risk ID']]=[businessvalue];
      }
      return { ...state,
      businessImpactScore:newSscore,
      businessselected:"true"
     };

     case "SET_SUMMARY":
      const { input1,input2,input3 } = action.payload;
      
      return { ...state,
     Summary1:[...state.Summary1,input1],
     Summary2:[...state.Summary2,input2],
     Summary3:[...state.Summary3,input3],
     };

    case "API_ERRORS":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case "SET_API_DATAS":
      const scenes = action.payload;
      const newLikelihoodScore = { ...state.likelihoodScore };
      const newBusinessimpactScore = { ...state.businessImpactScore };
      scenes.forEach((scene) => {
        const {
          "Risk ID": riskId,
          "Likelihood Score Text": likelihoodScoreText,
        } = scene;
        if (`${riskId}`in newLikelihoodScore) {
          newLikelihoodScore[`${riskId}`].push(likelihoodScoreText);
        } else {
          newLikelihoodScore[`${riskId}`] = [likelihoodScoreText];
        }
      });
      scenes.forEach((scene) => {
        const {
          "Risk ID": riskId,
          "Business Impact Score Text": businessimpactScoreText,
        } = scene;

        if (`${riskId}` in newBusinessimpactScore) {
          newBusinessimpactScore[`${riskId}`].push(businessimpactScoreText);
        } else {
          newBusinessimpactScore[`${riskId}`] = [businessimpactScoreText];
        }
      });
    console.log(newLikelihoodScore);
    console.log(newBusinessimpactScore);
    console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        likelihoodScore: newLikelihoodScore,
        businessImpactScore: newBusinessimpactScore,
        assessedScenes: scenes,
      };
 
      case "SET_SCORE":
      const l=state.assessedScenes.length;
console.log(action.payload.seleerisk["Risk ID"]);
      const likelihoodarray=state.likelihoodScore[action.payload.seleerisk["Risk ID"]];
      const businessarray=state.businessImpactScore[action.payload.seleerisk["Risk ID"]];
      const likelihoodindex=likelihoodarray.length-1;
      const businessindex=businessarray.length-1;
      const likelivalues={
       "Rare":1,
 "Periodic":2,
"Frequent":3,
"Often":4,
 "Always":5,
      }
      const businessvalues={
       "Very Low":1,
 "Low":2,
 "Medium":3,
 "High":4,
 "Critical":5
       }
 const netScore=(likelivalues[likelihoodarray[likelihoodindex]]*businessvalues[businessarray[businessindex]])/5;
      const neww={
          "id": l+1,
          "Risk ID": action.payload.seleerisk["Risk ID"],
          "Risk Scenario": action.payload.seleerisk["Risk Scenario"],
          "Date Submitted": "12/03/23",
          "Net Risk Score": `${netScore}`,
          "Assessment Run ID": `AR-${876890+likelihoodindex}`,
          "Likelihood Score Text": likelihoodarray[likelihoodindex],
          "Likelihood Score Value": `${likelivalues[likelihoodarray[likelihoodindex]]}`,
          "Business Impact Score Text": businessarray[businessindex],
          "Business Impact Score Value": `${businessvalues[businessarray[businessindex]]}`
      }
      console.log(neww);
      return {
        ...state,
        isLoading: false,
        assessedScenes:[...state.assessedScenes,neww],
        businessselected:"true",
        likelihoodSelected:"true"

      };
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};

export default riskAssessmentReducer;
