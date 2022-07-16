const argumentValue = parseInt(process.argv[2]);
const shouldWater = parseInt(process.argv[3]);
if(argumentValue === 0 && shouldWater > 10) {
    console.log("WATER");
}