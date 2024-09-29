import useDarkMode from 'use-dark-mode';
import { Button } from '@nextui-org/react';
import { useState, useEffect } from 'react';
import { MoonIcon, SunIcon } from 'lucide-react';

export default function ThemeSwitcher() {
  const darkMode = useDarkMode(false);
  const [svg, setSvg] = useState(<MoonIcon size={24} />);

  useEffect(() => {
    if (darkMode.value) {
      setSvg(<SunIcon size={24} />);
    } else {
      setSvg(<MoonIcon size={24} />);
    }
  }, [darkMode.value]); // Re-run this effect when darkMode.value changes

  const handleClick = () => {
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
