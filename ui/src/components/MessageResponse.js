import React from "react";

const MessageResponse = ({responses}) => {

  return (
    <div>
      <p>Responses: {JSON.stringify(responses)}</p>
    </div>
  );
}

export default MessageResponse;