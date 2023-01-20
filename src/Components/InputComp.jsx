import { FaPlus } from 'react-icons/fa';

const Input = ({onAddingItem}) => {
  return (
      <form onSubmit={onAddingItem}>
          <input type="text" />
      <button type="submit">
      <FaPlus />
      </button>
      </form>
  )
}

export default Input