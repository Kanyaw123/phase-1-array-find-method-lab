function superbowlWin(record) {
    const win = record.find(game => game.result === "W");
    if (win) {
      return win.year;
    } else {
      return undefined;
    }
  }
  
  // Example usage:
  const record = [
    { year: 1998, result: "L" },
    { year: 1999, result: "W" },
    { year: 2000, result: "L" }
  ];
  
  console.log(superbowlWin(record)); // Output will be 1999
  