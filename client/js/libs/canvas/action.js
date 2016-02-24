export default function(endpoint, params, body){
  return {
    canvas: true,
    ...endpoint,
    params,
    body
  };
}