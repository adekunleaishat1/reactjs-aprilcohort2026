import React from 'react'
import { Link } from 'react-router-dom'

const Sidenav = () => {
  const styles = {
    sidenav: {
      width: '20%',
      height: '100vh',
      backgroundColor: 'blue',
      color: 'white',
      padding: '20px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
      fontFamily: 'Arial, sans-serif',
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '20px',
      borderBottom: '1px solid white',
      paddingBottom: '10px',
    },
    link: {
      color: 'white',
      textDecoration: 'none',
      padding: '10px',
      borderRadius: '5px',
      cursor: 'pointer',
      display: 'block',
    },
  }

  return (
    <div style={styles.sidenav}>
      <div style={styles.title}>My Dashboard</div>
      <Link to="/home/task" style={styles.link}>Home</Link>
      <Link to="/home/password" style={styles.link}>About</Link>
      <Link to="#services" style={styles.link}>Services</Link>
      <Link to="#projects" style={styles.link}>Projects</Link>
      <Link to="#contact" style={styles.link}>Contact</Link>
      <Link to="#settings" style={styles.link}>Settings</Link>
    </div>
  )
}

export default Sidenav