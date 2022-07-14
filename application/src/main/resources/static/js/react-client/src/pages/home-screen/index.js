import React, { useEffect, useState } from 'react';

import Axios from 'axios';
// import Comments from '../../components/comments';
import Fishs from '../fish';
import style from './style.module.scss';

const HomeScreen = () => {
        
    // const [loadingComments, setLoadingItems] = useState(true),
    //     [comments, setComments] = useState(null),
    //     [loadingPopularItems, setLoadingPopularItems] = useState(true),
    //     [popularItems, setPopularItems] = useState(null);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const result = await Axios('http://localhost:8080/api/popular-fishs');
    //         setPopularItems(result.data);
    //     }
    //     //if popularItems is no longer null loading becomes false
    //     if (popularItems) {
    //         setLoadingPopularItems(false);
    //     }


    //     //delay by one second and ONLY fetch when popularItems are null
    //     const timer = setTimeout(() => {
    //         !popularItems && fetchData(); //if popularItems is NULL fetch the data 
    //     }, 1000);
    //     return () => clearTimeout(timer);

    //     // eslint-disable-next-line
    // }, [popularItems]);


    // // create the useEffect for the items GET REQUEST
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const result = await Axios('http://localhost:8080/api/items');
    //         setItems(result.data);
    //     }
    //     //if items is no longer null loading becomes false
    //     if (items) {
    //         setLoadingItems(false);
    //     }


    //     //delay by one second and ONLY fetch when items are null
    //     const timer = setTimeout(() => {
    //         !items && fetchData(); //if items is NULL fetch the data 
    //     }, 1000);
    //     return () => clearTimeout(timer);

    //     // eslint-disable-next-line
    // }, [items]);


    // return (
    //     <div>
    //         <div className={style.form__container}>
    //             <section className={style.itemList}>
    //                 {loadingItems ? <h3>Loading ...</h3> :
    //                     <Items items={items} />
    //                 }
    //             </section>
    //         </div>
    //         {loadingPopularItems ? <h3>Loading ...</h3> :
    //             <>
    //                 <h2>Here are our popular items</h2>
    //                 <ul>
    //                     {popularItems.map(popularItem => (
    //                         <div key={popularItem.id}>
    //                             <p>{popularItem.name}</p>
    //                             <p>{popularItem.price}</p>
    //                         </div>
    //                     ))}
    //                 </ul>
    //             </>
    //         }
    
    //     </div>
    // );
    <div>

    </div>
}

export default HomeScreen;