import { CONTACT } from "../assets/constants"


const Contact = () => {
    return <div className="border-b border-neutral-900 pb-20">
        <h1 className="my-10 text-center text-4xl font-semibold ">Get in Touch</h1>
        <div className="text-center tracking-tighter">
            <p className="my-4 font-medium">{CONTACT.address}</p>
            <p className="my-4 font-medium">{CONTACT.phoneNo}</p>
            <a href="#" className="border-b font-semibold">{CONTACT.email }</a>
        </div>
  </div>
}

export default Contact
