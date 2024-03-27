//Funcion pura para modificar store, state: estado actual, action: cambio del store 
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_COMPANY':
      return {
        //Conservar 
        ...state,
        //A la lista companiesList, añade el objeto que viene del payload
        companiesList: [...state.companiesList, action.payload]
      };
    case 'UPDATE_COMPANY':
      return {
        ...state,
        //Actualiza un elemento de la lista companiesList, en base al objeto que viene en el payload
        companiesList: state.companiesList.map(company =>
        company.id === action.payload.id ? action.payload : company
        )
      };
    case 'DELETE_COMPANY':
      return {
        ...state,
        //Elimina un elemento de la lista companiesList, en base al id que viene en el payload
        companiesList: state.companiesList.filter(company =>
        company.id !== action.payload
        )
      };
      //AQUI LO MEJOR ES CREAR ARCHIVOS DIFERNTES PARA CADA MODULO PERO YA NO TENGO TIEMPO :C
    case 'ADD_PAYROLL_PERIOD':
      return {
        ...state,
        payRollListPeriocidad: [...state.payRollListPeriocidad, action.payload]
      };
    default:
      return state;
  }
};
  
export default reducer;