import React, { useState } from 'react'



const Contact = () => {

  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = () => {};
  const handleFocus = () => {};
  const handleBlur = () => {};

  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Prenez contact avec moi</h1>

        <form className="w-full flex flex-col gap-7 mt-14">
          <label className="text-balck-500 font-semibold">Nom
          <input type="text" name="name" className="input" placeholder="John Doe" required 
            value={form.name} 
            onChange={handleChange} 
            onFocus={handleFocus} 
            onBlur={handleBlur}

          />
          </label>
          <label className="text-balck-500 font-semibold">Email
          <input type="email" name="email" className="input" placeholder="John@gmail.com" required 
            value={form.email} 
            onChange={handleChange} 
            onFocus={handleFocus} 
            onBlur={handleBlur} 
          />
          </label>
          <label className="text-balck-500 font-semibold">Votre Message
          <textarea type="text" name="message" rows={4} className="textarea" placeholder="De quoi souhaitez-vous discuter ? " required 
            value={form.message} 
            onChange={handleChange} 
            onFocus={handleFocus} 
            onBlur={handleBlur} 
          />
          </label>
          <button type='submit' className="btn" disabled={isLoading} onFocus={handleFocus} onBlur={handleBlur}>{isLoading ? 'Envoi en cours ...' : 'Envoyer votre message'}</button>
        </form>
      </div>
    </section>
  )
}

export default Contact