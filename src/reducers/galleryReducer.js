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
        selectedItems: [...state.selectedItems, action.payload].filter(item => !!item.checked)
      }
    case 'REMOVE_SELECTED_ITEMS':
      return {
        ...state,
        selectedItems: action.payload
      }

    case 'SET_SELECTED_FILTERS':
      return {
        ...state,
        selectedFilters: [...state.selectedFilters, action.payload]
      }
    default:
      return state
  }
}

export default galleryReducer