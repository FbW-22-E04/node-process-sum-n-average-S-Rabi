if (process.argv[2] === "sum") {
  // 1. calculating the sum
  console.log(
    process.argv
      .slice(3)
      .reduce((sum, n) => sum + Number(n), 0)
      .toString()
  );
} else if (process.argv[2] === "avg") {
  // 2. calculating the avg
  console.log(
    (
      process.argv.slice(3).reduce((avg, n) => avg + Number(n), 0) /
      process.argv.slice(3).length
    ).toString()
  );
}
// else if
