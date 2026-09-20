import './Contact.css'

import {useState} from 'react'
import {assets} from '../../assets/assets'



const Contact = () => {

  // const [fullname, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [mobile, setMobile] = useState("");
  // const [text, setText] = useState("");


  const [formdata, setformdata] = useState({
    fullname :"",
    email : "",
    mobile : "",
    text : ""
  }
  );
 
  const [showPopup , setShowPopup] = useState(false);

  function handleSubmit(e){
    e.preventDefault();
    if( formdata.fullname === "" || formdata.email === "" || formdata.mobile === "" ){
      alert("Please Enter your details!");
      return;
    }

    console.log(formdata);
    setShowPopup(true)
   

  }
  function closepopup(){
    setShowPopup(false)
  }




  return (
    <div className="contact-form">

      <h1>Stay in Touch</h1>

        <div className="contact">
            <div className="form">

                <form onSubmit={handleSubmit}>

                  <div className="form-input">
                     <label>Name:</label>
                     <input type='text' value={formdata.fullname} onChange={(e)=> setformdata({  ...formdata, fullname: e.target.value})} />
                  </div>

                  <div className="form-input">
                     <label>Phone Number: </label>
                     <input type='tel' value={formdata.mobile} onChange={(e)=> setformdata({...formdata, mobile: e.target.value})} />
                  </div>

                  <div className="form-input">
                     <label>Email:</label>
                     <input type='email' value={formdata.email} onChange={(e)=> setformdata({...formdata,email:e.target.value})} />
                  </div>

                  <div className="form-input">
                     <label>Your Message:</label>
                     <textarea type='texterea' value={formdata.text} onChange={(e) => setformdata({ ...formdata, text: e.target.value }) } />
                  </div>


                  <div className="form-btn">
                     <button type='submit'>Send Message</button> 
                  </div>



                </form>
            </div>

            <div className="contact-img">
                <img src={assets.contact} alt="" />
            </div>
        </div>



        {showPopup && (

         <div className="popup-box">
          <div className="popUp">

            <h2>Message Sent!</h2>
            <p>Thank you for Contacting me.</p>

            <div className="popup-btn">
              <button onClick={closepopup}>Okay</button>
            </div>
          </div>
         </div>

        )}



      
    </div>
  )
}

export default Contact
 