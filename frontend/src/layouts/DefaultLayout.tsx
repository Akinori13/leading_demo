import React from "react";
import Header from "../components/Header";

const DefaultLayout = (Elemnt: any) => {
    return (props: any) => {
        return (
            <>
                <Header />
                <Elemnt {...props} />
            </>
        );
    }
}

export default DefaultLayout;