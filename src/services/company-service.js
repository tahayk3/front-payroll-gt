
import { apiService } from "./api-service";




class CompanyService {
    async createCompany(name, phone, description, address, picture) {
        const companyData = {
            name: name,
            phone: phone,
            description: description,
            address: address,
            picture: picture
        };

        try {
            const response = await apiService.post({
                url: '/company/',
                data: companyData,
            });

            return response;
        } catch (error) {
            console.error("Error al crear la empresa:", error);
            throw error;
        }
    }

 
    

    async getCompanies() {
        try {
            const response = await apiService.get({
                url: '/company/',
                
            });

            return response.data; // Devuelve los datos de las empresas
        } catch (error) {
            console.error("Error al obtener las empresas:", error);
            throw error;
        }
    }


    async updateCompany(id, name, phone, description, address, picture) {
        const companyData = {
             name,
             phone,
             description,
             address,
             picture
        };

        try {
            const response = await apiService.put({
                url: `/company/${id}/`,
                data: companyData,
            });

            return response;
        } catch (error) {
            console.error("Error al actualizar la empresa:", error);
            throw error;
        }
    }

    async deleteCompany(id) {
        try {
            const response = await apiService.delete({
                url: `/company/${id}/`,
            });

            return response;
        } catch (error) {
            console.error("Error al eliminar la empresa:", error);
            throw error;
        }
    }
}


// export const companyService = Object.freeze(new CompanyService())
export const companyService = new CompanyService();