<<<<<<< Updated upstream
import React, { useEffect } from "react";
=======
import React, { useEffect, useState } from "react";
>>>>>>> Stashed changes
import { Table } from "antd";
import { Link } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
<<<<<<< Updated upstream
import { getCategories } from "../features/pcategory/pcategorySlice";

=======
import { deleteAProductCategory, getCategories, resetState } from "../features/pcategory/pcategorySlice";
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
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const Categorylist = () => {
<<<<<<< Updated upstream
  const dispatch = useDispatch();
  useEffect(() => {
=======
  const [open, setOpen] = useState(false);
  const [pCatId, setpCatId] = useState("");
  const showModal = (e) => {
    setOpen(true);
    setpCatId(e);

  };

  const hideModal = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetState());
>>>>>>> Stashed changes
    dispatch(getCategories());
  }, []);
  const pCatStat = useSelector((state) => state.pCategory.pCategories);
  const data1 = [];
  for (let i = 0; i < pCatStat.length; i++) {
    data1.push({
      key: i + 1,
      name: pCatStat[i].title,
      action: (
        <>
<<<<<<< Updated upstream
          <Link className=" fs-3 text-danger" to="/">
            <BiEdit />
          </Link>
          <Link className="ms-3 fs-3 text-danger" to="/">
            <AiFillDelete />
          </Link>
=======
          <Link to = {`/admin/category/${pCatStat[i]._id}`} className=" fs-3 text-danger">
            <BiEdit />
          </Link>
          <button className="ms-3 fs-3 text-danger bg-transparent border-0" 
          onClick = {
            () => {
              showModal(pCatStat[i]._id);
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
  const deleteProductCategory = (e)=>{
    dispatch(deleteAProductCategory(e)) ;
    setOpen(false);
    setTimeout(()=>{
      dispatch(getCategories());
  }, 1000);
  };
>>>>>>> Stashed changes
  return (
    <div>
      <h3 className="mb-4 title">Product Categories</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
<<<<<<< Updated upstream
=======
      <CustomModal hideModal = {hideModal} 
      open = {open}
      performAction = {()=>{deleteProductCategory(pCatId)}}
       title = "Are You Sure You Want To Delete This Product Category?" /> 
>>>>>>> Stashed changes
    </div>
  );
};

export default Categorylist;
