import { useEffect } from 'react'
import Header from './components/Header'
import Produtos from './containers/Produtos'
import { fetchProdutos } from './store/slices/produtosSlice'
import { useAppDispatch } from './store/hooks'

import { GlobalStyle } from './styles'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchProdutos())
  }, [dispatch])

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtos />
      </div>
    </>
  )
}

export default App
