import {stdinify} from './stdinify';

const main = async () => {
    console.log(await stdinify());
}

main().catch(console.log);
