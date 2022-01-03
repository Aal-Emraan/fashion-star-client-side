import React, { useEffect, useState } from 'react';

const Jewellery = () => {
  const [jewellerys, setJewellerys] = useState([])

    useEffect(()=>{
        fetch('/jewelery.json')
        .then(result=> result.json())
        .then(data=>setJewellerys(data))
    },[])
  return (
    <div className="min-h-screen bg-yellow-500">
      <h1>This is Jewellery</h1>
      <h2>{jewellerys?.length}</h2>
      {
        jewellerys.map(jewellery => <h1>{jewellery.title}</h1>)
      }
    </div>
  );
};

export default Jewellery;