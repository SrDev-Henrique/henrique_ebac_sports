import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../types/produto'

type CarrinhoState = {
  items: Produto[]
}

const initialState: CarrinhoState = {
  items: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      if (state.items.find((p) => p.id === produto.id)) {
        return state
      }
      state.items.push(produto)
    }
  }
})

export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
