import React from 'react';

type ContactPropsType = {
  title: string
}

export const Contact = (props: ContactPropsType) => {
  return (
    <div>
      <span>{props.title}</span>
    </div>
  );
};

