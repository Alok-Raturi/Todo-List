import React from 'react'
import Task from './Task';

const List = ({ items,onDelete,onChecked, onEdit }) => {
  const ListOfItems = items.map((item, index) => <Task item={item} key={index} onDelete={onDelete} onChecked={onChecked} onEdit={ onEdit} />)
  return (
    <div className='ListOfTasks'>
      {ListOfItems}
    </div>
  )
}

export default List;