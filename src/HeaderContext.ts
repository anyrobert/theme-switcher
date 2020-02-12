

import React from 'react'

const HeaderContext = React.createContext({
    toggleTheme: () => {}
});

export const HeaderProvider = HeaderContext.Provider
export const HeaderConsumer = HeaderContext.Consumer
export default HeaderContext