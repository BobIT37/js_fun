const names = ["Youtube", "facebook", "Instagram", "Netflix", "Amazon"];

//for array generally
// for (const n of names) {
//   console.log(n);
// }

const symbols = {
  yt: "Youtube",
  ig: "Instagram",
  fb: "Facebook",
  lco: "LearnCodeOnline.in",
};

//object generally
for (const n in symbols) {
console.log(`Key is: ${n} and value is: ${symbols[n]}`);
}
