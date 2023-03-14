
//optional
interface Ihuman<T>{
    [key:string]:T
}

let human:Ihuman<string>={
    nose:'one',
    name:'spandana'

}
console.log(human)

human.leg='j'
human.eyes='o'
human.dzjhcdghd='p'
console.log(human)
