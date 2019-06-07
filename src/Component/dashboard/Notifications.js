import React from "react";
import Toast from './Toast'
const Notification = ({notifications}) => {
    if(notifications){
        
    return (
        <div className="container-fluid">
        {notifications.map((notification , index) => {
            return(
                <Toast notification={notification} key={index}/>
            )
         
        })}
        </div>
    );
    }
    else{
        return (
            <div className="container">
              <div className="d-flex justify-content-center">
                <div className="spinner-border text-primary" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            </div>
          );
    }
};

export default Notification;
