const CountReducer = (state = {number: 0}, action) => {
    if(action.name == "INCREMENT"){
        state.number +1;
    }

    else if(action.name == "DECREMENT"){
        state.number -1;
    }
    else {
        state.number;
    }
};

export default CountReducer;