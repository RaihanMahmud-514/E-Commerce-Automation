describe('Kinetic Assessment Test', () => {
    it('should complete the full process successfully', () => {

      // 1 and 2. Launch browser and navigate to URL
      cy.visit('http://automationexercise.com');
      cy.wait(2000);
  
      // 3. Verify that home page is visible successfully
      cy.get('body').should('be.visible');
      cy.wait(2000);
  
      // 4. Add products to the cart
      cy.get('.features_items .col-sm-4').first().within(() => 
        {
            cy.get('.add-to-cart:visible').click();
        });
      cy.get(".modal-footer > .btn").click();
      cy.wait(2000);
  
      // 5. Click the 'Cart' button
      cy.get("a[href='/view_cart']").first().click();
      cy.wait(2000);
  
      // 6. Verify that the cart page is displayed
      cy.url().should('include', '/view_cart');
      cy.wait(2000);
  
      // 7. Click the 'Proceed To Checkout' button
      cy.get('.btn.btn-default.check_out').click();
      cy.wait(2000);

      // 8. Click the 'Register / Login' button
      cy.get('.modal-body > :nth-child(2) > a > u').click();
      cy.wait(2000);

      // 9. Fill all details in Sign up and create an account
      const username = "Md Raihan Mahmud";

      // Generate a random email address
      const randomEmail = `raihan_${Math.random().toString(36).substring(2, 15)}@mailinator.com`;

      cy.get("input[placeholder='Name']").type(username);
      cy.get("input[data-qa='signup-email']").type(randomEmail);
      cy.get("button[data-qa='signup-button']").click();
      cy.wait(2000);
      cy.get(':nth-child(3) > .top > [data-qa="title"]').click();
      cy.get('[data-qa="password"]').type('Raihan12345');
      cy.get('#days').select('23');
      cy.get('#months').select('November');
      cy.get('#years').select('1997');
      cy.wait(2000);

      cy.get('[data-qa="first_name"]').type('Md Raihan');
      cy.get('[data-qa="last_name"]').type('Mahmud');
      cy.get('[data-qa="company"]').type('Reve Systems');
      cy.get('[data-qa="address"]').type('Street: 01, P.O. Box: 1229');
      cy.get('[data-qa="address2"]').type('Street: 02, P.O. Box: 1230');
      cy.get('[data-qa="country"]').select('United States');
      cy.get('[data-qa="state"]').type('New York');
      cy.get('[data-qa="city"]').type("Manhattan");
      cy.get('[data-qa="zipcode"]').type('10023');
      cy.get('[data-qa="mobile_number"]').type('+8801701010101');
      cy.get('[data-qa="create-account"]').click();
      cy.wait(2000);

      // 10. Verify 'ACCOUNT CREATED!' and click the 'Continue' button
      cy.contains('Account Created!').should('be.visible');
      cy.get('a.btn.btn-primary').contains('Continue').click();
      cy.wait(2000);

      // 11. Verify 'Logged in as username' at top
      cy.get(':nth-child(10) > a').contains('Logged in as'+" "+username).should('be.visible');
      cy.wait(2000);
  
      // 12. Click the 'Cart' button
      cy.get('.shop-menu > .nav > :nth-child(3) > a').click();
      cy.wait(2000);
  
      // 13. Click the 'Proceed To Checkout' button
      cy.get('.btn.btn-default.check_out').click();
      cy.wait(2000);
  
      // 14. Verify Address Details and Review Your Order
      cy.contains('Address Details').should('be.visible');
      cy.contains('Review Your Order').should('be.visible');
      cy.wait(2000);
  
      // 15. Enter the description in a comment text area and click 'Place Order'
      cy.get('.form-control').type('This is very urgent. Please deliver as soon as possible.');
      cy.get('.btn.btn-default.check_out').contains('Place Order').click();
      cy.wait(2000);
  
      // 16. Enter payment details: Name on Card, Card Number, CVC, Expiration date
      cy.get("input[name='name_on_card']").type(username);
      cy.get("input[name='card_number']").type('100200300');
      cy.get("input[placeholder='ex. 311']").type('123');
      cy.get("input[placeholder='MM']").type('12');
      cy.get("input[placeholder='YYYY']").type('2024');
      cy.wait(2000);

      // 17 and 18. Click the 'Pay and Confirm Order' button and Verify the success message 'Your order has been placed successfully!'
      cy.get("div[id='success_message'] div[class='alert-success alert']").should('contain.text', 'Your order has been placed successfully!');
      cy.get('#submit').contains('Pay and Confirm Order').click();
      cy.wait(2000);

      //Extra. Navigating to the home page
      cy.get('[data-qa="continue-button"]').click();

      //Extra. Logging out
      cy.get("a[href='/logout']").click();

    });
});
  