import React from "react";
import img1 from './../../img/image-equilibrium.jpg'
export default function Imgcard() {
    return (
        <div className="h-[300px] w-[300px] overflow-hidden object-cover rounded-xl hover:blur-sm">
            <img src={img1} alt="" />
        </div>
    )
}
