import React from 'react';

import { ThemeContext } from '../../theme-context';
import ThemeToggleIcon from 'ui/icons/theme-toggle';

import { Btn } from './styles';

const ThemeToggle = () => {
  const { colorMode, setColorMode } = React.useContext(ThemeContext);

  const toggleColorMode = () => {
    setColorMode(colorMode === 'light' ? 'dark' : 'light');
  };

  if (!colorMode) {
    return null;
  }

  return (
    <Btn onClick={toggleColorMode} type="button" aria-label={'theme toggle'}>
      <ThemeToggleIcon />
    </Btn>
  );
};

export default ThemeToggle;
