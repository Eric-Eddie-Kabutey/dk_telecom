import Image from "next/image";

// Data for the countries.
const countries = [
  {
    name: "Ghana",
    flagUrl: "/assets/images/home/ghana.png",
  },
  {
    name: "Gambia",
    flagUrl: "/assets/images/home/gambia.png",
  },
  {
    name: "Kenya",
    flagUrl: "/assets/images/home/kenya.png",
  },
];

export function SendMoneySection() {
  return (
    <section className="bg-gray-100 py-16 md:py-24">
      <div className="max-container 2xl:w-[85%] w-[95%] mx-auto px-4 bg-white rounded-3xl shadow-lg p-6 md:p-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Send Money Anywhere, Anytime.
          </h2>
          <p className="mt-3 text-lg text-gray-500">
            Where can I send money using with DKPay?
          </p>
        </div>

        {/* Main Content Card */}
        <div className="max-w-3xl mx-auto bg-gray-100 backdrop-blur-sm rounded-3xl shadow-lg p-6 md:p-8">
          <div className="flex flex-col sm:flex-row items-center  gap-6">
            
            {/* Region Label */}
            <div className="flex-1">
              <span className="font-semibold text-blue-600">Africa</span>
            </div>

            {/* Countries List */}
            <div className="flex flex-wrap justify-center items-center gap-4">
              {countries.map((country) => (
                <div 
                  key={country.name} 
                  className="bg-white rounded-xl shadow-md p-3 flex items-center gap-3 transition-transform hover:-translate-y-1"
                >
                  <Image
                    src={country.flagUrl}
                    alt={`Flag of ${country.name}`}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <span className="font-medium text-gray-800">{country.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}