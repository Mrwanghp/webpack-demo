module.exports = {
    entry:'src/index.js',
    mode:'development',
    output:{
        filename:'main.js',
        path:path.reslove(__dirname,'dist')
    }
}