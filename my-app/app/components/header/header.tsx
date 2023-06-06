import styles from './header.module.css'
import Image from 'next/image';

const Header = () => {
  return (
    <div className={styles.headerContent}>
      <img
        src='/assets/pokemon-logo.png'
        alt='pokelist logo'
      />
    </div>
  )
}

export default Header