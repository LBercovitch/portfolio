import { useEffect, useRef, useState } from 'react';

const ContactForm = ({siteKey, workerUrl}) => {
  const formRef = useRef(null);
  const widgetRef = useRef(null);
  const widgetIdRef = useRef(null);
  const [status, setStatus] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {
    window.onTurnstileSuccess = function (token) {
      setToken(token);
    };

    const waitForTurnstile = () => {
      if (window.turnstile && widgetRef.current && widgetIdRef.current === null) {
        widgetIdRef.current = window.turnstile.render(widgetRef.current, {
          sitekey: siteKey,
          callback: onTurnstileSuccess,
        });
      } else if (!window.turnstile || !widgetRef.current) {
        setTimeout(waitForTurnstile, 100);
      }
    };

    waitForTurnstile();
  }, [siteKey]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = formRef.current;
    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
      token,
    };

    const res = await fetch(workerUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setStatus('Message sent!');
      form.reset();
      setToken('');
    } else {
      setStatus('Something went wrong. Please try again.');
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col self-center w-11/12 max-w-xl space-y-4 mb-8">
      <div className="self-center w-full grow">
        <label className="block mb-1 font-josefin-sans-bold text-2xl" htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          required
          className="w-full border-2 border-gray-800 px-3 py-2 rounded-lg bg-amber-100 shadow-[7px_7px_#ffb900]"
        />
      </div>

      <div className="self-center w-full">
        <label className="block mb-1 font-josefin-sans-bold text-2xl" htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          required
          className="w-full border-2 border-gray-800 px-3 py-2 rounded-lg bg-amber-100 shadow-[7px_7px_#ffb900]"
        />
      </div>

      <div className="self-center w-full">
        <label className="block mb-1 font-josefin-sans-bold text-2xl" htmlFor="message">Message</label>
        <textarea
          name="message"
          rows="5"
          required
          className="w-full border-2 border-gray-800 px-3 py-2 rounded-lg bg-amber-100 shadow-[7px_7px_#ffb900]"
        ></textarea>
      </div>

      {/* Turnstile container for rendering */}
      <div
        ref={widgetRef}
        className="self-center border-2 border-gray-800 rounded-lg bg-white pt-1.5 shadow-[7px_7px_#ffb900] mt-5"
      ></div>

      <button
        type="submit"
        className="self-center my-5 bg-amber-300 rounded-full border-gray-800
          text-center w-5/6 max-w-80 min-w-fit shadow-[7px_7px_#ffb900] hover:bg-amber-600
          font-josefin-sans-semibold text-3xl px-5 py-2 border-2 cursor-pointer"
        disabled={!token}
      >
        Send
      </button>

      {status && <p className="mt-2 self-center">{status}</p>}
    </form>
  );
};

export default ContactForm;