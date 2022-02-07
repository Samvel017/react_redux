const cards = [];

export const cardReducer = (state = cards, action) => {
  switch (action.type) {
    case "ADD_CARD":
      return [...state, { id: action.id }];
    case "DELETE_CARD":
      return [...state.filter((el) => el.id !== action.id)];
    case "SORT_CARD":
        return [...state.sort((a,b)=>a.id - b.id)]
    default:
      return state
  }
};
