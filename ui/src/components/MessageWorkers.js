import React from "react";

import MessageChart from './MessageChart';

const MessageWorkers = ({workers}) => {
  return (
    <div>
      <p>Clouds: {JSON.stringify(workers)}</p>
      {/* {processedMessagesChart} */}
      <MessageChart workers={workers}/>
    </div>
  );
}

export default MessageWorkers;