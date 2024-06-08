import { useGetCardsQuery } from './cardsApiSlice';
import CardGrid from './CardGrid/CardGrid'

export const Cards = () => {
    const { data, error, isLoading } = useGetCardsQuery(1);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.toString()}</div>;

    return (
        <div>
            <h1>Hearthstone Cards</h1>
            <div>
                <CardGrid cards={data?.cards || []} />
            </div>
        </div>
    );
};

export default Cards;
