import React, { useEffect, useState } from "react";
import ItemList from "../components/ItemList.jsx";
import Shortcuts from "../components/shortcut/Shortcuts.jsx";

const MainPage = () => {
  const [shortcuts, setShortcuts] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://api.testvalley.kr/collections?prearrangedDiscount")
      .then((response) => response.json())
      .then(async (data) => {
        if (Array.isArray(data.items)) {
          const filtered = await data.items.filter(
            (da) => da.type === "SINGLE" && da.viewType === "TILE"
          );

          setItems(filtered);
        } else {
          console.error("Data is not an array.");
        }
      });

    fetch("https://api.testvalley.kr/main-shortcut/all")
      .then((response) => response.json())
      .then((data) => {
        setShortcuts(data);
      });
  }, []);

  return (
    <section>
      <Shortcuts props={shortcuts} />

      <ul className="list-none">
        {items.map((item) => (
          <ItemList props={item} key={item.id} />
        ))}
      </ul>
    </section>
  );
};

export default MainPage;
