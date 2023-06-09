import React, {ReactNode} from "react";
import Header from "../components/Header";

type DefaultLayoutProps = {
    children: ReactNode,
    pageTitle: string
}

const DefaultLayout = ({children, pageTitle}: DefaultLayoutProps) => {
    return (
            <>
                <Header />
                <h2>{pageTitle}</h2>
                {children}
            </>
        );
}

export default DefaultLayout;