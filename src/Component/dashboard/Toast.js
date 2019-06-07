import React from 'react'
import moment from 'moment'
const Toast = (props) =>{
 const { notification } = props;
return(<div><br/>
    <div className="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>{notification.user}</strong> {notification.content} <strong>{moment(notification.time.toDate()).fromNow()}</strong> 
  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
</div>
)


}

export default Toast