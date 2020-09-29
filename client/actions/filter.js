export const APPLY_FILTER = 'APPLY_FILTER'

export function applyFilter(category) {
  return {
    type: APPLY_FILTER,
    category
  }
}