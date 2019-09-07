function strip(x: string | number) {
    if(typeof x=='number'){
        return x.toFixed((fractionDigits: 2))
    }
    return x.trim()
}

class MyResponse{
    header = 'response header'
    header = 'responsse result'
}
function handle(res: MyResponse|MyError {
    if(re instanceof MyResponse){
        return {
            info: res.header + re.result
        }
    }else{return
    info: res.header + res.message
    }
}



type AlertType = 'success'|'dancer'|'warning'
function setAlertType(type:: AlertType) {
    
}
setAlertType( type: 'success')
setAlertType(type: 'warning')
