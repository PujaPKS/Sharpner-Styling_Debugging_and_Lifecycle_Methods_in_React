const Wrapper = (props) => {
    return props.children;
}
export default Wrapper;

// Here we are not returning any element as we aren not making jsx code. 
//We are just making a normal variable. And returning its children.

//This wrapper is created by us but react has its own wrapper component also called React Fragment.