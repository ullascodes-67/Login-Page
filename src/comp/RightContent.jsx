import React from "react";
import Card from "./Card";

const RightContent = () => {
  let cardInfo = [
    {
      num: 1,
      img: "card w-55  m-2 p-3 rounded-2xl bg-[url('https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover",
      para: "Personalized workout plans designed to help you burn calories and achieve your fitness goals.",
      btn: "Get Started",
    },
    {
      num: 2,
      img: "card w-55  m-2 p-3 rounded-2xl bg-[url('https://images.unsplash.com/photo-1606889464198-fcb18894cf50?q=80&w=790&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center",
      para: "Build muscle, increase endurance, and improve overall strength with expert-guided training programs.",
      btn: "Join Now",
    },
    {
      num: 3,
      img: "card w-55  m-2 p-3 rounded-2xl bg-[url('https://plus.unsplash.com/premium_photo-1661776042506-9154882ba689?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center",
      para: "Enhance flexibility, reduce stress, and improve mental well-being through guided yoga sessions.",
      btn: "Explore More",
    },
  ];
  return (
    <>
      <div className="w-full lg:w-3/4 flex flex-wrap justify-center gap-4">
        {cardInfo.map((item) => {
          return (
            <Card
              c_style={item.img}
              c_num={item.num}
              c_para={item.para}
              c_btn={item.btn}
            />
          );
        })}
      </div>
    </>
  );
};

export default RightContent;
