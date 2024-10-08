function AboutHeader() {
  return (
    <div className="relative overflow-hidden h-screen flex flex-col items-center justify-center">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="images/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-80"></div>

      {/* Content */}
      <div className="relative z-10 text-white text-center px-4 md:px-0">
        <h1
          className="text-center lg:text-8xl text-3xl font-bold mb-3"
          data-aos="fade-in"
          data-aos-delay="1000"
        >
          Vision
        </h1>
        <p
          className="font-medium lg:text-2xl text-lg"
          data-aos="fade-in"
          data-aos-delay="1000"
        >
          Bringing Positive Change & creating Economic Opportunity
        </p>
      </div>
    </div>
  );
}

export default AboutHeader;
