import React from 'react';
import { Link } from 'react-router-dom';

const LinkButton = ({ nav }) => {
  return (
    <div className="w-[35px] h-[55px]">
      <Link to={nav.to}>
        <div className="flex flex-col h-full items-center justify-between">
          <div className="w-[35px] h-[35px] flex justify-center items-center">
            <img src={nav.icon} alt={nav.name} />
          </div>
          <div>
            <p className="text-[#ADADAD] font-bold text-[12px]">{nav.name}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default LinkButton;
