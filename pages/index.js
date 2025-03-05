import Link from "next/link";
import { FaArrowLeft, FaArrowRight, FaQuoteLeft } from "react-icons/fa";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      {/* Header */}
      <header className="bg-teal-600 text-white py-4 px-8 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold">XYZ</h1>
        {/* <nav>
          <ul className="hidden md:flex space-x-6">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Health Checkup</Link></li>
            <li><Link href="/departments">Departments</Link></li>
          </ul>
        </nav> */}
        <button className="bg-white text-teal-600 px-4 py-2 rounded-lg font-semibold">Appointment</button>
      </header>
      
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-16 bg-white">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-bold text-gray-900">Your Journey to Better Health Starts Here</h1>
          <p className="mt-4 text-lg text-gray-600">More than 10K patients healed!</p>
          <button className="mt-6 px-6 py-3 bg-teal-600 hover:bg-teal-800 text-white text-lg font-semibold rounded-lg shadow-lg">Discover More</button>
        </div>
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <img src="/images/doctor.png" alt="Doctor" className="max-w-xs md:max-w-md rounded-lg shadow-lg" />
        </div>
      </section>
      
{/* Services Section */}
{/* Services Section */}
<section className="py-16 px-6 bg-gray-50">
  <div className="max-w-6xl mx-auto text-center">
    {/* Section Heading */}
    <h4 className="text-teal-600 font-semibold uppercase tracking-wide">Services & Treatments</h4>
    <h2 className="text-3xl font-bold text-gray-900 mt-2">More than 40 specialty and health care services</h2>

    {/* Service Cards */}
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
      {[
        { title: "Mental Health Service", icon: "🧠" },
        { title: "Eye Diseases Service", icon: "👁" },
        { title: "Vaccination Service", icon: "💉" },
        { title: "Cardiology Service", icon: "❤️" },
      ].map((service, index) => (
        <div key={index} className="group flex items-center justify-between bg-white p-6 rounded-xl shadow-md transition hover:shadow-lg">
          <div className="flex items-center space-x-4">
            {/* Service Icon */}
            {/* <span className="text-3xl">{service.icon}</span> */}
            {/* Service Details */}
            <div>
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="text-gray-500 text-sm mt-1">
                The service provides immediate medical care to patients with acute illnesses or injuries that require immediate attention.
              </p>
            </div>
          </div>
          {/* Arrow Button */}
          {/* <button className="w-10 h-10 bg-gray-200 flex items-center justify-center rounded-full text-gray-700 group-hover:bg-teal-600 group-hover:text-white transition">
            →
          </button> */}
        </div>
      ))}
    </div>

    {/* See All Services Button */}
    <button className="mt-10 px-6 py-3 bg-teal-600 text-white text-lg font-semibold rounded-lg shadow-md hover:shadow-lg transition">
      See All Services
    </button>
  </div>
</section>


      
      {/* Why Choose Us Section */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Left Image with Background */}
          <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
  <img src="/images/contact.png" alt="Women Health Checkup" 
       className="relative z-10 w-40 md:w-56 rounded-lg" />
