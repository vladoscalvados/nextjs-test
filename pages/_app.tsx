import React from "react";


export default function MyApp({Component, pageProps}) {
    return (
        <>
            <Component{...pageProps}/>
            <style>
                {`body{  
            font-family:'Roboto',sans-serif;
               width: 1400px;
            }
            .wrapper {
            width: 600px;
            margin:0 auto;
            display: flex;
            color:rgb(70,130,180);
            }
            .wrapper-title {
            color:grey;
            }
            .float {
            margin-left:12px;
            }
            .float-left {
            margin-left:24px;
            }
            .wrapper-right {
            margin-left:10px;
            }
            li{
            color:#000;
            }
            `
                }
            </style>
        </>
    )
}