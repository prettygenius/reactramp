import PropTypes from 'prop-types';
import './BookList.css';

function BookList({books}) {
  return (
    <article className="book-list">
      {books.map((book) => (
        <div key={book.id} className="book-item">
          <img src={book.image} alt={book.title} className="book-image" />
          <div className="book-details">
            <h1 className="book-title">{book.title}</h1>
            <h5 className="book-author">Author: {book.author}</h5>
          </div>
        </div>
      ))}
    </article>
  );
}

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default BookList