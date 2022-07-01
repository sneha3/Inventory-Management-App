import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SettingsForm.scss";
// import Content from '../../molecules/Content/Content'
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { addUnit } from "../../../services/setting-form";
import {editUnit} from "../../../services/edit-settings-form"
// import Themes from "../Forms/variable";
import { AiOutlineUnorderedList, AiTwotoneDelete } from "react-icons/ai";
const SettingsForm = () => {
    const [serviceList, setServiceList] = useState([{ service: "" }]);
    const [partsList, setPartsList] = useState([{ part: "" }]);
    const [status, setStatus] = useState(null);

    const [propertyRow, setPropertyRow] = useState([]);
    const [partsRow, setPartsRow] = useState([]);
    
    // const {  archiveBtn, setarchiveBtn, archiveFlag, setArchiveFlag, archiveCSS, setarchiveCSS, archivePage } = Themes();

    const [archiveBtn, setarchiveBtn] = useState("Archive");
  const [archiveFlag, setArchiveFlag] = useState(true);
  const [archiveCSS, setarchiveCSS] = useState("");
     
    // const [name, setName] = useState("");
    // const [shortName, setShortName] = useState("");
    // const [icon, setIcon] = useState("");
    // const [iconName,setIconName] = useState("");
    // const [propertiesLabel, setLabel] = useState("");
    // const [propertiesDefault, setDefault] = useState("");
    // const [propertiesName, setpropertiesName] = useState("");
    // const [required, setRequired] = useState("");
    // const [partName, setpartName] = useState("");
    // const [partNameCheck, setnameRequired] = useState("");
    // const [partDefault, setpartDefault] = useState("");
    // const [comment, setComments] = useState("");
    // const [userId,setUserId]=useState(null)
    // useEffect(() => {
    //   setName(JSON.parse(localStorage.getItem("name")));
    //   setShortName(JSON.parse(localStorage.getItem("shortName")));
    //   setIconName(JSON.parse(localStorage.getItem("iconName")));
    //   setLabel(JSON.parse(localStorage.getItem("label")));
    //   setDefault(JSON.parse(localStorage.getItem("propertiesDefault")));
    //   setpropertiesName(JSON.parse(localStorage.getItem("propertiesName")));
    //   setRequired(JSON.parse(localStorage.getItem("required")));
    //   setpartName(JSON.parse(localStorage.getItem("partName")));
    //   setnameRequired(JSON.parse(localStorage.getItem("nameRequired")));
    //   setpartDefault(JSON.parse(localStorage.getItem("partDefault")));
    //   setComments(JSON.parse(localStorage.getItem("comments")));
    //   setUserId(JSON.parse(localStorage.getItem("UserId")));
    // }, []);

    const name = localStorage.getItem("name");
    const shortName = localStorage.getItem("shortName");
    const iconName = localStorage.getItem("iconName");
    const propertiesLabel = localStorage.getItem("label");
    const propertiesDefault = localStorage.getItem("propertiesDefault");
    const propertiesName = localStorage.getItem("propertiesName");
    const required = localStorage.getItem("required");
    const partName = localStorage.getItem("partName");
    const partNameCheck = localStorage.getItem("nameRequired");
    const partDefault = localStorage.getItem("partDefault");
    const comment = localStorage.getItem("comments");
    const userId = localStorage.getItem("userId");
// console.log(userId);
    // const { getUsers } = Content();

  //   const [users, setUser] = useState([])
  //   const [name, setName] = useState("");
  // const [shortName, setShortName] = useState("");
  // const [icon, setIcon] = useState("");
  // const [iconName,setIconName] = useState("");
  // const [propertiesLabel, setLabel] = useState("");
  // const [propertiesDefault, setDefault] = useState("");
  // const [propertiesName, setpropertiesName] = useState("");
  // const [required, setRequired] = useState("");
  // const [partName, setpartName] = useState("");
  // const [partNameCheck, setnameRequired] = useState("");
  // const [partDefault, setpartDefault] = useState("");
  // const [comment, setComments] = useState("");
  // const [userId,setUserId]=useState(null)

    // useEffect(() => {
    //   getUsers();
    // }, [])
    // function getUsers() {
    //   fetch("http://localhost:5000/units").then((result) => {
    //     result.json().then((resp) => {
    //       // console.warn(resp)
    //       setUser(resp)
    //       setName(resp[0].name)
    //     setShortName(resp[0].shortname)
    //     setIcon(resp[0].icon)
    //     setIconName(resp[0].iconName)
    //     setLabel(resp[0].properties.label)
    //     setDefault(resp[0].properties.propertiesDefault)
    //     setpropertiesName(resp[0].properties.propertiesName)
    //     setRequired(resp[0].properties.required)
    //     setpartName(resp[0].parts.partName)
    //     setnameRequired(resp[0].parts.nameRequired)
    //     setpartDefault(resp[0].parts.partDefault)
    //     setComments(resp[0].comment)
    //     setUserId(resp[0].id)
    //     })
    //   })
    // }



    const navigate = useNavigate();

    const { register, handleSubmit, reset } = useForm({
        mode: "all",
    });

    const handleServiceChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...serviceList];
        list[index][name] = value;
        setServiceList(list);
    };

    const handleServiceRemove = (index) => {
        const list = [...serviceList];
        list.splice(index, 1);
        setServiceList(list);
    };

    const handleServiceAdd = () => {
        setServiceList([...serviceList, { service: "" }]);
    };

    const handlePartChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...partsList];
        list[index][name] = value;
        setPartsList(list);
    };

    const handlePartRemove = (index) => {
        const list = [...partsList];
        list.splice(index, 1);
        setPartsList(list);
    };

    const handlePartAdd = () => {
        setPartsList([...partsList, { part: "" }]);
    };

    

    const addNewUnit = () => {
        localStorage.clear();
        // window.location.href = window.location.href;
        window.location.reload();
    }

    const archivePage = () => {
        if (archiveFlag === true) {
          setarchiveBtn("Unarchive");
          setArchiveFlag(false);
          setarchiveCSS("archive-page");
        } else {
          setarchiveBtn("Archive");
          setArchiveFlag(true);
          setarchiveCSS("");
        }
      };


  //   function updateUser()
  // {
  //   let item={name}
  //   console.warn("item",item)
  //   fetch(`http://localhost:5000/units/${userId}`, {
  //     method: 'PUT',
  //     headers:{
  //       'Accept':'application/json',
  //       'Content-Type':'application/json'
  //     },
  //     body:JSON.stringify(item)
  //   }).then((result) => {
  //     result.json().then((resp) => {
  //       console.warn(resp)
  //       getUsers()
  //     })
  //   })
  // }

    const newUnit = async (unit) => {
      localStorage.clear();
      const iconname = unit.icon.image;
        switch (unit.icon.image) {
            case "Laptop":
                unit.icon.image = "../../static/images/laptop-solid.svg";
                break;
            case "Microchip":
                unit.icon.image = "../../static/images/microchip-solid.svg";
                break;
            case "Keyboard":
                unit.icon.image = "../../static/images/keyboard-solid.svg";
                break;
            case "Hard Drive":
                unit.icon.image = "../../static/images/hard-drive-solid.svg";
                break;
            case "Desktop":
                unit.icon.image = "../../static/images/desktop-solid.svg";
                break;
            case "Camera":
                unit.icon.image = "../../static/images/camera-solid.svg";
                break;
            case "Mobile":
                unit.icon.image = "../../static/images/mobile-solid.svg";
                break;
            case "Memory":
                unit.icon.image = "../../static/images/memory-solid.svg";
                break;
            case "Sd Card":
                unit.icon.image = "../../static/images/sd-card-solid.svg";
                break;

            default: {
                unit.icon.image = "../../static/images/microchip-solid.svg";
            }
        }
        switch (unit.properties.name) {
          case true:
            unit.properties.name="checked";
            break;
            case false:
            unit.properties.name="";
            break;
          default:{
            unit.properties.name="";
          }
        }
        switch (unit.properties.required) {
          case true:
            unit.properties.required="checked";
            break;
            case false:
            unit.properties.required="";
            break;
          default:{
            unit.properties.required="";
          }
        }

        switch (unit.parts.name) {
          case true:
            unit.parts.name="checked";
            break;
            case false:
            unit.parts.name="";
            break;
          default:{
            unit.parts.name="";
          }
        }
        const unit1 = {
            name: unit.name,
            shortname: unit.shortName,
            icon: unit.icon.image,
            iconName: iconname,

            properties:{
              label:unit.properties.label,
              propertiesDefault:unit.properties.default,
              propertiesName:unit.properties.name,
              required:unit.properties.required
            },
            parts: {
                partName: unit.parts.partname,
                nameRequired: unit.parts.name,
                partDefault: unit.parts.default
            },
            comment:unit.comments
        };
        if(userId===null || userId===0){
        try {
            const response = await addUnit(unit1);
            // const newMeetingResponse = response;
            setStatus("ADDED");
            // navigate("/settings/unit-types");
            
            // window.location.reload();
            window.location.href = window.location.href;
            // reset();

        } catch (error) {}
    }

    if(userId>0){
        try {
            const response = await editUnit(unit1);
            // const newMeetingResponse = response;
            setStatus("ADDED");
            // navigate("/settings/unit-types");
            
            // window.location.reload();
            window.location.href = window.location.href;
            // reset();

        } catch (error) {}
    }

    };

    return (
        <>
            <Form
                className="mx-4 my-2 form"
                autoComplete="off"
                onSubmit={handleSubmit(newUnit)}>
                {/* onSubmit={handleSubmit(newMeeting)} */}
                <div className="btns">
                    <button type="submit" className=" my-2 button btn1">
                        Save
                    </button>
                    <button type="button" className="mx-2 my-2 button btn2" onClick={archivePage}>{archiveBtn}</button>
                    <button className="mx-1 my-2 button btn2 add-new" onClick={() => addNewUnit()}>Add Unit</button>
                </div>
                <div className="border-btn"></div>
                <div className={archiveCSS}>
                <Form.Group className="mb-3 my-2 mx-1" controlId="name">
                    <Form.Label className="label">
                        Name<span className="required">&nbsp;*</span>
                    </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Name"
                        className="my-1"
                        value={name}
                        required
                        {...register("name")}
                    />
                    {/* name="formBasicName" */}
                </Form.Group>

                <Form.Group className="mb-3 mx-1" controlId="shortName">
                    <Form.Label className="label">Short Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Short Name"
                        className="my-1"
                        value={shortName}
                        {...register("shortName")}
                    />
                    {/* name="formBasicShortName" */}
                </Form.Group>

                <Form.Group className="mb-3 mx-1" controlId="icon.image">
                    <Form.Label className="label">Icons</Form.Label>
                    {/* <div><img src="..\..\static\images\camera-solid.svg" alt="camera"/></div> */}
                    <Form.Select
                        aria-label="Default select example"
                        className="my-1"
                        value={iconName}
                        {...register("icon.image")}>
                        <option>Microchip</option>
                        <option>Camera</option>
                        <option>Desktop</option>
                        <option>Hard Drive</option>
                        <option>Keyboard</option>
                        <option>Laptop</option>
                        <option>Memory</option>
                        <option>Mobile</option>
                        <option>Sd Card</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group
                    className="mb-3 mx-1"
                    controlId="exampleForm.ControlTextarea1">
                    <Form.Label className="label my-1 mx-1">
                        Properties
                    </Form.Label>
                    <Table hover>
                        <thead className="tborder">
                            <tr>
                                <th>Label</th>
                                <th>Default</th>
                                <th>Name</th>
                                <th>Required</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {serviceList.map((singleService, index) => (
                                <tr key={index}>
                                    <td>
                                        <input
                                            type="text"
                                            className="label-text input"
                                            value = {propertiesLabel}
                                            //     value={singleService.service}
                                            // onChange={(e) => handleServiceChange(e, index)}
                                            {...register(
                                                "properties.label"
                                            )}></input>
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            className="default-text input"
                                            value = {propertiesDefault}
                                            //     value={singleService.service}
                                            // onChange={(e) => handleServiceChange(e, index)}
                                            {...register("properties.default")}
                                        />
                                    </td>
                                    <td>
                                        <Form.Check
                                            type="checkbox"
                                            className="mx-3 checkbox"
                                            checked={propertiesName}
                                            // value = {propertiesName}
                                            {...register("properties.name")}
                                        />
                                        {/* <input type="checkbox" className="mx-1 checkbox" /> */}
                                    </td>
                                    <td>
                                        <Form.Check
                                            type="checkbox"
                                            className="mx-4 checkbox"
                                            checked={required}
                                            // value = {required}
                                            {...register("properties.required")}
                                        />
                                        {/* <input type="checkbox" className="mx-1 checkbox" /> */}
                                    </td>
                                    <td>
                                        <AiTwotoneDelete
                                            className="delete-icon"
                                            onClick={() =>
                                                handleServiceRemove(index)
                                            }
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <div className="add mx-2 my-1" onClick={handleServiceAdd}>
                        Add property
                    </div>
                </Form.Group>

                <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1">
                    <Form.Label className="label my-1 mx-1">Parts</Form.Label>
                    <Table hover>
                        <thead className="tborder">
                            <tr>
                                <th className="mx-1">Part name</th>
                                <th></th>
                                <th className="mx-1 px-1">Name</th>
                                <th className="mx-1 px-3">Default</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            {partsList.map((partService, index) => (
                                <tr key={index}>
                                    <td>
                                        <input
                                            type="text"
                                            className="part-name-text input"
                                            value = {partName}
                                            {...register(
                                                "parts.partname"
                                            )}></input>
                                    </td>
                                    <td></td>
                                    <td>
                                        {/* <input
                                            type="text"
                                            className="part-name-text input"></input> */}
                                        <Form.Check
                                            type="checkbox"
                                            className="mx-1 checkbox"
                                            checked={partNameCheck}
                                            // value = {partNameCheck}
                                            {...register("parts.name")}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            className="part-name-text input mx-2"
                                            value = {partDefault}
                                            {...register(
                                                "parts.default"
                                            )}></input>
                                    </td>
                                    <td>
                                        <AiTwotoneDelete
                                            onClick={() =>
                                                handlePartRemove(index)
                                            }
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <div className="add mx-2 my-1" onClick={handlePartAdd}>
                        Add part
                    </div>
                </Form.Group>

                <Form.Group
                    className="mb-3 mx-1 $`{}`"
                    controlId="exampleForm.ControlTextarea1">
                    <Form.Label className="label my-1">Comments</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        value={comment}
                        {...register("comments")}
                    />
                </Form.Group>
                </div>
            </Form>
        </>
    );
};
export default SettingsForm;
