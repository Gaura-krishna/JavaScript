
//unqie handshake 

let nop = 5; //no.of people

function UHS(nop) {
    let total = null;

    // for (i = 0; nop >= 0; i++) {
    //     let sum = --nop;
    //     if (sum > 0) {
    //         console.log("sum", sum)

    //         total += sum

    //         console.log("total", total)
    //     }
    // }

    let n =10;
    const handshake=( n)=> { return n * (n - 1) / 2; }
    total=handshake()
    console.log("final total", total)
}

UHS(nop)