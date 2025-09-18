import { Zap } from "lucide-react";

interface HeaderPillLineProps {
  icon: boolean;
  text: string;
}

export default function HeaderPillLine({icon = false, text}: HeaderPillLineProps) {
    return (         
      <div className="flex items-center justify-center gap-4 mb-8">
              {/* left line */}
              <div className="flex-grow h-px bg-blue-700/50"></div>
              <div className="flex-shrink-0 flex items-center gap-2 border border-blue-400/30 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              
                { icon && (<Zap className="h-4 w-4 text-yellow-300" />)}
                <span className="text-sm font-medium uppercase tracking-wider text-blue-100">
                  {text}
                </span>
        </div>
          {/* right line */}
              <div className="flex-grow h-px bg-blue-700/50"></div>
            </div>
    )
}