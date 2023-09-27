import React from 'react';
import CloseIcon from '@mui/icons-material/Close';

interface Props {
  onClose: () => void;
}

const DeleteMachine = ({ onClose }: Props) => {
  return (
    <main className='w-full h-full bg-transparent absolute top-0 backdrop-blur-sm  z-50 justify-center flex left-0 '>
      <div className='w-[42rem] h-[20rem] bg-white border-2 border-black flex m-auto relative justify-between flex-wrap'>
        <h1 className='ml-3 mt-2 text-3xl text-title  font-bold'>
          Delete Machine
        </h1>
        <CloseIcon
          onClick={onClose}
          style={{ fontSize: 40 }}
          className='mr-3 mt-2 relative bottom-1 text-title cursor-pointer'
        />
        <h4 className='font-bold ml-3 mr-3 text-xl m-auto text-center'>
          ATTENTION! ARE YOU SURE YOU WANT TO DELETE THE MACHINE? THIS ACTION
          CANNOT BE UNDONE ANYMORE!!
        </h4>
        <button className='w-48 h-12 bg-red-500 rounded-xl text-white font-bold ml-3 relative top-10 border-2 border-black'>
          Delete
        </button>
      </div>
    </main>
  );
};

export default DeleteMachine;
