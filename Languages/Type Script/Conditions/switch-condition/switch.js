console.log('this is switch file')

let day = "Thursday"

switch(day) {
    case 'Monday':
        console.log("9am There is a class");
        break;
    case 'Tuesday':
        console.log("9am There is a class");
        break;
    case 'Wednesday':
        console.log("9am There is a class");
        break;
    case 'Thursday':
        console.log("8:45am There is a class");
        break;
    case 'Friday':
        console.log("9:10am There is no class");
        break;
    case 'saturday':
        console.log("8am There is no class");
        break;
    case 'Sunday':
        console.log('8am There is no class');break;
        default:
        console.log("7am - enjoy the day");
}