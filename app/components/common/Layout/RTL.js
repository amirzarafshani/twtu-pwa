import React, { useState } from 'react';
import { create } from 'jss';
import { createMuiTheme } from '@material-ui/core/styles';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/styles';
import { ThemeProvider } from '@material-ui/styles';
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

function RTL({ children }) {
  const [direction, setDirection] = useState('rtl');

  const handleSwitch = () => {
    setDirection(direction === 'ltr' ? 'rtl' : 'ltr');
  };

  const theme = createMuiTheme({ direction });
  document.body.style.direction = direction;

  // // console.log(theme);

  return (
    <StylesProvider jss={jss}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StylesProvider>
  );
}

export default RTL;
