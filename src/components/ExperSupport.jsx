import PropTypes from "prop-types";
const ExpertSupport = ({ image, heading, paragraph }) => {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-12 space-y-8 bg-white lg:flex-row lg:space-y-0 lg:space-x-12">
      {/* Left Section: Chat UI */}
      <div className="relative max-w-lg">
        <img
          src={image}
          alt="image "
          className="object-cover w-full h-full"
        />
      </div>

      {/* Right Section: Content */}
      <div className="max-w-md text-center lg:text-left">
        <h1 className="mb-4 text-2xl font-bold text-gray-900">{heading}</h1>
        <p className="mb-6 text-base text-gray-600">{paragraph}</p>
        <button className="px-6 py-3 font-semibold text-white bg-blue-700 rounded-lg">
          LEARN MORE
        </button>
      </div>
    </div>
  );
};

// Prop Validation
ExpertSupport.propTypes = {
  image: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
};
export default ExpertSupport;
