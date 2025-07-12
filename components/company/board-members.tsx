import Typography from '@/components/shared/typography'
import Image, { StaticImageData } from 'next/image'
import React, { useRef, useState } from 'react'
import fumbiImg from "@/public/assets/images/company/team/fumbi.png"
import chiuguImg from "@/public/assets/images/company/team/chiugo.png"
import samuelImg from "@/public/assets/images/company/team/samuel.png"
import raoImg from "@/public/assets/images/company/team/rao.png"
import obongImg from "@/public/assets/images/company/team/obong.png"
import { LeadershipModal } from './leadership-modal'


interface TeamMember {
    id: string;
    name: string;
    is_board: boolean;
    title: string;
    img: StaticImageData;
    description: string[];
}

const team_members: TeamMember[] = [
    {
        id: "1",
        name: "Fumbi Chima",
        is_board: true,
        title: "Chairman",
        img: fumbiImg,
        description: [
            `Dr. Fumbi Chima is a globally recognized technology executive with a proven track record of leading digital transformation, driving operational excellence, and aligning technology innovation with business strategy. With extensive experience spanning retail, consumer goods, financial services, and media, she has successfully spearheaded P&L management, M&A initiatives, and large-scale enterprise transformations across some of the world's most recognized brands.`,
            `Fumbi has held leadership roles at Boeing Credit Union (BECU), adidas, Fox Networks, Burberry, Walmart, and American Express, where she has been instrumental in optimizing infrastructure, implementing cutting-edge digital strategies, and fostering a culture of innovation and high performance. She is a thought leader in AI, cybersecurity, and digital transformation, recognized for her ability to bridge the gap between technology and business to create sustainable value and competitive advantage.`,
            `Fumbi serves on the board of directors of a number of public and private companies during her career, including Willis Towers Watson Public Limited Company (NASDAQ: WTW), a financial services company. Previously, Ms. Chima served as a member of the board of directors of Whitbread PLC (LSE: WTB), a hospitality company; AZEK Company Inc. (NYSE: AZEK), a manufacturer of residential and commercial building products, Ted Baker PLC (LSE: TED (formerly)), a clothing company, and Africa Prudential PLC (Nigerian Stock Exchange: AFRIPRUD), a business service company; leveraging her expertise to shape corporate governance, digital strategy, and risk management.`,
            `She is also a dedicated advocate for diversity and inclusion in technology, actively supporting initiatives that empower women and underrepresented communities.`,
            `Fumbi holds a Doctor of Letters in Business and Politics from the University of Hull, along with executive management certifications from Harvard Business School. She has been recognized by American Banker, Puget Sound Business Journal, Savoy Magazine, and Career Communications Group for her leadership and contributions to the industry.`,
        ]
    },
    {
        id: "2",
        name: "Chiugo Ndubisi",
        is_board: true,
        title: "Non-Executive Director",
        img: chiuguImg,
        description: [
            `Dr. Fumbi Chima is a globally recognized technology executive with a proven track record of leading digital transformation, driving operational excellence, and aligning technology innovation with business strategy. With extensive experience spanning retail, consumer goods, financial services, and media, she has successfully spearheaded P&L management, M&A initiatives, and large-scale enterprise transformations across some of the world's most recognized brands.`,
            `Fumbi has held leadership roles at Boeing Credit Union (BECU), adidas, Fox Networks, Burberry, Walmart, and American Express, where she has been instrumental in optimizing infrastructure, implementing cutting-edge digital strategies, and fostering a culture of innovation and high performance. She is a thought leader in AI, cybersecurity, and digital transformation, recognized for her ability to bridge the gap between technology and business to create sustainable value and competitive advantage.`,
            `Fumbi serves on the board of directors of a number of public and private companies during her career, including Willis Towers Watson Public Limited Company (NASDAQ: WTW), a financial services company. Previously, Ms. Chima served as a member of the board of directors of Whitbread PLC (LSE: WTB), a hospitality company; AZEK Company Inc. (NYSE: AZEK), a manufacturer of residential and commercial building products, Ted Baker PLC (LSE: TED (formerly)), a clothing company, and Africa Prudential PLC (Nigerian Stock Exchange: AFRIPRUD), a business service company; leveraging her expertise to shape corporate governance, digital strategy, and risk management.`,
            `She is also a dedicated advocate for diversity and inclusion in technology, actively supporting initiatives that empower women and underrepresented communities.`,
            `Fumbi holds a Doctor of Letters in Business and Politics from the University of Hull, along with executive management certifications from Harvard Business School. She has been recognized by American Banker, Puget Sound Business Journal, Savoy Magazine, and Career Communications Group for her leadership and contributions to the industry.`,
        ]
    },
    {
        id: "3",
        name: "Samuel Nwanze",
        is_board: true,
        title: "Non-Executive Director",
        img: samuelImg,
        description: [
            `Dr. Fumbi Chima is a globally recognized technology executive with a proven track record of leading digital transformation, driving operational excellence, and aligning technology innovation with business strategy. With extensive experience spanning retail, consumer goods, financial services, and media, she has successfully spearheaded P&L management, M&A initiatives, and large-scale enterprise transformations across some of the world's most recognized brands.`,
            `Fumbi has held leadership roles at Boeing Credit Union (BECU), adidas, Fox Networks, Burberry, Walmart, and American Express, where she has been instrumental in optimizing infrastructure, implementing cutting-edge digital strategies, and fostering a culture of innovation and high performance. She is a thought leader in AI, cybersecurity, and digital transformation, recognized for her ability to bridge the gap between technology and business to create sustainable value and competitive advantage.`,
            `Fumbi serves on the board of directors of a number of public and private companies during her career, including Willis Towers Watson Public Limited Company (NASDAQ: WTW), a financial services company. Previously, Ms. Chima served as a member of the board of directors of Whitbread PLC (LSE: WTB), a hospitality company; AZEK Company Inc. (NYSE: AZEK), a manufacturer of residential and commercial building products, Ted Baker PLC (LSE: TED (formerly)), a clothing company, and Africa Prudential PLC (Nigerian Stock Exchange: AFRIPRUD), a business service company; leveraging her expertise to shape corporate governance, digital strategy, and risk management.`,
            `She is also a dedicated advocate for diversity and inclusion in technology, actively supporting initiatives that empower women and underrepresented communities.`,
            `Fumbi holds a Doctor of Letters in Business and Politics from the University of Hull, along with executive management certifications from Harvard Business School. She has been recognized by American Banker, Puget Sound Business Journal, Savoy Magazine, and Career Communications Group for her leadership and contributions to the industry.`,
        ]
    },
    {
        id: "4",
        name: "Anant Rao",
        is_board: true,
        title: "Executive Director",
        img: raoImg,
        description: [
            `Dr. Fumbi Chima is a globally recognized technology executive with a proven track record of leading digital transformation, driving operational excellence, and aligning technology innovation with business strategy. With extensive experience spanning retail, consumer goods, financial services, and media, she has successfully spearheaded P&L management, M&A initiatives, and large-scale enterprise transformations across some of the world's most recognized brands.`,
            `Fumbi has held leadership roles at Boeing Credit Union (BECU), adidas, Fox Networks, Burberry, Walmart, and American Express, where she has been instrumental in optimizing infrastructure, implementing cutting-edge digital strategies, and fostering a culture of innovation and high performance. She is a thought leader in AI, cybersecurity, and digital transformation, recognized for her ability to bridge the gap between technology and business to create sustainable value and competitive advantage.`,
            `Fumbi serves on the board of directors of a number of public and private companies during her career, including Willis Towers Watson Public Limited Company (NASDAQ: WTW), a financial services company. Previously, Ms. Chima served as a member of the board of directors of Whitbread PLC (LSE: WTB), a hospitality company; AZEK Company Inc. (NYSE: AZEK), a manufacturer of residential and commercial building products, Ted Baker PLC (LSE: TED (formerly)), a clothing company, and Africa Prudential PLC (Nigerian Stock Exchange: AFRIPRUD), a business service company; leveraging her expertise to shape corporate governance, digital strategy, and risk management.`,
            `She is also a dedicated advocate for diversity and inclusion in technology, actively supporting initiatives that empower women and underrepresented communities.`,
            `Fumbi holds a Doctor of Letters in Business and Politics from the University of Hull, along with executive management certifications from Harvard Business School. She has been recognized by American Banker, Puget Sound Business Journal, Savoy Magazine, and Career Communications Group for her leadership and contributions to the industry.`,
        ]
    },
    {
        id: "5",
        name: "Obong Idiong",
        is_board: true,
        title: "Managing Director / CEO",
        img: obongImg,
        description: [
            `Dr. Fumbi Chima is a globally recognized technology executive with a proven track record of leading digital transformation, driving operational excellence, and aligning technology innovation with business strategy. With extensive experience spanning retail, consumer goods, financial services, and media, she has successfully spearheaded P&L management, M&A initiatives, and large-scale enterprise transformations across some of the world's most recognized brands.`,
            `Fumbi has held leadership roles at Boeing Credit Union (BECU), adidas, Fox Networks, Burberry, Walmart, and American Express, where she has been instrumental in optimizing infrastructure, implementing cutting-edge digital strategies, and fostering a culture of innovation and high performance. She is a thought leader in AI, cybersecurity, and digital transformation, recognized for her ability to bridge the gap between technology and business to create sustainable value and competitive advantage.`,
            `Fumbi serves on the board of directors of a number of public and private companies during her career, including Willis Towers Watson Public Limited Company (NASDAQ: WTW), a financial services company. Previously, Ms. Chima served as a member of the board of directors of Whitbread PLC (LSE: WTB), a hospitality company; AZEK Company Inc. (NYSE: AZEK), a manufacturer of residential and commercial building products, Ted Baker PLC (LSE: TED (formerly)), a clothing company, and Africa Prudential PLC (Nigerian Stock Exchange: AFRIPRUD), a business service company; leveraging her expertise to shape corporate governance, digital strategy, and risk management.`,
            `She is also a dedicated advocate for diversity and inclusion in technology, actively supporting initiatives that empower women and underrepresented communities.`,
            `Fumbi holds a Doctor of Letters in Business and Politics from the University of Hull, along with executive management certifications from Harvard Business School. She has been recognized by American Banker, Puget Sound Business Journal, Savoy Magazine, and Career Communications Group for her leadership and contributions to the industry.`,
        ]
    },
    
]

