import React from 'react'
import { toast } from 'react-toastify';

function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "15055427-89a8-4fe5-aca6-3be2f41c7a9e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult("");
      toast.error(data.message)
    }
  };
  return (
    <div className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='contact'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Contact <span className='underline underline-offset-4 decoration-1 under font-light'>With Us</span></h1>
      <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Ready to Make a Move? Let's Build Your Future Together</p>

      <form onSubmit={onSubmit} className='max-w-2xl mx-auto text-gray-600 pt-8'>
        <div className='flex flex-wrap'>
            <div className='w-full md:w-1/2 text-left'>
                Your Name:
                <input type="text" className='w-full border border-gray-500 rounded py-3 px-4 mt-2' placeholder='Your Name' required name='name'/>
            </div>
            <div className='w-full md:w-1/2 textt-left md:pl-4'>
                Your E-mail:
                <input type="email" className='w-full border border-gray-500 rounded py-3 px-4 mt-2' placeholder='Your E-mail' required name='mail'/>
            </div>
        </div>
        <div className='my-6 text-left'>
            Message:
            <textarea name="msg" placeholder='Message' required className='w-full border border-gray-300  rounded py-3 px-4 mt-2 h-48 resize-none'>

            </textarea>
        </div>
        <button className='bg-blue-600 text-white px-12 py-2 mb-100 rounded'>{result?result:"Send Message"}</button>
      </form>

    </div>
  )
}

export default Contact
