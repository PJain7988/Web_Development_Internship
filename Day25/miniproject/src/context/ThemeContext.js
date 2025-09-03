import { createContext,useContext } from "react"; // createContext is used to create context , useContext is used to context

export const ThemeContext = createContext({
    darkTheme : true, // Initial value
    setDarkTheme : () => {}, // function to change Initial value
})

export const useTheme = () =>{  // useTheme is Hook 
    return useContext(ThemeContext);
}
export const ThemeProvider = ThemeContext.Provider;