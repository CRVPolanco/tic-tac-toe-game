export const randomId = () => {
  const vals = "abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ1234567890";
  let val = "";
  for(let i=0; i<5; i++){
    val += vals.charAt(Math.round(Math.random() * vals.length));
  }
  return val;
}
