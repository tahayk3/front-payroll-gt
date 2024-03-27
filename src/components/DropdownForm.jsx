import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addPayrollPeriod } from '@/redux/actions';

const DropdownForm = () => {
  const [formData, setFormData] = useState({
    month: '',
    startDate: '',
    endDate: ''
  });

  const months = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];

  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addPayrollPeriod(formData));
    setFormData({
      name: '',
      start_date: '',
      end_date: ''
    });
  };

  return (
    <div className="dropdown-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Mes:</label>
        <select
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        >
          <option value="">Seleccione un mes</option>
          {months.map((month, index) => (
            <option key={index} value={month}>{month}</option>
          ))}
        </select>
        <label htmlFor="start_date">Fecha de inicio:</label>
        <input
          type="date"
          id="start_date"
          name="start_date"
          value={formData.start_date}
          onChange={handleChange}
        />
        <label htmlFor="end_date">Fecha de finalización:</label>
        <input
          type="date"
          id="end_date"
          name="end_date"
          value={formData.end_date}
          onChange={handleChange}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default DropdownForm;
