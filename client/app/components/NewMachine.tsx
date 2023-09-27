import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Checkbox from '@mui/material/Checkbox';

interface Props {
  onClose: () => void;
}

const NovoEquipamento = ({ onClose }: Props) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <main className='w-full h-screen bg-transparent absolute top-0 backdrop-blur-sm  z-20 justify-center flex'>
      <div className='w-[60rem]  h-[30rem] bg-white border-2 border-black m-auto'>
        <div className='w-full flex m-4 relative'>
          <h1 className='text-title text-start text-3xl flex-grow'>
            Cadastro de Equipamento
          </h1>
          <CloseIcon
            onClick={onClose}
            style={{ fontSize: 40 }}
            className='mr-6 relative bottom-3 text-title cursor-pointer'
          />
        </div>
        <div className='flex flex-col gap-8 relative mt-11 ml-5'>
          <input
            type='text'
            name=''
            placeholder='Name'
            className='border-b-2 border-black w-[55rem] outline-none'
          />
          <input
            type='text'
            name=''
            placeholder='Image address'
            className='border-b-2 border-black w-[55rem] outline-none'
          />
          <textarea
            className=' border-b-2 border-black outline-none w-[55rem] box-border resize-none'
            placeholder='Description'
          ></textarea>
          <label className='flex items-center space-x-2 right-2 relative mt-3'>
            <input
              type='checkbox'
              checked={isChecked}
              onChange={handleCheckboxChange}
              className='hidden'
            />
            <div className='w-6 h-6 right-1 relative border border-black rounded-md flex items-center justify-center bg-black'>
              {isChecked && (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='white'
                  className='w-4 h-4'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M5 13l4 4L19 7'
                  />
                </svg>
              )}
            </div>
            Ativo
          </label>
        </div>
        <button className='w-40 h-14 rounded-2xl bg-title relative ml-2 mt-10 text-1xl font-bold text-white border-2 border-black'>
          Register
        </button>
      </div>
    </main>
  );
};

export default NovoEquipamento;
