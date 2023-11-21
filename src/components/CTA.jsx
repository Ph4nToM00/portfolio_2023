import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className='cta'>
        <p className='cta-text'>Vous avez un projet ? <br className='sm:block hidden' />
        Construisons quelque chose ensemble ! </p>
        <Link to="/contact" className="btn">
            Contactez-moi
        </Link>
    </section>
  )
}

export default CTA