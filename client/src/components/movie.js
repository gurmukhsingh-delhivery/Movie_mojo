import React from 'react';
import Link from 'next/link';

const Card = ({id,title, releaseDate,genre}) => {
  return (
    
    <Link href={`movies/${id}`}>
            <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-medium mb-2">{title}</h3>
                <p className="text-gray-700">{releaseDate}</p>
                <p className="text-gray-700">{genre}</p>

            </div>
    </Link>

  )
}

export default Card;