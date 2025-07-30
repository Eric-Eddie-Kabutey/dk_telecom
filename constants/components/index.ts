import englishFlag from "@/public/assets/images/countries/engish-flag.png";
import spanishFlag from "@/public/assets/images/countries/espanol-flag.png";
import deutschFlag from "@/public/assets/images/countries/Deutsch-flag.png";
import franceFlag from "@/public/assets/images/countries/france-flag.png";
import japanFlag from "@/public/assets/images/countries/japan-flag.png";
import nederlandFlag from "@/public/assets/images/countries/nederlands-flag.png";

import applepayImg from "@/public/assets/images/payment_methods/applepay.jpg"
import mastercardImg from "@/public/assets/images/payment_methods/mastercard.jpg"
import taybullImg from "@/public/assets/images/payment_methods/taybull.jpg"
import googlepayImg from "@/public/assets/images/payment_methods/googlepay.png"
import visaImg from "@/public/assets/images/payment_methods/visa_logo.png"

export const payment_methods = [visaImg, googlepayImg, taybullImg, mastercardImg, applepayImg]

export const languages = [
    { id: "1", name: "English", flag: englishFlag, label: "EN", code: "en" },
    { id: "2", name: "Espanol", flag: spanishFlag, label: "ES", code: "es" },
    { id: "3", name: "France", flag: franceFlag, label: "FR", code: "fr" },
    { id: "4", name: "Deutsch", flag: deutschFlag, label: "DE", code: "de" },
    { id: "5", name: "Japan", flag: japanFlag, label: "JA", code: "ja" },
    { id: "6", name: "Nederland", flag: nederlandFlag, label: "NE", code: "nl" },
  ];

export const pricing = [
    {
        id: "1",
        title: "Weelkly",
        sub_title: "Essential features for newcomers, with limited transcription and basic support.",
        monthly: "D2,500",
        yearly: "80.87",
        availability: "Free 14 days. Cancel at any time",
        includes: [
            "5Mbps Shared Bandwidth",
            "Free installations",
            "Router",
            "Handpicked vendors",
            "Premium support",
            "24/7 helpdesk support",
        ],
    },
    {
        id: "2",
        title: "Monthly",
        sub_title: "Essential features for newcomers, with limited transcription and basic support.",
        monthly: "D3,500",
        yearly: "80.87",
        availability: "Premium option",
        includes: [
            "7Mbps Shared Bandwidth",
            "Free installations",
            "Router",
            "Handpicked vendors",
            "Premium support",
            "24/7 helpdesk support",
        ],
    },
    {
        id: "3",
        title: "Yearly",
        sub_title: "Essential features for newcomers, with limited transcription and basic support.",
        monthly: "D5,000",
        yearly: "80.87",
        availability: "Endless Availability",
        includes: [
            "5Mbps Shared Bandwidth",
            "Free installations",
            "Router",
            "Handpicked vendors",
            "Premium support",
            "24/7 helpdesk support",
        ],
    },
]