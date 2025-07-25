'use client';
import { Star, StarHalf } from 'lucide-react';
import React from 'react';

type StarRatingProps = {
  rating: number;
};

const StarRating = ({ rating }: StarRatingProps) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<Star key={i} fill="#e0b43e" stroke="gold" size={17} />);
    } else if (rating >= i - 0.5) {
      stars.push(<StarHalf key={i} fill="#e0b43e" color='#ADB7BC' size={17} />);
    } else {
      stars.push(<Star key={i} fill="none" color='#ADB7BC' size={17} />);
    }
  }

  return (
    <div className="flex items-center gap-1">
      {stars}
    </div>
  );
};

export default StarRating;
