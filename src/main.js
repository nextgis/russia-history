import { App } from './App';
import config from '../config.json';
import { version } from '../package.json';
import periods from './data/periods.csv';
import yearsStat from './data/years_stat.csv';
import 'reset-css';
import './css/style.css';

const app = new App({
  baseUrl: config.baseUrl,
  target: 'map',
  currentYear: 1301,
  periods,
  yearsStat
});

// for testing and debug
app.version = version;
window.app = app;
