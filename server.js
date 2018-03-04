var args = process.argv.slice(2);

try {
    if(args.length === 0){
        console.log("No action!");
        return
    }
    console.log(require('./src/actions/'+args[0]).run(args.slice(1)));
} catch (e){
    console.log("This actions is not defined: "+ args[0])
}
