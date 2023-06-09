import React, {ReactNode} from "react";
import {Box} from "@mui/material";
import Header from "../components/Header";

type DefaultLayoutProps = {
    children: ReactNode,
    pageTitle: string
}

const DefaultLayout = ({children, pageTitle}: DefaultLayoutProps) => {
    return (
            <>
                <Header />
                <Box sx={{p: 1}}>
                    <h1>{pageTitle}</h1>
                    {children}
                </Box>
            </>
        );
}

export default DefaultLayout;