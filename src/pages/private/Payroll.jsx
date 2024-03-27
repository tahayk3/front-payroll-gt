import { Navigationbar } from "@/components/Navigationbar";
import React, { useEffect, useState } from 'react';
import PayRollCompany from "@/components/PayRollCompany";
export const Payroll = () => {
  const module = 'nomina';
  return (
    <>
      <Navigationbar
        name ={module}
      />
      <PayRollCompany />
    </>
  )
}



