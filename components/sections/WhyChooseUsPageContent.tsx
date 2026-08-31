import { WhyChooseUsPageData } from '@/types/templates.types';
import { Divider } from '@/components/ui/Divider';
import { 
  FaGem, 
  FaStar,
  FaChalkboardTeacher, 
  FaMicrophone, 
  FaUserTie, 
  FaUserFriends, 
  FaCertificate, 
  FaConciergeBell, 
  FaHeadset, 
  FaRegCalendarCheck 
} from 'react-icons/fa';

const renderIcon = (iconName?: string, className?: string) => {
  const defaultClass = className || "text-2xl text-accent";
  switch (iconName) {
    case 'FaGem': return <FaGem className={defaultClass} />;
    case 'FaStar': return <FaStar className={defaultClass} />;
    case 'FaChalkboardTeacher': return <FaChalkboardTeacher className={defaultClass} />;
    case 'FaMicrophone': return <FaMicrophone className={defaultClass} />;
    case 'FaUserTie': return <FaUserTie className={defaultClass} />;
    case 'FaUserFriends': return <FaUserFriends className={defaultClass} />;
    case 'FaCertificate': return <FaCertificate className={defaultClass} />;
    case 'FaConciergeBell': return <FaConciergeBell className={defaultClass} />;
    case 'FaHeadset': return <FaHeadset className={defaultClass} />;
    case 'FaRegCalendarCheck': return <FaRegCalendarCheck className={defaultClass} />;
    default: return null;
  }
};

export const WhyChooseUsPageContent = ({ data }: { data?: WhyChooseUsPageData }) => {
  if (!data) return null;

  return (
    <section className="py-12 lg:py-20 bg-white">
      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Section */}
        <div className="flex flex-col items-center text-center mb-12">
          {/* Badge */}
          <span className="text-sm font-bold text-primary tracking-[0.2em] uppercase mb-4">
            {data.badge}
          </span>
          
          {/* Decorative Divider */}
          {data.dividerIcon && (
            <Divider icon={data.dividerIcon} className="mb-10" />
          )}

          {/* 50/50 Title and Description */}
          <div className="flex flex-col lg:flex-row items-center w-full relative">
            {/* Left Title */}
            <div className="w-full lg:w-1/2 lg:pr-12 text-left mb-6 lg:mb-0 relative">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-primary text-primary leading-tight">
                {data.title}{' '}
                <span className="text-accent italic font-medium">
                  {data.titleHighlight}
                </span>
              </h2>
            </div>
            
            {/* Center Vertical Divider with Diamond (Desktop only) */}
            <div className="hidden lg:flex absolute left-1/2 top-0 bottom-0 -ml-[1px] w-[2px] bg-gray-200 flex-col items-center justify-center">
               <div className="w-2.5 h-2.5 rotate-45 bg-accent" />
            </div>

            {/* Right Description */}
            <div className="w-full lg:w-1/2 lg:pl-12 text-left">
              <p className="text-text-light text-base leading-relaxed">
                {data.description}
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {data.features.map((feature) => (
            <div 
              key={feature.id} 
              className="bg-white border border-gray-100 rounded-xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Icon Circle */}
              <div className="w-20 h-20 rounded-full bg-[#f9f2e8] flex items-center justify-center mb-6">
                {renderIcon(feature.icon, "text-3xl text-accent")}
              </div>
              
              {/* Title */}
              <h3 className="text-lg font-bold text-primary mb-4 leading-snug">
                {feature.title}
              </h3>
              
              {/* Small Divider */}
              <div className="w-8 h-[2px] bg-accent/50 mb-4" />
              
              {/* Description */}
              <p className="text-sm text-text-light leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Strip */}
        <div className="bg-[#fdfaf6] border border-accent/20 rounded-xl p-4 sm:p-6 lg:p-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-accent/20">
            {data.bottomItems.map((item) => (
              <div 
                key={item.id} 
                className="flex items-center justify-start sm:justify-center gap-4 py-4 px-6 sm:px-4 lg:p-6"
              >
                <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center shadow-sm flex-shrink-0">
                  {renderIcon(item.icon, "text-xl text-accent")}
                </div>
                <span className="text-base font-bold text-primary text-left">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
