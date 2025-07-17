import TimeLine from '../components/time-line/time-line';

function About() {

  return (
    <div className="bg-sky-200 flex justify-center">
      <div className="flex flex-col pt-20 w-11/12 md:w-180 lg:w-256 xl:w-300">
        <h1
          className="w-full text-center font-super-carnival text-transparent text-6xl sm:text-7xl lg:text-8xl xl:text-9xl
            text-stroke-color-[#333] text-stroke-width-[2px] sm:text-stroke-width-[3px] xl:text-stroke-width-[4px]
            text-shadow-[2px_2px_#6acbf8] sm:text-shadow-[3px_3px_#6acbf8] xl:text-shadow-[5px_5px_#6acbf8]"
        >
          Hi! I'm Leah
        </h1>
        <img
          src={`${import.meta.env.BASE_URL}/Leah.png`}
          className="self-center object-cover mt-5 mb-12 md:mt-6 md:mb-16 lg:mt-8 lg:mb-24 h-48 w-48
            md:h-72 md:w-72 lg:h-96 lg:w-96 xl:h-124 xl:w-124
            border-6 md:border-8 border-[#333] rounded-[40px] md:rounded-[60px] lg:rounded-[75px]
            shadow-[10px_10px_#6acbf8] md:shadow-[15px_15px_#6acbf8] lg:shadow-[20px_20px_#6acbf8]"
          alt="Leah's portrait"
        />
        <p className="paragraph">
          I'm a full-stack web developer with a background in geomatics,
          spatial analysis, and modern web design. For the past six years,
          I've been building scalable, reactive web solutions for federal
          departments, private organizations, and non-profits across Canada.
        </p>
        <p className="paragraph">
          With a strong foundation in both computer science and geospatial
          technologies, I'm passionate about creating intuitive, data-driven
          applications that solve real-world problems. I value thoughtful design
          and strive to create intuitive, client-friendly experiences. My focus
          is on building tools that transform complex data into clear and engaging interfaces.
        </p>
        <p className="paragraph">
          If you're curious to see what I've been working on, keep scrolling to
          explore my resume.
        </p>
        <h2 className="w-full my-5 md:my-6 lg:my-8
          text-center font-super-carnival text-transparent text-4xl sm:text-6xl lg:text-7xl
          text-stroke-color-[#333] text-stroke-width-[2px] lg:text-stroke-width-[3px]
          text-shadow-[2px_2px_#6acbf8] sm:text-shadow-[3px_3px_#6acbf8] lg:text-shadow-[4px_4px_#6acbf8]"
        >
          My Resume
        </h2>
        <TimeLine />
      </div>
    </div>
  );
}

export default About;
