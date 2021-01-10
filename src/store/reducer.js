import * as actionTypes from './actions';

const INGREDIENTS_PRICES = {
    Meat : 5.5,
    Salad : 6.5,
    Cheese : 7.5,
    Bacon : 8.5
}

const initialState = {
    ingredients : {
        Salad: 0,
        Meat: 0,
        Cheese : 0,
        Bacon: 0
    },
    totalPrice : 4
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT :
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName] : state.ingredients[action.ingredientName] + 1
                },
                totalPrice : state.totalPrice + INGREDIENTS_PRICES[action.ingredientName]
            };
        case actionTypes.REMOVE_INGREDIENT :
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName] : state.ingredients[action.ingredientName] - 1
                },
                totalPrice : state.totalPrice + INGREDIENTS_PRICES[action.ingredientName]
            }
        default :
            return state;
    }
}

export default reducer;