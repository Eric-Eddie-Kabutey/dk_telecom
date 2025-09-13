import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

// Data for the feature list to keep the JSX clean
const features = [
  "Send Money",
  "Pay Bills",
  "Receive Payment",
  "Withdraw Money",
  "Buy Mobile Credits",
  "Buy Cash Power",
  "Link Bank Account",
  "and much more",
];

export function DownloadAppSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-container 2xl:w-[85%] w-[95%] mx-auto px-4">
        <div className="bg-gradient-to-br from-blue-800 to-blue-900 text-white rounded-3xl py-10 px-6 md:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: Text Content & QR */}
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold">
                Download DKPayWallet
              </h2>
              <p className="mt-2 text-lg text-blue-200">
                What can you do with DKPay Wallet?
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 my-10 w-full max-w-lg">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-blue-300 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* wallet app for mobile dk-wallet-phone */}
                  <div className="w-full lg:hidden">
              <Image
                src="/assets/images/home/dk-wallet-phone.png"
                alt="Three smartphones showing the DKPay Wallet app interface."
                width={500}
                height={600}
                className="w-full max-w-lg"
              />
            </div>

              <div className="flex flex-col sm:flex-row items-center gap-6 mt-6">
                <div className="bg-white p-2 rounded-lg flex-shrink-0">
                  <Image
                    src="/assets/images/home/qr-code.png"
                    alt="QR code to download the MyNafa Wallet app"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="sm:text-left">
                  <p className="font-semibold text-lg leading-tight">
                    Scan this QR code to download<br />MyNafa Wallet
                  </p>                  
                  <div className="flex items-center justify-center sm:justify-start gap-4 mt-4">
                    <Link href="#" aria-label="Get it on Google Play">
                      <Image
                        src="/assets/images/home/play-store.png"
                        alt="Google Play Store button"
                        width={135}
                        height={40}
                        className="h-10 w-auto"
                      />
                    </Link>
                    <Link href="#" aria-label="Download on the App Store">
                      <Image
                        src="/assets/images/home/app-store.png"
                        alt="Apple App Store button"
                        width={135}
                        height={40}
                        className="h-10 w-auto"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Phone Images */}
            <div className="hidden lg:flex justify-center">
              <Image
                src="/assets/images/home/phones.png"
                alt="Three smartphones showing the DKPay Wallet app interface."
                width={500}
                height={600}
                className="w-full max-w-lg"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}