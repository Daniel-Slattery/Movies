import React, { useRef, useEffect } from 'react';
import MovieTile from '../MovieTile/MovieTile';
import './style.css';

type Props = {
  movies: any;
  title: any;
  addMyList: any;
  lists: any;
}

const MovieList: React.FC<Props> = ({ movies, title, addMyList, lists }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollDirection = 0;

    const onMouseMove = (e: MouseEvent) => {
      const boundingRect = scrollContainer.getBoundingClientRect();
      const mouseX = e.clientX - boundingRect.left;
      const width = boundingRect.width;
      const threshold = 100; // Adjust threshold as needed

      if (mouseX > width - threshold) {
        scrollDirection = 1; // Scroll right
      } else if (mouseX < threshold) {
        scrollDirection = -1; // Scroll left
      } else {
        scrollDirection = 0;
      }
    };

    const scrollStep = () => {
      if (scrollDirection !== 0) {
        scrollContainer.scrollLeft += scrollDirection * 5; // Adjust scroll speed as needed
      }
      requestAnimationFrame(scrollStep);
    };

    scrollContainer.addEventListener('mousemove', onMouseMove);
    scrollStep(); // Start the scrolling loop

    return () => {
      scrollContainer.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div>
      {movies.length > 0 && (
        <div>
          <div className="list_title">
            <h2>{title === 'mylist' ? 'My List' : title.charAt(0).toUpperCase() + title.slice(1)}</h2>
          </div>
          <div className="list_scroll" ref={scrollRef}>
            {movies.map((movie: any) => (
              <MovieTile key={movie.id} movie={movie} addMyList={addMyList} lists={lists} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieList;
