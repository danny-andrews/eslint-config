import {map, merge, pipe, reduce, values} from 'ramda';
import rulesets from '../../rulesets';

export default pipe(
  map(({rules}) => rules),
  values,
  reduce((acc, rules) => merge(acc, rules), {}),
)(rulesets);
