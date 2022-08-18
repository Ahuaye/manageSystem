import axios from './axios'

export const getMenu = (param) => {
    return axios.request({
        url: '/permission/getMenu',
        methods: 'post',
        data: param
    })
}

export const getData = () => {
    // 请求数据
    return axios.request({
        url: '/home/getData',

    })
}

export const getUser = (params) => {
    return axios.request({
        url: '/user/getUser',
        methods: 'get',
        params
    })
}