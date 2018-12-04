/*
 * @Author: admin 
 * @Date: 2018-12-03 17:18:24 
 * @Last Modified by: admin
 * @Last Modified time: 2018-12-03 17:22:42
 */

import jsonp from 'common/js/jsonp'
import { commonParams, options } from './config'

export function getSingerList() {
    const url = 'https://u.y.qq.com/cgi-bin/musicu.fcg'
    const data = Object.assign({}, commonParams, {
        channel: 'singer',
        page: 'list',
        key: 'all_all_all',
        pagesize: 100,
        pagenum: 1,
        hostUin: 0,
        needNewCode: 0,
        platform: 'yqq'
    })
}
