import * as faker from 'faker';

describe('User', function() {
    it('can register', function() {
        
        // ! don't use selectors in spec file in the real project, this is only for training purposes
        browser.url('/sca-dev-aconcagua/checkout.ssp?is=login&login=T&fragment=login-register#login-register');

        browser.pause(1000);

        $('#register-firstname').setValue('Foo');
        $('#register-lastname').setValue('Bar');
        
        const email = faker.internet.email();
        $('#register-email').setValue(email);
        $('#register-password').setValue(email);
        $('#register-password2').setValue(email);
    });
}); 