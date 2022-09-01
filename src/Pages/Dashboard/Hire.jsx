import React from "react";
import { Link } from "react-router-dom";
import CircleProgress from "./CircleProgress";

const Hire = () => {
  const cardItem = [
    {
      id: 1,
      num: 5,
      title: "Title Content",
      text: "Text",
      color:'red'
    },
    {
      id: 2,
      num: 2,
      title: "Title Content",
      text: "Text",
      color:'blue'
    },
    {
      id: 3,
      num: 4,
      title: "Title Content",
      text: "Text",
      color:'green'
    },
    {
      id: 4,
      num: 3,
      title: "Title Content",
      text: "Text",
      color:'yellow'
    },
  ];

  return (
    <div className="ml-2">
      <div className="d-flex justify-content-between">
        <h4 className="ms-2 mb-2">You need to Hire</h4>
        <Link to={""} className='pe-2'>see all</Link>
      </div>

      <div className="row ps-1 pe-2">
        {cardItem.map((card) => {
          return (
            <div className="col-6 p-2" key={card.id}>
              <div className="text-start border-0 shadow-sm bg-body rounded">
                <div className="card-body d-flex align-items-center justify-content-around">
                  <h2>{card.num}</h2>
                  <div className="">
                    <h5 className="card-title">{card.title}</h5>
                    <p className="card-text">{card.text}</p>
                  </div>
                  <div>
                    <CircleProgress color={card.color}/>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hire;
