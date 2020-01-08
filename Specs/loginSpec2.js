
describe('Airquest LLC Automation Suite', function (){

    var homepage = require('../pages/homepage.js');
    
    var sURL = 'https://lcc-qa.air-quest.com/signin';

    //var sURL = baseUrl;

    var gPwd = "Password1";

    it ('Verify LLC login with Super Admin',function () {

        var lSuperAdminEmailId = 'lccautomation@mailinator.com';

        browser.get(sURL);
        homepage.mtdSetUser(lSuperAdminEmailId);
        homepage.mtdSetPwd(gPwd);

        homepage.btnLogin.click().then(function() {

            browser.sleep(20000);
         
            //var sSubaccountRoleValue = ;

            homepage.labelSubAccountRole.getText().then(function(text){

                console.log(text);
                
            }); 

            expect(homepage.labelSubAccountRole.getText()).toEqual('Main - Admin');
            
 
         
            //  console.log('Login Test with SuperAdmin Passed - Dummy')
           // expect("Pass").toEqual("Pass");
        }) ;


        browser.sleep(1000);

         
        homepage.menuItemsVerticalOpener.click();
        browser.sleep(5000);
        homepage.menuitemLogout.click();
        browser.sleep(10000);

    })

    it ('Verify LLC login with Subaccount Admin',function () {

        var lSubaccountAdminEmailId = 'autoestsubactadmin@mailinator.com';

        browser.get(sURL);
        homepage.mtdSetUser(lSubaccountAdminEmailId);
        homepage.mtdSetPwd(gPwd);

        homepage.btnLogin.click().then(function() {

            browser.sleep(15000);
         
            //var sSubaccountRoleValue = ;

            homepage.labelSubAccountRole.getText().then(function(text){

                console.log(text);
                
            }); 

            expect(homepage.labelSubAccountRole.getText()).toEqual('AutomationEast - Sub Account Admin');
            
 
         
            //  console.log('Login Test with SuperAdmin Passed - Dummy')
           // expect("Pass").toEqual("Pass");
        }) ;


        browser.sleep(1000);

         
        homepage.menuItemsVerticalOpener.click();
        browser.sleep(5000);
        homepage.menuitemLogout.click();
        browser.sleep(10000);

    })

    it ('Verify LLC login with Shipper User',function () {

        var lShipperEmailId = 'autoestshipper@mailinator.com';

        browser.get(sURL);
        homepage.mtdSetUser(lShipperEmailId);
        homepage.mtdSetPwd(gPwd);

        homepage.btnLogin.click().then(function() {

            browser.sleep(15000);
         
            //var sSubaccountRoleValue = ;

            homepage.labelSubAccountRole.getText().then(function(text){

                console.log(text);
                
            }); 

            expect(homepage.labelSubAccountRole.getText()).toEqual('AutomationEast - Shipper');
            
 // - Shipper

         
            //  console.log('Login Test with SuperAdmin Passed - Dummy')
           // expect("Pass").toEqual("Pass");
        }) ;


        browser.sleep(1000);

         
        homepage.menuItemsVerticalOpener.click();
        browser.sleep(5000);
        homepage.menuitemLogout.click();
        browser.sleep(10000);



    })


    it ('Verify LLC login with Ship Request User',function () {

        var lShipRequestUserEmailId = 'autoestshiprquestuser@mailinator.com';

        browser.get(sURL);
        homepage.mtdSetUser(lShipRequestUserEmailId);
        homepage.mtdSetPwd(gPwd);

        homepage.btnLogin.click().then(function() {

            browser.sleep(10000);
         
            //var sSubaccountRoleValue = ;

            homepage.labelSubAccountRole.getText().then(function(text){

                console.log(text);
                
            }); 

            expect(homepage.labelSubAccountRole.getText()).toEqual('AutomationEast - ShipRequestUser');
            
 
         
            //  console.log('Login Test with SuperAdmin Passed - Dummy')
           // expect("Pass").toEqual("Pass");
        }) ;


        browser.sleep(1000);

         
        // homepage.menuItemsVerticalOpener.click();
        // browser.sleep(5000);
        // homepage.menuitemLogout.click();
        // browser.sleep(10000);

        

    })

}); 