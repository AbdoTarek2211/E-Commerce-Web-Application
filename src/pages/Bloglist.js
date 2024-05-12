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
import { getBlogs } from "../features/blogs/blogSlice";

=======
import { deleteABlog, getBlogs, resetState } from "../features/blogs/blogSlice";
import CustomModal from "../components/CustomModal";
>>>>>>> Stashed changes
const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Title",
    dataIndex: "name",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Category",
    dataIndex: "category",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const Bloglist = () => {
<<<<<<< Updated upstream
  const dispatch = useDispatch();
  useEffect(() => {
=======
  const [open, setOpen] = useState(false);
  const [blogId, setBlogId] = useState("");
  const showModal = (e) => {
    setOpen(true);
    setBlogId(e);

  };

  const hideModal = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetState()) ;
>>>>>>> Stashed changes
    dispatch(getBlogs());
  }, []);
  const getBlogState = useSelector((state) => state.blogs.blogs);
  const data1 = [];
  for (let i = 0; i < getBlogState.length; i++) {
    data1.push({
      key: i + 1,
      name: getBlogState[i].title,
      category: getBlogState[i].category,

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
          <Link to = {`/admin/blog/${getBlogState[i]._id}`} className=" fs-3 text-danger">
            <BiEdit />
          </Link>
          <button className="ms-3 fs-3 text-danger bg-transparent border-0" 
          onClick = {
            () => {
              showModal(getBlogState[i]._id);
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
  const deleteBlog = (e)=>{
    dispatch(deleteABlog(e)) ;
    setOpen(false);
    setTimeout(()=>{
      dispatch(getBlogs());
  }, 1000);
  };
>>>>>>> Stashed changes
  return (
    <div>
      <h3 className="mb-4 title">Blogs List</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
<<<<<<< Updated upstream
=======
      <CustomModal hideModal = {hideModal} 
      open = {open}
      performAction = {()=>{deleteBlog(blogId)}}
       title = "Are You Sure You Want To Delete This Blog?" /> 
>>>>>>> Stashed changes
    </div>
  );
};

export default Bloglist;
