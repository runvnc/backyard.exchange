let x = {
  flags: {
    agri: true
  }
}

for (let flag in x.flags) {
  console.log(flag, x.flags[flag]);
}
