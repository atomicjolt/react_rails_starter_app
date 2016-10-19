export default function(canvas, params, body){
  return {
    type: canvas.type,
    canvas,
    params,
    body
  };
}