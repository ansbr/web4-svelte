import { util } from 'near-sdk-as'
import { html } from '../dist/index'

@nearBindgen
class Web4Request {
    accountId: string | null;
    path: string;
    params: Map<string, string>;
    query: Map<string, Array<string>>;
    preloads: Map<string, Web4Response>;
}

@nearBindgen
class Web4Response {
    contentType: string;
    status: u32;
    body: Uint8Array;
    bodyUrl: string;
    preloadUrls: string[] = [];
}


function htmlResponse(text: string): Web4Response {
   return { contentType: 'text/html; charset=UTF-8', body: util.stringToBytes(text), status: 200 } as Web4Response;
}

function status(status: u32): Web4Response {
  return { status } as Web4Response;
}


export function web4_get(request: Web4Request): Web4Response {
    if (request.path == "/") {
        return htmlResponse(decodeURI(html))
    }

    return status(404);
}