import notFound from '../../public/notFound.svg'
const NotFound = () => {
  return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
          <img src={notFound}alt="404 Not Found" className="w-80 md:w-96" />
          <p className="text-xl text-gray-600 mb-8">Sorry, the page you are looking for does not exist.</p>
          
          {/* You can replace the image source with your custom 404 image */}
        </div>
      );
    };

export default NotFound