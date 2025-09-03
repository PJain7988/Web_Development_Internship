//step-1
import {create} from 'zustand';
export const useUser = create((set) =>({
     user:null,
     setUser :(data) => set({user:data})
}))