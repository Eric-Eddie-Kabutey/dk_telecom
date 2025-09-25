interface HeaderPillLineProps {  
  text: string;
}

export const HeaderPillLine = ({ text }: HeaderPillLineProps) => (
    <div className="max-w-4xl mx-auto flex items-center mb-6">
      <div className="flex-grow h-px bg-blue-700/50"></div>
          
            <div className="flex-shrink-0 rounded-full p-[1px] bg-gradient-to-br from-yellow-400 to-indigo-400">
              <div className="bg-[#14125A] rounded-full px-4 py-[2px]">
                <span className="py-[0.5px] text-[11px] font-medium uppercase tracking-widest text-white">
                  {text}
                </span>
              </div>
            </div>
            <div className="flex-grow h-px bg-blue-700/50"></div>
    </div>
);