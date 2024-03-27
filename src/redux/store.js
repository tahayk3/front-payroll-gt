import { createStore } from 'redux';
import reducer from './reducers/index';
import { apiService } from '@/services/api-service';

// Función para obtener los datos iniciales de la API y crear el estado inicial
const fetchInitialDataAndCreateInitialState = async () => {
  try {
    const payRollListPeriocidad = await apiService.get({ url: '/payroll-periods/' });
    const payRollList = await apiService.get({ url: '/payrolls/' });
    const employeeList = await apiService.get({ url: '/employees/' });
    const companiesList = await apiService.get({ url: '/company/' });

    const initialState = {
      companiesList: companiesList.data.results,
      employeeList: employeeList.data.results,
      payRollListPeriocidad: payRollListPeriocidad.data.results,
      payRollList: payRollList.data.results,
    };

    console.log('Initial State:', initialState);
    return initialState;
  } catch (error) {
    console.error('Error fetching initial data:', error);
    return {}; // Retornar un objeto vacío en caso de error
  }
};

// Crear el estado inicial y el store
const createInitialStateAndStore = async () => {
  const initialState = await fetchInitialDataAndCreateInitialState();
  return createStore(reducer, initialState);
};

export default createInitialStateAndStore;
