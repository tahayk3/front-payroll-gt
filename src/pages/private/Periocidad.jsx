import React, { useState } from 'react';
import { Navigationbar } from "@/components/Navigationbar";
import PayRollCompanyPeriocidad from "@/components/PayRollCompanyPeriocidad";
import DropdownForm from '@/components/DropdownForm';
import { useSelector } from 'react-redux';

export const Periocidad = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const module = 'nomina';

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <>
      <Navigationbar
        name={module}
        toggleForm={toggleForm} // Pasar la función toggleForm como prop al Navigationbar
      />
      {isFormOpen && <DropdownForm />} {/* Muestra el formulario solo si isFormOpen es true */}
      <PayRollCompanyPeriocidad />
    </>
  );
}
