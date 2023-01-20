const Buttons = ({items, CheckAll, uncheckAll}) => {
  return (
      <div className="myButtons">
          <span>{ items.filter((item)=> (item.checked === true)).length} Task Completed</span>
          <button className="AllBtn" onClick={CheckAll} disabled={items.length>0?false:true}>
              Check All
          </button>
          <button className="AllBtn" onClick={uncheckAll} disabled={items.length>0?false:true}>
              Uncheck All
          </button>
    </div>
  )
}

export default Buttons