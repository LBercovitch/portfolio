import { useEffect, useRef, useState } from 'react';

const Contact = () => {
  const siteKey = import.meta.env.VITE_TURNSTILE_SITEKEY;
  const workerUrl = import.meta.env.VITE_TURNSTILE_WORKER_URL;
  const formRef = useRef(null);
  const [status, setStatus] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {
    // Define the callback function globally
    window.onTurnstileSuccess = function (token) {
      console.log('Turnstile token:', token);
      setToken(token);
    };
  }, []);

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
      turnstileToken: siteKey,
    });

    if (res.ok) {
      setStatus('Message sent!');
      form.reset();
    } else {
      setStatus('Something went wrong. Please try again.');
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
      <div>
        <label className="block mb-1 font-medium" htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          required
          className="w-full border px-3 py-2 rounded"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium" htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          required
          className="w-full border px-3 py-2 rounded"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium" htmlFor="message">Message</label>
        <textarea
          name="message"
          rows="5"
          required
          className="w-full border px-3 py-2 rounded"
        ></textarea>
      </div>

      {/* Turnstile Widget */}
      <div
        className="cf-turnstile"
        data-sitekey={siteKey}
        data-callback="onTurnstileSuccess"
      ></div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        disabled={!token}
      >
        Send
      </button>

      {status && <p className="mt-2 text-sm">{status}</p>}
    </form>
  );
};

export default Contact;
