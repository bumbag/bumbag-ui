import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';
import { Rover, RoverInitialState, RoverStateReturn } from '../Rover';

import * as styles from './styles';

export type LocalMenuProps = {
  baseId?: RoverInitialState['baseId'];
};
export type MenuProps = BoxProps & LocalMenuProps;

export const MenuContext = React.createContext<{
  rover: Partial<RoverStateReturn>;
  overrides: any;
}>({
  rover: {},
  overrides: {}
});

const useProps = createHook<MenuProps>(
  (props, { themeKey, themeKeyOverride }) => {
    const { baseId, children, overrides, ...restProps } = props;
    const boxProps = Box.useProps(props);

    const rover = Rover.useState({ baseId });

    const className = useClassName({
      style: styles.Menu,
      styleProps: props,
      themeKey,
      themeKeyOverride,
      prevClassName: boxProps.className
    });

    const contextValue = React.useMemo(() => ({ rover, overrides }), [rover, overrides]);

    return {
      ...boxProps,
      className,
      children: <MenuContext.Provider value={contextValue}>{children}</MenuContext.Provider>
    };
  },
  { themeKey: 'Menu' }
);

export const Menu = createComponent<MenuProps>(
  props => {
    const textProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: textProps });
  },
  {
    attach: {
      useProps
    },
    themeKey: 'Menu'
  }
);