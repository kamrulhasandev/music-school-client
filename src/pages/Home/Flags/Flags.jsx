import React from "react";
import img1 from "../../../assets/south-korea.png";
import img2 from "../../../assets/japan.png";
import img3 from "../../../assets/chile.png";
import img4 from "../../../assets/malaysia.png";
import img5 from "../../../assets/russia.png";
import img6 from "../../../assets/colombia.png";
import Container from "../../../components/Container/Container";

const Flags = () => {
  return (
    <Container>
      <div className="grid grid-cols-2 gap-10 md:grid-cols-6  shadow-2xl p-5 rounded-lg mx-auto ">
        <img className="w-32 shadow-2xl rounded-full p-1" src={img1} alt="" />
        <img className="w-32 shadow-2xl rounded-full p-1" src={img2} alt="" />
        <img className="w-32 shadow-2xl rounded-full p-1" src={img3} alt="" />
        <img className="w-32 shadow-2xl rounded-full p-1" src={img4} alt="" />
        <img className="w-32 shadow-2xl rounded-full p-1" src={img5} alt="" />
        <img className="w-32 shadow-2xl rounded-full p-1" src={img6} alt="" />
      </div>
    </Container>
  );
};

export default Flags;
