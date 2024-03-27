import React from 'react';

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
                <li>Opc 1</li>
                <li>Opc 2</li>
                <li>Opc 3</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="recursos-humanos">
            <AccordionTrigger>Recursos Humanos</AccordionTrigger>
            <AccordionContent>
              <ul>
                <li>Opc 1</li>
                <li>Opc 2</li>
                <li>Opc 3</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="gestion-nomina">
            <AccordionTrigger>Gestión de Nómina</AccordionTrigger>
            <AccordionContent>
              <ul>
                <li>Opc 1</li>
                <li>Opc 2</li>
                <li>Opc 3</li>
            
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="administracion">
            <AccordionTrigger>Administración</AccordionTrigger>
            <AccordionContent>
              <ul>
                <li>Opc 1</li>
                <li>Opc 2</li>
                <li>Opc 3</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="salir">
            <AccordionTrigger>Salir</AccordionTrigger>
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


