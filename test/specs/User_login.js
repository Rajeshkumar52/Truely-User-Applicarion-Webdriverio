

describe('My App Test', () => {

    
    it('should open the app',async () => {
    console.log("Test Pass successfully")

    //driver.execute('mobile:ActivateApp','com.sec.android.app.launcher')
    //driver.lock(5000)

    const app=await $('~Truely')

    await app.click()

    
      const view_all_restaurants=await $('//android.widget.TextView[@resource-id="com.truely.user:id/btn_view_all"]')

    driver.waitUntil(view_all_restaurants.waitForClickable)

    await view_all_restaurants.click()

    const search_restaurant=await $('//android.widget.EditText[@resource-id="com.truely.user:id/edt_search"]')

    await search_restaurant.setValue('Sharma Punjabi Restaurant')

    const result_restaurant=await $('//android.widget.TextView[@resource-id="com.truely.user:id/hotel_detail_hotel_type_txt"]')

    driver.waitUntil(result_restaurant.waitForDisplayed)

    await result_restaurant.click()

    const select_food=await $('(//android.widget.TextView[@resource-id="com.truely.user:id/item_add_txt"])[1]')

     driver.waitUntil(select_food.waitForClickable)

    await select_food.click()

    const choice_food=await $('//android.widget.CheckBox[@resource-id="com.truely.user:id/btn_choice_check" and @text="regular"]')

    driver.waitUntil(choice_food.waitForClickable)

    await choice_food.click()

    const add_food=await $('//android.widget.TextView[@resource-id="com.truely.user:id/save_choice"]')

    await add_food.click()

    const checkout =await $('(//android.widget.LinearLayout[@resource-id="com.truely.user:id/lay_name"])[3]')

    driver.waitUntil(checkout.waitForClickable)

    await checkout.click()

    })

    it('Register user',async () => 
    
    {
       const register_user=await $('//android.widget.TextView[@resource-id="com.truely.user:id/txt_logger"]')

       await register_user.click()

       await $('//android.widget.EditText[@resource-id="com.truely.user:id/edt_mobile"]').setValue('7558166712')

       await $('//android.widget.EditText[@resource-id="com.truely.user:id/edt_mobile"]').click()

       driver.hideKeyboard()


       await $('//android.widget.TextView[@resource-id="com.truely.user:id/txt_next"]').click()

       await $('//android.widget.EditText[@resource-id="com.truely.user:id/edt_password"]').setValue(12345678)

       await $('//android.widget.EditText[@resource-id="com.truely.user:id/edt_password"]').click()

       driver.hideKeyboard()

      
       await $('//android.widget.TextView[@resource-id="com.truely.user:id/txt_next"]').click()

       await $('//android.widget.EditText[@resource-id="com.truely.user:id/edt_name"]').setValue('Rajeshkumar')

       await $('//android.widget.EditText[@resource-id="com.truely.user:id/edt_email"]').setValue('rajeshh@gmail.com')

       await $('//android.widget.TextView[@resource-id="com.truely.user:id/tv_state" and @text="Tamil Nadu"]').click()

       const select_state=await $('//android.widget.TextView[@resource-id="com.truely.user:id/tv_state" and @text="Tamil Nadu"]')

       driver.waitUntil(select_state.waitForDisplayed)

       await select_state.click()


       await $('//android.widget.TextView[@resource-id="com.truely.user:id/tv_state" and @text="salem"]').click()

       const select_city=await $('//android.widget.TextView[@resource-id="com.truely.user:id/tv_state" and @text="coimbatore"]')

       driver.waitUntil(select_city.waitForDisplayed)

       await select_city.click()

       await $('//android.widget.TextView[@resource-id="com.truely.user:id/txt_next"]').click()

       await $('//android.widget.EditText[@resource-id="com.truely.user:id/edt_signup_password"]').setValue('12345678')

       await $('//android.widget.EditText[@resource-id="com.truely.user:id/edt_signup_password"]').click()

       driver.hideKeyboard()

       await $('//android.widget.TextView[@resource-id="com.truely.user:id/txt_next"]').click()

  // await $('andorid=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)')

     await driver.touchAction([
        { action: 'press', x: 1000, y: 1000 },
        { action: 'moveTo', x: 1000, y: -1000 },
        'release'
      ]);
    console.log('scrolled down')



       await $('//android.widget.TextView[@resource-id="com.truely.user:id/place_order_txt"]').click()

       const save_add_pop=$('//android.widget.TextView[@resource-id="com.truely.user:id/txt_yes"]')

       driver.waitUntil((await save_add_pop).waitForDisplayed)

       await save_add_pop.click()

       const confirm_add=$ ('//android.widget.TextView[@resource-id="com.truely.user:id/tv_confirm"]')

       driver.waitUntil(confirm_add.waitForDisplayed)

       await confirm_add.click()

       await $('//android.widget.TextView[@resource-id="com.truely.user:id/address_type_home_txt"]').click()

       await $('//android.widget.TextView[@resource-id="com.truely.user:id/addr_location_edt"]').click()

       await $('//android.widget.Button[@resource-id="com.truely.user:id/btn_confirm"]').click()

        driver.touchScroll(0,300)

        await $('//android.widget.EditText[@resource-id="com.truely.user:id/edit_text_address_directions"]').setValue('East')

        await $('//android.widget.TextView[@resource-id="com.truely.user:id/tv_save_address"]').click()

        await $('//android.widget.TextView[@resource-id="com.truely.user:id/place_order_txt"]').click()

        const address_yes=await $('//android.widget.TextView[@resource-id="com.truely.user:id/txt_yes"]')

        driver.waitUntil(address_yes.waitForDisplayed)

        await address_yes.click()














    })





      
      
    });
