import styles from './header.module.css'
import logopokemon from '../../assets/pokemon-logo.png'
import Image from 'next/image';

const Header = () => {
  return (
    <div className={styles.headerContent}>
      <Image
        src={logopokemon}
        width={150}
        alt='pokelist logo'
      />
    </div>
  )
}

export default Header