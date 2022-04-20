import React from "react";




export default function Contact() {
    const [from_name, setName] = React.useState("");
    const [reply_to, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");
    const [submitButtonLabel, setSubmitButtonLabel] = React.useState("Submit");
    

    function encode(data) {
      return Object.keys(data)
        .map(
          (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    }



      function handleSubmit(e) {
        e.preventDefault();
        

        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "contact-form", from_name, reply_to, message})
        })
        
          .then(() => {
            setName("");
            setEmail("");
             setMessage("");

             setSubmitButtonLabel("Message Sent!");

            setTimeout(() => {
            setSubmitButtonLabel("Submit");
            }, 5000)

          })
          .catch((error) => {
            console.log(error.message);
            setSubmitButtonLabel("Error sending Message!");

            setTimeout(() => {
            setSubmitButtonLabel("Submit");
            }, 5000)

          });

      

    
  

       
        


        }
    

  return (
    <section id="contact" className="relative">
    <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
      <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
        <iframe
          width="100%"
          height="100%"
          title="map"
          className="absolute inset-0"
          frameBorder={0}
          marginHeight={0}
          marginWidth={0}
          style={{ filter: "opacity(0.7)" }}
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d9226.280465165335!2d25.28122908116458!3d54.68199444595107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1slt!2slt!4v1644447287556!5m2!1slt!2slt"
          />
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                Gbazdikų g. 74d <br />
                Vilnius, LT 10105
              </p>
            </div>
          <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
              EMAIL
            </h2>
            <a className="text-indigo-400 leading-relaxed">
              zbignevus@gmail.com
            </a>
            <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
              PHONE
            </h2>
            <p className="leading-relaxed">+370-671-94599</p>
          </div>
        </div>
      </div>



      <form
        netlify
        name="contact-form"
        onSubmit={handleSubmit}
        className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
        <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
          Hire Me
        </h2>
        <p className="leading-relaxed mb-5">
          I'm currently located in Vilnius, Lithuania. Feel free to send me an email and I'll get back to you ASAP.
        </p>
        <div className="relative mb-4">
          <label htmlFor="from_name" className="leading-7 text-sm text-gray-400">
            Name
          </label>
          <input
            type="text"
            id="from_name"
            name="from_name"
            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            onChange={(e) => setName(e.target.value)}
            value={from_name}
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="reply_to" className="leading-7 text-sm text-gray-400">
            Email
          </label>
          <input
            type="email"
            id="reply_to"
            name="reply_to"
            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            onChange={(e) => setEmail(e.target.value)}
            value={reply_to}
          />
        </div>
        <div className="relative mb-4">
          <label
            htmlFor="message"
            className="leading-7 text-sm text-gray-400">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
        </div>
        <button
          type="submit"
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          {submitButtonLabel}
        </button>
      </form>
    </div>
  </section>
  );
}


