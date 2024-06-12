// CardGrid.tsx (Tailwind CSS version)
import type React from 'react';
import type { CardFullData } from './../CardInterfaces';

interface CardGridProps {
    cards: CardFullData[];
}

const CardGrid: React.FC<CardGridProps> = ({ cards }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {cards.map(card => (
                <div key={card.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img
                        src={card.image}
                        alt={card.name}
                        className="w-full h-128 object-cover"
                        onError={(e) => {
                            // e.currentTarget.src = 'fallback-image-url';
                            e.currentTarget.alt = 'Image not available';
                        }}
                    />
                    <div className="p-4">
                        <h2 className="text-lg font-semibold">{card.name}</h2>
                        {/* <p className="text-gray-600">{card.text}</p> */}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CardGrid;
