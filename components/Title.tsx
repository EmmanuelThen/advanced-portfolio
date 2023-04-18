import React from 'react';

interface Props {
  title: string;
}

function getTitleElement(title: string): JSX.Element {
  return (
    <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>{title}</h3>
  );
}

export default function Title({ title }: Props): JSX.Element {
  const titleElement = getTitleElement(title);
  return titleElement;
}
