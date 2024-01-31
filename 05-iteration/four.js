// for in

const myObject ={
    js:"JavaScript",
    cpp:"C++",
    rb:"Ruby",
    py:"Python"
}

// for (const key in myObject) {
//     console.log(`${key} shortcut is for ${myObject[key]}`);
// }

const arr=["js","py","cpp","rb"]
for (const key in arr) {
    console.log(arr[key]);
}

//map is not iterable
const map = new Map()
map.set('IN',"India")
map.set('AFG',"Afaganistan")
map.set('USA',"America")
map.set('Fr',"France")

// for ( const key in map){
//     console.log(key);
// }
