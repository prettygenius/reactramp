import PropTypes from 'prop-types'

const List = ({data}) => {
  return (
    <>
      {data.map((person) => {
        return (
        <article key={person.id} className='person'>
         <img src={person.image} alt={person.name} className='person'/>
         <div>
         <p>{person.name}</p> 
         <p>{person.age} years</p>
         </div>
        </article>
       
      )
      })}
    </>
  );
};

List.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,   
      name: PropTypes.string.isRequired,   
      age: PropTypes.number.isRequired, 
      image: PropTypes.string.isRequired   
    })
  ).isRequired
};


export default List;