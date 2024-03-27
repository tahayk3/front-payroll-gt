import Tabla from '@/components/Tabla';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class PayRollCompany extends Component {

    render() {
        const { payRollListPeriocidad } = this.props;
        const columnas = ['ID', 'Nombre', 'Tipo', 'Acciones'];
        const datos = payRollListPeriocidad.map(payroll => [
            payroll.id,
            payroll.name,
            payroll.type,
        ]);

        return (
            <div>
                <Tabla columnas={columnas} datos={datos} />
            </div>
        );
    }
}

//Funcion para definir que parte del store nos interesa utilizar
const mapStateToProps = (state) => ({
    payRollList: state.payRollList
});

//Suscribimos a nuestro componente con el store
export default connect(mapStateToProps)(PayRollCompany);