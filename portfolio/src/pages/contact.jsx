import ContactForm from '../components/contact-form/contact-form';
import HorizontalNav from '../components/nav/horizontal-nav';

const Contact = () => {
  const siteKey = import.meta.env.VITE_TURNSTILE_SITEKEY;
  const workerUrl = import.meta.env.VITE_TURNSTILE_WORKER_URL;

  return (
    <div className="bg-amber-200 grid place-items-center h-full min-h-screen font-josefin-sans text-2xl">
      <HorizontalNav colorName="amber" shadowHex="#ffb900" />
      <div className="flex flex-col pt-20 w-11/12 md:w-180 lg:w-256 xl:w-300">
        <h1
          className="w-full text-center font-super-carnival text-transparent text-6xl sm:text-7xl lg:text-8xl xl:text-9xl
            text-stroke-color-[#333] text-stroke-width-[2px] sm:text-stroke-width-[3px] xl:text-stroke-width-[4px]
            text-shadow-[2px_2px_#ffb900] sm:text-shadow-[3px_3px_#ffb900] xl:text-shadow-[5px_5px_#ffb900]"
        >
          Contact
        </h1>
        <p className="paragraph text-center self-center w-11/12 max-w-xl">
          Send me a message by filling out the form below. Please include your name and a valid email so I can get back to you.
        </p>
        <ContactForm siteKey={siteKey} workerUrl={workerUrl} />
      </div>
    </div>
  );
};

export default Contact;
