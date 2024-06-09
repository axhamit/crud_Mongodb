import Link from 'next/link'
import React from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link className={styles.link} href="/">COding With Amit</Link>
      <Link className={styles.btn} href="/addTopic">Add Topic</Link>
    </nav>
  )
}

export default Navbar
