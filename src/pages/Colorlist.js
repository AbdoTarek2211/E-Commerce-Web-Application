<<<<<<< Updated upstream
import React, { useEffect } from "react";
=======
import React, { useEffect, useState } from "react";
>>>>>>> Stashed changes
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
<<<<<<< Updated upstream
import { getColors } from "../features/color/colorSlice";

=======
import { deleteAColor, getColors, resetState } from "../features/color/colorSlice";
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
    title: "Action",
    dataIndex: "action",
  },
];

const Colorlist = () => {
<<<<<<< Updated upstream
  const dispatch = useDispatch();
  useEffect(() => {
=======
  const [open, setOpen] = useState(false);
  const [colorId, setColorId] = useState("");
  const showModal = (e) => {
    setOpen(true);
    setColorId(e);

  };

  const hideModal = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetState());
>>>>>>> Stashed changes
    dispatch(getColors());
  }, []);
  const colorState = useSelector((state) => state.color.colors);
  const data1 = [];
  for (let i = 0; i < colorState.length; i++) {
    data1.push({
      key: i + 1,
      name: colorState[i].title,
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
          <Link to = {`/admin/color/${colorState[i]._id}`} className=" fs-3 text-danger">
            <BiEdit />
          </Link>
          <button className="ms-3 fs-3 text-danger bg-transparent border-0" 
          onClick = {
            () => {
              showModal(colorState[i]._id);
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
  const deleteColor = (e)=>{
    dispatch(deleteAColor(e)) ;
    setOpen(false);
    setTimeout(()=>{
      dispatch(getColors());
  }, 1000);
  };
>>>>>>> Stashed changes
  return (
    <div>
      <h3 className="mb-4 title">Colors</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
<<<<<<< Updated upstream
=======
      <CustomModal hideModal = {hideModal} 
      open = {open}
      performAction = {()=>{deleteColor(colorId)}}
       title = "Are You Sure You Want To Delete This Color?" /> 
>>>>>>> Stashed changes
    </div>
  );
};

export default Colorlist;
