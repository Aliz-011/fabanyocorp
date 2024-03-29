'use client';

import React from 'react';

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-screen-2xl mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
      {children}
    </div>
  );
};
