import jsonp from 'common/js/jsonp'
import {_commonParams, _options} from './config'

export function getBaidu(value) {
    const url = 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su';
    _commonParams.wd = encodeURIComponent(value);
    const data = Object.assign({}, _commonParams)
  
    return jsonp(url, data, _options)
  }