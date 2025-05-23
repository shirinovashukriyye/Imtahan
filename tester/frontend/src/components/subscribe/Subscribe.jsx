import React from 'react'
import styles from './Subscribe.module.css'

const Subscribe = () => {
  return (
    <div className='container'>
      <div className={styles.join}>
        <p>Join Our Newsletter</p>
        <h2>Subscribe to get Updated with new offers
        </h2>
     
<div className={styles.email}>
<input type="text" placeholder='Email' />
<button className='btn btn-warning'>Subsscribe now</button>
</div>
    </div>
    <div className={styles.pictures}>
       <div className='row'>
       <div className='col'>
       <div className={styles.picture}>
            <img src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_1.png" alt="" />
            </div>
       </div>
       <div className='col'>
       <div className={styles.picture}>
            <img src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_2.png" alt="" />
            </div>
       </div>
       <div className='col'>
       <div className={styles.picture}>
            <img src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_3.png" alt="" />
            </div>
       </div>
       <div className='col'>
       <div className={styles.picture}>
            <img src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_4.png" alt="" />
            </div>
       </div>
       <div className='col'>
       <div className={styles.picture}>
            <img src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_5.png" alt="" />
            </div>
       </div>
       </div>
       <div className='row'>
       <div className='col'>
       <div className={styles.picture}>
            <img src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_3.png" alt="" />
            </div>
       </div>
       <div className='col'>
       <div className={styles.picture}>
            <img src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_1.png" alt="" />
            </div>
       </div>
       <div className='col'>
       <div className={styles.picture}>
            <img src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_2.png" alt="" />
            </div>
       </div>
       <div className='col'>
       <div className={styles.picture}>
            <img src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_4.png" alt="" />
            </div>
       </div>
       <div className='col'>
       <div className={styles.picture}>
            <img src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_4.png" alt="" />
            </div>
       </div>
       </div>
    </div>
    </div>
  )
}

export default Subscribe
