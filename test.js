const ResortingKey = require('./')

const obj = [
    {
        data1: 'Sample1',
        data2: 'Sample data 2.1'
    },
    {
        data1: 'Sample2',
        data2: 'Sample data 2.2'
    },
    {
        data1: 'Sample3',
        data2: 'Sample data 3.3'
    }
]

console.log(ResortingKey(obj, 'data1'))

// {
//     result: {
//                 'Sample1': { data1: 'Sample1', data2: 'Sample data 2.1' },
//                 'Sample2': { data1: 'Sample2', data2: 'Sample data 2.2' },
//                 'Sample3': { data1: 'Sample3', data2: 'Sample data 3.3' }
//             },
//     length: 3
// }