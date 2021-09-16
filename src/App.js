import React, { useEffect } from "react";
import CardList from "./components/organism/CardList";
import { importDataStore } from "./store/repository/store"

// let link = "https://breakingbadapi.com/api/characters/?limit=10&offset=0";

function App() {

   useEffect(() => {
    console.log('Мы в App');
    importDataStore()})

  return <CardList />;
}

export default App;