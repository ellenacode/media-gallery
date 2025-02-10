import { gallery } from "../constants"

const initialState = {
  selectedFolder: 'Your folder',
  items: gallery,
  selectedItems: [],
  selectedFilters: []
}

const galleryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SELECTED_FOLDER':
      return {
        ...state, selectedFolder: action.payload
      }
    case 'SET_ITEMS':
      return {
        ...state,
        ...action.payload
      }
    case 'SET_SELECTED_ITEMS':
      return {
        ...state,
        selectedItems: action.payload
      }
    case 'REMOVE_SELECTED_ITEMS':
      return {
        ...state,
        selectedItems: action.payload
      }

    case 'SET_SELECTED_FILTERS':
      return {
        ...state,
        selectedFilters: action.payload
      }
    default:
      return state
  }
}

export default galleryReducer