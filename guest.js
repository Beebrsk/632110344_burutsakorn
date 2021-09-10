let reg_firstname = /^[a-zA-Z]{1,35}$/;
let reg_lastname = /^[a-zA-Z]{1,35}$/;
let reg_age = /\d+/;
let reg_phonenum = /^[0][689]\d{8}$/;
let reg_email = /^([a-zA-Z.-_]+)@(\w+)(\.[a-zA-Z.]+)$/;
let reg_id = /^\d+$/;



var guest = []
guest.push({id: 1,firstname: "Burutsakorn", lastname: "Kamolert", age: 20, phone_number: "0943613186", email: "burutsakorn@gmail.com"});
guest.push({id: 2,firstname: "Wantakarn", lastname: "Suasu", age: 21, phone_number: "0960413360", email: "KarnZ04@gmail.com"});
guest.push({id: 3,firstname: "Beebu", lastname: "Boo", age: 23, phone_number: "0998853612", email: "BeeBOO@gmail.com"});
guest.push({id: 4,firstname: "U", lastname: "Nabi", age: 28, phone_number: "0958423618", email: "UNABI@gmail.com"});
guest.push({id: 5,firstname: "Hyeon", lastname: "Bin", age: 29, phone_number: "0974126583", email: "HyeonBin01@gmail.com"});

console.table(guest);


let id = 5;

//ถ้าอายุไม่ถึง18จะไม่สามารถจองได้
addGuest = (firstname, lastname, age, phone_number, email) => {
    
    if ((reg_firstname.test(firstname) && reg_lastname.test(lastname) && reg_age.test(age) && reg_phonenum.test(phone_number) && reg_email.test(email)) == true) {
        if (age >= 18) {
            id++;
            guest.push({id: id,firstname: firstname, lastname: lastname, age: age, phone_number: phone_number, email: email})
            return guest;
        } else {
            throw "Sorry, your age under 18 can't be booked.";
        }
    } else {
        throw "There is an error in your data,please try again."
    }
    
}

deleteGuest = (id) => {
    let similar_id = false;
    let achieve_index;
    if (reg_id.test(id) == true) {
        guest.forEach((guest) => {
            if (guest.id == id) {
                similar_id = true;
            }
        });
        achieve_index = guest.findIndex(guest => guest.id == id)
        console.log(achieve_index);
        if (similar_id == true) {
            guest.splice(achieve_index,1); 
            return guest;
        } else if (similar_id == false) {
            throw "There is no guest ID in the system.";
        }
    } else {
        throw "There is an error in your data,please try again.";
    }
    
}
showGuest = () => {
    console.table(guest);
}

module.exports = {
    addGuest: addGuest,
    deleteGuest: deleteGuest,
    showGuest: showGuest,
    guest: guest
}