function BoardMembers() {
    const [hoveredCard, setHoveredCard] = useState<string | null>(null);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});
    const [openDetail, setOpenDetail] = useState(false);
    const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

    const handleMemberClick = (member: TeamMember): void => {
        setSelectedMember(member);
        setOpenDetail(true);
    };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, id: string) => {
    const card = cardRefs.current[id];
    if (card) {
      const rect = card.getBoundingClientRect();
      setCursorPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
    setHoveredCard(id);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };
  return (
    <div className='w-full'>
        <div className='w-full xl:pt-8 xs:pt-4 grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2  2xl:gap-20 lg:gap-12 gap-4'>
            {team_members.map((data, index) => (
                <div 
                    onClick={() => handleMemberClick(data)}
                    ref={(el) => {
                        if (el) {
                        cardRefs.current[data.id] = el;
                        } else {
                        delete cardRefs.current[data.id];
                        }
                    }}
                    onMouseMove={(e) => handleMouseMove(e, data.id)}
                    onMouseLeave={handleMouseLeave}
                    className='relative group bg-white rounded-2xl shadow-md cursor-pointer'
                    key={data.id}
                >
                    <div className='w-full xl:h-[370px] lg:h-[300px] h-[250px] rounded-2xl overflow-hidden bg-gray-300'>
                        <Image 
                            src={data.img}
                            alt={`${data.name} ${index+1}`}
                            className='w-full h-full object-cover object-top rounded-2xl hover:rounded-2xl group-hover:scale-105 transition-transform duration-300'
                        />
                        {hoveredCard === data.id && (
                            <div 
                                className='absolute rounded-full pointer-events-none'
                                style={{
                                    left: `${cursorPosition.x}px`,
                                    top: `${cursorPosition.y}px`,
                                    width: '60px',
                                    height: '60px',
                                    background: 'radial-gradient(circle, rgba(255,135,51,0.4) 100%, rgba(255,255,255,0) 70%)',
                                    transform: 'translate(-50%, -50%)',
                                }}
                            />
                        )}
                    </div>
                    <div className='w-full px-6 xs:py-6 py-3 flex flex-col space-y-1'>
                        <div className='w-full flex justify-between items-center gap-3'>
                            <Typography
                                typo="header-6-semibold"
                                className='text-gray-600 !font-bold'
                            >
                                {data.name}
                            </Typography>
                        </div>
                        <Typography
                            typo="body-medium-medium"
                            className='text-gray-500'
                        >
                            {data.title}
                        </Typography>
                    </div>
                </div>
            ))}
        </div>
        <LeadershipModal 
            open={openDetail} 
            setOpen={setOpenDetail} 
            member={selectedMember} 
        />
    </div>
  )
}

export default BoardMembers