const arr3 = "Amsterdam, Kiev, Zurich, Prague, Berlin, Barcelona"

const arr4 = "Paris-Skopje,Zurich-Amsterdam,Prague-Zurich,Barcelona-Berlin,Kiev-Prague,Skopje-Paris,Amsterdam-Barcelona,Berlin-Kiev,Berlin-Amsterdam"


function match(arr1, arr2) {
    const hypenSep = []
    const res = []
    const splitArr1 = arr1.split(',')
    console.log(splitArr1)
    const splitedArr = arr2.split(',')
    console.log(splitedArr)

    for (let i = 0; i < splitedArr.length; i++) {
        const hyphenSep = splitedArr[i].split('-')
        hypenSep.push(hyphenSep)
    }
    console.log(hypenSep)
    for (let j = 0; j < hypenSep.length; j++) {
        for (let k = 0; k < hypenSep[j].length; k++) {
            if (hypenSep[j][k] === 'Kiev') {
                res.push(hypenSep[j])
            }
        }
    }

    console.log(res, "res")
    console.log(res[0][1], "res1")
    for (let p = 0; p < hypenSep.length; p++) {
        for (let q = 0; q < hypenSep[p].length; q++) {
            if (res[0][1] === splitedArr[p][q]) {
                console.log(splitedArr[p][q], "Final")
            }
        }
    }

}
match(arr3, arr4)