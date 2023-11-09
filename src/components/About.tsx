const About: React.FC = () => {
  return (
    <div id="about" className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            About
          </h2>
          <p className="text-2xl text-white py-4">Humuli /ˈhjuːmjəˌlaɪ/</p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Humuli operates as a self-governing research lab, delving into
            innovative fields that enhance human imagination. We are a modest,
            self-sustained group concentrating on areas such as design, human
            frameworks, and artificial intelligence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
