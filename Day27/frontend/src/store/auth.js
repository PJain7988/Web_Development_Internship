import { create } from "zustand";

import axios from "axios";
const API_URL = "http://localhost:3000/api/auth"
axios.defaults.withCredentials=true;

export const useAuthStore = create((set) => ({
    isLoading: false,
    error: null,
    user: null,
    isAuthenticated: false,
    message: "",
    isCheckingAuth: false,
    signup: async (email, name, password) => {
        set({ isLoading: true })
        try {
            const response = await axios.post(`${API_URL}/signup`, { email, name, password });
            console.log(response, '-------------------------response----------------');
            set({
                user: response.data.user,
                isAuthenticated: true,
            })
        } catch (error) {
            console.error("Login Error:", error.response?.data || error.message);

            set({
                error: error.response?.data?.message || error.message,
                isLoading: false
            });
        }
    },
    verifyEmail: async (code) => {
        set({ isLoading: true, error: null })
        try {
            const response = await axios.post(`${API_URL}/verify-email`,{ code }); // code is PayLoad
            set({
                user: response.data.user,
                isAuthenticated: true,
                isLoading: false
            })
        } catch (error) {
            set({
                error: error.message
            })
        }
    },
    login: async (email, password) => {
        set({
            isLoading: true,
            error: null
        });
        try {
            const response = await axios.post(`${API_URL}/login`, { email, password });
            set({
                user: response.data.user,
                isAuthenticated: true,
                isLoading: false
            })
        } catch (error) {
            set({
                error: error.message
            })
        }
    },
    checkAuth : async() => {
        set({
            isCheckingAuth: true,
            error:null
        });
        try{
            const response = await axios.get(`${API_URL}/check-auth`);
            set({
                user: response.data.user,
                isCheckingAuth: false,
                isAuthenticated: true
            })
        }catch (error){
            set({
                error:error.message
            })
        }
        finally{
            set({
                isCheckingAuth:false
            })
        }
    },
    forgetPassword : async(email)=>{
    set({ isLoading: true, error: null });
    try {
        const response = await axios.post(`${API_URL}/forget-password`, { email });
        set({
            success: response.data.success,
            message: response.data.message,
            isLoading: false
        });
    } catch (error) {
        set({
            error: error.message
        });
    }
  }
}))