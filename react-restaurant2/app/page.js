//main page
"use client"
import React, {useState} from 'react'
import axios from 'axios'
//import Image from 'next/image'
//import styles from './page.module.css'
//import background from './img/placeholder.png'  - for background image

const baseURL = "https://www.jsonkeeper.com/b/MDXW";



//function for main page
export default function Home() {

  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL)
      .then((response) => {
      setData(response.data);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
  }, []);

  if (!data) {
    // data is loading
    return <p>Loading...</p>;
  }


  return (
    <main>
      //backgroundImage: `url(/image.png)`,
      //backgroundRepeat: 'no-repeat',
        <div>
          <h1>{data.title}</h1>
          <p>{data.price}</p>
        </div>


    </main>
  );
}
