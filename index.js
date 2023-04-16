function returnFirstTwoDrivers(drivers) {
        return drivers.slice(0, 2)
}

function returnLastTwoDrivers(drivers) {
        return drivers.slice(2,5)
}

function createFareMultiplier() {

}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier (n) {
   return (fare) => n * n
}

function fareDoubler(createFareMultiplier) {
    return createFareMultiplier * 2
}

function fareTripler(createFareMultiplier) {
    return createFareMultiplier * 3
}

function selectDifferentDrivers(drivers, selectingDrivers) {
    return selectingDrivers(drivers)
}