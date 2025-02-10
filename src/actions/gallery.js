export const setSelectedFolder = (item) => ({
	type: 'SET_SELECTED_FOLDER',
	payload: item,
})

export const setItems = (items) => ({
	type: 'SET_ITEMS',
	payload: items,
})

export const setSelectedItems = (item) => ({
	type: 'SET_SELECTED_ITEMS',
	payload: item,
})

export const removeSelectedItems = (action) => ({
	type: 'REMOVE_SELECTED_ITEMS',
	payload: action
})

export const setSelectedFilters = (items) => ({
	type: 'SET_SELECTED_FILTERS',
	payload: items,
})