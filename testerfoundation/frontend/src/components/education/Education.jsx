import React from 'react'
import styles from './Education.module.css'

const Education = () => {
  return (
    <div>
      <div className='row '>
        <div className='col-md-4 col-sm-12 bg-primary'>
         <div className={styles.back}>
         <div className={styles.orphan}>
           <h3>Rescue An Orphan</h3>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quisquam corrupti expedita magni ab?</p>
           </div>
         </div>
        </div>
        <div className='col-md-4 col-sm-12  bg-danger '>
        <div className={styles.backend}>
         <div className={styles.orphan}>
           <h3>Rescue An Orphan</h3>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quisquam corrupti expedita magni ab?</p>
           </div>
         </div>
        </div>
        <div className='col-md-4 col-sm-12 bg-success '>
           <div className={styles.backk}>
         <div className={styles.orphan}>
           <h3>Rescue An Orphan</h3>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quisquam corrupti expedita magni ab?</p>
           </div>
         </div>
        </div>
      </div>
    </div>
  )
}

export default Education
