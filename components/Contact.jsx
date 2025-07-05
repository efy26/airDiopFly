import React from 'react';

export default function Contact() {
  return (
    <div className='flex flex-col relative'>
      <div className="relative">
        <img 
          src="/img/Cont.webp" 
          alt="Contact AirDiop Fly" 
          className="w-full h-[700px] object-cover"
        />
        <div className="absolute top-1/3 left-0.10 text-white text-3xl font-bold bg-black bg-opacity-40 px-6 py-3 rounded">
          Contactez-nous ⬇️
        </div>
      </div>

      <div id='container' className='flex justify-center'>
        <div id='contact-page'>
          <h1 id='titre-page-contact'>CONTACT</h1>
          <div id='contact-form'>
            <span>
              <p>400 rue normand</p>
              <p>J8Y 5C5, Gatineau, QC</p>
              <p>Tel : 819-765-8600</p>
              <p>E-mail : airdiopfly@gmail.com</p>
            </span>
            <form>
              <div id='block-form'>
                <div id='input-text'>
                  <input type="text" placeholder='Nom'/>
                  <input type="email" placeholder='Mail'/>
                  <input type="tel" placeholder='Telephone'/>
                </div>
                <textarea id="textarea" placeholder='Redigez votre message ici...'></textarea>
              </div>
              <input id="btn-contact" type="submit" value="Envoyer" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
