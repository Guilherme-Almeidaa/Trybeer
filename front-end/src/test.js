const a = (s) => {
    r = ""
    for( let i = 0; i < s.length;i++  ) {
     r+=` ${s[i]}`
    }
    return r.toUpperCase()
}

console.log(a("Pausa no Quiz"))