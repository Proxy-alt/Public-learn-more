
self.__uv$config = {
    prefix: 'uv/service/ghost/',

    /* Bare server URL */ 
    bare: 'https://voidness.nunc.se/bare//',
    
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: 'space.js',
    client: 'comet.js',
    bundle: 'atom.js',
    config: 'liftoff.js',
    sw: 'constellation.js',
};
