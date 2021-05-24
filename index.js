var Snoowrap = require('snoowrap');

const r = new Snoowrap({
    userAgent: 'rs app',
    clientId: 'vmeelE_3jUZB5g',
    clientSecret: 'NPxQjbZokMflNAj_-EwE8u9Ne4DMWA',
    refreshToken: '169481264158-AwWQt9DNSMCnw9qZ3TmhPDMXusVP_A'
});

r.getHot().map(post => post.title).then(console.log);