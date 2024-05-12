<<<<<<< Updated upstream
import React, { useEffect } from "react";
import { Table } from "antd";
import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getEnquiries } from "../features/enquiry/enquirySlice";

=======
import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { Link } from "react-router-dom";
import { AiFillDelete, AiOutlineEye } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { deleteAnEnquiry, getEnquiries, resetState, updateAnEnquiry } from "../features/enquiry/enquirySlice";
import CustomModal from "../components/CustomModal";
>>>>>>> Stashed changes
const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Mobile",
    dataIndex: "mobile",
  },
  {
    title: "Status",
    dataIndex: "status",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const Enquiries = () => {
<<<<<<< Updated upstream
  const dispatch = useDispatch();
  useEffect(() => {
=======
  const [open, setOpen] = useState(false);
  const [enquiryId, setEnquiryId] = useState("");
  const showModal = (e) => {
    setOpen(true);
    setEnquiryId(e);

  };

  const hideModal = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetState()) ;
>>>>>>> Stashed changes
    dispatch(getEnquiries());
  }, []);
  const enqState = useSelector((state) => state.enquiry.enquiries);
  const data1 = [];
  for (let i = 0; i < enqState.length; i++) {
    data1.push({
      key: i + 1,
      name: enqState[i].name,
      email: enqState[i].email,
      mobile: enqState[i].mobile,
      status: (
        <>
<<<<<<< Updated upstream
          <select className="form-control form-select">
            <option>Set Status</option>
          </select>
=======
            <select
             name = "" 
             defaultValue = {enqState[i].status? enqState[i].status: "Submitted"} 
             className ="form-control form-select" 
             id =""
             onChange={(e) => setEnquiryStatus(e.target.value, enqState[i]._id)}
             >
                    <option value = "Submitted" >Submitted</option>
                    <option value = "Contacted" >Contacted</option>
                    <option value = "In Progress" >In Progress</option>
                    <option value = "Resolved">Resolved</option>
                </select>
>>>>>>> Stashed changes
        </>
      ),
      action: (
        <>
<<<<<<< Updated upstream
          <Link className="ms-3 fs-3 text-danger" to="/">
            <AiFillDelete />
          </Link>
=======
          <Link className="ms-3 fs-3 text-danger" to= {`/admin/enquiries/${enqState[i]._id}`}>
            <AiOutlineEye/>
          </Link>
          <button className="ms-3 fs-3 text-danger bg-transparent border-0" 
          onClick = {
            () => {
              showModal(enqState[i]._id);
            }
          }>
            <AiFillDelete />
          </button>
>>>>>>> Stashed changes
        </>
      ),
    });
  }
<<<<<<< Updated upstream
=======
  const deleteEnquiry = (e)=>{
    dispatch(deleteAnEnquiry(e)) ;
    setOpen(false);
    setTimeout(()=>{
      dispatch(getEnquiries());
  }, 1000);
  };
  const setEnquiryStatus = (e, i)=>{
    const data = {id:i, enqData: e}
    dispatch(updateAnEnquiry(data)) ;
    setOpen(false);
    setTimeout(()=>{
      dispatch(getEnquiries());
  }, 1000);
  };
>>>>>>> Stashed changes
  return (
    <div>
      <h3 className="mb-4 title">Enquiries</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
<<<<<<< Updated upstream
=======
      <CustomModal hideModal = {hideModal} 
      open = {open}
      performAction = {()=>{deleteEnquiry(enquiryId)}}
       title = "Are You Sure You Want To Delete This Enquiry?" /> 
>>>>>>> Stashed changes
    </div>
  );
};

export default Enquiries;
