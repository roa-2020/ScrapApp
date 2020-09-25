import { ADD_SCRAP, RECIEVE_SCRAP, RECIEVE_ALL_SCRAPS, DELETE_SCRAP } from '../actions/scraps'

const reducer = (state = [], action) => {

    switch (action.type) {
        case RECIEVE_SCRAP:
            return action.scrapDetails

        case ADD_SCRAP:
            return [...state, action.scrapDetails]

        case DELETE_SCRAP:
            return state.filter((scrapDetails) => scrapDetails !== action.scrapDetails)

        case RECIEVE_ALL_SCRAPS:
            return action.scraps

        default:
            return state
    }
}

export default reducer