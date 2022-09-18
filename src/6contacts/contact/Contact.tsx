import React from 'react';

type ContactPropsType = {
  title: string
}

const Contact = (props: ContactPropsType) => {
  return (
    <div>
      <span>{props.title}</span>
    </div>
  );
};

export default Contact;