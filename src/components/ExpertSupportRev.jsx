import PropTypes from "prop-types";
const ExpertSupportRev = ({ image, heading, paragraph }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center px-6 py-12 bg-white space-y-8 lg:space-y-0 lg:space-x-12">
      {/* Left Section: Content */}
      <div className="text-center lg:text-left max-w-md">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">{heading}</h1>
        <p className="text-gray-600 text-base mb-6">{paragraph}</p>
        <button className="bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg">
          LEARN MORE
        </button>
      </div>

      {/* Right Section: Chat UI */}
      <div className="relative max-w-lg">
        <img
          src={image}
          alt="Person 2"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

// Prop Validation
ExpertSupportRev.propTypes = {
  image: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
};
export default ExpertSupportRev;
