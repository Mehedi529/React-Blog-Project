import { useEffect, useState } from "react";
import BlogList from "../Component/BlogList.jsx";
import Layout from "../Layout/Layout.jsx";
import { postLatest } from "../APIRequest/APIRequest.js";
import Loader from "../Component/Loader.jsx";

const HomePage = () => {

    let [list,SetList] = useState(null);

    useEffect(()=>{

        (async()=>{
            let res = await postLatest();
            SetList(res);
        })()

    },[])



    return (
        <Layout>
            {list===null?<Loader/> : <BlogList list={list}/> }
        </Layout>
    );
};

export default HomePage;