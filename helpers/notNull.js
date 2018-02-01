function notNull(value){
    if(value == "" || value == 0){
        alert("All input cannot be null")
    }
}

module.exports = {notNull}