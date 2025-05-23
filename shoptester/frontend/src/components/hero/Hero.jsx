import React from 'react'
import styles from './Hero.module.css'

const Hero = () => {
    
  return (
    <div className='container'>
      <div className={styles.heroes}>
        <div className={styles.heroleft}>
            <h2>MADEWELL</h2>
            <p>Summer Collection</p>
            <span>1,499</span>
             <div className={styles.butto}>
            <button className='btn btn-outline-primary'>Shop now</button>
            <button className='btn btn-primary'>Shop now</button>
        </div>
        </div>
        
        <div className={styles.heroright}>
            <img src="https://preview.colorlib.com/theme/dealers/images/new/person_transparent.png" alt="" className={styles.imagehero} />
        </div>
       
      </div>
    </div>
  )
}

export default Hero
