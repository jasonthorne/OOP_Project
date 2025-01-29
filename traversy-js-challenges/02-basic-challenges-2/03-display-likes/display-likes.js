function displayLikes(names) {

    /*
    If no one likes it, it should return 'no one likes this'
    If one person likes it, it should return '{name} likes this'
    If two people like it, it should return '{name1} and {name2} like this'
    If three people like it, it should return '{name1}, {name2} and {name3} like this'
    If more than three people like it, it should return '{name1}, {name2} and {x} others like this'
    */

    try{

        if(!(names.every(name => typeof name === "string"))){ //check all names are strings
            throw 'all names must be strings';
        }

        switch(names.length){
            case 0:
                return 'no one likes this';
            case 1:
                return `${names[0]} likes this`;
            case 2:
                return `${names[0]} and ${names[1]} like this`;
            case 3:
                return `${names[0]}, ${names[1]} and ${names[2]} like this`;
            default:
                return `${names[0]}, ${names[1]} and ${names.length-2} others like this`;
        }

    }catch(error){
        console.log(error);
    }

}

module.exports = displayLikes;
