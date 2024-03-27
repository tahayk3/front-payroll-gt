import Tabla from '@/components/Tabla';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class PayRollCompanyPeriocidad extends Component {
    render() {
        const { payRollListPeriocidad } = this.props;
        const columnas = ['ID', 'Mes', 'Fecha de inicio', 'Fecha de finalización'];

        const datos = payRollListPeriocidad ? payRollListPeriocidad.map(period => [
            period.id,
            period.name,
            period.start_date,
            period.end_date
        ]) : [];

        return (
            <div>
                <h2>Períodos de Nómina</h2>
                <Tabla columnas={columnas} datos={datos} />
            </div>
        );
    }
}

// Función para definir qué parte del store nos interesa utilizar
const mapStateToProps = (state) => {
    console.log("Estado de Redux:", state);
    return {
        payRollListPeriocidad: state.payRollListPeriocidad
    };
};

// Suscribimos a nuestro componente con el store
export default connect(mapStateToProps)(PayRollCompanyPeriocidad);

