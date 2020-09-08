import _ from 'lodash';

export const computeResponses = (resp, worker, workers) => {
    //Responses
    // let responses = this.state.responses;
    // let workers = this.state.workers;

    var res = { [resp.cloudId]: { text: resp.text } };

    //Workers
    console.log("E Workers ", workers);

    let wIdx = _.findIndex(workers, { [worker.cloud]: {} })

    console.log("E Workers wIdx ", wIdx);

    let w;
    if (wIdx === -1) {
      console.log("Cloud not found add count")
      w = {
        [worker.cloud]: {
          requestsProcessed: worker.requestsProcessed,
          requestErrors: worker.requestErrors ? worker.requestErrors : 0,
        }
      }
    } else {
      console.log("Cloud  found update count")
    }

    return {responseData: res, workerData: w}
  }