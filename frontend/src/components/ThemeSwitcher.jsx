import useDarkMode from 'use-dark-mode';
import { Button } from '@nextui-org/react';
import { useState, useEffect } from 'react';
import { MoonIcon, SunIcon } from 'lucide-react';

export default function ThemeSwitcher() {
  // Initialize dark mode with localStorage persistence
  const darkMode = useDarkMode(false, {
    onChange: (isDark) => {
      // Persist the dark mode state in localStorage
      localStorage.setItem('isDarkMode', isDark ? 'true' : 'false');
      document.body.classList.toggle('dark-mode', isDark); // Optionally add a class to body for further CSS handling
    },
  });

  const [svg, setSvg] = useState(
    darkMode.value ? <SunIcon size={24} /> : <MoonIcon size={24} />
  );

  useEffect(() => {
    // Update the icon based on the current theme
    if (darkMode.value) {
      setSvg(<SunIcon size={24} />);
    } else {
      setSvg(<MoonIcon size={24} />);
    }
  }, [darkMode.value]);

  const handleClick = () => {
    // Toggle the theme
    if (darkMode.value) {
      darkMode.disable();
    } else {
      darkMode.enable();
    }
  };

  return (
    <Button isIconOnly variant="light" onClick={handleClick}>
      {svg}
    </Button>
  );
}
