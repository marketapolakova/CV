import React from 'react'
import Navbar from "../navbar/Navbar";
import Link from "next/link";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import S from "./contact.module.scss";
function ContactMe() {

    return (
        <div>
        <div className={S.div}>
        <Navbar />
        <div className={S.box}>
        <h1 className={S.h1}>Contact</h1>
        <p className={S.p}><PhoneIcon style={{ fontSize: 25 }}/> +420 722 308 762</p>
        <p className={S.p}><MailIcon style={{ fontSize: 25 }}/> <a href="mailto:polakovamarketa@email.cz">polakovamarketa@email.cz</a></p>
       
        <p className={S.p}> <Link href="https://www.linkedin.com/in/mark%C3%A9ta-pol%C3%A1kov%C3%A1-aa19451b5/">
        <a target="_blank"> <LinkedInIcon style={{ fontSize: 25 }}/> Linkedin </a>
          </Link> </p>

          <p className={S.p}><Link href="https://www.facebook.com/marketa.polakova.186">
          <a target="_blank"><FacebookIcon style={{ fontSize: 25 }}/> Facebook </a> 
          </Link> </p>


          <p className={S.p}> 
          <Link href="https://github.com/marketapolakova">
                <a target="_blank"><GitHubIcon style={{ fontSize: 25 }}/> GitHub</a> 
          </Link> </p>
   
          
       
  
        
        </div>
      </div>
        </div>
    )
}

export default ContactMe