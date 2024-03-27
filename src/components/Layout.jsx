import React from 'react';

import { Link } from 'react-router-dom'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

import './Layout.css'; 

const Layout = ({children}) => {

  return (
   <>
    <div className="layout">
      <div className="sidebar">
        {/* Contenido de la barra lateral */}
        <Accordion type="single" collapsible>
          <AccordionItem value="inicio">
            <AccordionTrigger>Inicio</AccordionTrigger>
            <AccordionContent>
              <ul>
                <li> <Link to='/dashboard'>dashboard</Link></li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="recursos-humanos">
            <AccordionTrigger>Recursos Humanos</AccordionTrigger>
            <AccordionContent>
              <ul>
                <li> <Link to='/employee'>Empleados</Link></li>
                <li> <Link to='/puestos'>Puestos</Link></li>
                <li> <Link to='/departamentos'>departamentos</Link></li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="gestion-nomina">
            <AccordionTrigger>Gestión de Nómina</AccordionTrigger>
            <AccordionContent>
              <ul>
                <li> <Link to='/nomina'>Nomina</Link></li>
                <li> <Link to='/conceptos'>Conceptos</Link></li>
                <li> <Link to='/periocidad'>Periocidad</Link></li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="administracion">
            <AccordionTrigger>Administración</AccordionTrigger>
            <AccordionContent>
              <ul>
                <li> <Link to='/permisos'>Permisos</Link></li>
                <li> <Link to='/ventas'>Ventas</Link></li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="salir">
            <AccordionTrigger><li> <Link to='/login'>Salir</Link></li></AccordionTrigger>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="content">
        {children}
      </div>
    </div>
   </>
  );
};

export default Layout;


