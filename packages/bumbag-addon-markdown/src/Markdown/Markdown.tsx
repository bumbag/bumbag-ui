import * as React from 'react';
import { Box as ReakitBox } from 'reakit';
// @ts-ignore
import MarkdownRenderer from 'markdown-react-js';

import { useClassName, createComponent, createElement, createHook } from 'bumbag/utils';
import { Box, BoxProps } from 'bumbag/Box';
import { Blockquote } from 'bumbag/Blockquote';
import { Divider } from 'bumbag/Divider';
import { Image } from 'bumbag/Image';
import { Link } from 'bumbag/Link';
import { List } from 'bumbag/List';
import { Paragraph } from 'bumbag/Paragraph';
import { Table } from 'bumbag/Table';
import { Text } from 'bumbag/Text';
import { Heading } from 'bumbag/Heading';

import * as styles from './styles';

export type LocalMarkdownProps = {
  content: string;
  elementProps?: any;
  wrap?: (children: any) => any;
};
export type MarkdownProps = BoxProps & LocalMarkdownProps;

const tags = (props: any): { [key: string]: { Component: BoxProps['use']; props?: Object } } => ({
  p: {
    Component: Paragraph,
    props: props?.elementProps?.p,
  },
  strong: {
    Component: Text,
    props: {
      fontWeight: 'semibold',
      ...props?.elementProps?.strong,
    },
  },
  em: {
    Component: Text,
    props: {
      use: 'em',
      ...props?.elementProps?.em,
    },
  },
  a: {
    Component: Link,
    props: props?.elementProps?.a,
  },
  blockquote: {
    Component: Blockquote,
    props: props?.elementProps?.blockquote,
  },
  h1: {
    Component: Heading,
    props: {
      use: 'h1',
      ...props?.elementProps?.h1,
    },
  },
  h2: {
    Component: Heading,
    props: {
      use: 'h2',
      ...props?.elementProps?.h2,
    },
  },
  h3: {
    Component: Heading,
    props: {
      use: 'h3',
      ...props?.elementProps?.h3,
    },
  },
  h4: {
    Component: Heading,
    props: {
      use: 'h4',
      ...props?.elementProps?.h4,
    },
  },
  h5: {
    Component: Heading,
    props: {
      use: 'h5',
      ...props?.elementProps?.h5,
    },
  },
  h6: {
    Component: Heading,
    props: {
      use: 'h6',
      ...props?.elementProps?.h6,
    },
  },
  hr: {
    Component: Divider,
    ...props?.elementProps?.hr,
  },
  ul: {
    Component: List,
    props: {
      listStyleType: 'disc',
      listStylePosition: 'inside',
      ...props?.elementProps?.ul,
    },
  },
  ol: {
    Component: List,
    props: {
      isOrdered: true,
      listStylePosition: 'inside',
      ...props?.elementProps?.ol,
    },
  },
  li: {
    Component: List.Item,
    props: props?.elementProps?.li,
  },
  table: {
    Component: Table,
    props: props?.elementProps?.table,
  },
  tbody: {
    Component: Table.Body,
    props: props?.elementProps?.tbody,
  },
  thead: {
    Component: Table.Head,
    props: props?.elementProps?.thead,
  },
  tfoot: {
    Component: Table.Foot,
    props: props?.elementProps?.tfoot,
  },
  tr: {
    Component: Table.Row,
    props: props?.elementProps?.tr,
  },
  td: {
    Component: Table.Cell,
    props: props?.elementProps?.td,
  },
  th: {
    Component: Table.HeadCell,
    props: props?.elementProps?.th,
  },
  img: {
    Component: Image,
    props: props?.elementProps?.img,
  },
});

const useProps = createHook<MarkdownProps>(
  (props, { themeKey  }) => {
    const { content, wrap, ...restProps } = props;

    const boxProps = Box.useProps(restProps);

    const className = useClassName({
      style: styles.Markdown,
      styleProps: props,
      themeKey,
       
      prevClassName: boxProps.className,
    });

    const handleIterate = React.useCallback(
      (restProps) => (Tag: string, props: Object, children: React.ReactElement<any>) => {
        const { Component, props: overrideProps = {} } = tags({ ...props, ...restProps })[Tag] || { Component: Tag };
        return (
          // @ts-ignore
          <Component {...props} {...(overrideProps || {})}>
            {children}
          </Component>
        );
      },
      []
    );

    return {
      ...boxProps,
      className,
      children: wrap(
        <MarkdownRenderer onIterate={handleIterate(restProps)} text={content} tags={{ html: React.Fragment }} />
      ),
    };
  },
  { defaultProps: { wrap: (children) => children }, themeKey: 'Markdown' }
);

export const Markdown = createComponent<MarkdownProps>(
  (props) => {
    const markdownProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: markdownProps });
  },
  {
    attach: {
      useProps,
    },
    themeKey: 'Markdown',
  }
);
