/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import Layout from "../Layout/Layout.jsx";
import BlogList from "../Component/BlogList.jsx";
import { useEffect, useState } from "react";
import { postByCategory } from "../APIRequest/APIRequest.js";
import Loader from "../Component/Loader.jsx";


const ByCategoryPage = () => {

    let {categoryID}=useParams();
    // alert(categoryID)
    let [list,SetList] = useState(null);

    useEffect(()=>{

        (async()=>{
            let res = await postByCategory(categoryID);
            SetList(res);
        })()

    },[categoryID])

    return (
        <Layout>
            {list===null?<Loader/> : <BlogList list={list}/> }
        </Layout>
    );
};

export default ByCategoryPage;