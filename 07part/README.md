Revision Project - Validating User Inputs

Deliverable:-
The task to be done is that :-
1. If there is no username then we cannot console.
2. If there is no age or negative age then also we cannot console.
3. If there is both name and age in possitive then only console will work.

Way-1 --->
Code:-
if(age > 0 && username !==''){
    console.log(username , age);
    setUsername('');
    setAge('');
    }
setUsername('');
setAge('');

Way-2---> By using trim operator and comparing length and using OR operator. And '+' operator is used for converting number to string format.
Code:-
if(username.trim().length === 0 || age.trim().length === 0){
    return;
}
if(+age < 1){
    return;
}
setUsername('');
setAge('');