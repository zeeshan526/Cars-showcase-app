import { CarsProps } from '@/types';
import React from 'react'

interface CarDetailsProps {
    isOpen: boolean;
    closeModal: () => void;
    car: CarsProps;
  }


const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => {
  return (
    <div>
      CarDetails
    </div>
  )
}

export default CarDetails
