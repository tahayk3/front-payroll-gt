import Tabla from '@/components/Tabla';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class PayRollCompany extends Component {

    render() {
        const { payRollList } = this.props;
        const columnas = ['ID', 'date_generated', 'total', ];
        const datos = payRollList.map(payroll => [
            payroll.id,
            payroll.date_generated,
            payroll.total
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