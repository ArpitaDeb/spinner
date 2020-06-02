let time = 0;
let interval = 400;
const spinner = (['\r|  ', '\r/  ', '\r-  ', '\r\\   ', '\r|  ', '\r/  ', '\r-  ', '\r\\  ', '\r|   ','\n']);

for (const symbol in spinner) {
  setTimeout(() => {
    process.stdout.write(spinner[symbol]);
  }, time += interval);
}