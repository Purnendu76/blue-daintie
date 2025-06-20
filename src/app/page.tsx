
import Image from "next/image";


export default function Home() {
  return (
    <><section className=" flex flex-col  md:flex-row items-center md:items-start  md:gap-0 px-6 sm:px-10 py-12">
      {/* Text Content */}
      <div className="flex flex-col max-h-full h-130  justify-center items-center space-y-10 w-1/2">
        <div className="  flex items-center justify-center space-x-2 border border-blue-400 rounded px-3 py-1"><span>👋</span><p> Hey! We Are Dentic</p></div>
        <h1 className=" flex items-center justify-center text-5xl sm:text-5xl font-extrabold text-black mb-4 px-50 leading-13">Helping You to
          Bring Back Your
          Happy Smile</h1>
        <p className="flex items-center justify-start text-[#636571] text-2xl px-50">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
          natoque penatibus et magnis dis parturient.</p>
      </div>

      {/* Image Content */}
      <div className="banner-img w-full md:w-1/2 p-6">
        <Image
          src="/headerPhoto.png"
          alt="Dentist smiling with tools"
          width={700}
          height={600}
          className="w-full object-contain h-auto rounded-lg" />
      </div>
    </section>
      {/* serviceSection.............................. */}
      <section className=" flex items-center justify-center p-20">
        <div className="w-1000px">

          {/* heading & text */}
          <div className="flex flex-col items-center justify-center p-10">
            <h1 className=" text-4xl font-extrabold p-5">Service</h1>
            <p className="text-[16px] text-[#636571] leading">Services High Quality Service For you</p>
          </div>
          {/* images */}
          <div className="flex item-center justify-center space-x-40 py-10">
            <Image src='/service-img1.png' alt='' height={96} width={96} />
            <Image src='/service-img2.png' alt='' height={96} width={96} />
            <Image src='/service-img3.png' alt='' height={96} width={96} />
            <Image src='/service-img4.png' alt='' height={96} width={96} />npm uninstall sadcdn
            <Image src='/service-img5.png' alt='' height={96} width={96} />
          

          </div>
          <div className="flex item-center justify-center py-9">
            <Image src="/carosal.png" alt="" width={170} height={90} />
          </div>
        </div>


      </section>

      <section className="px-6 py-20">
        <div className="flex w-full max-w-7xl mx-auto items-center justify-between gap-10 flex-wrap lg:flex-nowrap">

          {/* Image container */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image src="/doctor.png" alt="Doctor" width={620} height={730} />
          </div>

          {/* Text container */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 py-9">
            <button className="rounded-md border border-[#EEEEEE] outline-[#EEEEEE] bg-transparent text-[#61A5FF] px-4 py-2 text-sm font-bold hover:bg-black hover:text-white transition w-fit">
              More About Us
            </button>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#000A2D] leading-tight mt-6 max-w-xl">
              The Best Dental Clinic That You Can Trust
            </h1>

            <p className="text-[#636571] text-md sm:text-md max-w-xl leading-relaxed mt-4">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
              natoque penatibus et magnis dis parturient.
            </p>

            <p className="text-[#636571] text-md sm:text-md max-w-xl leading-relaxed mt-4">
              Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.
            </p>

            {/* Icon List */}
            <div className="flex space-x-10 pt-7">
              <div className="flex flex-col space-y-5">
                <p className="flex items-center text-[#000A2D] text-lg font-bold">
                  <img src="/tik.png" alt="tick icon" className="w-5 h-5 mr-2" />
                  Modern Equipment
                </p>
                <p className="flex items-center text-[#000A2D] text-lg font-bold">
                  <img src="/tik.png" alt="tick icon" className="w-5 h-5 mr-2" />
                  Modern Equipment
                </p>
              </div>

              <div className="flex flex-col space-y-5">
                <p className="flex items-center text-[#000A2D] text-lg font-bold">
                  <img src="/tik.png" alt="tick icon" className="w-5 h-5 mr-2" />
                  Modern Equipment
                </p>
                <p className="flex items-center text-[#000A2D] text-lg font-bold">
                  <img src="/tik.png" alt="tick icon" className="w-5 h-5 mr-2" />
                  Modern Equipment
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex items-start justify-start space-x-6 pt-7">
              <button className="bg-[#FF657C] px-6 py-3 rounded-md text-white">
                Learn More
              </button>

              <button
                className="border border-[#98B3FF] px-10 py-3 text-[#61A5FF] font-semibold rounded-md transition"
                style={{ backgroundColor: 'rgba(152, 179, 255, 0.23)' }}
              >
                Make an Appointment
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 ">
        <div className="max-w-7xl mx-auto flex items-start justify-center gap-10 relative flex-wrap py-40 lg:flex-nowrap">

          {/* Text Section */}
          <div className="flex flex-col space-y-4 py-11 h-[500px] w-[450px] ">
            <button className="rounded-md border border-[#8d8282] bg-transparent text-[#61A5FF] px-6 py-2 text-sm font-bold w-fit">
              More About Us
            </button>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#000A2D] leading-tight mt-6 max-w-xl">
              Helping Your Dental Problems
            </h1>

            <p className="text-[#636571] text-md sm:text-md max-w-xl leading-relaxed mt-4">
              Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.
            </p>

            {/*  Bars */}
            <div className="space-y-6 py-3">
              <div className="flex justify-between">
                <h2 className="text-xl font-bold">Dental and Mouth Care</h2>
                <span className="">95%</span>
              </div>
              <Image src="/bar-2.png" alt="Percentage bar" width={400} height={60} />

              <div className="flex justify-between pt-4">
                <h2 className="text-xl font-bold">Cosmetic Treatment</h2>
                <span>87%</span>
              </div>
              <Image src="/bar-3.png" alt="Percentage bar" width={400} height={60} />
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center">
            <Image src="/middle-img.png" alt="" height={700} width={500} />
          </div>

          {/* 2nd Text Box Section */}
          <div className="flex items-center justify-center relative">
            <div className="flex items-center justify-center relative">
              <div className="p-6 h-[413px] w-[377px] relative lg:absolute lg:ml-20 top-20 bg-white rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.2)] border  border-gray-200">
                <h1 className="text-xl font-extrabold text-[#000A2D] leading-tight mt-6">
                  Don't Hesitate to Do Consultation
                </h1>
                <p className="Manrope text-[#636571] text-md sm:text-md max-w-xl leading-relaxed mt-4 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.
                </p>
                <div className="space-x-5 space-y-5  py-5">
                  <div className="flex gap-20"><p className="Manrope font-bold">Monday - Friday</p><span className="text-[#636571]">8AM - 10PM</span></div>
                  <div className="flex gap-36"><p className="Manrope font-bold">Satuday</p><span className="text-[#636571]">8AM - 10PM</span></div>
                  <div className="flex gap-36"><p className="Manrope font-bold">Sunday</p><span className="text-[#636571]">8AM - 10PM</span></div>
                </div>
                <button className="bg-[#FF657C] h-[50] w-[307] rounded-md text-white">
                  Call +01234 567 890
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      <section>
        <div className="space-x-8 w-[1900] h-[214]   flex  items-center justify-center px-30 bg-[#F1F8FF] overflow-hidden ">

          <div className="flex  items-center justify-center space-x-40 ">
            <div className=" flex items-center justify-center ">
              <Image src='/widget-1.png' alt='' height={70} width={70} />
              <div>
                <h1 className=" Manrope text-4xl font-extrabold flex pl-5"> 12,00<span className="text-[#FF657C] pl-1 text-5xl">+</span></h1>
                <p className=" text-[#636571] flex items-center justify-center">Happy Client</p>
              </div>
            </div>
            <div className=" flex items-center justify-center ">
              <Image src='/widget-2.png' alt='' height={70} width={70} />
              <div>
                <h1 className=" Manrope text-4xl font-extrabold flex pl-5"> 15<span className="text-[#FF657C] pl-1 text-5xl">+</span></h1>
                <p className=" text-[#636571] flex items-center justify-center pl-6">Year Experience</p>
              </div>

            </div>
            <div className=" flex items-center justify-center ">
              <Image src='/widget-3.png' alt='' height={70} width={70} />
              <div>
                <h1 className=" Manrope text-4xl font-extrabold flex pl-5"> 70<span className="text-[#FF657C] pl-1 text-5xl">+</span></h1>
                <p className=" text-[#636571] flex items-center justify-center pl-6">Doctor & Staff</p>
              </div>
            </div>
            <div className=" flex items-center justify-center ">
              <Image src='/widget-4.png' alt='' height={70} width={70} />
              <div>
                <h1 className=" Manrope text-4xl font-extrabold flex pl-5"> 340<span className="text-[#FF657C] pl-1 text-5xl">+</span></h1>
                <p className=" text-[#636571] flex items-center justify-center pl-6">Online Appointment</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="w-full">
        <div className="flex flex-wrap items-stretch justify-center">
          <div className="w-full lg:w-1/2 grid grid-cols-2 grid-rows-2 h-[800px]">
            <div className="w-full h-full">
              <img src="/grid-img1.png" alt="Dental treatment" className="w-full h-full object-cover" />
            </div>
            <div className="bg-[#FA5D75] flex flex-col justify-center items-center text-white p-6">
              <h2 className="text-2xl font-bold mb-2">The Best Services</h2>
              <p className="text-center max-w-md text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et magna.
              </p>
            </div>
            <div className="bg-[#0A1731] flex flex-col justify-center items-center text-white p-6">
              <h2 className="text-2xl font-bold mb-2">Experienced Doctor</h2>
              <p className="text-center max-w-md text-sm">
                Lorem ipsum dolor sit amet, consectetur do eiusmod tempor labore et magna.
              </p>
            </div>

            <div className="w-full h-full">
              <img src="/grid-img2.png" alt="Doctors smiling" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="w-full lg:w-1/2 h-[800px] bg-amber-100 bg-[url('/bg-img.png')] bg-cover bg-no-repeat flex items-center justify-center">

          </div>
        </div>
      </section>
      <div></div>

      <section className=" flex flex-col items-center justify-center   ">




        <div className="w-[1300] py-30">
          <div className="flex flex-col items-center justify-center p-10 ">
            <button className="h-[36px] w-[118px] text-[#61A5FF] border border-[#EEEEEE] outline-[#EEEEEE]">
              Our Services
            </button>
            <h1 className=" text-5xl text-[#000A2D] font-extrabold p-5">Service</h1>
            <p className="text-[16px] text-[#636571] w-[450] pl-11  leading">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Aenean commodo ligula aenean massa.</p>
          </div>

          <div className="flex flex-col space-y-13 items-center justify-center">

            {/* 1st box */}
            <div className=" flex space-x-13">
              <div className="bg-[url(/dentes-img-1.png)] w-[386] h-[410] rounded-xl relative ">
                <div className="w-[270] h-[184] pl-2 bg-white rounded-md absolute bottom-0 ">
                  <div className="flex items-center p-4 space-x-2">
                    <Image src="/dental-img1.png" alt="Teeth Checkup" width={40} height={40} />

                    <span className="font-bold text-xl">Teeth Checkup</span>
                  </div>
                  <p className=" max-w-md text-sm px-4 text-[#636571] text-md">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </p>
                  <button className="text-[#61A5FF] p-5 inline-flex items-center space-x-2">
                    <span>Learn More</span>
                    <span className="bg-[#61A5FF] text-white p-1 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </button>

                </div>
              </div>
              <div className="bg-[url(/dentes-img-2.png)] w-[386] h-[410] rounded-xl relative ">
                <div className="w-[270] h-[184] pl-2 bg-white rounded-md absolute bottom-0 ">
                  <div className="flex items-center p-4 space-x-2">
                    <Image src="/dental-img2.png" alt="Teeth Checkup" width={40} height={40} />

                    <span className="font-bold text-xl">Teeth Whitening</span>
                  </div>
                  <p className=" max-w-md text-sm px-4 text-[#636571] text-md">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </p>
                  <button className="text-[#61A5FF] p-5 inline-flex items-center space-x-2">
                    <span>Learn More</span>
                    <span className="bg-[#61A5FF] text-white p-1 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </button>

                </div>
              </div>
              <div className="bg-[url(/dentes-img-3.png)] w-[386] h-[410] rounded-xl relative ">
                <div className="w-[270] h-[184] pl-2 bg-white rounded-md absolute bottom-0 ">
                  <div className="flex items-center p-4 space-x-2">
                    <Image src="/dental-img.png" alt="Teeth Checkup" width={40} height={40} />

                    <span className="font-bold text-xl">Dental Braces</span>
                  </div>
                  <p className=" max-w-md text-sm px-4 text-[#636571] text-md">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </p>
                  <button className="text-[#61A5FF] p-5 inline-flex items-center space-x-2">
                    <span>Learn More</span>
                    <span className="bg-[#61A5FF] text-white p-1 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </button>

                </div>
              </div>
            </div>


            {/* 2nd box */}
            <div className=" flex space-x-13">
              <div className="bg-[url(/dentes-img-4.png)] w-[386] h-[410] rounded-xl relative ">
                <div className="w-[270] h-[184] pl-2 bg-white rounded-md absolute bottom-0 ">
                  <div className="flex items-center p-4 space-x-2">
                    <Image src="/dental-img3.png" alt="Teeth Checkup" width={40} height={40} />

                    <span className="font-bold text-xl">Teeth Implants</span>
                  </div>
                  <p className=" max-w-md text-sm px-4 text-[#636571] text-md">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </p>
                  <button className="text-[#61A5FF] p-5 inline-flex items-center space-x-2">
                    <span>Learn More</span>
                    <span className="bg-[#61A5FF] text-white p-1 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </button>

                </div>
              </div>
              <div className="bg-[url(/dentes-img-5.png)] w-[386] h-[410] rounded-xl relative ">
                <div className="w-[270] h-[184] pl-2 bg-white rounded-md absolute bottom-0 ">
                  <div className="flex items-center p-4 space-x-2">
                    <Image src="/dental-img4.png" alt="Teeth Checkup" width={40} height={40} />

                    <span className="font-bold text-xl">Dental Filling</span>
                  </div>
                  <p className=" max-w-md text-sm px-4 text-[#636571] text-md">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </p>
                  <button className="text-[#61A5FF] p-5 inline-flex items-center space-x-2">
                    <span>Learn More</span>
                    <span className="bg-[#61A5FF] text-white p-1 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </button>

                </div>
              </div>
              <div className="bg-[url(/dentes-img-6.png)] w-[386] h-[410] rounded-xl relative ">
                <div className="w-[270] h-[184] pl-2 bg-white rounded-md absolute bottom-0 ">
                  <div className="flex items-center p-4 space-x-2">
                    <Image src="/dental-img5.png" alt="Teeth Checkup" width={40} height={40} />

                    <span className="font-bold text-xl">Cosmeticp</span>
                  </div>
                  <p className=" max-w-md text-sm px-4 text-[#636571] text-md">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </p>
                  <button className="text-[#61A5FF] p-5 inline-flex items-center space-x-2">
                    <span>Learn More</span>
                    <span className="bg-[#61A5FF] text-white p-1 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex items-center  justify-center">
        <div className="w-[1300] h-[800] flex  ">
          {/* 1st container */}
          <div className=" w-1/2  p-20 h-[369] flex flex-col  space-y-6 center justify-center  ">

            <button className="h-[50] w-[138] text-[#61A5FF] border border-[#EEEEEE] outline-[#EEEEEE]">
              Our Testimonial
            </button>
            <h1 className="font-[Manrope] text-5xl text-[#000A2D] font-extrabold w-[457px] leading-tight">
              The Honest Review From Our Client
            </h1>
            <p className="text-[16px] text-[#636571] w-[450]  leading">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
              natoque penatibus et magnis dis parturient..</p>

            <button className="bg-[#FF657C] w-[176] h-[57] flex items-center justify-center py-6  rounded-md text-white">
              See All Review
            </button>

          </div>
          {/* 2nd container */}
          <div className="w-1/2 p-20 flex flex-col  space-y-9 relative space-x-4  ">

            <div className="bg-white w-[600] shadow-lg rounded-xl p-6 flex items-center h-[250px]  max-w-[900px]">
              <div className=" h-[60] w-[60]  absolute left-14 top-30">
                <Image src='/test.png' alt='' width={43} height={29} />
              </div>

              {/* Left: Text Content */}
              <div className="w-[600px] pr-6">
                <p className="italic text-gray-600 text-xl mb-4 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                  dolor. Aenean massa.
                </p>
                <h3 className="text-lg font-bold text-[#000A2D]">José Correia</h3>
                <p className="text-sm text-gray-500">Marketing Manager</p>
              </div>

              {/* Right: Image */}
              <Image
                src="/testimonial-img1.png"
                alt="José Correia"
                width={170}
                height={250}
                className="rounded-md object-cover"
              />
            </div>


            <div className="relative">
              <div className="bg-white w-[600] shadow-lg rounded-xl p-6 flex items-center h-[250px]  max-w-[900px]">
                <div className=" h-[60] w-[60]  absolute left-[-18] top-9">
                  <Image src='/test.png' alt='' width={43} height={29} />
                </div>

                {/* Left: Text Content */}
                <div className="w-[600px] pr-6">
                  <p className="italic text-gray-600 text-xl mb-4 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                    dolor. Aenean massa.
                  </p>
                  <h3 className="text-lg font-bold text-[#000A2D]">Agathe Dufour</h3>
                  <p className="text-sm text-gray-500">Company CEO</p>
                </div>

                {/* Right: Image */}
                <Image
                  src="/testimonial-img2.png"
                  alt="José Correia"
                  width={170}
                  height={250}
                  className="rounded-md object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="h-[600] bg-[url('/section.png')] bg-cover bg-no-repeat bg-center flex">
          {/* Left Side with New Clip Path */}
          <div className="relative w-1/2 flex items-center justify-center  bg-[#F1F8FF] clip-diagonal-left z-10">
            <div className="w-[500px] p-20 h-[369px] flex flex-col space-y-6 justify-center">
              <button className="h-[50px] w-[138px] py-3 text-[#61A5FF] border border-[#EEEEEE] outline-none">
                Our Testimonial
              </button>
              <h1 className="font-[Manrope] text-5xl text-[#000A2D] font-extrabold leading-tight w-[457px]">
                Dedicated to Give You
                The Best Services
              </h1>
              <p className="text-[16px] text-[#636571] leading-relaxed w-[450px]">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                Aenean massa. Cum sociis natoque penatibus et magnis dis parturient..
              </p>
              <button className="bg-[#FF657C] w-[176px] h-[57px] py-4 flex items-center justify-center rounded-md text-white">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="flex items-center justify-center ">
        <div className=" flex flex-col items-center justify-center  w-[1300] py-23">
          <div className="flex flex-col items-center justify-center  ">
            <button className="h-[36px] w-[118px] text-[#61A5FF] border border-[#EEEEEE] outline-[#EEEEEE]">
              Our Services
            </button>
            <h1 className=" text-5xl text-[#000A2D] font-extrabold p-5">Service</h1>
            <p className="text-[16px] text-[#636571] w-[450] pl-11  leading">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Aenean commodo ligula aenean massa.</p>
          </div>

          <div className=" flex space-x-10 py-10">
            <div className=" w-[380] h-[539] space-y-5 ">
              <div className=" bg-[url('/blog-img1.png')] h-[300] w-[380] object-contain
             mask-no-repeat relative ">
                <div className="absolute bottom-0 w-full">
                  <h1 className="bg-white w-10  text-[#61A5FF] ">news</h1>
                </div>
              </div>
              <h1 className=" text-2xl text-[#000A2D] font-bold w-[355px] leading-tight">
                Oral Cancer Awareness: Signs,
                Symptoms, and Prevention
              </h1>
              <p className="text-[16px] text-[#636571]   leading">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                natoque penatibus et magnis dis parturient..</p>
              <button className="flex py-2 px-11 bg-[#FF657C] rounded-sm text-white">Read More</button>
              <div>

              </div>
            </div>
            <div className=" w-[380] h-[539] space-y-5 ">
              <div className=" bg-[url('/blog-img2.png')] h-[300] w-[380] object-contain
             mask-no-repeat relative ">
                <div className="absolute bottom-0 w-full">
                  <h1 className="bg-white w-10 text-[#61A5FF] ">Tips</h1>
                </div>
              </div>
              <h1 className="text-2xl text-[#000A2D] font-bold w-[355px] leading-tight">
                The Dos and Don’ts of Teeth
                Whitening: Expert Advice
              </h1>
              <p className="text-[16px] text-[#636571]   leading">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                natoque penatibus et magnis dis parturient..</p>
              <button className="flex py-2 px-11 bg-[#FF657C] rounded-sm text-white">Read More</button>
              <div>

              </div>
            </div>
            <div className=" w-[380] h-[539] space-y-5 ">
              <div className=" bg-[url('/blog-img-3.png')] h-[300] w-[380] object-contain
             mask-no-repeat relative ">
                <div className="absolute bottom-0 w-full">
                  <h1 className="bg-white w-15 text-[#61A5FF] ">Health</h1>
                </div>
              </div>
              <h1 className=" text-2xl text-[#000A2D] font-bold w-[355px] leading-tight">
                Oral Health for All Ages: Tips for
                Kids, Teens, and Adults
              </h1>
              <p className="text-[16px] text-[#636571]   leading">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                natoque penatibus et magnis dis parturient..</p>
              <button className="flex py-2 px-11 bg-[#FF657C] rounded-sm text-white">Read More</button>
              <div>

              </div>
            </div>
          </div>

        </div>
      </section>



      <section className="flex items-center justify-center ">
        <div className="w-[1239] h-[500] bg-[url(/bg.png)] ">
          <div className="flex flex-col w-[570] py-30 items-start  justify-start p-10 space-y-5">
            <button className="h-[50] w-[138] text-[#61A5FF] border border-[#EEEEEE] outline-[#EEEEEE]">
              Our Testimonial
            </button>
            <h1 className=" text-5xl text-[#000A2D] font-bold w-[457px] leading-tight">
              Become The Next
              Our
            </h1>
            <p className="text-[16px] text-[#636571] w-[450]  leading">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
              natoque penatibus et magnis dis parturient..</p>

            <button className="bg-[#FF657C] w-[180] h-[57] flex items-center justify-center py-6  rounded-md text-white">
              Book an Appointment
            </button>

          </div>

        </div>

      </section>

    </>




  );
}
