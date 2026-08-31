import React from 'react';
import { CareerDetailData } from '@/types/templates.types';
import { 
  FaCheckCircle, 
  FaRegCircle, 
  FaChartLine, 
  FaBookReader, 
  FaHeartbeat, 
  FaCalendarCheck, 
  FaUsers,
  FaGlobe,
  FaStar,
  FaSmile,
  FaTrophy,
  FaArrowRight,
  FaLock,
  FaUpload
} from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaChartLine': return <FaChartLine />;
    case 'FaBookReader': return <FaBookReader />;
    case 'FaHeartbeat': return <FaHeartbeat />;
    case 'FaCalendarCheck': return <FaCalendarCheck />;
    case 'FaUsers': return <FaUsers />;
    case 'FaGlobe': return <FaGlobe />;
    case 'FaStar': return <FaStar />;
    case 'FaSmile': return <FaSmile />;
    case 'FaTrophy': return <FaTrophy />;
    default: return <FaStar />;
  }
};

export const CareerDetailPageContent = ({ data }: { data?: CareerDetailData }) => {
  if (!data) return null;

  return (
    <section className="bg-white">
      
      {/* Main Content Area */}
      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Column: Job Details */}
          <div className="w-full lg:w-2/3 space-y-12 pr-0 lg:pr-8">
            
            {/* About */}
            <div>
              <h3 className="text-2xl font-bold text-[#861d43] mb-6 font-primary">About the Role</h3>
              <p className="text-text-light text-base leading-relaxed">
                {data.aboutRole}
              </p>
            </div>

            {/* Responsibilities */}
            <div>
              <h3 className="text-2xl font-bold text-[#861d43] mb-6 font-primary">Key Responsibilities</h3>
              <ul className="space-y-4">
                {data.responsibilities.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <FaCheckCircle className="text-[#861d43] mt-1 shrink-0" />
                    <span className="text-text-light text-base">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div>
              <h3 className="text-2xl font-bold text-[#861d43] mb-6 font-primary">What We're Looking For</h3>
              <ul className="space-y-4">
                {data.requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <FaRegCircle className="text-[#861d43] mt-1 shrink-0" />
                    <span className="text-text-light text-base">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div>
              <h3 className="text-2xl font-bold text-[#861d43] mb-8 font-primary">What We Offer</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                {data.benefits.map((benefit) => (
                  <div key={benefit.id} className="flex flex-col items-center text-center">
                    <div className="text-3xl text-[#861d43] mb-4">
                      {renderIcon(benefit.icon)}
                    </div>
                    <p className="text-xs font-bold text-primary mb-1">{benefit.title}</p>
                    <p className="text-xs text-text-light">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
          </div>

          {/* Right Column: Application Form */}
          <div className="w-full lg:w-1/3 relative">
            <div className="bg-[#fcfaf9] rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm sticky top-24">
              <h3 className="text-xl font-bold text-[#861d43] mb-6 font-primary">Apply for This Position</h3>
              <p className="text-sm text-text-light mb-6">We'd love to hear from you!</p>

              <form className="space-y-5">
                
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-primary mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    placeholder="Enter your full name" 
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-bold text-primary mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-bold text-primary mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="tel" 
                    placeholder="Enter your phone number" 
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  />
                </div>

                {/* Experience */}
                <div>
                  <label className="block text-xs font-bold text-primary mb-2">
                    Experience <span className="text-red-500">*</span>
                  </label>
                  <select className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm text-text-light focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent appearance-none transition-colors">
                    <option value="">Select experience</option>
                    <option value="0-2">0 - 2 Years</option>
                    <option value="3-5">3 - 5 Years</option>
                    <option value="5+">5+ Years</option>
                  </select>
                </div>

                {/* Upload Resume */}
                <div>
                  <label className="block text-xs font-bold text-primary mb-2">
                    Upload Resume <span className="text-red-500">*</span>
                  </label>
                  <div className="w-full border-2 border-dashed border-[#e5d8dc] rounded-lg p-6 bg-white hover:bg-gray-50 transition-colors flex flex-col items-center justify-center cursor-pointer">
                    <FaUpload className="text-[#861d43] text-xl mb-3" />
                    <span className="text-sm text-primary font-bold mb-1">Upload your resume</span>
                    <span className="text-xs text-text-light">PDF, DOC, DOCX (Max. 5MB)</span>
                  </div>
                </div>

                {/* Submit */}
                <button 
                  type="button" 
                  className="w-full bg-[#861d43] hover:bg-[#3d0a21] text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-md mt-6"
                >
                  <span>APPLY NOW</span>
                  <FaArrowRight className="text-sm" />
                </button>

                {/* Footer Note */}
                <div className="flex items-start gap-2 text-xs text-text-light justify-center text-center mt-6">
                  <FaLock className="text-[#861d43] mt-0.5" />
                  <div>
                    <p>Your information is safe with us.</p>
                    <p>We respect your privacy.</p>
                  </div>
                </div>

              </form>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Stats Banner */}
      <div className="bg-[#fcfaf9] py-8 lg:py-12 border-t border-gray-100">
        <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-accent/40" />
            <span className="text-[#861d43] text-xs font-bold tracking-[0.2em] uppercase">
              WHY JOIN VENU EV?
            </span>
            <span className="w-8 h-[1px] bg-accent/40" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-primary text-primary mb-4">
            Be Part of Unforgettable Experiences
          </h2>
          <p className="text-text-light text-base max-w-2xl mx-auto mb-16">
            We believe in empowering our people to create, innovate, and make every event extraordinary.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {data.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col lg:flex-row items-center justify-center gap-4 text-center lg:text-left">
                <div className="text-4xl text-[#861d43]">
                  {renderIcon(stat.icon)}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary leading-tight">{stat.title}</h4>
                  <p className="text-xs text-text-light leading-tight">{stat.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
};
