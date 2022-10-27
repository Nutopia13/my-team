import React from "react";
import Section from "../Components/Section";
import human from "../assets/icon-person.svg";
import cog from "../assets/icon-cog.svg";
import chart from "../assets/icon-chart.svg";
import bg_9 from "../assets/bg-pattern-contact-2.svg";
import bg_10 from "../assets/bg-pattern-about-2-contact-1.svg";
import { Link } from "react-router-dom";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "1564fb77-bdc9-44e7-a14d-7f30f86df76b");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(res.message);
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };

  return (
    <Section>
      <div>
        <div className="relative overflow-hidden">
          <img
            src={bg_10}
            alt=""
            className="hidden md:block absolute -left-28 top-28"
          />
          <div className="flex flex-col lg:flex-row lg:justify-between items-center  pt-24 max-w-6xl text-center mx-auto lg:text-left">
            <div>
              <h3 className="title">Contact</h3>
              <p className="pt-4 text-[32px] font-bold text-primary_coral">
                Ask us about
              </p>
              <div className="flex flex-col md:max-w-[540px] max-w-[290px] text-left space-y-6 pt-12">
                <div className="cart1 flex flex-row space-x-5 items-center">
                  <img
                    src={human}
                    alt="Experienced Individuals"
                    className="max-w-[74px] max-h-[74px]"
                  />

                  <p className="text-[15px] lg:text-lg font-bold">
                    The quality of our talent network
                  </p>
                </div>
                <div className="cart2 flex flex-row space-x-5 items-center">
                  <img
                    src={cog}
                    alt="Experienced Individuals"
                    className="max-w-[74px] max-h-[74px]"
                  />

                  <p className="text-[15px] lg:text-lg font-bold">
                    Usage & implementation of our software{" "}
                  </p>
                </div>
                <div className="cart3 flex flex-row space-x-5 items-center ">
                  <img
                    src={chart}
                    alt="Experienced Individuals"
                    className="max-w-[74px] max-h-[74px] "
                  />

                  <p className="text-[15px] lg:text-lg font-bold">
                    How we help drive innovation
                  </p>
                </div>
              </div>
            </div>

            <form
              name="contact"
              onSubmit={onSubmit}
              action="https://api.web3forms.com/submit"
              method="POST"
              className="mt-14 flex flex-col"
            >
              <input
                type="hidden"
                name="access_key"
                value="1564fb77-bdc9-44e7-a14d-7f30f86df76b"
              />
              <input
                required
                name="fullName"
                id="name"
                type="text"
                placeholder="Name"
                className="outline-none duration-300 transition-all focus:border-light_blue bg-transparent h-[42px] w-[325px] md:w-[542px] border-b-[1px] border-white"
              />
              <input
                required
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                className="outline-none duration-300 transition-all focus:border-light_blue bg-transparent mt-6 h-[42px] w-[325px] md:w-[542px] border-b-[1px] border-white"
              />
              <input
                required
                name="Company Name"
                type="text"
                placeholder="Company Name"
                className="outline-none duration-300 transition-all focus:border-light_blue bg-transparent  mt-6 h-[42px] w-[325px] md:w-[542px] border-b-[1px] border-white"
              />
              <input
                required
                name="Title"
                type="text"
                placeholder="Title"
                className="outline-none duration-300 transition-all focus:border-light_blue bg-transparent mt-6 h-[42px] w-[325px] md:w-[542px] border-b-[1px] border-white"
              />
              <textarea
                required
                name="Message"
                placeholder="Message"
                className="outline-none duration-300 transition-all focus:border-light_blue bg-transparent mt-6 h-[84px] w-[325px] md:w-[542px] border-b-[1px] border-white"
              />
            <div className="pt-2 md:pt-6">
              <span className="lg:text-sm text-[#13CE66]">
                {result}
              </span>
            </div>

              <button
                type="submit"
                className="px-[32px] mt-6 py-[10px] hover:bg-dark_green hover:text-white transition-all duration-200 max-w-[123px] bg-white rounded-3xl text-dark_green font-semibold text-lg"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <img src={bg_9} alt="" className="relative left-[70%]" />
      </div>
    </Section>
  );
};

export default Contact;
