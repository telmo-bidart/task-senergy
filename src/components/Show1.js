import React from 'react'
import '../App.css'

const Show1 = () => (
    function Show1() {
        var x = document.getElementeById("myDIV");
        if (x.style.display === "none") {
            x.style.display ="block";
        }
        else {
            x.style.display = "none";
        }
    }
);


export default Show1
