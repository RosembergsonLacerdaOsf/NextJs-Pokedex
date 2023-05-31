'use client'
import styles from './pokemonList.module.css'
import PokemonCard from '../pokemonCard/pokemonCard'

const PokemonList = ({ list }: any) => {
  return (
    <div className={styles.containerList}>
      {
        list?.map((el: any) => <PokemonCard pokemon={el} />)
      }
    </div>
  )
}

export default PokemonList