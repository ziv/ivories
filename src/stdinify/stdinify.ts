//
export async function stdinify(encoding?: BufferEncoding): Promise<string> {
    if (process.stdin.destroyed) {
        return '';
    }
    if (encoding) {
        process.stdin.setEncoding(encoding);
    }
    let buffer = '';
    for await (const chunk of process.stdin) {
        buffer += chunk;
    }
    return buffer;
}


