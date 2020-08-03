import React, { useState, useEffect } from 'react';
import FeedList from "./feedList";
import Tagbutton from "./tagbutton";
import store from "../store";
const FEED = () => {
    const [data, setdata] = useState([]);
    const [filterlist, setfilterlist] = useState([]);
    const [currentTag, setcurrentTag] = useState('allpost')
    useEffect(() => {
        setList(store.getState());
        store.subscribe(() => {
            console.log(store.getState());
            setList(store.getState());
        });
    }, []);

    const setList = item => {
        setdata(item);
        setfilterlist(item);
    }

    const deletefeed = (id) => {
        if (window.confirm('Are you sure')) {
            store.dispatch({ type: "DELETE", id: id })
        }
    };

    const list = filterlist.map((ele) =>
        <FeedList key={ele.id} data={ele} deleteList={deletefeed} />
    )

    const tagfilter = ({ name }) => {
        if (currentTag !== name) {
            setcurrentTag(name);
            const filterlist = data.filter(ele => ele.topics.includes(name));
            setfilterlist(filterlist);
        }
    }

    const allpost = () => {
        if (currentTag !== 'allpost') {
            console.log('allpost');
            setcurrentTag('allpost');
            setfilterlist(data);
        }
    }

    return (
        <>
            <Tagbutton tagfilter={tagfilter} allpost={allpost} />
            <div className="container w-50">
                {list}
            </div>
        </>
    );
}

export default FEED;