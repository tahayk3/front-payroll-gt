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
            // return await response.json()
            return response;
 
        } catch (error) {
            console.error("Error al iniciar sesión:", error);
            throw error;
        }
    }
    
}

export const authService = Object.freeze(new AuthService())
