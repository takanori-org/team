function Main(stdin) {
  const lines = stdin.split("\n");

  /* 以下にプログラムをコーディングしてください */
  let input = lines[0].split(" ")
  let a = Number.parseInt(input[0])
  let p = Number.parseInt(input[1])
  let b = (a * 3 + p) % 2
  let answer = ((a * 3 + p) - b) / 2

  console.log(answer)
}

/* 以下のプログラムは、変更しないでください */
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
