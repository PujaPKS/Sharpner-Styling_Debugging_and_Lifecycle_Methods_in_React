divSoup and React Fragment.

JSX model is not allowed in React so we wrap it inside div which is basically root element of all.We add Root div only because we can return only one JSX statement in React.

So combination of many divs may cause confusion while applying styles. Because we are having unnecesary extra divs just in order to return only one entity in JSX.

The nesting of too many unnecessary divs in order to return one JSX entity is called divSoup.

We have many nested divs. So to avoid this divSoup we use "React Fragment". 

Through Wrapper.js file we will create a wrapper component.

This wrapper is created by us but React has its own wrapper component also called "React Fragment".

React has inbuilt Wrapper component so no need to make it. This inbuilt wrapper is called "Fragment".

For using inbuilt wrapper we import Fragment and use it . See the code in "AddUser.js" file.

If we dont import Fragment then we can use directly <React.Fragment> also . See in "App.js" file.

Empty arrows also meamns React Fragment only . Empty block in this way--->  <>..CODE..</> 

