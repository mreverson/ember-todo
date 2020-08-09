import { helper } from '@ember/component/helper';
import moment from 'moment';

export default helper(
  function formatdate(params) {
  return moment(params[0]).format('MM-DD-YYYY');
});
