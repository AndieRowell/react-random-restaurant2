//main page
"use client"
import React, {useState} from 'react'
import axios from 'axios'
import MenuDisplay from '/app/components/molecules/MenuDisplay.js'
import Logo from './components/atoms/Logo'
//import Image from 'next/image'
import styles from './page.module.css'
//import background from './assets/toasts.jpg'  //for background image

const baseURL = "https://www.jsonkeeper.com/b/MDXW";



//function for main page
export default function Home() {

  const [data, setData] = React.useState([]);
  //const [menuItems, setMenuItems] = useState(items);


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
    <main style={{
      backgroundImage: "url('/assets/toasts.jpg')",
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>

      <Logo
        classes={styles.logo}
        source="/assets/IMG_0145 copy.PNG"
      />

        <div className="container">
          {data.map((item) => (
            <MenuDisplay
              key={item.id}
              title={item.title}
              description={item.description}
              price={item.price}
            />
          ))}
          {/* <h1>{data.title}</h1>
          <p>{data.price}</p> */}
          {/* <Menu items={data}/> */}
        </div>
    </main>
  );
}
