
describe('Airquest LLC Automation Suite', function (){

    var homepage = require('../pages/homepage.js');
    var orderpage = require('../pages/orderpage.js');
    var locatorpage = require('../common/locatorfunction.js');


    var sURL = 'https://lcc-qa.air-quest.com/signin';

    //var sURL = baseUrl;

    var gPwd = "Password1";

    it ('Verify LLC login with Super Admin',function () {

        //var lSuperAdminEmailId = 'lccautomation@mailinator.com';
        var lSuperAdminEmailId = 'parcels@mailinator.com';

        browser.get(sURL);
        homepage.mtdSetUser(lSuperAdminEmailId);
        homepage.mtdSetPwd(gPwd);

        homepage.btnLogin.click().then(function() {

            browser.sleep(10000);
         
            //var sSubaccountRoleValue = ;

            homepage.labelSubAccountRole.getText().then(function(text){

                console.log(text);
                
            }); 

            expect(homepage.labelSubAccountRole.getText()).toEqual('ParcelShipment - Sub Account Admin');
            
 
         
            //  console.log('Login Test with SuperAdmin Passed - Dummy')
           // expect("Pass").toEqual("Pass");
        }) ;


        browser.sleep(1000);

         
        /* homepage.menuItemsVerticalOpener.click();
        browser.sleep(5000);
        homepage.menuitemLogout.click();
        browser.sleep(10000);
 */
        orderpage.homeHeaderBtn.click();
        browser.sleep(1000);
        orderpage.orderHeaderBtn.click();
        browser.sleep(1000);

        orderpage.menuBtn.click();
        browser.sleep(1000);
        
        orderpage.selectSource.click();

        orderpage.sourceCreateOrderBtn.click();

        browser.sleep(1000);
      
        //orderpage.serachName.sendKeys('SAS-French Polynesia');

        
        browser.sleep(1000);


        locatorpage.fnSelectOptionbyVisibleText(orderpage.taxIdType,"VAT");
        //locatorpage.fnSelectDropdownbyNum(orderpage.taxIdType,2);
        //orderpage.taxIdTxt.click();

        browser.sleep(10000);
        orderpage.taxIdTxt.sendKeys('1212121');
        //browser.sleep(30000);
        orderpage.NotesMultiTxt.sendKeys('XYZASASASAS');
        //browser.sleep(30000);
        //browser.sleep(30000);
        orderpage.address1Txt.sendKeys('Add1 Flat 1204 Tower P500');
        orderpage.address2Txt.sendKeys('Add2');
        orderpage.address3Txt.sendKeys('Add3');
        orderpage.cityTxt.sendKeys('Manhattan');
        //orderpage.zipTxt.sendKeys('32424');
        browser.sleep(10000);
        orderpage.contactNameTxt.sendKeys('RAj');
        orderpage.companyNameTxt.sendKeys('IMpledge');
        orderpage.phoneTxt.sendKeys('9873226508');
        orderpage.faxTxt.sendKeys('011 234234234');
        orderpage.emailTxt.sendKeys('lcc@mailinator.com');
        orderpage.addressNotesMultiTxt.sendKeys('Multilne Text for Contact Addreess NOtes');
    
        browser.sleep(30000);

    })
  

}); 