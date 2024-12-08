import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../firebase/AuthProvider";
import Header from "../components/Header";
import EquipmentCards from "../components/EquipmentCards";

const MyEquipments = () => {
    const [myEquipments, setMyEquipments] = useState([])
    const {user} = useContext(AuthContext)
    console.log(user);
    useEffect(()=>{
        fetch(`http://localhost:5000/my-equipments${user?.email}`)
        .then(res=> res.json())
        .then(data=> {
            console.log(data);
            setMyEquipments(data)
        })
    },[user])
  return (
    <div>
      <Header/>
      <EquipmentCards equipmentList={myEquipments}/>
    </div>

  );
};

export default MyEquipments;
