import React from "react";
import _ from "lodash";

//Application
import "./App.css";
import MessageRequest from "./components/MessageRequest";
import MessageResponse from "./components/MessageResponse";
import MessageWorkers from "./components/MessageWorkers";
import { computeResponses } from "./utils";

const App = () => {
  const [responses, setResponses] = React.useState([]);
  const [workers, setWorkers] = React.useState([]);

  const handleResponses = (rm) => {
    if (rm) {
      const reqId = rm.requestIds.reverse();
      if (reqId) {
        const resp = rm.responses[reqId];
        const { responseData, workerData } = computeResponses(
          resp,
          rm.workers[resp.workerId],
          workers
        );
        setResponses(_.concat(responses, responseData));
        setWorkers(_.concat(workers, workerData));
      }
    }
  };

  const handleErrors = (es, ev) => {
    console.log("Error:" + ev);
  };

  React.useEffect(() => {
    const msgEvents = new EventSource("http://localhost:8080/api/data");
    msgEvents.onmessage = (ev) => handleResponses(JSON.parse(ev.data));
    msgEvents.onerror = (ev) => handleErrors(ev);
  }, []);

  return (
    <div id="-body">
      <header id="-head">
        <h2>Hybrid Cloud</h2>
      </header>
      <br />
      <div id="-body-content">
        <MessageRequest />
        <h2>Responses</h2>
        <MessageResponse responses={responses} />
        <h2>Workers</h2>
        <MessageWorkers workers={workers} />
      </div>
    </div>
  );
};

export default App;
