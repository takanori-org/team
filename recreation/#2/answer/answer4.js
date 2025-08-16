function Main(stdin) {
  const lines = stdin.split(" ");

  /* 以下にプログラムをコーディングしてください */
  const [age, price] = [...lines];

  if (age <= 5) {
    console.log(0)
    return
  }

  if (age >= 6 && age <= 12) {
    console.log(price / 2)
    return
  }

  console.log(price)
}

/* 以下のプログラムは、変更しないでください */
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
