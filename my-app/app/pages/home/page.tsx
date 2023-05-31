"use client";
import React, { useState, useEffect } from 'react';
import styles from './home.module.css'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import useGetPokemonList from '@/app/hooks/useGetPokemonList';
import PokemonList from '@/app/components/pokemonList/pokemonList';

const Homepage = () => {
  const [pokemonlist, setPokemonList] = useState<any>(null)
  
  useEffect(() => {
    useGetPokemonList()
      .then((data) => {
        setPokemonList(data)
      })
  },[])

  return (
    <>
      <Header />
      <PokemonList list={pokemonlist} />
      <Footer />
    </>
  )
}

export default Homepage