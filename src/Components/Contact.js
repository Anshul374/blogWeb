import React, { useState } from "react";
import "../Css/Contact.css";

export default function Contact() {
  const [state, setState] = useState({
    fname_show: false,
    fname_desc: "",
    lname_show: false,
    lname_desc: "",
    email_show: false,
    email_desc: "",
    phone_show: false,
    phone_desc: "",
  });

  const fnameFunc = (e) => {
    let regex = /^([a-zA-Z])([a-zA-Z]){4,10}$/;
    console.log(e.target.value);
    if (regex.test(e.target.value)) {
      setState({
        ...state,
        fname_show: false,
        fname_desc: "",
      });
    } else {
      setState({
        ...state,
        fname_show: true,
        fname_desc:
          "Your firstname must be 5-10 characters long and must start with a-zorA-Z!!",
      });
    }
  };
  const lnameFunc = (e) => {
    let regex = /^([a-zA-Z])([a-zA-Z]){4,10}$/;
    console.log(e.target.value);
    if (regex.test(e.target.value)) {
      setState({
        ...state,
        lname_show: false,
        lname_desc: "",
      });
    } else {
      setState({
        ...state,
        lname_show: true,
        lname_desc:
          "Your lastname must be 5-10 characters long and must start with a-z!!",
      });
    }
  };
  const emailFunc = (e) => {
    const regex =
      /^([_a-zA-Z])([\.\-a-zA-Z0-9]){2,15}@([a-zA-Z0-9]){2,7}\.([a-zA-Z]){2,4}/;
    if (regex.test(e.target.value)) {
      setState({
        ...state,
        email_show: false,
        email_desc: "",
      });
    } else {
      setState({
        ...state,
        email_show: true,
        email_desc: "Put valid email!!",
      });
    }
  };
  const phoneFunc = (e) => {
    let str = e.target.value;
    // let c = parseInt(str);
    if (str.length < 10 || str.length > 10) {
      setState({
        ...state,
        phone_show: true,
        phone_desc: "Put valid number!!",
      });
    } else if (isNaN(str)) {
      setState({
        ...state,
        phone_show: true,
        phone_desc: "Put valid number!!",
      });
    } else {
      setState({
        ...state,
        phone_show: false,
        phone_desc: "",
      });
    }
  };

  return (
    <div className="contact_div">
      <div className="contact_img_div">
        <div className="contact_us_text">
          <h3>CONTACT US</h3>
        </div>
      </div>
      <div className="have_qus_div">
        <h4 className="hey">Hey! Do you have any questions?</h4>
        <h4>Can we help you with your own adventure?</h4>
        <p>Well, we are here to help.</p>
        <p>
          We do get a lot of emails from readers and companies so we set up some
          guidelines that allow us to more comprehensively answer your
          questions.
        </p>
      </div>
      <div className="how_con_div">
        <h3>HOW TO CONTACT NOMADIC MONK</h3>
        <h4>PLEASE READ THE FOLLOWING BEFORE YOU CONTACT US:</h4>
        <ul className="unorder">
          <li>
            If you are interested in partnering with us, please visit our
            Clients Page for more information on opportunities, statistics, and
            demographics.{" "}
          </li>
          <li>
            For upcoming speaking engagements and for past events visit our
            public speaking page.{" "}
          </li>
          <li>
            If you have a travel-related question please check out our resources
            such as our Travel Tips page to see if it can be answered there. We
            produce a lot of content and may have written about it before.
          </li>
          <li>
            We do not do link exchanges or post content from companies for free.
            If you are contacting us regarding a partnership, advertising or
            sponsored content please do so via our Work with us page.
          </li>
          <li>
            We do accept guest posts from aspiring writers. Please check out our
            editorial guidelines BEFORE e-mailing us.
          </li>
          <li>Please do not send us un-solicited Press Releases.</li>
          <li>
            If you are an aspiring blogger and are looking for advice please
            check out our Travel Blogging Advice Page first.
          </li>
          <li>
            If you would like more information about how we got started or what
            we did prior to the blog please check out ourAbout Page.
          </li>
        </ul>
      </div>
      <div className="note_div">
        <p>
          We look forward to hearing from you and reading your emails. It is one
          of our favourite things to do! Cheers, Dave and Deb.
        </p>
        <p>
          You can use our contact form below or you can email us directly at{" "}
          <strong>anshulthalur3339@gmail.com.</strong>
        </p>
        <h4>
          <em>
            **Note** If you do not hear back from us within 7 days please
            re-send your email as it may have gotten buried.
          </em>
        </h4>
      </div>
      <div className="contact_form_div">
        <h3>Contact Us</h3>
        <form action="/">
          <div className="fname_div mb">
            <label htmlFor="fname">First name*</label>
            <br />
            <input
              type="text"
              id="fname"
              name="fname"
              spellCheck="false"
              className={`inp ${state.fname_show && "inp_border"}`}
              onChange={(e) => fnameFunc(e)}
            />
            <br />
            {state.fname_show && (
              <small className="red">{state.fname_desc}</small>
            )}
          </div>
          <div className="lname_div mb">
            <label htmlFor="lname">Last name*</label>
            <br />
            <input
              type="text"
              id="lname"
              name="lname"
              spellCheck="false"
              className={`inp ${state.lname_show && "inp_border"}`}
              onChange={(e) => {
                lnameFunc(e);
              }}
            />
            <br />
            {state.lname_show && (
              <small className="red">{state.lname_desc}</small>
            )}
          </div>
          <div className="email_div mb">
            <label htmlFor="email">E-mail*</label>
            <br />
            <input
              type="text"
              id="email"
              name="email"
              spellCheck="false"
              className={`inp ${state.email_show && "inp_border"}`}
              onChange={(e) => {
                emailFunc(e);
              }}
            />
            <br />
            {state.email_show && (
              <small className="red">{state.email_desc}</small>
            )}
          </div>
          <div className="phone_div mb">
            <label htmlFor="phone">Phone No.*</label>
            <br />
            <input
              type="text"
              id="phone"
              name="phone"
              spellCheck="false"
              className={`inp  ${state.phone_show && "inp_border"}`}
              onChange={(e) => {
                phoneFunc(e);
              }}
            />
            <br />
            {state.phone_show && (
              <small className="red">{state.phone_desc}</small>
            )}
          </div>
          <div className="message_div">
            <label htmlFor="message">Message*</label>
            <br />
            <textarea
              name="message"
              id="message"
              spellCheck="false"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div>
            <input type="button" value="Submit" className="btn" />
          </div>
        </form>
      </div>
    </div>
  );
}
