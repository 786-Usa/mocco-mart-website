import React from 'react';
 function ErrorPage() {
  const handleBackToHome = () => {
    // Navigate to home page
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-gray-500">Home</span>
          <span className="text-gray-400">/</span>
          <span className="text-gray-900">404 Error</span>
        </div>
      </div>

      {/* Error Content */}
      <div className="flex flex-col items-center justify-center px-4 py-16 sm:py-24">
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-medium mb-8 text-center">
          404 Not Found
        </h1>
        
        <p className="text-base sm:text-lg text-gray-700 mb-12 text-center max-w-md">
          Your visited page not found. You may go home page.
        </p>

        <button
          onClick={handleBackToHome}
          className="px-8 sm:px-12 py-3 sm:py-4 bg-red-500 text-white font-medium rounded hover:bg-red-600 transition-colors duration-200"
        >
          Back to home page
        </button>
      </div>
    </div>
  );
}
export default ErrorPage;