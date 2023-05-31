import styles from './pokemonCard.module.css'

const PokemonCard = ({ pokemon }: any) => {
  const classElement = pokemon.element

  return (
    <div className={`${styles.containerCard} ${styles[classElement]}`}>
      <div className={styles.cardContentImg}>
        <img
          src={`/assets/${pokemon.img}`}
          alt={pokemon.name}
        />
      </div>
      <p className={styles.namePokemon}>{pokemon.name}</p>
    </div>
  )
}

export default PokemonCard