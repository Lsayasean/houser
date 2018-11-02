let initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zipcode: '',
    image: '',
    monthly_morgage_amount: '',
    desired_rent: ''

}

const UPDATE_NAME = "UPDATE_NAME";
const UPDATE_ADDRESS = "UPDATE_ADDRESS";
const UPDATE_CITY = "UPDATE_CITY";
const UPDATE_STATE = "UPDATE_STATE";
const UPDATE_ZIPCODE = "UPDATE_ZIPCODE";
const UPDATE_IMAGE = "UPDATE_IMAGE";
const UPDATE_MORGAGE = "UPDATE_MORGAGE";
const UPDATE_RENT = "UPDATE_RENT";
const CLEAR = "CLEAR";

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_NAME:
            return { ...state, name: action.payload }
        case UPDATE_ADDRESS:
            return { ...state, address: action.payload }
        case UPDATE_CITY:
            return { ...state, city: action.payload }
        case UPDATE_STATE:
            return { ...state, state: action.payload }
        case UPDATE_ZIPCODE:
            return { ...state, zipcode: action.payload }
        case UPDATE_IMAGE:
            return { ...state, image: action.payload }
        case UPDATE_MORGAGE:
            return {...state, monthly_morgage_amount: action.payload}
        case UPDATE_RENT:
            return {...state, desired_rent: action.payload}
        default:
            return state
    }
}

export function updateName(name) {
    return {
        type: UPDATE_NAME,
        payload: name
    }
}
export function updateAddy(address) {
    return {
        type: UPDATE_ADDRESS,
        payload: address
    }
}
export function updateState(state) {
    return {
        type: UPDATE_STATE,
        payload: state
    }
}
export function updateCity(city) {
    return {
        type: UPDATE_CITY,
        payload: city
    }
}
export function updateZipCode(zip) {
    return {
        type: UPDATE_ZIPCODE,
        payload: zip
    }
}
export function updateImage(image) {
    return {
        type: UPDATE_IMAGE,
        payload: image
    }
}
export function updateMorgage(morgage){
    return{
        type: UPDATE_MORGAGE,
        payload: morgage
    }
}
export function updateRent(rent){
    return{
        type: UPDATE_RENT,
        payload: rent
    }
}

export function clear(){
    return{
        type: CLEAR,
        payload: ''
    }
}