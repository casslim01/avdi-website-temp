import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<{ message: string; isError: boolean } | null>(null);

  const sendEmail = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setStatus(null);

    if (form.current) {
      emailjs
        .sendForm('service_v20eq7z', 'template_lec7za7', form.current, {
          publicKey: 'mbE9Ismp2gU70QDpo',
        })
        .then(
          () => {
            setStatus({ message: 'Message sent successfully!', isError: false });
            if (form.current) form.current.reset(); // Clear the form
          },
          (error) => {
            setStatus({ message: `Failed to send message: ${error.text}`, isError: true });
          },
        );
    } else {
      setStatus({ message: 'Something went wrong. Please try again.', isError: true });
    }
  };

  return (
    <div className="bg-gray-900 p-8 rounded-lg max-w-2xl mx-auto my-8">
        <h1 className="text-white">Contact Form</h1>
        <p className="text-white mb-6">For further inquiries, send us a message directly through the form below</p>
        <p className="text-gray-400 mb-6">Required Field*</p>
      <form ref={form} onSubmit={sendEmail} className="space-y-6">
        <div className="flex flex-col">
          <label className="text-white mb-2 font-medium">Name*</label>
          <input 
            type="text" 
            name="user_name" 
            required
            className="bg-gray-800 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-white mb-2 font-medium">Email*</label>
          <input 
            type="email" 
            name="user_email" 
            required
            className="bg-gray-800 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-white mb-2 font-medium">Message*</label>
          <textarea 
            name="message" 
            rows={4}
            required
            className="bg-gray-800 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {status && (
          <div className={`p-2 rounded-lg ${status.isError ? 'bg-red-600' : 'bg-green-600'}`}>
            <p className="text-white text-center">{status.message}</p>
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};