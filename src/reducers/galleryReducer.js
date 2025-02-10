const initialState = {
  selectedFolder: 'Your folder',
  items: [],
  selectedItems: [],
  selectedFilters: [],
  selectedFilterType: []
}

const galleryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SELECTED_FOLDER':
      return {
        ...state, 
        selectedFolder: action.payload
      }
    case 'SET_ITEMS':
      return {
        ...state,
        items: action.payload
      }
    case 'SET_SELECTED_ITEMS':
      return {
        ...state,
        selectedItems: action.payload
      }
    case 'SET_SELECTED_FILTERS':
      return {
        ...state,
        selectedFilters: action.payload
      }
    case 'SET_COUNTER':
      return {
        ...state,
        counter: action.payload
      }
    default:
      return state
  }
}

export default galleryReducer