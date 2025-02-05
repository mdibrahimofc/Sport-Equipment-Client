import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../firebase/AuthProvider";
import Header from "../components/Header";
import EquipmentCards from "../components/EquipmentCards";

const MyEquipments = () => {
    const [myEquipments, setMyEquipments] = useState([])
    const {user} = useContext(AuthContext)
    const [render, setRender] = useState(false)
    const [loading, setLoading] = useState(false)
    console.log(user);
    useEffect(()=>{
      setLoading(true)
        fetch(`https://equi-sports-server-chi.vercel.app/my-equipments${user?.email}`)
        .then(res=> res.json())
        .then(data=> {
            console.log(data);
            setMyEquipments(data)
            setLoading(false)
        })
    },[user, render])
  return (
    <div>
      <Header />
      <EquipmentCards loading={loading} render={render} setRender={setRender} equipmentList={myEquipments}/>
    </div>

  );
};

export default MyEquipments;
