import React from "react";
import style from "./Contacts.module.scss"
import BlockTitle from "../components/titles/BlockTitle";
import pho from "../assets/images/phone-call.png";
import mail from "../assets/images/email.png";
import pin from "../assets/images/gps.png";
import Contact from "./contact/Contact";
import {Button} from "@mui/material";
import {useForm} from "react-hook-form";

type FormDataType = {
  Name: string
  Email: string
  TextArea: string
}

function Contacts() {
  const {register, formState: {errors}, reset, handleSubmit} = useForm<FormDataType>()
  const onSubmitHandler = (data: FormDataType) => {
    sendMessage(JSON.stringify(data))
    reset()
  }

  let tg = {
    token: "5498457162:AAHnqwwjQH0ckPPMbGhTZPEjdVqkX_bhWS8",
    chat_id: "-664492751"
  }

  function sendMessage(data: string) {
    const url = `https://api.telegram.org/bot${tg.token}/sendMessage` // The url to request

    const obj = {
      chat_id: tg.chat_id,
      text: data
    };

    const xht = new XMLHttpRequest();
    xht.open("POST", url, true);
    xht.setRequestHeader("Content-type", "application/json; charset=UTF-8");
    xht.send(JSON.stringify(obj));
  }

  const phone = {
    backgroundImage: `url(${pho})`,
  }
  const eMail = {
    backgroundImage: `url(${mail})`,
  }
  const location = {
    backgroundImage: `url(${pin})`,
  }

  return (
    <div className={style.contactsBlock} id={"4"}>
      <div className={style.container}>
        <BlockTitle text={"contacts"}/>
        <div className={style.myContacts}>

          <div className={style.contactPics}>
            <div className={style.cPic} style={phone}/>
            <div className={style.cPic} style={eMail}/>
            <div className={style.cPic} style={location}/>
          </div>

          <div className={style.contactItems}>
            <Contact title={"MY Phone: +37529 826 826 5"}/>
            <Contact title={"MY Email: romannikitchyk@gmail.com"}/>
            <Contact title={"MY Location: Belarus, Brest"}/>
          </div>

        </div>
        <div>
          <form className={style.form} onSubmit={handleSubmit(onSubmitHandler)}>
            <div className={style.inptBlock}>
              <input className={style.inpt} type="text"
                     placeholder={"Your Name"} {...register('Name', {required: true})} />
              <input className={style.inpt} type="email"
                     placeholder={"Your Email"} {...register('Email', {required: true})}/>
            </div>
            <textarea className={style.txtArea}
                      placeholder={"Your Message"} {...register('TextArea', {required: true})}></textarea>
            <Button type={'submit'} className={style.button} variant="contained" color={"inherit"}>SEND</Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
