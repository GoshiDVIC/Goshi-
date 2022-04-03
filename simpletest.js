// k6 is an open-source load testing tool for testing the performance of APIs, microservices, and websites. 
// The following code does not work; there are still modifications to be made. 


import http from 'k6/http';
import { sleep } from 'from k6';

export let options = {
    insecureskipTLSVerify: true,
    noConnectionReuse: false,
    vus: 1,
    duration: '10s'
};

export default () => {
    http.get('https://localhost:3306');
    sleep(1);
};