import React from 'react';

interface IContext {
  value: any;
}

const context: IContext = {
  value: null
}

export default React.createContext(context);