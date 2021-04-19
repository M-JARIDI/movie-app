import React, { useState } from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

export default function App() {
    const [moviesOfAppComponent, setMoviesOfAppComponent] = useState(null);

    return (
        <div>
            <Header setMoviesOfAppComponent={setMoviesOfAppComponent} />
            <Body movies={moviesOfAppComponent} />
            <Footer />
        </div>
    )
}