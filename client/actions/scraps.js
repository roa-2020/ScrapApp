<<<<<<< HEAD
import scraps from "../../server/db/scraps"
=======
>>>>>>> 9bd2ec397c5208d83ec01da32be87cfd6716290f

export const RECIEVE_SCRAP = 'RECIEVE_SCRAP'
export const ADD_SCRAP = 'ADD_SCRAP'
export const DELETE_SCRAP = 'DELETE_SCRAP'
<<<<<<< HEAD
export const UPDATE_SCRAP = 'UPDATE_SCRAP'
=======

>>>>>>> 9bd2ec397c5208d83ec01da32be87cfd6716290f


export function initScrap(scrapDetails) {
    console.log('action:', scrapDetails)
    return {
        type: RECIEVE_SCRAP,
        scrapDetails
    }
}

export function addScrap(scrapDetails) {
    console.log('action', scrapDetails)
    return {
        type: ADD_SCRAP,
        scrapDetails
    }
}

export function deleteScrap(scrapDetails) {
    console.log('action', scrapDetails)
    return {
        type: DELETE_SCRAP,
        scrapDetails
    }
}

<<<<<<< HEAD
export function uopdateScrap(scrapDetails) {
    console.log('action', scrapDetails)
    return {
        type: UPDATE_SCRAP,
        scrapDetails
    }
}
=======

>>>>>>> 9bd2ec397c5208d83ec01da32be87cfd6716290f
