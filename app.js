/***
 * Student Data Structure 
 */

const assignment_six = [
    [ 'Nazmul', 'Male', 'Gazipur', '1500', 'Age: 25', 'Class:12' ],
    [ 'Shahab', 'Male', 'Dhaka', '1000', 'Age: 24', 'Class:13' ],
    [ 'Imram', 'Male', 'Chadpur', '500', 'Age: 20', 'Class:2'],
    [ 'Razzak', 'Male', 'Norsingdi', '700', 'Age: 24', 'Class:3' ],
    [ 'Rabim', 'Male', 'Narayanganj', '500', 'Age: 12', 'Class:4' ],
    [ 'Raza', 'Male', 'Gazipur', '800', 'Age: 13', 'Class:5' ],
    [ 'Apu Borua', 'Male', 'Sokhipur', '900', 'Age: 14', 'Class:4' ],
    [ 'Mahbubur', 'Male', 'Tangil', '1000', 'Age: 16', 'Class:8' ],
    [ 'Faisal', 'Male', 'Gazipur', '1600', 'Age: 17', 'Class:5' ],
    [ 'Joynal', 'Male', 'Mymensing', '1700', 'Age: 18', 'Class:6' ],
    [ 'Rubel', 'Male', 'Borguna', '1550', 'Age: 19', 'Class:7' ],
    [ 'Asha', 'Female', 'Bogra', '1650', 'Age: 20', 'Class:5' ],
    [ 'Sumaiya', 'Female', 'Bogra', '1750', 'Age: 21', 'Class:8' ],
    [ 'Nahid', 'Male', 'Chittagong', '1800', 'Age: 22', 'Class:12' ],
    [ 'Jahid', 'Male', 'Gazipur', '1850', 'Age: 23', 'Class:12' ],
    [ 'Joy', 'Male', 'ChapainawabGanj', '1900', 'Age: 24', 'Class:12' ],
    [ 'Sajib', 'Male', 'Gazipur', '1960', 'Age: 25', 'Class:11' ],
    [ 'Akramul', 'Male', 'MunsiGanj', '2200', 'Age: 27', 'Class:12' ],
    [ 'Shahinur', 'Male', 'Gazipur', '2000', 'Age: 26', 'Class:12' ],
    [ 'Soniya', 'Female', 'MunsiPara', '2100', 'Age: 27', 'Class:10' ],
    [ 'Samia', 'Female', 'Barisal', '1600', 'Age: 28', 'Class:9' ],
    [ 'Shujuka', 'Female', 'Gazipur', '400', 'Age: 29', 'Class:9' ],
    [ 'Nobita', 'Male', 'Chadpur', '100', 'Age: 30', 'Class:9' ],
    [ 'Jihan', 'Male', 'RupGanj', '100', 'Age: 31', 'Class:7' ],
    [ 'Ali Akbar', 'Male', 'Rajshahi', '300', 'Age: 32', 'Class:7' ],
    [ 'Habib', 'Male', 'Khulna', '400', 'Age: 33', 'Class:7' ],
    [ 'Sufiya', 'Female', 'Gazipur', '50', 'Age: 34', 'Class:9' ],
    [ 'Robiul', 'Male', 'Dinajpur', '900', 'Age: 35', 'Class:11' ],
    [ 'Asad', 'Male', 'Madhupur', '200', 'Age: 36', 'Class:12' ],
    [ 'Naim', 'Male', 'Tangail', '300', 'Age: 37', 'Class:10' ],
];


/***
 * Total Addmission Fees
 */

let total_fees = 0;
assignment_six.forEach( ( data, i )=> {
    console.log(` ${i+1} Name: ${data[0]} - Addmission Fees ${data[3]} `);
    total_fees += +data[3];
});

console.log(`
    -----------------------------------
    Total Addmission Fees : ${total_fees}
`);


