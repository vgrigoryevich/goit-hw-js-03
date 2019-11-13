const findBestEmployee = employees => {

    let employeeMaxValue = 0;
    let employeeMaxKey = [];

    let key = Object.keys(employees);
    for (let i = 0; i < key.length; i++) {
        if (employees[key[i]] > employeeMaxValue) {
            employeeMaxValue = employees[key[i]];
            employeeMaxKey = key[i];
        }
    }

    return {
        [employeeMaxKey]: employeeMaxValue
    };

}

console.log(
    findBestEmployee({
        ann: 29,
        david: 35,
        helen: 1,
        lorence: 99,
    }),
); // lorence

console.log(
    findBestEmployee({
        poly: 12,
        mango: 17,
        ajax: 4,
    }),
); // mango

console.log(
    findBestEmployee({
        lux: 147,
        david: 21,
        kiwi: 19,
        chelsy: 38,
    }),
); // lux