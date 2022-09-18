
export function StarsRating({ rating, sumRatings }) {
    
    const sumRating = [1, 2, 3, 4, 5]
    
    return (
        <div>
            <div>
                {sumRating.map(el =>
                    <label>
                        {el <= rating ? '⭐' : '☆'}
                    </label>
                )}
            </div>
        </div>
    )
}