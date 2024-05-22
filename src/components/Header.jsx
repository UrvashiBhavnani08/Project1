import React from 'react';

const Header = ({ category, title }) => (
  <div className=" mb-10">
  <p className="text-3xl font-normal tracking-tight text-slate-900 mb-2">
      {title}
    </p>
    <p className="text-lg text-gray-400">{category}</p>
  </div>
);

export default Header;
