const Loading = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 dark:from-slate-900 dark:to-slate-800">
      <div className="relative flex space-x-3">
        <div className="w-5 h-5 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse"></div>
        <div className="w-5 h-5 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse delay-150"></div>
        <div className="w-5 h-5 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse delay-300"></div>
        <div className="absolute -inset-1 bg-blue-50 dark:bg-blue-900 rounded-lg blur opacity-30 animate-pulse"></div>
      </div>
      <span className="mt-6 text-xl font-semibold text-gray-800 dark:text-gray-200 tracking-wide">
        Loading...
      </span>
    </div>
  );
};

export default Loading;
