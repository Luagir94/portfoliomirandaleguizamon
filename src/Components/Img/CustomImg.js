import React from 'react'

const CustomImg = ({img, name ,id, clase}) => (
  
    <img src={img} alt={name} id={id} className={clase} />

)

export default CustomImg