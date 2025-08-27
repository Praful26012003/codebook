export const Rating = ({rating}) => {
    const array = Array(5).fill(false);
    for(let i = 0; i < rating; i++) {
        array[i] = true;
    }
    
  return (
    <>
      {array.map((item, index) =>
        item ? (
          <i key={index} className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
        ) : (
          <i key={index} className="text-lg bi bi-star text-yellow-500 mr-1"></i>
        )
      )}
    </>
  );
}