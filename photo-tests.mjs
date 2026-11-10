import assert from 'node:assert/strict';
import {validImages,api} from './coach.mjs';
const jpg='data:image/jpeg;base64,/9j/AA==';
assert(validImages({images:Array(6).fill(jpg)}));
assert(!validImages({images:Array(7).fill(jpg)}));
assert(!validImages({images:['data:text/html;base64,AAAA']}));
assert(!validImages({images:[jpg+'A'.repeat(1100000)]}));
assert(validImages({image:jpg}));
let captured;
const real=globalThis.fetch;
try {
  globalThis.fetch=async(u,o)=>{captured=JSON.parse(o.body);return Response.json({status:'completed',output:[{content:[{type:'output_text',text:'Read the first sentence.'}]}]})};
  const b={subject:'English',question:'What do these pages say?',reference:'',messages:[],images:[jpg,jpg]};
  const req=body=>new Request('https://test.local/api/coach',{method:'POST',headers:{origin:'https://test.local'},body:JSON.stringify(body)});
  const r=await api(req(b),{OPENAI_API_KEY:'test-only'});
  assert.equal(r.status,200);
  const images=captured.input[0].content.filter(x=>x.type==='input_image');
  assert.equal(images.length,2);assert(images.every(x=>x.detail==='high'));
  assert.equal((await api(req({...b,images:Array(7).fill(jpg)}),{OPENAI_API_KEY:'test-only'})).status,400);
} finally { globalThis.fetch=real; }
console.log('Photo validation and multi-image tutoring tests passed. No live API calls.');
