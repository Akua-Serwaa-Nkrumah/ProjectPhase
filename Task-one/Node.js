const _ = require('lodash')
var array = [0,2,3,false,5,'6','',6,10,7,'bed']
let nums = [-1,2,5,20,75,0,-953,8294,264,-799,57,10,9]

function chunk_arr(arr)
{
    return _.chunk(arr,4)
}

function compact_arr(arr)
{
    return _.compact(arr).toString()
}

function SortArr(arr)
{
    console.log('\nSorting Array')
    console.log('\n\tsort by MSB:',_.slice(arr).sort().toString())

    console.log('\n\tascending order: ',_.slice(nums).sort((a,b) => a-b).toString())

    return nums.sort((a,b) => a-b)
}
function debounced()
{
    console.log('I am debounced')
}

const debounced_function = _.debounce(debounced,3000)

function Filter_positive(arr)
{
    return _.filter(arr,function(number){return number >= 0})
}

function Filter_negative(arr)
{
    return _.filter(arr,function(number){return number < 0})
}

//Chunking
console.log('\nGrouping array elements into chunks:', chunk_arr(array))

//Compacting
console.log('\nFiltering True values of array:', compact_arr(array))

//Debounce
console.log('\nDebounced Function called: ',debounced_function())

//MaxElement
ascend = SortArr(nums)
console.log('\nMax Element:',ascend[ascend.length-1])

// filter positive  and negative numbers

console.log('\nPositive Values: ', Filter_positive(nums).toString())
console.log('\nNegative Values: ', Filter_negative(nums).toString())



