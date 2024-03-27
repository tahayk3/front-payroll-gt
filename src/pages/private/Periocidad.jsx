import { Navigationbar } from "@/components/Navigationbar";
import React, { useEffect, useState } from 'react';
import PayRollCompanyPeriocidad from "@/components/PayRollCompanyPeriocidad";

export const Periocidad = () => {
  const module = 'nomina';
  return (
    <>
      <Navigationbar
        name ={module}
      />
      <PayRollCompanyPeriocidad />
    </>
  )
}

