let reg_id = /^\d+$/;
let reg_number = /^[a-zA-Z]{1}\d{3}$/; 
let reg_type = /\w/;
let reg_price = /^\d+$/;
let reg_viwe = /\w/;
let reg_status= /\w/;
let reg_search = /^[a-zA-Z]+$/

var room = new Array();
    room.push({ room_id : 1, room_number :"111", room_type : "deluxe", room_viwe : "pool view",room_price : 2500, room_status : "have not cleaned"});
    room.push({ room_id : 2, room_number :"222", room_type : "standard",room_viwe : "sea view",room_price : 2900, room_status : "cleaned"});
    room.push({ room_id : 3, room_number :"333", room_type : "suite",room_viwe : "sea view", room_price : 5000,room_status : "cleaned"});
    room.push({ room_id : 4, room_number :"444", room_type : "superior",room_viwe : "sea view", room_price : 2500,room_status : "have not cleaned"})
    room.push({ room_id : 5, room_number :"555", room_type : "suite",room_viwe : "beach Front", room_price : 4500,room_status : "cleaned"});

    console.table(room);

searchType = (key) => {
    let check_search = reg_search.test(key);
    if (check_search == true) {
        let answer = room.filter(type => (type.type_name.includes(key)))
        console.table(answer)
        return [answer.length, answer]
    } else {
        throw 'You entered the wrong information,please try again.'
    }
        
}

deleteRoom = (room_id) => {
    if ( reg_id.test(room_id) == true ) {
        let similar_id = false;
        let achieve_index;
        room.forEach((room) => {
            if (room.room_id == room_id) {
                similar_id = true;
            }
        })
        achieve_index = room.findIndex(room => room.room_id == room_id)
        console.log(achieve_index);
        if (similar_id == true) {
                
            room.splice(achieve_index,2); //ลบออก
            return room;
        } else if (similar_id == false) {
            throw "The room code you entered does not exist.";
        }
    } else {
        throw "You entered the wrong information,please try again.";
    }
}


addRoom = (number, price, type,viwe, status) => {
    if ( (reg_number.test(room_number) && reg_price.test(room_price) && reg_type.test(room_type && reg_viwe.test(room_viwe) && reg_status.test(room_status)) == true ) 
    ){
        let similar_number = false;
        room.forEach((room) => {
            if(room.number == number) {
                console.log("Sorry this room number already have,Please change room number.");
                similar_number = true;
            } 
        })
        if (similar_number == false) {
            id++;
            room.push({ room_id:id,room_number: number, room_price: price, room_type: type,room_viwe:viwe, room_status: status});
            checkType();
            return room;
        } else if (similar_number == true) {
            throw "Sorry this room number already have,Please change room number.";
        }
    } else {
        throw "There is an error in your data,please try again.";
    }
        
}    


showRoom = () => {
    console.table(room)
}

module.exports={
    searchType: searchType,
    deleteRoom: deleteRoom,
    addRoom: addRoom,
    showRoom: showRoom,
    room:room
}