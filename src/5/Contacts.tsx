import React from "react";
import style from "./Contacts.module.css"

function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={style.container}>
                <h2>CONTACTS</h2>
                <div className={style.myContacts}>
                    <span>MY Phone</span>
                    <span>MY Email</span>
                    <span>MY Location</span>
                </div>
                <div>
                    <form className={style.form}>
                        <input type="text" placeholder={"NAME"}/>
                        <input type="email" placeholder={"Email"}/>
                        <textarea placeholder={"Your Message"}></textarea>
                    </form>

                </div>
                <button>SEND</button>
            </div>
        </div>
    );
}

export default Contacts;