</div>

          
          {/* Right Content */}
          <div className="md:w-1/2 mt-10 md:mt-0">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Us?</h2>
            <ul className="mt-6 space-y-4">
              {["Safety First Quality Must", "Patient-Centric Approach", "Focused Leadership", "Cutting-Edge Technology", "Transparent Pricing", "Coordinated Care"].map((item, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <span className="text-teal-500 text-xl">✔</span>
                  <span className="text-gray-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Wellness & Appointment Button */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900">Wellness, Compassion, Quality</h3>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            They live in Bookmarks grove right at the coast of the Semantics, a large language ocean.
          </p>
          <button className="mt-6 px-6 py-3 bg-teal-600 text-white text-lg font-semibold rounded-lg shadow-lg">Take An Appointment</button>
        </div>
      </section>


    {/* Health Checkup Plans Section */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900">Health Checkup Plans</h2>
          <p className="mt-3 text-gray-600 max-w-xl mx-auto">
            They live in Bookmarks grove right at the coast of the Semantics, a large language ocean named flows.
          </p>
          
          {/* Tabs */}
          <div className="mt-6 flex justify-center space-x-4">
            {["Woman Health", "Cancer Screening", "Kids Vaccines"].map((tab, index) => (
              <button key={index} className={`px-6 py-2 rounded-lg font-semibold ${index === 0 ? "bg-teal-600 text-white" : "bg-white text-gray-700 border"}`}>{tab}</button>
            ))}
          </div>
        </div>
        
        {/* Women Health Checkup */}
        <div className="mt-12 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="md:w-1/2">
            <div className="flex items-center space-x-3">
              <span className="text-teal-600 text-3xl">⚕️</span>
              <h3 className="text-2xl font-bold text-gray-900">Women Health Checkup</h3>
            </div>
            <p className="mt-4 text-gray-600">
              A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring.
            </p>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li className="flex items-center space-x-2"><span className="text-lg">✔</span><span>Complete Blood Count with ESR</span></li>
              <li className="flex items-center space-x-2"><span className="text-lg">✔</span><span>Lipid Profile, Live Profile, Kidney Profile</span></li>
              <li className="flex items-center space-x-2"><span className="text-lg">✔</span><span>USG Abdomen with Pelvis, Mammography</span></li>
            </ul>
            <button className="mt-6 px-6 py-3 bg-teal-600 text-white text-lg font-semibold rounded-lg shadow-lg">Take An Appointment</button>
          </div>
          
          {/* Right Image */}
          <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
            <img src="/images/price1.png" alt="Women Health Checkup" className="relative z-10 max-w-xs md:max-w-xs rounded-lg" />
          </div>
        </div>
      </section>

      <section className="py-16 px-8 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Arrow */}
        <button className="hidden md:block text-teal-600 hover:text-gray-800 p-2">
          <FaArrowLeft size={24} />
        </button>

        {/* Testimonial Content */}
        <div className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-[0_0_20px_rgba(0,0,0,0.15)] w-full max-w-3xl mx-auto">
  {/* Image Section */}
  <div className="relative flex-shrink-0">
    <img 
      src="/images/testemonial1.png" 
      alt="Testimonial" 
      className="relative z-10 w-40 h-40 md:w-56 md:h-56 rounded-lg object-contain"
    />
  </div>

  {/* Text Content */}
  <div className="md:ml-8 text-center md:text-left max-w-lg">
    {/* Quote Icon */}
    <FaQuoteLeft className="text-gray-700 text-3xl" />
    
    {/* Stars */}
    <div className="flex space-x-1 text-yellow-500 mt-2">
      {Array(5).fill(0).map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
    
    {/* Testimonial Text */}
    <p className="mt-3 text-lg text-gray-800 font-medium">
      ``A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy.``
    </p>
    
    {/* User Info */}
    <p className="mt-4 font-semibold text-gray-900">Mr. Ramprasad</p>
    <p className="text-gray-600 text-sm">Diabetes Patient</p>
  </div>
</div>



        {/* Right Arrow */}
        <button className="hidden md:block text-teal-600 hover:text-gray-800 p-2">
          <FaArrowRight size={24} />
        </button>
      </div>
    </section>
      
       {/* Contact Section */}
       <section className="py-16 px-8 bg-gray-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h4 className="text-teal-600 font-semibold uppercase tracking-wide">Appointment</h4>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">Get in touch to book your first appointment</h2>
            <p className="mt-4 text-gray-600">
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
            </p>
            <div className="mt-6 space-y-4">
              <p className="flex items-center text-gray-700 space-x-3">
                <span className="text-teal-500 text-2xl">✉️</span>
                <span>+91 9999999999</span>
              </p>
              <p className="flex items-center text-gray-700 space-x-3">
                <span className="text-teal-500 text-2xl">📞</span>
                <span>XYZ@health.care</span>
              </p>
            </div>
          </div>
          
          {/* Right Form */}
          <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
            <form>
              <input type="text" placeholder="Name" className="w-full px-4 py-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-teal-500" />
              <input type="text" placeholder="Phone" className="w-full px-4 py-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-teal-500" />
              <input type="email" placeholder="Email" className="w-full px-4 py-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-teal-500" />
              <div className="relative">
                <select className="appearance-none w-full px-4 py-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-teal-500">
                  <option>Select appointment Type</option>
                  <option>General Checkup</option>
                  <option>Specialist Consultation</option>
                </select>
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                  ⌄
                </div>
              </div>
              <textarea placeholder="Message" className="w-full px-4 py-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-teal-500"></textarea>
              <button className="w-full px-6 py-3 bg-teal-600 text-white text-lg font-semibold rounded-lg shadow-lg">Submit Now</button>
            </form>
          </div>
        </div>
      </section>

      
{/* Footer Section */}
<footer className="py-12 px-8 bg-teal-700 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left Section */}
          <div>
            <h2 className="text-2xl font-bold flex items-center space-x-2">
              <span>⚕️</span> <span>XYZ</span>
            </h2>
            <button className="mt-4 px-6 py-2 border-2 border-white text-white font-semibold rounded-lg w-full md:w-auto">Take an Appointment</button>
            <button className="mt-4 px-6 py-2 border-2 border-white text-white font-semibold rounded-lg w-full md:w-auto flex items-center justify-center space-x-2">
              <span>📱</span> <span>Connect on Whatsapp</span>
            </button>
          </div>
          
          {/* Links Sections */}
          <div>
            <h3 className="text-lg font-semibold">SERVICES</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>Pathology</li>
              <li>Ambulance</li>
              <li>Radiology</li>
              <li>Pharmacy</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">HEALTH CHECKUP</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>Woman Health</li>
              <li>Cancer Screening</li>
              <li>Cardiac Health</li>
              <li>MRI Checkup</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">DEPARTMENTS</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>General</li>
              <li>Dermatology</li>
              <li>Cardiology</li>
              <li>Cancer</li>
            </ul>
          </div>
        </div>
        
      </footer>
    </div>
  );
}
