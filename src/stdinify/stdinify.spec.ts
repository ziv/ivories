import {execFile} from 'child_process';
import {promisify} from 'util';
import {stdinify} from './stdinify';

const exec = promisify(execFile);

describe('stdinify', () => {
    it('should be a function',  async () => {
        const {stdout} = await exec(`${__dirname}/test.sh`, [__dirname]);
        expect(stdout.trim()).toEqual('test');
    });
});
