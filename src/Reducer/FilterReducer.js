const FilterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      return {
        ...state,
        filter_assessment_scenes: [...action.payload],
        filter_scenes: [...action.payload],
        all_scenes: [...action.payload],
        filters: { ...state.filters },
      };
    case "GET_SORT_VALUE":
      return {
        ...state,
        sorting_value: action.payload,
      };

    case "SORTING_PRODUCTS":
      let newSortData;

      const { filter_scenes, sorting_value } = state;
      let tempSortProduct = [...filter_scenes];

      newSortData = tempSortProduct.sort((a, b) => {
        if (sorting_value === "ID_Ascending") {
          if (a.id < b.id) return -1;
          if (a.id > b.id) return 1;
          return 0;
        }
        if (state.sorting_value === "ID_Descending") {
          if (a.id < b.id) return 1;
          if (a.id > b.id) return -1;
          return 0;
        }
      });
      return {
        ...state,
        filter_scenes: newSortData,
      };
    case "UPDATE_FILTER_VALUE":
      const { name, value } = action.payload;
      console.log(value);
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };
    case "UPDATE_FILTER_SEARCH_VALUE":
      const { nameS, valueS } = action.payload;
      console.log(nameS, valueS);
      return {
        ...state,
        filters: {
          ...state.filters,
          [nameS]: valueS,
        },
      };

    case "FILTER_PRODUCTS":
      let { all_scenes } = state;
      let tempFilterProduct = [...all_scenes];
      let tempFilterProduct1 = [...all_scenes];
      const { Tag_Key, text, assessment_text } = state.filters;
      if (assessment_text) {
        console.log(assessment_text);
        tempFilterProduct1 = tempFilterProduct1.filter((curElm) => {
          return curElm["Tag Key"].includes(assessment_text);
        });
      }

      if (text) {
        console.log(tempFilterProduct);
        tempFilterProduct = tempFilterProduct.filter((curElm) => {
          return curElm["Tag Key"].toLowerCase().includes(text);
        });
      }
      if (Tag_Key) {
        if (Tag_Key !== "ALL") {
          tempFilterProduct = tempFilterProduct.filter((curElm) => {
            return curElm["Tag Key"] === Tag_Key;
          });
        }
      }

      return {
        ...state,
        filter_scenes: tempFilterProduct,
        filter_assessment_scenes: tempFilterProduct1,
      };

    case "CLEAR_FILTERS":
      return {
        ...state,
        filters: {
          ...state.filters,
          text: " ",
          Tag_Key: "ALL",
        },
      };

    default:
      return state;
  }
};

export default FilterReducer;
