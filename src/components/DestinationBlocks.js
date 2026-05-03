import React from 'react'
import '../styles/GlobalStyles.css'
function DestinationBlocks(props) {
  const showAlert = () => {
    alert(props.props.text);
  };
  return (
    <div>
        <div className='travel-container'>
            <div id='picture-block-2' onClick={showAlert}>
              <img id='picture-block-1' src={props.props.img}/>    
              <p id='title-block'>{props.props.name}</p>   
            </div> 
        </div>
    </div>
  )
}

export default DestinationBlocks