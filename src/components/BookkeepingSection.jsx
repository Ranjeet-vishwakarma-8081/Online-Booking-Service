const BookkeepingSection = () => {
  return (
    <div className="flex flex-col items-center px-6 py-12 text-center bg-white">
      {/* Logo Section */}
      <div className="mb-6">
        {/* Replace 'logo-placeholder.png' with your logo's file path */}
        <img
          src="/images/logo.svg"
          alt="Logo"
          className="object-contain w-12 h-12"
        />
      </div>

      {/* Heading */}
      <h1 className="mb-4 text-3xl font-bold leading-tight">
        Small business bookkeeping year-round
      </h1>

      {/* Description */}
      <p className="max-w-2xl text-lg leading-relaxed text-gray-600">
        Real humans. Perfect books. That’s what you get when Bench is on your
        books. Every month, your team of bookkeeping experts review your
        transactions and prepare financial statements. Here’s what else you can
        expect:
      </p>
    </div>
  );
};

export default BookkeepingSection;
