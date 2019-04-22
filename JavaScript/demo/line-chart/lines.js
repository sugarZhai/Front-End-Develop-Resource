

(function (global) {
    global.line = function (p) {
        var LW = 3
        var length = p.data.length
        var canvas = document.createElement('canvas')
        canvas.width = p.w
        canvas.height = p.h

        canvas.style.width = p.w + 'px'
        canvas.style.height = p.h + 'px'

        document.querySelector(p.dom).appendChild(canvas)
        var points = []
        var perWidth = p.w/ (length + 1)

        p.data.forEach(function (d,i) {
            points.push([i * perWidth, p.h - p.h * (d - p.vMin)/(p.vMax - p.vMin)])
        })

        var context = canvas.getContext('2d')
        context.lineWidth = LW

        var CanvasGradient = context.createLinearGradient(0, p.h/2, perWidth * length, p.h/2)

        CanvasGradient.addColorStop(0, p.color[0])
        CanvasGradient.addColorStop(1, p.color[1])

        context.strokeStyle = CanvasGradient

        points.forEach(function (point, index) {
            if(index === 0) {
                context.moveTo(point[0],point[1])
            } else {
                context.lineTo(point[0],point[1])
            }
        })

        context.stroke()

        context.beginPath()
        context.arc(points[length-1][0], points[length-1][1], 5, 0, Math.PI * 2, true)
        context.closePath()
        context.lineWidth = LW
        context.strokeStyle = p.color[1]
        context.stroke()

        context.fillStyle = '#FFFFFF'
        context.beginPath()
        context.arc(points[length-1][0], points[length-1][1], 3, 0, Math.PI * 2, true)
        context.closePath()
        context.fill()

        return {
            w: points[length-1][0],
            h: points[length-1][1]
        }
    }
})(window);
