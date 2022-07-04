let data = {
    id: 1,
    name: "budi pratama",
    gender: "female",
    height: "165 cm",
    educational: [
        {
            periode: "2013-2016",
            school: "Kalam kudu High School",
            major: "-"
        }
    ],
    phone: {
        primary: "0812312323",
        secondary: "0082342343"
    }
}

let newEducation = {
    periode: "2016-2020",
    school: "State University Jakarta",
    major: "Accountancy"
}

//ubah data nama dan no.hp
const dataNew = { ...data, name: "Muhamad Allya Agung Syafira", phone: { primary: "081218005183" } }
console.log(dataNew)

//ambil data tanpa destructuring
// console.log(`${data.phone.primary}\n${data.phone.primary}`)//perbaikan

//ambil data pake
// let { phone: { primary, secondary } } = dataNew;
// console.log(primary)

// let person = { ...data, ...newEducation }
// data.educational.push(newEducation);
// console.log(person)


