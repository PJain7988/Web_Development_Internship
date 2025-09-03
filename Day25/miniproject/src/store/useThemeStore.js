import React from "react";
import { create } from "zustand"; // create is built in function

export const useThemeStore = create((set) =>({  // useTheme is hook
    darkTheme : true,
    setDarkTheme : () => set((state) => ({darkTheme : !state.darkTheme})) // function to set value
}))