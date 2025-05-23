import React from 'react'
import styles from './Denim.module.css'

const Denim = () => {
  return (
    <div className='container mt-5'>
   <div className={styles.denims}>
   <div className={styles.denimimage}>
        <img style={{width:"500px"}} src="https://preview.colorlib.com/theme/dealers/images/model_5.png" alt="" />
      </div>
      <div className={styles.rightdenim}>
        <p>#New Summer Collection 2019</p>
        <h2>New Denim Coat</h2>
        <button className='btn btn-dark'>Shop now</button>
      </div>
   </div>
    </div>
  )
}

export default Denim
