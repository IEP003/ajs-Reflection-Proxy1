export default function orderByProps(obj, arr){
    const array = [];
    const sort = [];

    for (const name in obj) {
        if (arr.includes(name)){
            array.push({ key: name, value: obj[name] })
        } else {
            sort.push({ key: name, value: obj[name] })
        }
    }
    sort.sort((start, end) => (start.key > end.key ? 1 : -1));
    return [...array, ...sort];
}