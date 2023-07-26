import { createContext, useState } from 'react';

const showContext = createContext({
  activeBox: 1,
  setActiveBox: () => {},
});

export default showContext;
