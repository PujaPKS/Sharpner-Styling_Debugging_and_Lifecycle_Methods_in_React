useEffect Hook -- Explanation and Uses in Code


useEffect Hook syntax and cleanup small code is below -->

  useEffect(() => {
    can have any feature 
    console.log('EFFECT RUNNING');

    return () => {
      can have any feature in return
      console.log('EFFECT CLEANUP');
    };
  }, [dependentThingsInArray]);

  In "Login.js" and in "App.js" file have used useEffect hook.