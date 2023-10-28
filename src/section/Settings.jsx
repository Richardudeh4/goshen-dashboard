import React, { useState ,useEffect} from 'react';

function Settings() {
  const [siteName, setSiteName] = useState('Goshen-city Schools');
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleSaveSettings = () => {

      setDarkMode(!darkMode);
    };
  
    // Use local storage to persist dark mode preference
    useEffect(() => {
      const storedDarkMode = localStorage.getItem('darkMode');
      if (storedDarkMode === 'true') {
        setDarkMode(true);
      }
    }, []);
  
    useEffect(() => {
      if (darkMode) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'true');
      } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'false');
      }
    }, [darkMode]);
  
    console.log('Settings saved:', {
      siteName,
      emailNotifications,
      darkMode,
    });
  return (
    <div className="p-6 ml-72">
      <h2 className="text-2xl font-semibold mb-4">Settings</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="siteName" className="block text-gray-700 font-medium">
            Site Name: Goshen-City schools
          </label>
          <input
            type="text"
            id="siteName"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={siteName}
            onChange={(e) => setSiteName(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium">
            Email Notifications:
            <input
              type="checkbox"
              className="ml-2"
              checked={emailNotifications}
              onChange={() => setEmailNotifications(!emailNotifications)}
            />
          </label>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium">
            Dark Mode:
            <input
              type="checkbox"
              className="ml-2"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
          </label>
        </div>
      </form>

      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
        onClick={handleSaveSettings}
      >
        Save
      </button>
    </div>
  );
}

export default Settings;
