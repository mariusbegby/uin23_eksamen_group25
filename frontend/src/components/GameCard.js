import { Link } from 'react-router-dom';

export default function GameCard({ gameObject }) {
    let gameImageUrl = gameObject.background_image ? gameObject.background_image : '/placeholder.png';

    return (
        
        <article className='gamecard'>
            <Link to={'/game/' + gameObject.slug}>
                <figure>
                    <img src={gameImageUrl} alt='' />
                </figure>
                <section>
                    <h3>{gameObject.name}</h3>
                    <div className='tag-section'>
                        {gameObject.tags.slice(0, 5).map((tag, index) => (
                            <p key={index}>{tag.name}</p>
                        ))}
                    </div>
                    {gameObject.bought ? (
                        ''
                    ) : (
                        <button className='link-button' href={'/game/' + gameObject.slug}>
                            Buy
                        </button>
                    )}
                </section>
            </Link>
        </article>
    );
}
