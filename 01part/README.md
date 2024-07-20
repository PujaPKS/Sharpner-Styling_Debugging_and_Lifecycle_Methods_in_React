Did Dynamic inline styling in "CourseInput.js" file.

In the file "CourseInput.js" ----> The Dynamic Inline Styling part is below shown----> 
<div className="form-control">
    <label htmlFor="goalInput" style={{color:!isValid ? 'red' : 'black'}}>Course Goal</label>
    <input id="goalInput" 
    style={{borderColor:!isValid ? 'red' : 'black',
    background:!isValid ? 'lightpink' : 'transparent'}}
    type="text" onChange={goalInputChangeHandler} />
</div>