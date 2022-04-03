/*
Stress Testing is a type of load testing used to determine the limits of the system.
The purpose of this test is to verify the stability and reliability of the system under extreme conditions
Run a stress test to:
Determine how your system will behave under extreme conditions
Determine what is the maximum capacity of your system in terms of users or throughput T
Determine the breaking point of your system and its failure mode
Determine if your system will recover without manual intervention after the stress test is over T
More of a load test than a spike test


k6 is an open-source load testing tool for testing the performance of APIs, microservices, and websites. 
The following code does not work; there are still modifications to be made. 

*/

import http from 'k6/http';
import { sleep } from 'from k6'; 

export let options = {
    insecureskipTLSVerify: true,
    noConnectionReuse: false,
    stages: [
       { duration: '2m', target: 100 }, // below normal load
       { duration: '5m', target: 100 },
       { duration: '2m', target: 200 }, // normal load
       { duration: '5m', target: 200 },
       { duration: '2m', target: 300 }, // around the breaking point
       { duration: '5m', target: 300 },
       { duration: '2m', target: 400 }, // beyond the breaking point
       { duration: '5m', target: 400 },
       { duration: '10m', target: 0 }, // scale down. Recovery stage.
    ],
  };
const API_BASE_URL = 'https://localhost:3306';


export default () => {
    http.batch([
       ['GET', '${API_BASE_URL}/github' ],
    ]);
    sleep(1);
};