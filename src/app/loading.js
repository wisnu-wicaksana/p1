export default function LoadingPage() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen  text-black">
       
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
        </div>
  
       
        <h2 className="mt-4 text-lg font-semibold tracking-wide animate-pulse">
          Loading...
        </h2>
      </div>
    );
  }
  