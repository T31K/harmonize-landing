import React from 'react';
import { MdClear, MdCheck } from 'react-icons/md';

function Check({ disable }) {
  return disable ? (
    <MdClear className="bg-red-100 text-red-500 text-2xl font-bold mr-2 rounded-full p-1" />
  ) : (
    <MdCheck className="bg-green-100 text-green-500 text-2xl font-bold mr-2 rounded-full p-1" />
  );
}

export default Check;
