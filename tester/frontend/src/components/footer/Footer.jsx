import React from 'react'
import styles from './Footer.module.css'
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='container'>
      <div className={styles.footers}>
        <div className='row d-flex gap-4'>
          <div className='col-lg-2 col-sm-12'>
            <h4>products</h4>
            <li>Managed Website</li>
            <li>Manage Reputation</li>
            <li>Power Tools</li>
            <li>Marketing Service</li>
          </div>
    
            <div className='col-lg-2 col-sm-12'>
            <h4>products</h4>
            <li>Managed Website</li>
            <li>Manage Reputation</li>
            <li>Power Tools</li>
            <li>Marketing Service</li>
          </div>
    
            <div className='col-lg-2 col-sm-12'>
            <h4>products</h4>
            <li>Managed Website</li>
            <li>Manage Reputation</li>
            <li>Power Tools</li>
            <li>Marketing Service</li>
          </div>
  
            <div className='col-lg-2 col-sm-12'>
            <h4>products</h4>
            <li>Managed Website</li>
            <li>Manage Reputation</li>
            <li>Power Tools</li>
            <li>Marketing Service</li>
          </div>
       
            <div className='col-lg-2 col-sm-12'>
            <h4>products</h4>
            <li>Managed Website</li>
            <li>Manage Reputation</li>
            <li>Power Tools</li>
            <li>Marketing Service</li>
            <div className={styles.email}>
            <input type="text" placeholder='Email' />
            <button className='btn btn-warning'>Add</button>
            </div>
       
        </div>
        </div>
      </div>

      <div className={styles.end}>
        <p>Copyright ©2025 All rights reserved | This template is made with  by Colorlib</p>
        <div className={styles.icon}>
        <FaWhatsapp />
        <FaWhatsapp />
        <FaWhatsapp />
        <FaWhatsapp />
        </div>
      </div>
    </div>
  )
}

export default Footer
