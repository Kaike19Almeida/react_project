'use client'

import { useState } from "react";
import "./home.css";

export default function Home() {
  let [carrinho, alteraCarrinho] = useState(0);

  function adicionarAoCarrinho() {
    alteraCarrinho(carrinho + 1);
  }

  function removerDoCarrinho() {
    if(carrinho > 0){
      alteraCarrinho(carrinho - 1)
    }
  }

  function limparCarrinho() {
    alteraCarrinho(0);
  }

  return (
    <div className="container">
      <h1>Mercadin Top 🛒</h1>
      <p>O melhor mercado de todos!</p>
      <hr />
      
      <p className="carrinho">Itens no carrinho: {carrinho}</p>
      <hr />
      
      <h2>Produtos</h2>
      <div className="produto">
        <img src="https://placehold.co/150" alt="Cenoura" />
        <p>Cenoura</p>
        <p>R$ 4,50 (kg)</p>
        <button onClick={ ()=> adicionarAoCarrinho ()}>Comprar</button>
        <button onClick={ ()=> removerDoCarrinho ()} className="remover">Remover</button>
        <button onClick={limparCarrinho} className="limpar">Limpar Carrinho</button>
      </div>
    </div>
  );
}