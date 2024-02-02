
import React, { useEffect, useState, useRef } from "react"
import Banner from "../components/Banner"
import ItemList from "../components/ItemList"
import Shortcuts from "../components/shortcut/Shortcuts"

const MainPage = () => {

    const [shortcuts, setShortcuts] = useState([])
    const [items, setItems] = useState([])

    useEffect(() => {


            fetch("https://api.testvalley.kr/collections?prearrangedDiscount")
            .then((response) => {
                return response.json()
            })
            .then(async (data) => {
                if (Array.isArray(data.items)) {
                    const filtered = await data.items.filter( da => da.type === "SINGLE" && da.viewType === "TILE")
                    
                    setItems(filtered)
                  } else {
                    console.error('Data is not an array.');
                  }
            })

            fetch("https://api.testvalley.kr/main-shortcut/all")
            .then((response) => {
                return response.json()
            })
            .then((data) => {

                setShortcuts(data)
            })

        }, [])

    
    return (
        <section>

            <Shortcuts props={shortcuts}/>
            
            <ul className="list-none m-0 p-0">
                {
                    items.map((item) => <ItemList props={item}/>)
                }
            </ul>
            
                
        </section>
    )
}


export default MainPage;