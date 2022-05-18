// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

const returnFirstTwoDrivers = function(parameter) {
    return drivers.slice(0, 2)
}

const returnLastTwoDrivers = function(parameter) {
    return drivers.slice(2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(integer) {
    return function(fare) {
        return fare * integer
    }
}

function fareDoubler(fare) {
    return fare * 2
}

function fareTripler(fare) {
    return fare * 3
}

function fareQuintupler(fare) {
    return fare * 5
}

function selectDifferentDrivers(array, func) {
    return func(array)
}