import React from 'react'
import { FaTrash} from 'react-icons/fa'
import  Modal  from './Modal'

const Task = ({ item,onDelete,onChecked ,onEdit}) => {
    return (
        <div className='Task' onDoubleClick={()=>onChecked(item.id)}>
            <input type="checkbox" checked={item.checked} onChange={() => onChecked(item.id)} />
            <p style={item.checked ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}>{item.Task}</p>
            <div className="editDelete">

            <Modal onEdit={onEdit} item={ item} />
            <button onClick={()=>onDelete(item.id)}>
            <FaTrash />
            </button>
            </div>
        </div>
  )
}

export default Task