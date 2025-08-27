export const filterReducer = (state, action) => {
    const {type, payload} = action;
    switch(type) {
        case "LOAD_PRODUCTS": 
            return {
                ...state, productList: payload.products
            }
        case "SORT_BY_PRICE": return {...state, sortBy: payload.sortBy};
        case "RATING": return {...state, rating: payload.rating};
        case "IN_STOCK_ONLY": return {...state, inStock: payload.inStock};
        case "CLEAR_FILTERS": return {...state, sortBy: null, rating: null, inStock: false, bestSeller: false};
        case "BEST_SELLER": return {...state, bestSeller: payload.bestSeller};
        default: return state;
    }
}