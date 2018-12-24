const initialState = {
    age: 21
};

const reducer = (state = initialState, action) => {
    const newState = { ...state };

    if (action.type === 'AGE_UP') {
        newState.age++;
    }
    if (action.type === 'AGE_DOWN') {
        newState.age--;
    }

    return newState;
};

export default reducer;
// store is a global
// store need the plugin at the highet components and highest components is app.js so we import in index.js
