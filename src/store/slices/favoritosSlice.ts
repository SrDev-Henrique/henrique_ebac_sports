import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../types/produto'

type FavoritosState = {
  items: Produto[]
}

const initialState: FavoritosState = {
  items: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    toggle: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      const index = state.items.findIndex((p) => p.id === produto.id)
      if (index >= 0) {
        state.items.splice(index, 1)
      } else {
        state.items.push(produto)
      }
    }
  }
})

export const { toggle } = favoritosSlice.actions
export default favoritosSlice.reducer
