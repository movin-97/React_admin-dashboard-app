import React,{useMemo} from "react";
import { Link } from "react-router-dom";
import HOC_USER from "./../../HOC/HOC_USER";

const Users = ({ value }) => {
  const data = useMemo(()=>value,[value])
  return (
    <div className="mt-3 shadow-sm bg-body p-2 rounded">
      <div className="d-flex justify-content-between">
        <h4>New Applications</h4>
        <Link to={""}>see all</Link>
      </div>
    <div className="mt-3">
        {data.slice(0,7).map((user) => {
        return (
          <div
            className=""
            key={user.id}
          >
            <div className="d-flex justify-content-around text-start">
              <div className="col-2">
                <img
                  src={user.image}
                  alt=""
                  width={30}
                  height={30}
                  style={{ borderRadius: "50%",cursor:"pointer" }}
                />
              </div>

              <div className="col-6" style={{lineHeight:'73%',cursor:"pointer"}}>
                <h6>
                  {user.firstName}{user.lastName}
                </h6>
                <p className="text-muted">{user.username}</p>
              </div>
              <div className="col-4 d-flex justify-content-around">
                <i style={{color:'#FC5404',cursor:'pointer'}} className="fa-solid fa-user-plus"></i>
                <i style={{color:'#3AB4F2',cursor:'pointer'}} className="fa-solid fa-comment-dots"></i>
                <i style={{color:'#28DF99',cursor:'pointer'}} className="fa-solid fa-phone"></i>
              </div>
            </div>
          </div>
        );
      })}
    </div>
      
    </div>
  );
};
const AppliactionUsers = HOC_USER(Users, "users");

export default AppliactionUsers;
