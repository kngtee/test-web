import React from 'react'
import ContactForm from './ContactForm'
import ContactOffices from './ContactOffices'
import Hero from './Hero'



const Contact = () => {
  return (
    <div className='bg-white'>
      <Hero title='Do you have questions, ' subtitle='let’s hear from you.' description=''/>
      <ContactForm/>
        <ContactOffices/>
      
    </div>
  )
}

export default Contact
