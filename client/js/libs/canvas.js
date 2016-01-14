export default function(type, args, query, body){
  return {
    canvas: true,
    type,
    query,
    body,
    ...args
  };
}