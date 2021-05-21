import React from 'react';

export const Layout = ({ children }) => {
  return (
    <div style={styles.layout as React.CSSProperties}>
      <div style={styles.container}>{children}</div>
    </div>
  );
};

const styles = {
  layout: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  container: {
    maxWidth: '1280px',
  },
};

export { HeadComponent } from './head';
export { HeaderComp } from './header';
export { FooterComp } from './footer';
