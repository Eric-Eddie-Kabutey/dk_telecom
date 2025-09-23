"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import CountUp from "react-countup";

interface AnimatedNumberProps {
  value: string;
  className?: string;
}

export function AnimatedNumber({ value, className }: AnimatedNumberProps) {
  const ref = useRef(null);
  // `amount: 0.5` means the trigger fires when 50% of the element is in view.
  // This feels more intentional than triggering at the very edge.
  const isInView = useInView(ref, { amount: 0.5 });
  const [hasAnimated, setHasAnimated] = useState(false);

  // Parse the number and suffix from the value string (e.g., "50M+" -> 50 and "M+")
  const numericValue = parseFloat(value.replace(/,/g, ''));
  const suffix = value.match(/[a-zA-Z%+\s]*$/)?.[0] || '';

  // This effect handles the animation logic
  useEffect(() => {
    if (isInView) {
      // Trigger the animation only if it hasn't animated in this "view session"
      if (!hasAnimated) {
        setHasAnimated(true);
      }
    } else {
      // Reset the animation trigger when it goes out of view
      setHasAnimated(false);
    }
  }, [isInView, hasAnimated]);

  return (
    <div ref={ref} className={className}>
      {hasAnimated ? (
        <CountUp
          start={0}
          end={numericValue}
          duration={2.5}
          decimals={String(numericValue).includes('.') ? 1 : 0}
          decimal="."
          suffix={suffix}
          enableScrollSpy={false} // We are controlling it with our own isInView
          scrollSpyDelay={0}
        />
      ) : (
        // Display 0 and the suffix when not in view or before animating
        `0${suffix}`
      )}
    </div>
  );
}