import * as React from 'react';
import { Provider as ReakitProvider } from 'reakit';
import ConditionalWrap from 'conditional-wrap';

import { ThemeProvider as EmotionProvider } from '../styled';
import buildTheme from '../theme';
import { LayoutBreakpoint, ThemeConfig } from '../types';
import { ToastProvider } from '../Toast';
import { PageProvider } from '../Page/PageContext';
import { Box } from '../Box';

import { ColorModeProvider } from '../ColorMode/ColorModeContext';
import { GlobalStyles } from './GlobalStyles';
import { BumbagThemeContext } from './ThemeContext';

export type ProviderProps = {
  children: React.ReactNode;
  isStandalone?: boolean;
  collapseBelow?: LayoutBreakpoint;
  colorMode?: string;
  isSSR?: boolean;
  platform?: 'web' | 'native';
  theme?: ThemeConfig;
};

Provider.defaultProps = {
  colorMode: 'default',
  platform: 'web',
};

export function Provider(props: ProviderProps) {
  const { children, colorMode, collapseBelow, isSSR, isStandalone, platform, theme: _theme } = props;

  ////////////////////////////////////////////////

  const [theme, setTheme] = React.useState(_theme);
  React.useEffect(() => {
    setTheme(_theme);
  }, [_theme]);

  ////////////////////////////////////////////////

  const derivedTheme = React.useMemo(() => {
    if (theme && isStandalone) {
      return theme;
    }
    return buildTheme(theme);
  }, [isStandalone, theme]);

  ////////////////////////////////////////////////

  const themeContextValue = React.useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

  ////////////////////////////////////////////////

  return (
    <BumbagThemeContext.Provider value={themeContextValue}>
      <EmotionProvider theme={derivedTheme}>
        <ColorModeProvider isSSR={isSSR} mode={colorMode}>
          <ConditionalWrap
            condition={platform === 'web'}
            wrap={(children: React.ReactNode) => (
              <ReakitProvider unstable_prefix="bb-id">
                <ToastProvider>
                  <PageProvider collapseBelow={collapseBelow}>
                    <React.Fragment>
                      {process.env.NODE_ENV !== 'test' && <GlobalStyles />}
                      {process.env.NODE_ENV === 'test' ? children : <Box>{children}</Box>}
                    </React.Fragment>
                  </PageProvider>
                </ToastProvider>
              </ReakitProvider>
            )}
          >
            {children}
          </ConditionalWrap>
        </ColorModeProvider>
      </EmotionProvider>
    </BumbagThemeContext.Provider>
  );
}
