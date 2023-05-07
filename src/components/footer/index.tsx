import { SvgIcon } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { footerData } from './data'
import { logo } from '../../../public/assets/export'

const Footer = () => {
  return (
    <div className="footer">
      <div className='footer-content'>
        <div className="footer-logo-wrap">
          <div className="footer-logo">
            <Link href={"/"}>
              <Image src={logo} alt={""} />
            </Link>
          </div>
          <p className="footer-description">A minimal, functional theme for running a paid-membership publication on Ghost.</p>
        </div>
        <div className="footer-subscribe">
          <Link className='global-btn subscriber-btn' href={""}>Become a subscriber →</Link>
          <small>Get all the latest posts delivered straight to your inbox.</small>
        </div>
      </div>
      <hr />
      <div className="footer-nav">
        {footerData?.map(({ title, links }) =>
          <ul key={title}>
            <small className='links-title'>{title}</small>
            {
              links?.map(({ icon, link, label }) =>
                <li key={link}>
                  {icon && <SvgIcon component={icon} sx={{ mr: 1, fontSize: 20 }} />}
                  <Link href={link}>
                    {label}
                  </Link>
                </li>
              )}
          </ul>
        )}
      </div>
      <small className="footer-copyright">&copy; Reiro 2023. Published with Ghost and Reiro.</small>
    </div>
  )
}

export default Footer