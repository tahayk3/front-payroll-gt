import { json } from "react-router-dom";
import { apiService } from "./api-service";

class AuthService{
    
    async login() {
        const loginData = {
            email: "empresa2@gmail.com",
            password: "empresa2"
        };
    
        try {
            const response = await apiService.post({
                url: '/login/',
                data: loginData,
            });

            sessionStorage.setItem('token', response.data.token)

            return response;
 
        } catch (error) {
            console.error("Error al iniciar sesión:", error);
            throw error;
        }
    }

    async resetPassword() {
        const id = 3;
        const data = {
            password: "empresa2",
            confirm_password: "empresa2"
        };
        try {
            const response = await apiService.put({
                url: '/reset-pass/:id/',
                params: {
                    'id': id,
                },
                data: data,
            });
            sessionStorage.setItem('token', response.data.token)

            return response;
        } catch (error) {
            console.error("Error al cambiar password:", error);
            throw error;
        }
    }

   
      
      
    
}

export const authService = Object.freeze(new AuthService())
