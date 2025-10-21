import { Trend } from 'k6/metrics';
import { validateHomePage } from '../src/request_actions/hoppscotchAction.js';

export const options = {
  thresholds: {
    http_req_duration: ['p(95)<800'],
    checks: ['rate>0.99'],
    'hoppscotch_homepage_duration{scenario:default}': ['p(95)<800'],
  },
};

const homePageTrend = new Trend('hoppscotch_homepage_duration');

export default function () {
  const response = validateHomePage();
  homePageTrend.add(response.timings.duration);
}
