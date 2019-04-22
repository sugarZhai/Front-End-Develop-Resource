//将压缩文件的名字改变成操作时间展示
var fs = require('fs')
var files = fs.readdirSync('./')

var targetZipFile = null

function dateStr (time) {

    var toFullString = (nums) => {
        var str = ""
        nums.forEach((num) => {
            var num = parseInt(num)
            if ( num < 10) {
                str += "0" + num.toString()
            } else {
                str += num.toString()
            }
        })

        return str

    }

    var d = new Date(time);
    var year = d.getFullYear();
    var month = d.getMonth();
    month++;

    return year + toFullString([month,d.getDate(),d.getHours(),d.getMinutes(),d.getSeconds()])
}

files.forEach(function (file) {
    var r = file
    if(r.match(/^[A-z]*([0-9]*)XX\.zip$/)) {
        var time = r.replace(/^[A-z]*([0-9]*)XX\.zip$/,'$1')
        console.log(time)
        time = parseInt(time)
        fs.rename(file,dateStr(time) + '.zip')
    }

})