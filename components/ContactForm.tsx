"use client"

import { sendEmail } from '@/lib/actions'
import { useRef, useState } from 'react'

export default function ContactForm () {
  const formRef = useRef<HTMLFormElement>(null)
  const modalRef = useRef<any>(null)
  const [sentMessage, setSentMessage] = useState<string>()

  
  return (
    <>
    {sentMessage ? (
      <div className="prose px-4">

        <h4>Thanks for the message, <span className="font-bold text-accent">{sentMessage}</span></h4>
        <p>I&apos;ll get back to you soon! 🚀</p>
      </div>
    ) : (
      <form 
        className="space-y-2 max-w-2xl text-left" 
        ref={formRef}
        action={async formData => {
          formRef.current?.reset()
          const [name, error] = await sendEmail(formData)

          if (error) {
            modalRef.current?.showModal()
            console.log(error)
          } else if(name) {
            setSentMessage(name as string)
          }
        }}
      >

        <label className="form-control w-full max-w-md">
          <div className="label">
            <span className="label-text">What is your name?</span>
          </div>
          <input type="text" name="name" id="name" required autoComplete="name" className="input input-bordered w-full max-w-xs" />
        </label>
        
        <label className="form-control w-full max-w-md">
          <div className="label">
            <span className="label-text">What is your email address?</span>
          </div>
          <input id="email" name="email" required type="email" autoComplete="email" className="input input-bordered w-full max-w-xs" />
        </label>

        <label className="form-control w-full max-w-md">
          <div className="label">
            <span className="label-text">Your message</span>
          </div>
          <textarea id="message" name="message" rows={3} className="textarea textarea-bordered" placeholder=""></textarea>
        </label>
  
        <div className="flex justify-end">
          <button className="mt-8 md:mt-12 btn btn-outline btn-primary">
            <span>🚀</span> Send
          </button>
        </div>
      </form>
      
    )}
  <dialog ref={modalRef} id="modal" className="modal">
    <div className="modal-box border border-error">
      <form method="dialog">
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </form>
      <h3 className="font-bold text-lg">Woops!</h3>
      <p className="py-4">Something went wrong... </p>
      <p className="py-4">Please try again</p>
    </div>
    <form method="dialog" className="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
</>
  )
}