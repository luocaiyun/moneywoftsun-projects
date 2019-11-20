const navURL =`http://localhost:3007/ten`;
export default {
    getIndexinfoByUserId(cb){
        fetch(navURL).then(res=>{
            res.json().then(cb);
        })
    }

}