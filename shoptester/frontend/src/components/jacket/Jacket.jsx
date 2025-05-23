import React from 'react'
import styles from './Jacket.module.css'

const Jacket = () => {
  return (
    <div className='container mt-5'>
      <div className={styles.jackets}>
        <div className={styles.jacketimage}>
            <img style={{width: "800px"}} src="https://preview.colorlib.com/theme/dealers/images/model_woman_1.png" alt="" />
        </div>
        <div className={styles.rightjacket}>
            <p>#New Summer Collection 2019</p>
            <h2>Jacket</h2>
            <button className='btn btn-dark'>Shop now</button>
        </div>
      </div>
    </div>
  )
}

export default Jacket
