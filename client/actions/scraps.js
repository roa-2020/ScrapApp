export const RECIEVE_SCRAP = 'RECIEVE_SCRAP'
export const DELETE_SCRAP = 'DELETE_SCRAP'
export const RECIEVE_ALL_SCRAPS = 'RECIEVE_ALL_SCRAPS'
export const UPDATE_SCRAP = 'UPDATE_SCRAP'
// export const FILTER_SCRAPS = 'FILTER_SCRAPS'

export function initScrap(scrapDetails) {
    return {
        type: RECIEVE_SCRAP,
        scrapDetails
    }
}

export function getAllScraps(scraps){
    return{
        type: RECIEVE_ALL_SCRAPS,
        scraps
    }
}

export function deleteScrap(id) {
    return {
        type: DELETE_SCRAP,
        id
    }
}

// export function filterScrap(scraps, category) {
//     return {
//         type: FILTER_SCRAPS,
//         scraps,
//         category
//     }
// }
