
export const RECIEVE_SCRAP = 'RECIEVE_SCRAP'
export const ADD_SCRAP = 'ADD_SCRAP'
export const DELETE_SCRAP = 'DELETE_SCRAP'



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


