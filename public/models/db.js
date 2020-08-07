let db;

const request = indexedDB.open("workoutTracker", 1);

request.onupgradeneeded = function(event) {
    const db = event.target.result;
    db.createObjectStore("workout"), { autoIncrement: true};

}

request.onsuccess = function(event) {
    db = event.target.result;
//checks database when online
    if(navigator.onLine){
        checkDatabase();
    }
}

request.onerror = function(event) {
console.log("erorr" + event.target.errorCode)
}