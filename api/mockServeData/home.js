import Mock from 'mockjs'

let List = []
export default {
    getStatisticalData: () => {
        for (let i = 0; i < 5; i++) {
            List.push(
                Mock.mock({
                    oppo: Mock.Random.float(100, 8000, 0, 0),
                    xiaomi: Mock.Random.float(100, 8000, 0, 0),
                    vivo: Mock.Random.float(100, 8000, 0, 0),
                    huawei: Mock.Random.float(100, 8000, 0, 0),
                    apple: Mock.Random.float(100, 8000, 0, 0)
                })
            )
        }
        return {
            code: 20000,
            data: {
                orderData: {
                    date: ['20191001', '20191002', '20191003', '20191004', '20191005'],
                    data: List
                },
                tableData: [{
                        name: 'oppo',
                        tadayBuy: 100,
                        monthBuy: 800,
                        totalBuy: 900
                    },
                    {
                        name: 'xiaomi',
                        tadayBuy: 200,
                        monthBuy: 400,
                        totalBuy: 600
                    },
                    {
                        name: 'vivo',
                        tadayBuy: 100,
                        monthBuy: 500,
                        totalBuy: 600
                    },
                    {
                        name: 'huawei',
                        tadayBuy: 300,
                        monthBuy: 700,
                        totalBuy: 1000
                    },
                    {
                        name: 'apple',
                        tadayBuy: 500,
                        monthBuy: 600,
                        totalBuy: 1100
                    },
                ]

            }
        }
    }
}