import { Produto as ProdutoType } from '../types/produto'
import Produto from '../components/Produto'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { adicionar } from '../store/slices/carrinhoSlice'
import { toggle } from '../store/slices/favoritosSlice'

import * as S from './styles'

const ProdutosComponent = () => {
  const dispatch = useAppDispatch()
  const produtos = useAppSelector((state) => state.produtos.items)
  const favoritos = useAppSelector((state) => state.favoritos.items)
  const carrinho = useAppSelector((state) => state.carrinho.items)

  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    const produtoId = produto.id
    const IdsDosFavoritos = favoritos.map((f) => f.id)

    return IdsDosFavoritos.includes(produtoId)
  }

  const adicionarAoCarrinho = (produto: ProdutoType) => {
    if (carrinho.find((p) => p.id === produto.id)) {
      alert('Item já adicionado')
    } else {
      dispatch(adicionar(produto))
    }
  }

  return (
    <>
      <S.Produtos>
        {produtos.map((produto) => (
          <Produto
            estaNosFavoritos={produtoEstaNosFavoritos(produto)}
            key={produto.id}
            produto={produto}
            favoritar={(p) => dispatch(toggle(p))}
            aoComprar={adicionarAoCarrinho}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
