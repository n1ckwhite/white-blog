const initialState = {
    articles: []
}


export const articlesReducer = (state = initialState, action) => {
    switch(action.type) {
        case "get": {
            return {
                ...state,
                articles: []
            }

        }
        default: {
            return state
        }
    }
}