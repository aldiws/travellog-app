function notNull(value){
    if(value == "" || value == 0){
        alert("Semua inputan wajib diisin")
    }
}

module.exports = {notNull}