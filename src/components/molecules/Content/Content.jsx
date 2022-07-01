import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Content.scss";
// import Button from "../../atoms/ButtonCategory/Button";
//import useProducts from "../../../utils/useProducts";


export default function Content({
    heading,
    id,
}) {

  const [users, setUser] = useState([])
  const [name, setName] = useState("");
  const [shortName, setShortName] = useState("");
  const [icon, setIcon] = useState("");
  const [iconName,setIconName] = useState("");
  const [label, setLabel] = useState("");
  const [propertiesDefault, setDefault] = useState("");
  const [propertiesName, setpropertiesName] = useState("");
  const [required, setRequired] = useState("");
  const [partName, setpartName] = useState("");
  const [nameRequired, setnameRequired] = useState("");
  const [partDefault, setpartDefault] = useState("");
  const [comments, setComments] = useState("");
  const [userId,setUserId]=useState(null)

  const [archiveFlag, setArchiveFlag] = useState(true);
  const [archiveCSS, setarchiveCSS] = useState("");

  useEffect(() => {
    getUsers();
    
  }, [])
  function getUsers() {
    fetch("http://localhost:5000/units").then((result) => {
      result.json().then((resp) => {
        // console.warn(resp)
        setUser(resp)
        setName(resp[0].name)
        setShortName(resp[0].shortname)
        setIcon(resp[0].icon)
        setIconName(resp[0].iconName)
        setLabel(resp[0].properties.label)
        setDefault(resp[0].properties.propertiesDefault)
        setpropertiesName(resp[0].properties.propertiesName)
        setRequired(resp[0].properties.required)
        setpartName(resp[0].parts.partName)
        setnameRequired(resp[0].parts.nameRequired)
        setpartDefault(resp[0].parts.partDefault)
        setComments(resp[0].comment)
        setUserId(resp[0].id)
        localStorage.clear();
      })
    })
  }
  const activeUnit = () => {
    if (archiveFlag === true) {
      setArchiveFlag(false);
      setarchiveCSS("active-page");
    } else {
      setArchiveFlag(true);
      setarchiveCSS("");
    }
  };

  
  function selectUser(id)
  {
    let item=users[id-1];
        setName(item.name)
        setShortName(item.shortname)
        setIcon(item.icon)
        setIconName(item.iconName)
        setLabel(item.properties.label)
        setDefault(item.properties.propertiesDefault)
        setpropertiesName(item.properties.propertiesName)
        setRequired(item.properties.required)
        setpartName(item.parts.partName)
        setnameRequired(item.parts.nameRequired)
        setpartDefault(item.parts.partDefault)
        setComments(item.comment)
        setUserId(item.id)

        // window.location.reload();
        
        window.location.href = window.location.href;
        // setTimeout(() => {
        //   window.location.reload();
        //   activeUnit();
        // }, 2000);
        
        
  }


//   console.log(name);
//   console.log(label);
// console.log(partName)

// function deleteUser(id) {
//   fetch(`http://localhost:5000/units/${id}`, {
//     method: 'DELETE'
//   }).then((result) => {
//     result.json().then((resp) => {
//       console.warn(resp)
//       getUsers()
//       let item=users[id+1];
//       setUserId(item.id)
//     })
//   })
// }

localStorage.setItem("name", name);
localStorage.setItem("shortName", shortName);
localStorage.setItem("icon",icon);
localStorage.setItem("iconName", iconName);
localStorage.setItem("label", label);
localStorage.setItem("propertiesDefault", propertiesDefault);
localStorage.setItem("propertiesName", propertiesName);
localStorage.setItem("required", required);
localStorage.setItem("partName", partName);
localStorage.setItem("nameRequired", nameRequired);
localStorage.setItem("partDefault", partDefault);
localStorage.setItem("comments", comments);
localStorage.setItem("userId", userId);
    return (
        
            <div className={`unit-name container-unit-name ${archiveCSS}`} onClick={() => selectUser(id)}>{heading}</div>
            
    );

}
