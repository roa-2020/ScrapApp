import { RECIEVE_SCRAP } from '../actions/scraps'
import { DELETE_SCRAP } from '../actions/scraps'

const initialState = {
    scrap: {}
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case RECIEVE_SCRAP:
            return action.scrapDetails
        // case DELETE_SCRAP:
        // add return case for delete
        default:
            return state
    }
}

export default reducer