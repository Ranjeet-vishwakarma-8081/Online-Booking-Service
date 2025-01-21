
const BookkeepingSection = () => {
  return (
    <div className="flex flex-col items-center text-center px-6 py-12 bg-white">
      {/* Logo Section */}
      <div className="mb-6">
        {/* Replace 'logo-placeholder.png' with your logo's file path */}
        <img
          src="../../public/images/logo.svg"
          alt="Logo"
          className="w-12 h-12 object-contain"
        />
      </div>

      {/* Heading */}
      <h1 className="text-3xl font-bold leading-tight mb-4">
        Small business bookkeeping year-round
      </h1>

      {/* Description */}
      <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
        Real humans. Perfect books. That’s what you get when Bench is on your
        books. Every month, your team of bookkeeping experts review your
        transactions and prepare financial statements. Here’s what else you can
        expect:
      </p>
    </div>
  );
};

export default BookkeepingSection;
