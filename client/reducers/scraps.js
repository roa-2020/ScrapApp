import { ADD_SCRAP, RECIEVE_SCRAP } from '../actions/scraps'
import { DELETE_SCRAP } from '../actions/scraps'

const initialState = {
    scrap: {}
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case RECIEVE_SCRAP:
            return action.scrapDetails

        case ADD_SCRAP:
            return [...state, action.scrapDetails]
        
        case DELETE_SCRAP:
            return state.filter((scrapDetails) => scrapDetails !== action.scrapDetails)
        
        default:
            return state
    }
}

export default reducer