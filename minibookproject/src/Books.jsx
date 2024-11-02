import BookList from './BookList'

function Books() {
  const books = [{
    title :'Maniac Magee',
    image: 'https://m.media-amazon.com/images/I/71XfF+H3V7L._AC_UY327_FMwebp_QL65_.jpg',
    author: 'Jerry Spinelli '
  
  },
  {
    title :'Berenstain Bears',
    image: 'https://m.media-amazon.com/images/I/91pPH5mi14L._SY522_.jpg',
    author: 'Stan Berenstain, Jan Berenstain'
  
  }, {
    title :'The Outsiders',
    image: 'https://m.media-amazon.com/images/I/51vBqUSAs+L._SY466_.jpg',
    author: 'S. E. Hinton'
  },
  {   title :'Placeholder',
    image: 'https://placehold.co/200',
    author: 'Placeholder'
  },
  {  title :'Placeholder',
    image: 'https://placehold.co/200',
    author: 'Placeholder'
  },
  {  title :'Placeholder',
    image: 'https://placehold.co/200',
    author: 'Placeholder'
  },
  {  title :'Placeholder',
    image: 'https://placehold.co/200',
    author: 'Placeholder'
  },
  {  title :'Placeholder',
    image: 'https://placehold.co/200',
    author: 'Placeholder'
  },
  {  title :'Placeholder',
    image: 'https://placehold.co/200',
    author: 'Placeholder'
  },
  {  title :'Placeholder',
    image: 'https://placehold.co/200',
    author: 'Placeholder'
  },
  {  title :'Placeholder',
    image: 'https://placehold.co/200',
    author: 'Placeholder'
  },
  {  title :'Placeholder',
    image: 'https://placehold.co/200',
    author: 'Placeholder'
  },
  {  title :'The Outsiders',
    image: 'https://placehold.co/200',
    author: 'S. E. Hinton'
  },
  {  title :'Placeholder',
    image: 'https://placehold.co/200',
    author: 'Placeholder'
  },
  {  title :'Placeholder',
    image: 'https://placehold.co/200',
    author: 'Placeholder'
  },
  {  title :'Placeholder',
    image: 'https://placehold.co/200',
    author: 'Placeholder'
  }
]


  return (
    <>
      <BookList books={books} />
    </>
  )
}

export default Books
