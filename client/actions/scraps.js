export const RECIEVE_SCRAP = 'RECIEVE_SCRAP'

export function initScrap(scrapDetails) {
    console.log('action:', scrapDetails)
    return {
        type: RECIEVE_SCRAP,
        scrapDetails
    }
}