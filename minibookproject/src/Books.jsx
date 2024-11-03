import BookList from './BookList'
import { booksData } from './booksData'
function Books() {
  
  return (
    <>
      <BookList books={booksData} />
    </>
  )
}

export default Books
