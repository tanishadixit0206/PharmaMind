import Sidebar from "./Sidebar";
import { useTheme } from "../hooks/useTheme";
import { Outlet } from "react-router-dom"; 

const Layout: React.FC = () => { 
  const { darkMode, setDarkMode } = useTheme();

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200 transition-all duration-300">
      <Sidebar />

      <div className="ml-64 w-full p-6 relative">
        <button
          onClick={() => setDarkMode((prev) => !prev)}
          className="absolute top-4 right-6 p-2 px-4 rounded-full transition-all duration-300
                   bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700
                   dark:from-gray-700 dark:to-gray-800 dark:hover:from-gray-600 dark:hover:to-gray-700
                   text-white shadow-md flex items-center"
        >
          {darkMode ? (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <span>Light</span>
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
              <span>Dark</span>
            </>
          )}
        </button>

        <div className="max-w-6xl mx-auto mt-12 bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-700 shadow-lg rounded-xl p-6 transition-all duration-300 border border-blue-100/50 dark:border-gray-600/30">
          <Outlet /> {}
        </div>
      </div>
    </div>
  );
};

export default Layout;
