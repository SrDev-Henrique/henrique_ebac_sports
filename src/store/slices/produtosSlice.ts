import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Produto } from '../../types/produto'

type ProdutosState = {
  items: Produto[]
  loading: boolean
  error: string | null
}

const initialState: ProdutosState = {
  items: [],
  loading: false,
  error: null
}

export const fetchProdutos = createAsyncThunk('produtos/fetch', async () => {
  const res = await fetch('https://api-ebac.vercel.app/api/ebac_sports')
  if (!res.ok) {
    throw new Error('Falha ao carregar produtos')
  }
  return (await res.json()) as Produto[]
})

const produtosSlice = createSlice({
  name: 'produtos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProdutos.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchProdutos.fulfilled, (state, action) => {
        state.loading = false
        state.items = action.payload
      })
      .addCase(fetchProdutos.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message ?? 'Erro desconhecido'
      })
  }
})

export default produtosSlice.reducer
