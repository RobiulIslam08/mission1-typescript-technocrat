"use strict";
var _a;
{
    const isAuthenticated = '';
    const result1 = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : "guest";
    const result2 = isAuthenticated ? isAuthenticated : "guest";
    console.log({ result1 }, { result2 });
    const user = {
        fullName: 'Rabiul Islam',
        address: {
            parmanentAddress: 'sherpur',
        }
    };
    const presentAdderes = (_a = user.address.presentAdderes) !== null && _a !== void 0 ? _a : 'tar present address nai re bhai';
    console.log(presentAdderes);
}
