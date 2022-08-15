export const responseToUint = (responseObject: any) => {
  const response: number[] = [];
  let counter = 0;
  while (true) {
    if (responseObject[counter] == null) {
      return new Uint8Array(response);
    } else {
      response.push(responseObject[counter]);
    }
    counter++;
  }
};
